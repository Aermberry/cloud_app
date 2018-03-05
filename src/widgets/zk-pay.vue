<template>
  <div>
    <div v-transfer-dom>
      <popup v-model="showPupop" height="460px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:450px;margin:0 auto;border-radius:5px;">
          <x-header>收银台</x-header>
          <p class="count">
            <span>{{amount}}</span>元</p>
          <group style="margin-top:30px;">
            <cell title="支付宝账号" value="songMath"></cell>
            <cell title="付款方式" value="中国建设银行" @click.native="payShow= true" is-link></cell>
          </group>
          <div style="padding:190px 15px;">
            <x-button type="primary">立即付款</x-button>
          </div>
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="pay" height="460px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:450px;margin:0 auto;border-radius:5px;">
          <x-header :right-options="{showMore: true}">选择付款方式</x-header>
          <group>
            <cell v-for="i in 20" :key="i" :title="i"></cell>
          </group>
        </div>
      </popup>
    </div>

  </div>
</template>

<script>
  import { Popup, Group, Cell, XButton, TransferDom, XHeader } from 'zkui'
  import store from 'src/store/index'
  export default {
    components: {
      Popup,
      Group,
      Cell,
      XButton,
      TransferDom,
      XHeader
    },
    directives: {
      TransferDom
    },
    props: ['show'],
    data () {
      return {
        showPupop: true, // 显示支付主窗体
        payShow: false, // 选择支付方式
        userName: '', // 会员名
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
      init () {
        this.userName = store.state.userStore.loginUser.userName
      }
    }
  }
</script>

<style lang='less'>
  @import '../assets/css/zkui/theme';
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
</style>
