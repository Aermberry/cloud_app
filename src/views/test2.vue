<template>
  <div class="zkui-pc-productshow auto">
  </div>
</template>
<script>
  export default {
    components: {
    },
    mounted () {
      // 云债通八图暂用这页面提示
      this.$vux.toast.show('敬请期待')
      setTimeout(function () {
        this.$router ? this.$router.back() : window.history.back()
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
