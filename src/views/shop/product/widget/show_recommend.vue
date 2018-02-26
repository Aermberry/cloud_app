<template>
<section>
   <div class="zkui-product-show-Btitle floor ">
      <b>
        <div class="icon">
          <m-icon name="zk-recommend" class="metal"></m-icon>
        </div>
      </b>推荐
    </div>
    <div class="zkui-product-show-recommend">
      <zk-product-item :pageSize=4 classIds='' tagsId='' diykey='index'></zk-product-item>
    </div>
</section>
</template>

<script>
    import { ZkProductItem } from 'widgets'
  export default {
    components: {
    ZkProductItem
    },
    props: ['productView']
  }
</script>
<style lang="less">
  @import 'product_show';
</style>
