<template>
  <section class="zkui-user-fenrun">
    <!-- 头部 -->
    <zk-head :title='title' :goBack='goBack'></zk-head>
    <zk-foot></zk-foot>
  </section>
</template>

<script>

export default {
  data () {
    return {
      title: '债事详情',
      goBack: '返回',
      headlines: []
    }
  },

  mounted () {

  }

}
</script>
