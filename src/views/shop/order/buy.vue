<template>
  <section class="zkui_order_buy">
    <buy-address></buy-address>
    <group class="order_buy_product " v-for="(store,storeIndex) in modelView.storeItems " :key="storeIndex">
      <cell :title="store.storeName" class="border-bottom"> </cell>
      <div class="item-contnet">
        <ul>
          <li class="zkui-order-cart-item" v-for="(productSku,productSkuIndex) in store.productSkuItems " :key="productSkuIndex">
            <div class="order-cart-commodity">
              <div class="demo-content " style="height: 7.8rem;">
                <ul class="flex order-cart-commodity-box">
                  <li class="flex_one">
                    <div class="order-cart-commodit-into flex">
                      <div class="order-cart-commodity-into_left">
                        <router-link :to="'/product/show/'+productSku.productId">
                          <img :src="productSku.thumbnailUrl " alt="">
                        </router-link>
                      </div>
                      <div class="flex_one order-cart-commodity-into_right ">
                        <router-link :to="'/product/show/'+productSku.productId">
                          <p>{{productSku.name}}</p>
                        </router-link>
                        <span>{{productSku.bn}} {{productSku.propertyValueDesc}} 重量：{{productSku.weight}}g</span>
                        <div class="price-box">
                          <p class="price_now">￥{{productSku.displayPrice}}</p>
                          <div class="flex">
                            <span class="price_old flex_one "> ￥{{productSku.marketPrice}} </span>
                            <span class=" price_num">
                              X {{productSku.buyCount}}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <popup-radio title="请选择 " :options="store.expressTemplates" v-model="showDelivery[storeIndex]" @on-change="countPrice()">
        <p slot="popup-header" class="border-bottom popup-header">选择快递方式</p>
      </popup-radio>
      <x-textarea title="卖家留言 " placeholder="填写内容已和卖家协商确认 " :show-counter="false " :rows="1" autosize v-model="userMessages[storeIndex]"></x-textarea>
      <cell>
        <div v-if="asyncFlag">共
          <span class="zkui_order_buy-freight">{{store.totalCount}}</span>件 -运费
          <span class="zkui_order_buy-freight">￥{{storePrices[storeIndex].expressAmount }} </span>-小计
          <span class="zkui_order_buy-freight">￥{{storePrices[storeIndex].totalAmount}}</span>
        </div>
      </cell>
      <divider class="divider-bg "></divider>

    </group>
    <group class="mb-2">
      <x-switch :title="money.title" :inline-desc="money.description" v-for="(money,moneyIndex) in modelView.allowMoneys" :key="moneyIndex" @on-change="countPrice()" v-model="reduceMoneys[moneyIndex]"></x-switch>
      <cell title="服务费" :value="priceView.feeAmount+'元'" v-if="priceView.feeAmount > 0"> </cell>
      <divider class="divider-bg "></divider>
    </group>
    <tabbar>
      <tabbar-item class="buy-aggregate ">
        <div slot="label" class="total">
          <span>总计</span>
          <span class="money">￥{{priceView.totalAmount}}</span>
          <span class="total-amount">共{{modelView.totalCount}}件商品</span>
        </div>
      </tabbar-item>
      <tabbar-item class="buy-submit ">
        <x-button slot="customer" type="primary" @click.native="buy">提交订单</x-button>
      </tabbar-item>
    </tabbar>
    <zk-pay ref="show_pay"></zk-pay>
  </section>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton, CellFormPreview, CellBox, Panel, InlineXNumber, XTextarea, Picker, Popup, TransferDom, PopupRadio, Divider, XSwitch } from 'zkui'
  import { ZkPay } from 'widgets'
  import apiService from 'src/service/api/order.api'
  import BuyAddress from './buy__address' // 地址
  import local from 'src/service/common/local'
  export default {
    components: {
      Tabbar,
      BuyAddress,
      TabbarItem,
      XSwitch,
      Group,
      Cell,
      MIcon,
      XButton,
      CellFormPreview,
      CellBox,
      Panel,
      InlineXNumber,
      XTextarea,
      PopupRadio,
      Picker,
      Popup,
      Divider,
      TransferDom,
      ZkPay
    },
    data () {
      return {
        modelView: '', // 商品数据，从服务器上远程获取
        priceView: '', // 价格显示模型
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        showPay: false, // 显示支付方式\
        storePrices: [], // 店铺价格显示
        payAmount: '', // 需要支付的金额，人民币支付
        addressId: '00000000-0000-0000-0000-000000000000', // 地址选择，默认为空,
        userMessages: [], // 留言信息
        isFromCart: false, // 购买信息是否来自购物车，如果是，则需要删除购物车中，相对应的商品数据
        isFromOrder: false, // 是否从订购页面来
        reduceMoneys: [], // 非人民币资产信息
        isGroupBuy: false, // 是否为拼团购买
        showDelivery: [] // 显示物流快递
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async buy () {
        try {
          var defaultAddress = local.getLoginStore('default_address') // 刷新时从缓冲中读取地址
          if (defaultAddress !== undefined) {
            this.addressId = defaultAddress.id
          } else {
            this.$vux.toast.warn('请先添加地址')
            return
          }
          var storeBuyItems = []
          for (var i = 0; i < this.modelView.storeItems.length; i++) {
            var storeBuyItem = this.modelView.storeItems[i]
            var productBuyItems = []
            for (var j = 0; j < storeBuyItem.productSkuItems.length; j++) {
              var productSkuBuyItem = storeBuyItem.productSkuItems[j]
              var buyproductItem = {
                ProductSkuId: productSkuBuyItem.productSkuId,
                Count: productSkuBuyItem.buyCount,
                ProductId: productSkuBuyItem.productId,
                priceStyleId: productSkuBuyItem.priceStyleId,
                Amount: productSkuBuyItem.buyCount * productSkuBuyItem.price,
                storeId: storeBuyItem.storeId
              }
              productBuyItems.push(buyproductItem)
            }

            var buyStoreItem = {
              storeId: storeBuyItem.storeId,
              isGroupBuy: this.isGroupBuy, // 是否为拼图
              deliveryId: this.showDelivery[i], // 运费
              userMessage: this.userMessages[i],
              totalAmount: this.priceView.storePrices[i].totalAmount, // 店铺订单总价格
              totalCount: this.modelView.storeItems[i].totalCount, // 店铺商品总数量
              expressAmount: this.priceView.storePrices[i].expressAmount, // 店铺运费
              productAmount: this.priceView.storePrices[i].productAmount, // 店铺总商品费用
              productSkuItems: productBuyItems
            }
            storeBuyItems.push(buyStoreItem)
          }
          // 虚拟资产
          var reduceMoneys = []
          for (var r = 0; r < this.modelView.allowMoneys.length; r++) {
            var allowMoneyItem = this.modelView.allowMoneys[r]
            if (this.reduceMoneys[r]) {
              var reduceMoneyItem = {
                key: allowMoneyItem.moneyId,
                value: allowMoneyItem.maxPayPrice
              }
              reduceMoneys.push(reduceMoneyItem)
            }
          }
          var buyInput = {
            reduceMoneysJson: JSON.stringify(reduceMoneys),
            StoreOrderJson: JSON.stringify(storeBuyItems),
            addressId: this.addressId, // 选择地址Id
            payType: 3, // 支付方式
            totalAmount: this.priceView.totalAmount, // 订单总金额
            TotalCount: this.modelView.totalCount, // 订单总商品
            paymentAmount: this.priceView.totalAmount, // 订单总金额
            orderType: 1, // 订单类型
            isGroupBuy: this.isGroupBuy, // 是否为拼团购买/*  */
            sign: this.modelView.sign, // 签名信息
            isFromCart: this.isFromCart, // 是否从购物车购买
            isFromOrder: this.isFromOrder, // 是否从订货页面来
            userId: this.LoginUser().id // 下单用户ID
          }
          // console.info('购买格式', buyInput)
          var response = await apiService.Buy(buyInput)
          console.dir(response)
          if (response.data.status === 1) {
            var buyOutput = response.data.result
            console.log(buyOutput)
            this.$refs.show_pay.$emit('payMethod', buyOutput.payId, buyOutput.payAmount, 'order', response.data.result.orderIds) // 唤起支付窗口
          } else {
            this.$vux.toast.warn(response.data.message)
          }
        } catch (error) {
          console.warn(error)
          this.GetData() // 如果出错重新请求一次服务器
        }
      },
      async GetData () {
        var buyProductInfo = ''
        console.info('this.$route.params.buyInfo', this.$route.params.buyInfo)
        if (this.$route.params.buyInfo !== undefined) {
          buyProductInfo = this.$route.params.buyInfo
          local.setStore('order_buy', buyProductInfo) // 将购买信息写到缓存中
        } else {
          buyProductInfo = local.getStore('order_buy') // 刷新时从缓冲中读取数据
        }
        this.isGroupBuy = buyProductInfo[0].isGroupBuy
        if (this.$route.params.isFromCart !== undefined) {
          this.isFromCart = this.$route.params.isFromCart // 记录购买信息是否来自购物车
        }
        if (this.$route.params.isFromOrder !== undefined) {
          this.isFromOrder = this.$route.params.isFromOrder // 是否从订货页面来
        }
        if (buyProductInfo === undefined) {
          this.$vux.toast.warn('暂无商品，清先购买商品')
          this.$router.push({
            name: 'commont_index'
          })
        } else {
          var buyInfoInput = {
            loginUserId: this.LoginUser().id,
            isGroupBuy: this.isGroupBuy,
            productJson: JSON.stringify(buyProductInfo)
          }
          console.info('购物信息', buyInfoInput)
          var response = await apiService.buyProduct(buyInfoInput)
          console.log('response', response)
          if (response.data.status !== 1) {
            this.messageWarn(response.data.message)
          } else {
            this.modelView = response.data.result
            // 初始运费模板
            for (var i = 0; i < this.modelView.storeItems.length; i++) {
              this.showDelivery[i] = this.modelView.storeItems[i].expressTemplates[0].key
              this.userMessages[i] = '' // 初始化留言信息
            }
            // 初始化币种
            for (var k = 0; k < this.modelView.allowMoneys.length; k++) {
              this.reduceMoneys[k] = true
            }
            // 获取价格
            this.getPrice()
          }
        }
      },
      // 更改运费方式，重新获取价格
      countPrice () {
        this.getPrice()
      },
      // 获取价格,更改店铺运费方式，修改地址时候，会修改价格
      async getPrice () {
        console.log('defaultAddress', local.getLoginStore('default_address'))
        var defaultAddress = local.getLoginStore('default_address') // 刷新时从缓冲中读取地址
        if (defaultAddress !== undefined) {
          console.log('defaultAddress', defaultAddress)
          this.addressId = defaultAddress.id
        } else {
          this.$vux.toast.warn('请先添加地址')
          return
        }
        var storeDelivery = []
        for (var i = 0; i < this.modelView.storeItems.length; i++) {
          var storeItem = this.modelView.storeItems[i]
          var deliveryItem = {
            key: storeItem.storeId,
            value: this.showDelivery[i]
          }
          storeDelivery.push(deliveryItem)
        }
        var reduceMoneys = []
        for (var k = 0; k < this.modelView.allowMoneys.length; k++) {
          var allowMoneyItem = this.modelView.allowMoneys[k]
          if (this.reduceMoneys[k]) {
            var reduceMoneyItem = {
              key: allowMoneyItem.moneyId,
              value: allowMoneyItem.maxPayPrice
            }
            reduceMoneys.push(reduceMoneyItem)
          }
        }
        var priceInput = {
          sign: this.modelView.sign, // 传递签名
          loginUserId: this.LoginUser().id, // 用户Id
          addressId: this.addressId,
          reduceMoneysJson: JSON.stringify(reduceMoneys),
          storeExpressJson: JSON.stringify(storeDelivery)
        }
        var priceResponse = await apiService.getPrice(priceInput)
        if (priceResponse.data.status !== 1) {
          if (priceResponse.data.messagecode === 100) {
            console.warn(priceResponse.data.message)
            this.GetData() // 缓存对象不存在，重新请求一次数据库
          }
          // this.messageWarn(priceResponse.data.message)
        } else {
          this.priceView = priceResponse.data.result
          this.storePrices = this.priceView.storePrices
          this.asyncFlag = true
          console.log('priceView', this.priceView, this.storePrices)
        }
      }
    }
  }
</script>

<style  lang="less">
  .zkui_order_buy {
    margin-bottom: 2.5rem;
    .weui-cells {
      margin-top: 0;
    }
    .flex {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .flex_one {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .zkui_order_buy-freight {
      color: @brand;
    }
    .order_buy_product {
      .weui-cells {
        margin-top: 0;
      }
    }
    .weui-tabbar {
      position: fixed;
      z-index: 500;
      bottom: 0;
      width: 100%; // height: 3.33333333rem;
      height: 3.5rem;
      .bar-home {
        width: 15%;
      }
      .buy-aggregate {
      }
      .buy-submit {
        flex: 0;
      }
      .weui-tabbar__label {
        text-align: center;
        color: #999999;
        line-height: 0;
        height: 100%;
      }
      .weui-tabbar__label:after {
        content: '';
        display: block;
        clear: both;
      }
      .weui-tabbar__icon {
        display: inline-block;
        width: 2.25rem;
        height: 2.2rem;
      }
      .weui-btn {
        width: 8rem;
        height: 3.5rem;
        white-space: nowrap;
        border-radius: 0px;
        float: right;
      }
      .weui-btn:after {
        content: ' ';
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid rgba(0, 0, 0, 0.2);
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0;
      }
      .weui-cells {
        .vux-no-group-title {
          margin-top: 0.77em;
          :after {
            border-bottom: 0;
          }
        }
      }
      .bar-home,
      .bar-star {
        width: 45%;
        border-right: 1px solid #e5e5e5;
      }
    }

    .total {
      font-weight: bold;
      color: @metal;
      display: flex;
      height: 100%;
      align-items: center;
      span {
        padding-left: 10 * @rem;
        height: 100%;
        line-height: 4.16666667rem;
      }
      .money {
        color: @danger;
        font-size: @h4-font-size;
        margin-right: 5 * @rem;
      }
      .total-amount {
        color: #adb5bd;
      }
    }

    .vux-form-preview {
      .weui-form-preview__hd {
        line-height: 2em;
        label {
          color: @metal;
        }
      }
      .address_particulars {
        color: @black;
        text-align: left;
      }
    }
    .spec {
      margin-top: 0.5rem;
    }
    .weui-form-preview__value {
      font-size: @h5-font-size;
    }
    .vux-inline-x-number {
      float: right;
      margin-top: 1rem;
    }
    .vux-number-selector-plus {
      padding: 0 0.66666667rem;
      margin-right: 0;
    }
    .weui-media-box__title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      white-space: pre;
    }
    .item-contnet {
      .weui-cells {
        margin-top: 0;
      }
      .weui-cells_checkbox {
        .cart_item-title {
          padding: 0.3rem 0;
        }
      }
      ul {
        .zkui-order-cart-item {
          .order-cart-commodity {
            height: 7.8rem;
            .order-cart-commodit-into {
              height: 100%;
              .order-cart-commodity-into_left {
                width: 6.5rem;
                height: 6.5rem;
                margin-top: 0.8rem;
                margin-left: 10 * @rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .order-cart-commodity-into_right {
                margin-top: 0.8rem;
                padding: 0 0.8rem;
                position: relative;
                min-height: 7rem;
                p {
                  font-size: @h6-font-size;
                  color: @black;
                  font-family: Helvetica;
                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
                span {
                  font-size: 0.8rem;
                  color: @gray-500;
                  font-family: Helvetica;
                }
                div.price-box {
                  width: 95%;
                  position: absolute;
                  left: 10 * @rem;
                  bottom: 10 * @rem;
                  height: 2rem;
                  vertical-align: bottom;
                  align-items: flex-end;
                  p.price_now {
                    color: @danger;
                    font-size: @h5-font-size;
                    font-weight: bold;
                    font-family: Helvetica;
                  }
                  span.price_old {
                    padding-left: 5 * @rem;
                    text-decoration: line-through;
                    color: @gray-500;
                    font-family: Helvetica;
                  }
                  span.price_num {
                    text-align: right;
                    color: @gray-500;
                    padding-left: 10 * @rem;
                    font-family: Helvetica;
                    .vux-number-round {
                      height: 1.3rem;
                      div {
                        display: block;
                        .vux-number-selector-sub {
                          position: relative;
                          svg {
                            position: absolute;
                            top: 0;
                            left: 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .vux-label-desc {
      font-size: @h6-font-size;
    }
  }
</style>
