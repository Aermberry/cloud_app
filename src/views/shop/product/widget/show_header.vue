
<template>
  <section>
    <x-header :left-options="{backText: '' }" :right-options="{showMore: true}" @on-click-more="showMenus = true">
      <div class="overwrite-title-demo-bak" slot="overwrite-title">
        <button-tab>
          <button-tab-item selected>商品</button-tab-item>
          <button-tab-item>详情</button-tab-item>
          <button-tab-item>推荐</button-tab-item>
        </button-tab>
      </div>
    </x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </section>
</template>
<script>
  import { XHeader, TransferDom, ButtonTab, ButtonTabItem, Actionsheet } from 'zkui'
  export default {
    components: {
      XHeader, ButtonTab, ButtonTabItem, Actionsheet
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    }
  }
</script>
<style>
  .zk-head-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9950;
  }
</style>
