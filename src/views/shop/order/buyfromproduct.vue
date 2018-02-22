<template>
  <section class="zkui-order-buyfromproduct">
    <!-- 头部 -->
    <zk-head :title='title' :goBack='goBack'></zk-head>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {
        title: '提交订单',
        goBack: '商品详情'
      }
    }
  }
</script>
