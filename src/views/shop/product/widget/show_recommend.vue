<template>
  <section>
    <divider>推荐商品</divider>
    <zk-product-item :pageSize=4 classIds='' tagsId='' diykey='index'></zk-product-item>

  </section>
</template>

<script>
  import { ZkProductItem } from 'widgets'
  import { Divider } from 'zkui'
  export default {
    components: {
      ZkProductItem, Divider
    },
    props: ['productView']
  }
</script>
<style lang="less">
  @import 'product_show';
</style>
