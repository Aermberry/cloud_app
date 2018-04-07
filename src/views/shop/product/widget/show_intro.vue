<template>
  <section class="zkui-product-show-intro">
    <divider class="zkui-product-particulars">商品详情</divider>
    <div class="zkui-product-show-images">
      <div v-html='productView.detail.mobileIntro'></div>
    </div>
  </section>
</template>
<script>
  import { Group, Cell, Divider } from 'zkui'
  export default {
    components: {
      Group,
      Cell,
      Divider
    },
    props: ['productView']
  }
</script>


<style   lang="less">
  @import 'product_show';
  .zkui-product-show-intro {
    .zkui-product-particulars {
      font-weight: @font-weight-bold;
      color: @black;
    }
    .zkui-product-show-images img {
      width: 100%;
    }
  }
</style>
