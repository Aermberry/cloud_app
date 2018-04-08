<template>
  <div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    mounted () {
      // 云债通八图暂用这页面提示
      this.$vux.toast.show('支付成功')
      var salf = this
      setTimeout(function () {
        salf.$router.push(
          { path: '/order/list' }
        )
      }, 2000)
    },
    methods: {
    },
    data () {
      return {

      }
    },
    watch: {
    }
  }
</script>
<style lang="less">

</style>
