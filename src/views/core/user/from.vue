<template>
  <section class="zkui-user-from">
    <div class="qrcode-box">
      <img :src="data.bgPicture" alt="二维码名片">
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
        local.setStore('qrcode_username', this.$route.query.userName)
        var respone2 = await userService.GetConfigValue('QrCodeConfig')
        console.log(respone2)
        this.data = respone2.data.result
        console.log(this.data.isRedirect)
        if (this.data.isRedirect === true) {
          this.$router.push({
            name: 'from'
          })
        } else {

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

