<template>
  <section>
    <div class="zk-product-recommend-top"></div>
    <divider class="zk-product-recommend">推荐商品</divider>
    <zk-product-item :pageSize=4 classIds='' :recommend="sid" :pagination=6 diykey='index'></zk-product-item>

  </section>
</template>

<script>
  import { ZkProductItem } from 'widgets'
  import { Divider } from 'zkui'
  export default {
    components: {
      ZkProductItem, Divider
    },
    data () {
      return {
        sid: ''
      }
    },
    props: ['productView'],
    mounted () {
      this.sid = this.$route.params.id
    }
  }
</script>
<style scoped  lang="less">
  @import 'product_show';
  .zk-product-recommend {
    font-weight: @font-weight-bold;
    color: @black;
  }
  .zk-product-recommend-top {
    height: 5*@rem;
    background-color: #efefef;
  }
</style>
