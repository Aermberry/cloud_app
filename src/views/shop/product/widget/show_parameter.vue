<template>
  <div>
    <group class="zkui-product-show-parameter">
      <div class="weui-cells-top"></div>
      <cell :title="salePropertyTitle" @click.native="specification()" is-link :value="selectSku.propertyValueDesc"></cell>
      <cell title="商品参数" @click.native="showParameter = true" is-link class="border-bottom" v-if="productView.productExtensions.productCategory.displayPropertys.length!==0"></cell>
      <cell :title="'备注：'+productView.detail.productDetailExtension.remark" v-if="productView.detail.productDetailExtension.remark!==''&&productView.detail.productDetailExtension.remark!==null"></cell>
      <div class="weui-cells-bottom"></div>
    </group>
    <!-- 拼团列表 -->
    <group class="zkui-product-show-groupbuy" v-if="isGroupBuyProduct">
      <cell :title="groupBuyLength+'人在拼团，可直接参与'" v-if="groupBuyLength>0"></cell>
      <div class="groupbuy-box">
        <ul v-for="(item,index) in groupBuyRecord" :key="index">
          <li class="groupbuy-img">
            <img :src="item.users[0].avator" alt="">
          </li>
          <li class="groupbuy-name">
            <span>{{item.users[0].userName}}</span>
          </li>
          <li class="groupbuy-message">
            <div class="message-box">
              <div class="message-top">
                还差
                <span>{{item.remainCount}}人</span>
                拼成
              </div>
              <div class="meassge-bottom">
                剩余
                <!-- {{item.remainTime}} -->
                <zk-timedown @time-end="message = '倒计时结束'" :endTime='time[index]'></zk-timedown>
              </div>
            </div>
          </li>
          <li class="groupbuy-btn">
            <x-button @click.native="groupBuy(item.activityRecordId,item.users[0].userName,item.remainTime,item.remainCount)" type="primary" :disabled="item.users[0].userName===LoginUser().userName">去拼单</x-button>
          </li>
        </ul>
      </div>
      <div class="weui-cells-bottom"></div>
    </group>
    <!-- 拼团弹窗 -->
    <div v-transfer-dom v-if="isGroupBuyProduct">
      <x-dialog v-model="groupBuyWindow" class="dialog-demo">
        <div class="groupbuy-dialog">
          <h1 class="gd-title">参与{{groupBuyWindowMessage.name}}的拼单</h1>
          <div class="gd-message">仅剩{{groupBuyWindowMessage.places}}个名额,<br>{{groupBuyWindowMessage.time}}后结束
            <!-- <zk-timedown @time-end="message = '倒计时结束'" :endTime='groupBuyWindowMessage.time'></zk-timedown> -->
          </div>
          <div class="gd-img-box">
            <div class="gd-img">
              <img src="" alt="">
            </div>
          </div>
          <div class="gd-btn">
            <x-button @click.native="showgroupBuy=true,groupBuyWindow=false,isInitiateGroup=false">参与拼团</x-button>
          </div>
          <div @click="groupBuyWindow=false" class="gd-close">
            <span class="vux-close"></span>
          </div>
        </div>
      </x-dialog>
    </div>
    <!-- 拼团规格 -->
    <div v-transfer-dom v-if="isGroupBuyProduct">
      <popup v-model="showgroupBuy" class="zk-product-showSale" max-height="80%" is-transparent>
        <div class="close" @click=" showgroupBuy = false "></div>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;">
          <dl class="sale-info goods-information">
            <dt class="sale-info-img">
              <img :src="productView.thumbnailUrl" />
            </dt>
            <dd class="sale-info-name">{{productView.name}}</dd>
            <dd class="sale-info-price brand">￥{{selectSkuDisplayPrice}}
              <span class="metal">￥{{selectSku.marketPrice}}</span>
            </dd>
            <dd class="sale-info-stock metal">库存：{{selectSku.stock}} 货号：{{selectSku.bn}}</dd>
          </dl>
          <div class="sale-info-property goods-select">
            <dl class="border-bottom " v-for="(item, index) in productView.productExtensions.productCategory.salePropertys " :key="index ">
              <dt>{{item.name}}</dt>
              <dd>
                <checker v-model="saleItems[index] " default-item-class="sale-item " @on-change="changSku " selected-item-class="sale-item-selected " disabled-item-class="sale-item-disabled " :radio-required="true ">
                  <checker-item :value="sale " v-for="sale in item.propertyValues " :key="sale.id "> {{sale.valueAlias}} </checker-item>
                </checker>
              </dd>
            </dl>
          </div>
          <group class="zkui-product-show-parameter-amount ">
            <cell title="购买数量 ">
              <inline-x-number style="display:block; " :min="1 " width="50px " v-model="buyCount" :max="selectSku.stock" button-style="round"></inline-x-number>
            </cell>
          </group>
          <div class="base">
            <button-tab>
              <!-- <button-tab-item type="warn" @click.native="addToCart" v-if="!isGroupBuyProduct"> 加入购物车</button-tab-item>
              <button-tab-item type="primary" @click.native="buyProduct(false) " v-if="!isGroupBuyProduct"> 立即购买</button-tab-item> -->
              <button-tab-item type="warn" @click.native="buyProduct(false) " v-if="isGroupBuyProduct  && !isGroupBuy">单独购买</button-tab-item>
              <button-tab-item type="primary" @click.native="buyProduct(true) " v-if="isGroupBuyProduct && isGroupBuy">开始拼单</button-tab-item>
            </button-tab>
          </div>
        </div>
      </popup>
    </div>
    <!-- 单独购买规格 -->
    <div v-transfer-dom v-if="!isGroupBuyProduct">
      <popup v-model="showSale" class="zk-product-showSale" max-height="80%" is-transparent>
        <div class="close" @click=" showSale = false "></div>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;">
          <dl class="sale-info goods-information">
            <dt class="sale-info-img">
              <img :src="productView.thumbnailUrl" />
            </dt>
            <dd class="sale-info-name">{{productView.name}}</dd>
            <dd class="sale-info-price brand">￥{{selectSkuDisplayPrice}}
              <span class="metal">￥{{selectSku.marketPrice}}</span>
            </dd>
            <dd class="sale-info-stock metal">库存：{{selectSku.stock}} 货号：{{selectSku.bn}}</dd>
          </dl>
          <div class="sale-info-property goods-select">
            <dl class="border-bottom " v-for="(item, index) in productView.productExtensions.productCategory.salePropertys" :key="index ">
              <dt>{{item.name}}</dt>
              <dd>
                <checker v-model="saleItems[index] " default-item-class="sale-item " @on-change="changSku " selected-item-class="sale-item-selected " disabled-item-class="sale-item-disabled " :radio-required="true ">
                  <checker-item :value="sale " v-for="sale in item.propertyValues " :key="sale.id "> {{sale.valueAlias}} </checker-item>
                </checker>
              </dd>
            </dl>
          </div>
          <group class="zkui-product-show-parameter-amount ">
            <cell title="购买数量 ">
              <inline-x-number style="display:block; " :min="1 " width="50px " v-model="buyCount" :max="selectSku.stock" button-style="round"></inline-x-number>
            </cell>
          </group>
          <div class="base">
            <button-tab>
              <button-tab-item type="warn" @click.native="addToCart" v-if="!isGroupBuyProduct"> 加入购物车</button-tab-item>
              <button-tab-item type="primary" @click.native="buyProduct(false) " v-if="!isGroupBuyProduct"> 立即购买</button-tab-item>
              <!-- <button-tab-item type="warn" @click.native="buyProduct(false) " v-if="isGroupBuyProduct  && !isGroupBuy">单独购买</button-tab-item>
              <button-tab-item type="primary" @click.native="buyProduct(true) " v-if="isGroupBuyProduct && isGroupBuy">发起拼单</button-tab-item> -->
            </button-tab>
          </div>
        </div>
      </popup>
    </div>
    <!-- 商品参数 -->
    <div v-transfer-dom>
      <popup v-model="showParameter " class="showParameter " max-height="70%" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem; ">
          <div class="goods-title">商品参数</div>
          <div class="goods-title-pla"></div>
          <group class="goods-item">
            <cell v-for="(item, index) in productView.productExtensions.productCategory.displayPropertys " :key="index " :title="item.name " :value="item.displayValue " v-if="item.isSale==false "></cell>
          </group>
          <div class="base">
            <x-button type="primary " @click.native="showParameter=false" class="goods-title">确定</x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import { Group, Checker, CheckerItem, Divider, GroupTitle, Cell, TransferDom, Popup, XButton, XSwitch, InlineXNumber, ButtonTab, ButtonTabItem, XDialog } from 'zkui'
  import userService from 'src/service/api/user.api'
  import productService from 'src/service/api/product.api'
  import helper from 'src/service/common/helper'
  import { ZkTimedown } from 'widgets'
  export default {
    components: {
      ZkTimedown, Group, Cell, TransferDom, Popup, XButton, XSwitch, GroupTitle, InlineXNumber, ButtonTab, ButtonTabItem, Checker, CheckerItem, Divider, XDialog
    },
    directives: {
      TransferDom
    },
    props: ['productView'],
    data () {
      return {
        showParameter: false, // 是否显示商品参数窗口
        showSale: false, // 显示规格选择窗口
        salePropertyTitle: '请选择：',
        selectSku: '', // 选择的商品Sku
        selectSkuDisplayPrice: '', // 选择sku的显示价格
        buyCount: 1, // 商品购买数量
        saleItems: [], // 可能存在多个商品规格属性，默认填充四个
        content: '',
        distrue: true,
        isInitiateGroup: true, // 判断是发起拼团还是参与拼团
        isGroupBuy: false, // 是否为拼团购买，如果是拼团购买，则显示拼团价格
        isGroupBuyProduct: false, // 是否为拼团商品
        activitySelectId: 0, // 拼团时选择的活动Id，为0表示发起拼团
        groupBuyWindow: false, // 拼团弹窗
        groupBuyWindowMessage: {
          name: '',
          time: '',
          places: ''
        },
        groupBuyRecord: '', // 商品拼团记录
        groupBuyLength: '', // 拼团数量
        showgroupBuy: false, // 显示拼团规格选择窗口
        message: '正在倒计时',
        endTime: '2018-05-25 11:51:00',
        time: ['2018-05-25 23:51:00', '2018-05-25 22:51:00', '2018-05-25 21:51:00'],
        showSku: {
          one: [],
          two: [],
          three: []
        }
      }
    },
    created () {
      this.isGroupBuyProduct = this.productView.productActivityExtension.isGroupBuy
    },
    mounted: function () {
      this.init()
      this.$nextTick(function () {
        // 接收父主件的拼团参数
        this.$on('childMethod', function (isGroupBuyAction) {
          this.isGroupBuy = isGroupBuyAction // 接收父主件的拼团参数
          this.showSale = true
          this.showgroupBuy = true
        })
      })
      for (var i = 0; i < this.productView.productExtensions.productCategory.salePropertys.length; i++) {
        this.saleItems[i] = this.productView.productExtensions.productCategory.salePropertys[i].propertyValues[0]
      }
      console.log('productView.productExtensions.productCategory.displayPropertys ', this.productView.productExtensions.productCategory.displayPropertys)
    },
    methods: {
      specification () {
        if (this.isGroupBuyProduct === false) {
          this.showSale = true
        } else {
          this.showgroupBuy = true
          this.isInitiateGroup = true
          this.isGroupBuy = true
        }
      },
      groupBuy (id, name, time, places) {
        this.groupBuyWindow = true
        this.activitySelectId = id
        console.log('this.activitySelectId', id, name, time, places)
        this.groupBuyWindowMessage.name = name
        this.groupBuyWindowMessage.time = time
        this.groupBuyWindowMessage.places = places
        this.isGroupBuy = true
      },
      async init () {
        this.productView.productExtensions.productCategory.salePropertys.forEach(element => {
          this.salePropertyTitle = this.salePropertyTitle + element.name + ' '
        })
        var productViewTemp = this.productView
        this.selectSku = productViewTemp.productExtensions.productSkus[0] // 根据specSn获取商品的规格

        // 如果是拼团操作
        if (this.isGroupBuyProduct) {
          let par = {
            productId: this.productView.id
          }
          var responseRecord = await productService.groupBuyRecord(par)
          if (responseRecord.data.status === 1) {
            this.groupBuyRecord = responseRecord.data.result
            this.groupBuyLength = this.groupBuyRecord.length
          }
        }
      },
      // 添加到购物车
      async addToCart () {
        helper.checkLogin(true)
        if (this.selectSku.id === undefined) {
          this.$vux.toast.warn('请选择商品规格')
        } else {
          let params = {
            ProductSkuId: this.selectSku.id,
            productId: this.productView.id,
            storeId: this.productView.storeId,
            count: this.buyCount
          }
          var response = await userService.AddCart(params)
          if (response.data.status === 1) {
            this.$vux.toast.success('加入购物车成功')
            this.showSale = false
          }
        }
      },
      // 购买商品,isGroupBuy是否为拼团,activitySelectId:参与拼团的活动Id,
      // (activitySelectId=0，isGroupBuy=true)表示发起拼团 (activitySelectId>0，isGroupBuy=true)参与拼团,isGroupBuy=false，普通购买
      buyProduct (isGroupBuy) {
        if (this.isInitiateGroup === true) {
          this.activitySelectId = 0
        }
        this.groupBuyWindow = false
        helper.checkLogin(true)
        if (this.selectSku.id === undefined) {
          this.$vux.toast.warn('请选择商品规格')
        }
        if (this.buyCount < 1) {
          this.$vux.toast.warn('购买数量不能小于1')
        }
        let buyProductInfo = [{
          ProductSkuId: this.selectSku.id,
          Count: this.buyCount,
          ProductId: this.productView.id,
          storeId: this.productView.storeId,
          activityRecordId: this.activitySelectId, // 活动id，参与拼团时用到
          isGroupBuy: isGroupBuy, // 是否为拼团
          LoginUserId: this.LoginUser().id
        }]
        this.showSale = false
        console.log(buyProductInfo)
        this.$router.push({
          name: 'order_buy',
          params: {
            buyInfo: buyProductInfo
          }
        })
      },
      getSku () {
        var specSn = ''
        this.saleItems.forEach(element => {
          specSn += element.id + '|'
        })
        var productViewTemps = this.productView
        var skus = productViewTemps.productExtensions.productSkus
        var sku = ''
        for (var i = 0; i < skus.length; i++) {
          if (skus[i].specSn === specSn) {
            sku = skus[i]
            console.info('是否为拼团操作', this.isGroupBuy)
            if (this.isGroupBuy) {
              this.selectSkuDisplayPrice = this.getGroupBuySkuPrice(skus[i].id)
              console.info('拼团显示价格', this.selectSkuDisplayPrice)
            } else {
              console.info('非拼团Sku', skus[i])
              this.selectSkuDisplayPrice = skus[i].displayPrice
            }
          }
        }
        return sku
      },
      // 根据skuId，获取拼团显示价格
      getGroupBuySkuPrice (id) {
        var price = 0
        var activitys = this.productView.productActivityExtension.activitys // 所有活动
        var groupBuyActivity
        activitys.forEach(element => {
          if (element.key === 'ZKCloud.App.Shop.Activitys.Modules.GroupBuy.Model.GroupBuyActivity') {
            groupBuyActivity = element.value
          }
        })
        if (groupBuyActivity !== undefined) {
          groupBuyActivity.SkuProducts.forEach(r => {
            if (r.Id === id) {
              price = r.GroupBuyDisplayPrice
            }
          })
        }
        return price
      },
      // 获取Sku ，用户选择不同的sku
      changSku () {
        this.selectSku = this.getSku() // 根据specSn获取商品的规格
      }
    }
  }
