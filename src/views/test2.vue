<template>
  <div>
    <group>
      <x-button type="default" @click.native="show7= true">Cancel</x-button>
    </group>
    <div v-transfer-dom>
      <popup v-model="show7" height="460px" class="noscroll" is-transparent>
        <div style="width: 95%;background-color:#fff;height:450px;margin:0 auto;border-radius:5px;">
          <x-header :right-options="{showMore: true}">确认付款</x-header>
          <p class="count">￥156312115.00</p>
          <group style="margin-top:30px;">
            <cell title="支付宝账号" value="songMath"></cell>
            <cell title="付款方式" value="中国建设银行" @click.native="show8= true" is-link></cell>
          </group>
          <div style="padding:190px 15px;">
            <x-button type="primary" @click.native="show9= true">立即付款</x-button>
          </div>
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show8" height="460px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:450px;margin:0 auto;border-radius:5px;">
          <x-header :right-options="{showMore: true}">选择付款方式</x-header>
          <group>
            <cell v-for="i in 20" :key="i" :title="i"></cell>
          </group>
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show9" height="460px" class="noscroll" is-transparent>
        <div class="pwd-box">
          <x-header :right-options="{showMore: true}">请输入支付密码</x-header>
          <div class="fake-box-outside">
            <div class="fake-box">
              <input type="password" readonly="">
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
  </div>
</template>

<script>
  import { Popup, Group, Cell, XButton, TransferDom, XHeader } from 'zkui'
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
    data () {
      return {
        show7: false,
        show8: false,
        show9: false
      }
    }
  }
</script>

<style>
  .noscroll {
    overflow-y: hidden !important;
  }
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
    over-flow: hidden;
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
