<template>
  <div>
    <group>
      <x-button type="default" @click.native="buy= true">Cancel</x-button>
    </group>
    <div v-transfer-dom>
      <popup v-model="buy" height="460px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:450px;margin:0 auto;border-radius:5px;">
          <x-header :right-options="{showMore: true}">确认付款</x-header>
          <p class="count">￥156312115.00</p>
          <group style="margin-top:30px;">
            <cell title="支付宝账号" value="songMath"></cell>
            <cell title="付款方式" value="中国建设银行" @click.native="pay= true" is-link></cell>
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
        buy: false,
        pay: false
      }
    }
  }
</script>

<style>
  .vux-popup-dialog {
    overflow-y: hidden !important;
  }
  .count {
    font-size: 36px;
    font-weight: bond;
    text-align: center;
    padding-top: 15px;
  }
</style>
