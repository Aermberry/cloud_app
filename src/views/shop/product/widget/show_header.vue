
<template>
  <section>
    <x-header :left-options="{backText: '' }">
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
<style lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zk-head-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9950;
  }
  .vux-button-tab-item {
    font-weight: @font-weight-normal;
  }
  .overwrite-title-demo-bak {
    margin-top: 0.15rem;
  }
</style>
