<template>
  <section class="zkui_order_buy">
    <zk-head title='确认下单' goBack='商品详情'></zk-head>
    <cell title="地址" value="请选择地址" is-link link="/user/buyeraddress/select" v-if="addressBox">
      <m-icon name="zk-orderaddress" size="2.5rem" class="icon"></m-icon>
    </cell>
    <router-link to="/user/buyeraddress/select">
      <div class="vux-form-preview weui-form-preview" v-if="!addressBox">
        <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label address_name">收货人：{{addressMessage.name}}</label>
          <em class="weui-form-preview__value">{{addressMessage.mobile}}</em>
          <div class="weui-form-preview__item">
            <span class="weui-form-preview__value address_particulars address_name">
              <m-icon name="zk-orderaddress" size="2.5rem" class="icon"></m-icon>
              收货地址：{{addressMessage.address}}
            </span>
          </div>
        </div>
      </div>
    </router-link>
    <divider class="divider-bg "></divider>
    <group class="order_buy_product " v-for="store in modelView.storeProducts " :key="store.storeId ">
      <div class="weui-panel weui-panel_access ">
        <div class="weui-panel__hd ">{{store.storeName}}</div>
        <div class="weui-panel__bd " v-for="product in store.productItems " :key="product.productSku.id ">
          <div class="weui-media-box weui-media-box_appmsg ">
            <div class="weui-media-box__hd ">
              <router-link :to=" '/product/show/'+product.product.id ">
                <img :src="product.product.thumbnailUrl " :alt="product.product.name " class="weui-media-box__thumb ">
              </router-link>
            </div>
            <div class="weui-media-box__bd ">
              <h4 class="weui-media-box__title ">
                <router-link :to=" '/product/show/'+product.product.id ">{{product.product.name}}</router-link>
              </h4>
              <p class="weui-media-box__desc spec">
                <span> {{product.productSku.bn}} {{product.productSku.propertyValueDesc}}</span>
                <span style="float:right">
                  <em>￥</em>{{product.productSku.price}}
                </span>
                <inline-x-number :min="1 " :v-model="product.count " button-style="round " class="buy-account "></inline-x-number>
              </p>
            </div>
          </div>
        </div>
      </div>
      <popup-radio title="请选择 " :options="showDeliverys " v-model="showDelivery "></popup-radio>
      <x-textarea title="卖家留言 " placeholder="选填：填写内容已和卖家协商确认 " :show-counter="false " :rows="1 " autosize></x-textarea>
      <cell>
        <div>共{{store.totalCount}}商品 小计{{store.totalAmount}}</div>
      </cell>
      <divider class="divider-bg "></divider>
    </group>
    <tabbar>
      <tabbar-item>
        <div slot="label" class="total">
          <span>总计</span>
          <span class="money">￥{{modelView.totalAmount}}</span>
          <span class="total-amount">共{{modelView.totalCount}}件商品</span>
        </div>
      </tabbar-item>
      <tabbar-item>
        <x-button slot="customer" type="primary" @click.native="buy">提交订单</x-button>
      </tabbar-item>
    </tabbar>
    <zk-pay ref="show_pay"></zk-pay>
  </section>

