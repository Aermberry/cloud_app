<template>
  <div v-transfer-dom>
    <popup v-model="paypassword" height="460px" class="noscroll" is-transparent>
      <div class="pwd-box">
        <x-header :right-options="{showMore: true}">请输入支付密码</x-header>
        <div class="fake-box-outside">
          <div class="fake-box">
            <input type="password" readonly="" v-on:blur="changeCount(value)">
            <input type="password" readonly="">
            <input type="password" readonly="">
            <input type="password" readonly="">
            <input type="password" readonly="">
            <input type="password" readonly="">
          </div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
  import { Popup, Group, Cell, XButton, TransferDom, XHeader } from 'zkui'
  export default {
    name: 'zk-password',
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
    data () {
      return {
        paypassword: false
      }
    },
    props: ['showPay'],
    methods: {
      changeCount: function (value) {
        alert(value)
      }
    }
  }
</script>

<style>
  .count {
    font-size: 36px;
    font-weight: bond;
    text-align: center;
    padding-top: 15px;
  }
  .pwd-box {
    width: 95%;

    position: relative;
    border-radius: 3px;
    background-color: #fff;
    height: 450px;
    margin: 0 auto;
    border-radius: 5px;
  }
  .pwd-box input[type='tel'] {
    width: 99%;
    height: 45px;
    color: transparent;

    border: none;
    font-size: 18px;

    z-index: 555;
    letter-spacing: 35px;
  }
  .fake-box-outside {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .fake-box {
    border: 1px solid #9f9fa0;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 89%;
  }
  .fake-box input {
    width: 50px;
    height: 48px;
    border: none;
    border-right: 1px solid #e5e5e5;
    text-align: center;
    font-size: 30px;
  }
  .fake-box input:nth-last-child(1) {
    border: none;
  }
</style>
