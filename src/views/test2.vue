<template>
  <div>
    <div>没想到把 </div>
  </div>
</template>

<script>

  export default {
    components: {

    },
    data () {
      return {

      }
    },
    created () {

    },
    mounted () {
        this.ceshi()
    },
    methods: {
 ceshi () {
        window.localStorage.removeItem('wechat_openId')
      }
    }
  }
</script>
<style lang="less">
</style>

