<template>
  <section class="zkui-user-from">
    <div class="qrcode-box">
      <div v-html='data.showContent' v-if="data.isRedirect===false "></div>
    </div>
  </section>
</template>

<script>
  import userService from 'src/service/api/common.api'
  import { XButton } from 'zkui'
  import local from 'src/service/common/local'
  export default {
    components: {
      XButton
    },
    data () {
      return {
        data: ''
      }
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        console.info(this.$route.query.userName)
        local.setStore('qrcode_username', this.$route.query.userName)
        var respone2 = await userService.GetConfigValue('QrCodeConfig')
        this.data = respone2.data.result
        console.log(this.data.isRedirect)
        if (this.data.isRedirect === true) {
          window.location.href = this.data.redirectUrl
        }
      }
    }
  }
</script>
<style scoped  lang="less">
  .zkui-user-from {
    .qrcode-box {
      width: 100%;
      height: 100vh;
      img {
        width: 100%;
        height: 99%;
      }
    }
  }
</style>

