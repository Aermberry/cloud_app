<template>
  <div>
    <!-- <vue-preview :slides="slide1" @close="handleClose"></vue-preview> -->
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
    data () {
      return {
      }
    },
    methods: {
    },
    watch: {
    }
  }
</script>
<style lang="less">

</style>
