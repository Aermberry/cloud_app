<template>
  <section class="zkui-user-account-bankcard">

    <zk-head :title='title' :goBack='goBack'></zk-head>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {
        title: '我的银行卡',
        goBack: '我的钱包'
      }
    }
  }
</script>