</script>

<style   lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zkui-product-show-parameter {
    .vux-label {
      font-weight: @font-weight-normal;
    }
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells-top {
      background-color: #efefef;
      margin-bottom: -2 * @rem;
      border: 1px solid white;
    }
    .weui-cells-bottom {
      height: 5 * @rem;
      background-color: #efefef;
      // border: 1px solid white;
    }
    .weui-cells__title {
      text-align: center;
    }
    .weui-cells__content {
      min-height: 240 * @rem;
    }
    .weui-cell__ft {
      font-weight: @font-weight-normal;
    }
  }

  .zk-product-showSale {
    .sale-info:after {
      content: none;
      display: block;
      clear: both;
    }
    .sale-info {
      min-height: 8rem;
      dd {
        float: right;
        width: 65%;
        margin-right: 15 * @rem;
        padding-top: 2 * @rem;
        font-weight: @font-weight-normal;
      }
      dd.sale-info-name {
        color: @black;
        font-family: Helvetica;
        font-size: @h5-font-size;
      }
      .sale-info-price {
        font-weight: bold;
        font-size: @h4-font-size;
        span {
          text-decoration: line-through;
          font-weight: 100;
          color: @gray-600;
          font-family: Helvetica;
          font-weight: @font-weight-normal;
        }
      }
      .sale-info-stock {
        color: @gray-600;
      }
      .sale-info-close {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border: 1px solid #5f646e;
        display: inline-block;
        position: absolute;
        right: 5px;
        top: 4px;
        padding: 0.32rem;
      }
      .sale-info-close::after {
        content: '\2716'; //特殊字符或形状，一个勾
        color: #5f646e;
        font-size: 12px;
        position: absolute;
        right: 5px;
        padding-top: 0.4rem;
      }
      dt {
        float: left;
        width: 6.5rem;
        height: 6.5rem;
        margin-left: 1rem;
        img {
          border-radius: 0.2rem;
          width: 90%;
          height: 90%;
        }
      }
    }

    .sale-info-property {
      height: 12rem;
      overflow-y: auto;
      width: 100%;
      dl:after {
        bottom: none;
        top: 0;
      }
      dl {
        width: 100%;
        min-height: 5rem;
        overflow-y: auto;
        dt {
          width: 100%;
          height: 28 * @rem;
          padding: 8 * @rem 0 0 1.25rem;
          font-weight: bold;
        }
        dd:after {
          content: '';
          display: block;
          visibility: hidden;
          width: 0;
          height: 0;
          clear: both;
        }
        dd {
          width: 100%;
          .vux-checker-box {
            float: left;
            margin-left: 8 * @rem;
          }
          .sale-item {
            background-color: #ddd;
            color: #222;
            padding: 4 * @rem 8 * @rem;
            margin: 0 5 * @rem 5 * @rem 0;
            border-radius: 4 * @rem;
            font-weight: @font-weight-normal;
            font-size: @h6-font-size;
          }
          .sale-item-selected {
            background-color: @brand;
            color: #fff;
          }
          .sale-item-disabled {
            color: #999;
          }
        }
      }
    }
    .group-base {
      .vux-button-group > a {
        height: auto;
        line-height: normal;
        padding: 0.5rem 0;
      }
      .vux-button-group > a.vux-button-tab-item-first:after {
        content: none;
      }
      .vux-button-group > a.vux-button-tab-item-last:after {
        content: none;
      }
    }
  }
  .zkui-product-show-parameter-amount:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 0.08333333rem;
    border-bottom: 1px solid #c7c7c7;
    color: #c7c7c7;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .zkui-product-show-parameter-amount {
    position: relative;
    height: 3.3rem;
    .vux-label {
      font-weight: @font-weight-bold;
    }
    .vux-number-input {
      font-weight: @font-weight-normal;
    }
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells:before {
      border-top: 0;
    }
    .vux-number-input {
      font-size: @h4-font-size;
    }
  }

  .goods-title {
    position: fixed;
    width: 100%;
    overflow-y: auto;
    height: 40 * @rem;
    line-height: 40 * @rem;
    text-align: center;
    z-index: 5;
    background-color: white;
    border-bottom: 1px solid #e5e5e5;
    color: @black;
    font-size: @h4-font-size;
  }
  .goods-title-pla {
    height: 40 * @rem;
  }
  .goods-item {
    padding-bottom: 20 * @rem;
    height: 16.5rem;
    overflow-y: auto;
    .weui-cells {
      margin-top: 0;
    }
  }
  .goods-information {
    padding-top: 1rem;
    justify-content: center;
    padding-right: 1.25rem;
    color: #999999;
    min-height: 40px;
    z-index: 5;
    background-color: white;
    position: relative;
  }
  .goods-information:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0.08333333rem;
    border-bottom: 1px solid #c7c7c7;
    color: #c7c7c7;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .base {
    width: 100%;
    height: auto;
    overflow-y: auto;
    min-height: 40px;
    z-index: 5;
    background-color: white;
    button {
      border-radius: 0;
    }
  }
  .weui-cell__ft {
    font-weight: @font-weight-normal;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 25px;
    height: 25px;
    background: @brand;
    border-radius: 25px;
    // box-shadow: 2px 2px 5px 0px @black;
    cursor: pointer;
    z-index: 9999;
  }

  .close:hover {
    background: red;
  }
  .close:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 5px;
    background: white;
    transform: rotate(45deg);
    top: 10px;
    left: 5px;
  }
  .close:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 5px;
    background: white;
    transform: rotate(-45deg);
    top: 10px;
    left: 5px;
  }
  .base {
    .vux-button-tab-item-first {
      background: @actionsheet-label-warn-color !important;
      color: @white !important;
    }
    .vux-button-tab-item-last {
      color: @white !important;
      background: @brand!important;
    }
  }
  .zkui-product-show-groupbuy {
    .weui-cells-bottom {
      height: 5 * @rem;
      background-color: #efefef;
      // border: 1px solid white;
    }
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells:before {
      content: none;
    }
    .groupbuy-box {
      max-height: 10rem;
      overflow: auto;
      ul {
        display: flex;
        height: 4rem;
        border-top: 1px solid rgba(229, 229, 229, 0.7);
        .groupbuy-img {
          width: 4rem;
          height: 4rem;
          padding: 0.4rem;
          img {
            width: 3.4rem;
            height: 3.4rem;
            border-radius: 50%;
          }
        }
        .groupbuy-name {
          flex: 1;
          line-height: 4rem;
          padding-left: 0.5rem;
          span {
            font-size: @h4-font-size;
          }
        }
        .groupbuy-message {
          width: 10rem;
          height: 4rem;
          position: relative;
          .message-box {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translatey(-50%);
            .message-top {
              font-size: @h5-font-size;
              span {
                font-size: @h5-font-size;
                color: @brand;
              }
            }
            .meassge-bottom {
              font-size: @h6-font-size;
              color: @gray-600;
            }
          }
        }
        .groupbuy-btn {
          height: 4rem;
          padding: 0.7rem 0.5rem;

          button {
            height: 2.6rem;
          }
        }
      }
    }
  }
  .groupbuy-dialog {
    padding: 1.5rem;
    position: relative;
    .gd-title {
      text-align: center;
      font-weight: normal;
      font-size: @h4-font-size;
      margin-bottom: 0.5rem;
    }
    .gd-message {
      font-size: @h5-font-size;
      color: @gray-600;
    }
    .gd-img-box {
      .gd-img {
        width: 7.2rem;
        min-width: 2rem;
        margin: 0 auto;
        height: 3.4rem;
        img {
          width: 3.4rem;
          height: 3.4rem;
          margin-right: 0.2rem;
        }
      }
    }
    .gd-btn {
      button {
        height: 3rem;
        background: @brand;
        color: @white;
      }
    }
    .gd-close {
      // background: @gray-300;
      border-radius: 50%;
      position: absolute;
      top: 0rem;
      right: 0rem;
    }
    .weui-dialog {
      overflow: visible;
    }
  }
</style>
