<template>
  <popup v-model="showPupop" is-transparent class="zk-pay" max-height="70%">
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
        <radio :options="payTypes" fill-label="Other" @on-change="change"> </radio>
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
        payId: 0, // 支付账单Id
        amount: 0.0, // 支付金额
        note: '' // 显示标题
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$on('payMethod', function (payId, amount) {
          this.payId = payId
          this.amount = amount
          this.init() //  点击以后，才请求支付
          this.showPupop = true
        })
      })
    },
    methods: {
      async init () {
        this.userName = this.LoginUser().userName
        let paras = {
          clientType: 'wapH5', // this.ClientType // 在gloal中获取支付方式列表
          amount: this.amount,
          payId: this.payId
        }
        var response = await apiService.GetList(paras) // 获取支付方式列表
        if (response.data.status === 1) {
          var pays = response.data.result.payTypeList // 所有的支付方式
          this.note = response.data.result.note
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
          clientType: 'wapH5', // this.ClientType // 在gloal中获取支付方式列表
          amount: this.amount,
          payId: this.payId
        }
        var response = await apiService.Pay(paras) // 获取支付方式列表
        if (response.data.status === 1) {
          var pays = response.data.result // 所有的支付方式
          pays.forEach(element => {
            var pay = {}
            pay['key'] = element.payType
            pay['value'] = element.name
            pay['icon'] = element.icon
            pay['desc'] = element.intro
            this.payTypes.push(pay)
          })
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      },
      change (value, label) {
        console.log('change:', value, label)
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
        padding-top: 1rem;
        background-color: @light;
        min-height: 5rem;
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
      padding-top: 3rem;
      margin-bottom: 3rem;
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
      position: fixed;
      width: 100%;
      height: auto;
      overflow-y: auto;
      min-height: 2.5rem;
      z-index: 5;
    }
    .base {
      margin-top: 8rem;
      position: fixed;
      width: 100%;
      height: 2.5rem;
      overflow-y: auto;
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
