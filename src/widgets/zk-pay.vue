<template>
  <popup v-model="showPupop" is-transparent class="zk-pay">
    <div class="pay-pupop">
      <div class="vux-header">
        <div class="vux-header-left">
          <x-button type="primary" @click.native="showPupop=false" class="pay-close"></x-button>
        </div>
        <h1 class="vux-header-title">确认付款</h1>
        <!---->
        <div class="vux-header-right">
          <!---->
        </div>
      </div>
      <p class="count">
        ￥
        <span>{{amount}}</span>
      </p>
      <group class="pay-index">
        <radio :options="radio001">
          <template slot-scope="props" slot="each-item">
            <p>
              <m-icon name='zk-home' class="vux-radio-icon"></m-icon> {{ props.label }}
            </p>
          </template>
        </radio>
      </group>
      <div class="pay-buttom">
        <x-button type="primary">立即付款</x-button>
      </div>
    </div>
    <!-- <zk-password showPay="false"></zk-password> -->
  </popup>
</template>

<script>
  import { Popup, Group, Cell, XButton, TransferDom, Radio, MIcon } from 'zkui'
  import apiService from 'src/service/api/pay.api'
  // import { ZkPassword } from 'widgets'
  import store from 'src/store/index'
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
    props: ['show'],
    data () {
      return {
        showPupop: true, // 显示支付主窗体
        payShow: false, // 选择支付方式
        radio001: ['余额支付', '支付宝支付', '微信支付', '网银支付', '京东支付', 'PayPal支付'],
        amount: 0.0 // 支付金额

      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$on('childMethod', function () {
          this.showPay = true
        })
      })
      this.init()
    },
    methods: {
      async init () {
        this.userName = store.state.userStore.loginUser.userName
        let paras = {
          clientType: 'wapH5' // this.ClientType // 在gloal中获取支付方式列表
        }
        var response = await apiService.GetList(paras) // 获取支付方式列表
        console.dir(response)
        if (response.data.status === 1) {
          this.$vux.toast.success('请求成功')
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>

<style lang='less'>
  @import '../assets/css/zkui/theme';
  .zk-pay {
    height: 60vh;
    .pay-pupop {
      background-color: #fff;
      height: 100%;
      margin: 0 auto;
      .vux-popup-dialog {
        overflow-y: hidden !important;
      }
      .count {
        text-align: center;
        padding-top: 15px;
        span {
          font-size: @h3-font-size;
          font-weight: bold;
          color: @brand;
        }
      }
    }
    .pay-index {
      margin-top: 1rem;
    }
    .pay-close {
      display: flex;
      padding-top: 0.5rem;
      justify-content: center;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      color: #999999;
      font-size: 1rem;
      width: 100%;
      height: auto;
      overflow-y: auto;
      min-height: 40px;
      z-index: 5;
      background-color: white;
    }
  }
</style>
