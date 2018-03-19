<template>
  <section>
    <divider>商品详情</divider>
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

<style scoped  lang="less">
  @import 'product_show';
  .zkui-product-show-images img {
    width: 100%;
  }
</style>
