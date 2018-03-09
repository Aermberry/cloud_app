<template>
  <section>
    <zk-head></zk-head>
    <router-link to="test">测试压面</router-link>
    <zk-foot></zk-foot>

  </section>
</template>
<script>

  export default {
    mixins: [],
    mounted () {

    },
    data () {
      return {}
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        console.dir(toDepth)
        const fromDepth = from.path.split('/').length
        console.info('from', fromDepth)
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    methods: {

    }
  }
</script>

