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
          clientType: 'wapH5', // this.ClientType // 在gloal中获取支付方式列表
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
          openId: 'oQk981mWBViCsxXdZWWbi2fWVtRA'
        }

        // 建议以下代码在一打开页面的时候，判断是否是微信浏览器，是的话，就执行下面代码，获取到code后，调用接口返回openId,前端存储openId
        // if (paras.clientType == 'Wechat' && paras.code == null) {
        //  //https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
        //  var url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
        //  url += '?appid=wxcaea259bd2844850' //公众号的唯一标识
        //  url += '&redirect_uri=' + encodeURIComponent('http://zkdebt.5ug.com') //授权后重定向的回调链接地址， 请使用 urlEncode 对链接进行处理
        //  url += '&response_type=code' //返回类型，请填写code
        //  url += '&scope=snsapi_base' //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）
        //  url += '&state=STATE'//重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
        //  url += '#wechat_redirect'//无论直接打开还是做页面302重定向时候，必须带此参数
        //  window.location.href = url
        // }

        var response = await apiService.Pay(paras)
        if (response.data.status === 1) {
          // 如果支付订单类型为商城订单，支付成功以后跳转到我的订单或者订单详情
          if (this.orderType === 'order') {
            // 跳转到指定的url，跳转url从云端返回
            onBridgeReady(response.data.result.url)
            // window.location.href = response.data.result.url
          }
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      },
      change (value, label) {
        // console.log('change:', value, label)
        this.selectPayType = value
      }
    }
  }


  /* eslint-disable */
  function onBridgeReady (json) {
    WeixinJSBridge.invoke(
      // JSON.parse(json)建议用这个方法转对象
      // 'getBrandWCPayRequest', eval('(' + json + ')'),
      function (res) {
        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
        }
      }
    )
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
