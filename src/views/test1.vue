<template>
  <section>
    <zk-head></zk-head>
    <zk-foot></zk-foot>

  </section>
</template>
<script>
  import { XHeader, TransferDom } from 'zkui'
  export default {
    data () {
      return {
        headerTitle: '' // 头部标题
      }
    },
    components: {
      XHeader
    },
    directives: {
      TransferDom
    },
    mounted () {
      this.setTitle()
    },
    methods: {
      // 设置标题
      setTitle () {
         console.info('路由信息', this.$router)
      }
    },
    props: ['title', 'goBack']
  }
</script>