</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton, CellFormPreview, CellBox, Panel, XAddress, InlineXNumber, XTextarea, Picker, Popup, TransferDom, PopupRadio, Divider } from 'zkui'
  import { ZkPay } from 'widgets'
  import apiService from 'src/service/api/order.api'
  import apiUser from 'src/service/api/user.api'
  import store from 'src/store/index'
  import local from 'src/service/common/local'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      XButton,
      CellFormPreview,
      CellBox,
      Panel,
      XAddress,
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
        selectId: '',
        addressMessage: '',
        addressBox: true,
        par: '',
        modelView: '', // 商品数据，从服务器上远程获取
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        showDeliverys: [{
          key: 'A',
          value: 'label A'
        }, {
          key: 'B',
          value: 'label B'
        }],
        showAddress: true, // 显示地址
        showPay: false, // 显示支付方式
        payAmount: '', // 需要支付的金额，人民币支付
        showDelivery: '' // 显示物流快递
      }
    },
    mounted () {
      this.GetData()
      this.Single()
    },
    methods: {
      async buy () {
        // var orderBuyInput = {
        //   // addressId: '72be65e6-3a64-414d-972e-1a3d4a36f88', // 选择地址Id
        //   payType: 3, // 支付方式
        //   totalAmount: 1256.26, // 订单总金额
        //   paymentAmount: 1250.99, // 订单总金额
        //   orderType: 1,
        //   userId: store.state.userStore.loginUser.id // 下单用户ID
        // }
        this.payAmount = '1250.23' // 设置实际需支付的金额
        this.$refs.show_pay.$emit('payMethod', this.payAmount) // 唤起支付窗口
        // var response = await apiService.Buy(orderBuyInput)
        // console.dir(response)
      },
      async GetData () {
        var buyProductInfo = ''
        if (this.$route.params.buyInfo !== undefined) {
          buyProductInfo = this.$route.params.buyInfo
          local.setStore('order_buy', buyProductInfo) // 将购买信息写到缓存中
        } else {
          buyProductInfo = local.getStore('order_buy') // 刷新时从缓冲中读取数据
        }
        if (buyProductInfo === undefined) {
          this.$vux.toast.warn('暂无商品，清先购买商品')
          this.$router.push({
            name: 'commont_index'
          })
        } else {
          let buyInfoInput = {
            loginUserId: store.state.userStore.loginUser.id,
            productJson: JSON.stringify(buyProductInfo)
          }
          var response = await apiService.buyProduct(buyInfoInput)
          if (response.data.status !== 1) {
            this.messageWarn(response.data.message)
          } else {
            this.modelView = response.data.result
          }
          this.modelView = response.data.result
          this.asyncFlag = true
        }
      },
      async Single () {
        this.par = {
          id: '72BE65E6-3A64-414D-972E-1A3D4A36F123'
        }
        var address = await apiUser.SingleAddress(this.par)
        this.selectId = this.$route.params.selectId

        // 判断有没获取到默认地址
        if (address.data.status === 1) {
          this.addressBox = false
          this.addressMessage = address.data.result
        } else if (address.data.status !== 1) {
          this.addressBox = true
        }
        if (typeof (this.selectId) !== 'undefined') {
          this.par.id = this.selectId
          console.log(this.selectId)
          var addressSelect = await apiUser.SingleAddress(this.par)
          this.addressMessage = addressSelect.data.result
        }
      }
    }
  }
</script>

<style lang="less">
  .zkui_order_buy {
    margin-bottom: 2.5rem;
    .weui-tabbar {
      position: fixed;
      z-index: 500;
      bottom: 0;
      width: 100%;
      // height: 3.33333333rem;
      height: 3.5rem;
      .bar-home {
        width: 15%;
      }
      .weui-tabbar__label {
        text-align: center;
        color: #999999;
        line-height: 0;
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
      .weui-cells .vux-no-group-title {
        :after {
          border-bottom: 0;
        }
      }
      .bar-home,
      .bar-star {
        width: 45%;
        border-right: 1px solid #e5e5e5;
      }
    }

    .total {
      float: left;
      margin-left: 8*@rem;
      margin-top: 20*@rem;
      font-weight: bold;
      color: black;
      .money {
        color: @danger;
        font-size: @h3-font-size;
      }
      .total-amount {
        margin-left: 105*@rem;
        position: absolute;
        color: #adb5bd;
        top: 20*@rem;
      }
    }

    .vux-form-preview {
      .weui-form-preview__hd {
        line-height: 2em;
        label {
          color: @black;
        }
      }
      .address_particulars {
        color: @black;
        text-align: left;
      }
    }
    .icon {
      position: absolute;
      top: 1.5rem;
      left: 0.4rem;
    }
    .address_name {
      padding-left: 1.8rem;
    }
    .spec {
      margin-top: 0.5rem;
    }
    .weui-form-preview__value {
      font-size: @h4-font-size;
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
  }
</style>
