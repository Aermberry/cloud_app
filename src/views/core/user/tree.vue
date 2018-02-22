<template>
  <section class="zkui-user-tree">
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
        title: '组织架构图',
        goBack: '会员中心'
      }
    }
  }
</script>
