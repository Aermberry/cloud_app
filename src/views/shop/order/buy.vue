<template>
  <section class="zkui-order-buyfromproduct">
    <zk-head title='确认下单' goBack='商品详情'></zk-head>
    <group class="zkui-order-buy-parameter-amount" v-for="store in modelView.storeProducts" :key="store.storeId">
      <cell title="地址" value="请选择地址" is-link></cell>
      <div class="weui-cells-top"></div>
      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">{{store.storeName}}</div>
        <div class="weui-panel__bd" v-for="product in store.productItems" :key="product.productSku.id">
          <div class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <router-link :to="'/product/show/'+product.product.id">
                <img :src="product.product.thumbnailUrl" :alt="product.product.name" class="weui-media-box__thumb">
              </router-link>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">
                <router-link :to="'/product/show/'+product.product.id">{{product.product.name}}</router-link>
              </h4>
              <p class="weui-media-box__desc">
                {{product.productSku.bn}} {{product.productSku.propertyValueDesc}}
              </p>
              <inline-x-number style="display:block; " :min="1" width="50px " :v-model="product.count" button-style="round"></inline-x-number>
              <span style="float:right">
                <em>￥</em>{{product.productSku.price}}
              </span>
            </div>
          </div>
        </div>
      </div>

      <popup-picker title="请选择" :data="list" v-model="value5"></popup-picker>
      <x-textarea title="卖家留言" placeholder="选填：填写内容已和卖家协商确认" :show-counter="false" :rows="1" autosize></x-textarea>
      <cell>
        <div>共{{store.totalCount}}商品 小计{{store.totalAmount}}</div>
      </cell>
      <div class="weui-cells-bottom"></div>
    </group>
    <tabbar>
      <tabbar-item>
        <div slot="label" class="total">
          <span>总计</span>
          <span class="money">￥{{modelView.totalAmount}}</span>
          <span class="amount">共{{modelView.totalCount}}件商品</span>
        </div>
        <x-button slot="customer" type="primary" @click.native="buy= true">提交订单</x-button>
      </tabbar-item>
    </tabbar>
    <zk-pay></zk-pay>
    <zk-paypassword></zk-paypassword>
  </section>

</template>

<script>
  import { PopupPicker } from 'vux'
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton, CellFormPreview, CellBox, Panel, XAddress, InlineXNumber, XTextarea, Picker, Popup, TransferDom } from 'zkui'
  import { ZkPaypassword, ZkPay } from 'widgets'
  import apiService from 'src/service/api/order.api'
  import store from 'src/store/index'
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
      PopupPicker,
      Picker,
      Popup,
      TransferDom,
      ZkPaypassword,
      ZkPay
    },
    data () {
      return {
        modelView: '', // 商品数据，从服务器上远程获取
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        value5: ['快递 包邮'],
        list: [[
          '快递 包邮', '顺丰'
        ]]
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async buy () {
        var orderBuyInput = {
          RegionId: '2112',
          PaymentId: '2323'
        }
        var response = await apiService.Buy(orderBuyInput)
        console.dir(response)
      },
      async GetData () {
        var buyProductInfo = this.$route.params.buyInfo
        buyProductInfo =
          [
            {
              ProductSkuId: 81,
              Count: 1,
              ProductId: 44,
              LoginUserId: 1
            },
            {
              ProductSkuId: 82,
              Count: 5,
              ProductId: 44,
              LoginUserId: 1
            },
            {
              ProductSkuId: 107,
              Count: 1,
              ProductId: 45,
              LoginUserId: 1
            },
            {
              ProductSkuId: 109,
              Count: 1,
              ProductId: 45,
              LoginUserId: 1
            },
            {
              ProductSkuId: 142,
              Count: 1,
              ProductId: 47,
              LoginUserId: 1
            }
          ]
        // console.dir('商品参数', buyProductInfo)
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
        console.dir(this.modelView)
      }
    }
  }
</script>





<style lang="less">
  .zkui-order-buyfromproduct {
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
    .amount {
      margin-left: 55*@rem;
      color: @gray-500;
    }
  }
  .zkui-order-buy-parameter-amount {
    .vux-number-round .vux-number-selector-sub svg {
      position: relative;
      top: -0.3rem;
      right: 0.05rem;
    }
    .vux-number-round .vux-number-selector-plus {
      border: 1px solid @actionsheet-label-disabled-color;
      svg {
        position: relative;
        top: -0.2rem;
        right: 2*@rem;
        fill: @actionsheet-label-disabled-color;
      }
    }
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells-top {
      height: 10px;
      background-color: #efefef;
      margin-bottom: -2*@rem;
      border: 1px solid white;
    }
    .weui-cells-bottom {
      height: 15px;
      background-color: #efefef;
      margin-top: -2*@rem;
      border: 1px solid white;
    }
    .weui-panel {
      margin-top: 0 !important;
    }
  }
</style>
