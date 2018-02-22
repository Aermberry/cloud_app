<template>
  <section class="zkui-user-adduser">
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
        title: '注册会员',
        goBack: '会员中心'
      }
    }
  }
</script>
