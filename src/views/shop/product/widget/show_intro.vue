<template>
<section>
   <div class="zkui-product-show-Btitle floor ">
      <b>
        <div class="icon">
          <m-icon name="zk-particulars" class="metal"></m-icon>
        </div>
      </b>商品详情
    </div>
    <div class="zkui-product-show-images">
      <div v-html='productView.detail.mobileIntro'></div>
    </div>
</section>
</template>

<script>
  import { Group, Cell } from 'zkui'
  export default {
    components: {
      Group,
      Cell
    },
    props: ['productView']
  }
</script>
<style lang="less">
  @import 'product_show';
</style>
