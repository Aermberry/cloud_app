<template>
  <popup v-model="showPupop" is-transparent class="zk-pay" max-height="70vh">
    <div class="pay-pupop">
      <div class="pay-head">
        <div class="vux-header">
          <div class="vux-header-left">
            <x-button type="default" @click.native="showPupop=false" class="sale-info-close"></x-button>
          </div>
          <h1 class="vux-header-title">确认付款</h1>
          <!---->
          <div class="vux-header-right">
            <!---->
          </div>
        </div>
        <p class="count">
          <span>￥{{amount}}元</span><br/>
          <em>{{note}}</em>
        </p>
      </div>
      <group class="pay-index">
        <radio :options="payTypes" fill-label="Other" @on-change="change" :vlaue="payTypes[0].value" v-if="asyncFlag===true"> </radio>
      </group>
      <div class="pay-buttom base">
        <x-button type="primary" @click.native="pay">确认支付{{amount}}元</x-button>
      </div>
    </div>
    <!-- <zk-password showPay="false"></zk-password> -->
  </popup>
</template>

<script>
  import { Popup, Group, Cell, XButton, TransferDom, Radio, MIcon } from 'zkui'
  import apiService from 'src/service/api/pay.api'
  // import { ZkPassword } from 'widgets'
  export default {
    name: 'zk-pay',
    components: {
      Popup,
      Group,
      Cell,
      XButton,
      TransferDom,
      // ZkPassword,
      MIcon,
      Radio
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        showPupop: false, // 显示支付主窗体
        payTypes: [], // 支付方式
        orderType: '', // 订单方式
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        orderIds: [],
        payId: 0, // 支付账单Id
        amount: 0.0, // 支付金额
        selectPayType: 0, // 选择的支付方式
        note: '', // 显示标题
        goBack: {}
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$on('payMethod', function (payId, amount, orderType, orderIds, payBack) {
          this.payId = payId
          this.amount = amount
          this.orderType = orderType
          this.orderIds = orderIds
          this.init() //  点击以后，才请求支付
          this.showPupop = true
          this.goBack = payBack
        })
      })
    },
    methods: {
      close () {
      },
      async init () {
        this.userName = this.LoginUser().userName
        let paras = {
          clientType: this.ClientType(), // this.ClientType // 在gloal中获取支付方式列表
          amount: this.amount,
          payId: this.payId
        }
        var response = await apiService.GetList(paras) // 获取支付方式列表
        if (response.data.status === 1) {
          this.asyncFlag = true
          var pays = response.data.result.payTypeList // 所有的支付方式
          this.note = response.data.result.note
          this.payTypes = []
          pays.forEach(element => {
            var pay = {}
            pay['key'] = element.payType
            pay['value'] = element.name
            pay['icon'] = element.icon
            pay['desc'] = element.intro
            this.payTypes.push(pay)
          })
        } else {
          this.$vux.toast.warn('支付方式获取失败')
        }
      },
      async pay () {
        let paras = {
          clientType: this.ClientType(), // this.ClientType // 在gloal中获取支付方式列表
          amount: this.amount,
          payType: this.selectPayType,
          payId: this.payId,
          openId: window.localStorage.getItem('wechat_openId')
        }

        console.info('支付提交参数参', paras)
        var response = await apiService.Pay(paras)
        console.info('支付请求结果', response)
        if (response.data.status === 1) {
          // 如果支付订单类型为商城订单，支付成功以后跳转到我的订单或者订单详情
          if (this.orderType === 'order') {
            if (this.selectPayType === 7) {
              console.info('微信支付')
              // 如果是微信支付，则将参数(parameter)给 公众号前端 让他在微信内H5调起支付
              // https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6
              alert('openId', window.localStorage.getItem('wechat_openId'))
              alert(response.data.result.message)
              alert(response.data.result.url)
              let wexinPayData = JSON.parse(response.data.result.url)
              this.onBridgeReady(wexinPayData)
            } else {
              // 跳转到指定的url，跳转url从云端返回
              window.location.href = response.data.result.url
            }
          }
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      },
      change (value, label) {
        // console.log('change:', value, label)
        this.selectPayType = value
      },
      onBridgeReady (data) {
        var vm = this
        console.info(data)
        // eslint-disable-next-line
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest',
          {
            appId: data.appId, // 公众号名称，由商户传入
            timeStamp: data.timeStamp, // 时间戳，自1970年以来的秒数
            nonceStr: data.nonceStr, // 随机串
            package: data.package,
            signType: data.signType, // 微信签名方式：
            paySign: data.paySign // 微信签名
          },
          function (res) {
            // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            if (res.err_msg === 'get_brand_wcpay_request：ok') {
              alert('支付成功' + res.err_msg)
              vm.$router.push('/reservedBerth')
            } else {
              alert('支付失败,请跳转页面' + res.err_msg)
            }
          }
        )
      }
    }
  }

</script>

<style lang='less'>
  @import '../assets/css/zkui/theme';
  .zk-pay {
    height: 60vh;
    .pay-index {
      .weui-cell {
        padding: 0 1.25rem !important;
      }
    }
    .pay-pupop {
      background-color: #fff;
      height: 100%;
      margin: 0 auto;
      .vux-popup-dialog {
        overflow-y: hidden !important;
      }
      .count {
        text-align: center;
        padding-top: 0.5rem;
        background-color: @light;
        min-height: 2rem;
        span {
          font-size: @h3-font-size;
          font-weight: bold;
          color: @brand;
        }
        em {
          font-size: @h6-font-size;
          color: @metal;
        }
      }
    }
    .pay-index {
      padding-top: 1rem;
      margin-bottom: 3rem;
      max-height: 20rem;
      overflow-y: auto;
    }
    .sale-info-close {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      display: inline-block;
      position: absolute;
      padding: 0.32rem;
      background-color: @brand;
      padding-top: 0px;
    }
    .sale-info-close::after {
      content: '\2716'; //特殊字符或形状，一个勾
      color: @light;
      font-size: @h2-font-size;
      position: absolute;
      right: 0.3rem;
    }
    .weui-btn:after {
      border: 0;
    }
    .pay-head {
      font-size: 1rem;
      //position: fixed;
      width: 100%;
      overflow-y: hidden;
      min-height: 2rem;
      z-index: 5;
    }
    .base {
      margin-top: 8rem;
      position: fixed;
      width: 100%;
      height: 2.5rem;
      overflow-y: hidden;
      z-index: 5;
      background-color: white;
      bottom: 0px;
      .weui-btn {
        border-radius: 0;
        height: 2.5rem;
      }
    }
  }
</style>
