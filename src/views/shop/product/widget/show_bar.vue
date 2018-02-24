<template>
<section class="zkui-product-show-bar">
   <tabbar>
      <tabbar-item link="/default" class="bar-home">
        <m-icon slot="icon" name="zk-home" class="metal"></m-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item class="bar-star">
        <m-icon slot="icon" name="zk-Star" class="metal"></m-icon>
        <span slot="label">收藏</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
      <x-button slot="customer" type="default" @click.native="showSaleProperty">加入购物车</x-button>
      </tabbar-item>
      <tabbar-item >
         <x-button slot="customer" type="primary"  @click.native="showSaleProperty">立即购买</x-button>
      </tabbar-item>
    </tabbar>
</section>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton } from 'zkui'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    MIcon,
    XButton
  },
  props: ['productView'],
  data () {
    return {
      showParameter: false,
      showSale: false
    }
  },
   methods: {
     showSaleProperty () {
       this.$emit('changeSaleState', 'true')
      }
    }
}
</script>

<style lang="less">
 @import '../../../../assets/css/zkui/theme';
@import '../../../../assets/css/zkui/mixin';
.zkui-product-show-bar {
  .weui-tabbar{
    position: fixed;
    z-index: 500;
    bottom: 0;
    width: 100%;
    // height: 3.33333333rem;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid rgba(229, 229, 229, 0.4);
    .bar-home{
      width:15%;
    }
  }
}
</style>
