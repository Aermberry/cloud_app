<template>
  <section class="zkui-user-from">
    <div class="qrcode-top">
      <div class="qrcode-goback" @click="goBack">
        <m-icon name="zk-goback-white"></m-icon>
      </div>
    </div>
    <div class="qrcode-box">
      <div v-html='data.showContent' v-if="data.isRedirect===false "></div>
    </div>
    <div class="qrcode-button">
      <x-button type="primary" link="/user/adduser">加入我们</x-button>
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
      goBack () {
        this.$router ? this.$router.back() : window.history.back()
      },
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
    .qrcode-top {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3.5rem;
      .qrcode-goback {
        margin-top: 0.4rem;
        margin-left: 0.4rem;
        width: 2.5rem;
        height: 2.5rem;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          path {
            fill: @white;
          }
        }
      }
    }
    .qrcode-button {
      width: 100%;
      height: 3rem;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 9999;
      .weui-btn {
        height: 100%;
      }
      .weui-btn_primary {
        background: @brand;
      }
    }
  }
</style>

