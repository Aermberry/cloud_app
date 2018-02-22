<template>
  <section class="zkui-user-buyeraddress-index">
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
        title: '收货地址',
        goBack: '会员中心'
      }
    }
  }
</script>
