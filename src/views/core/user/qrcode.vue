<template>
  <section class="zkui-user-qrcode">
    <div class="qrcode-top">
      <div class="qrcode-goback" @click="goBack">
        <m-icon name="zk-goback-white"></m-icon>
      </div>
    </div>
    <!-- <zk-head title='二维码名片' goBack='会员中心'></zk-head> -->
    <div class="qrcode-box">
      <img :src="viewModel.result" alt="二维码名片">
    </div>
    <div class="qrcode-button">
      <x-button type="primary" link="/user/adduser">加入我们</x-button>
    </div>
    <!-- <zk-foot></zk-foot> -->
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import { MIcon, XButton } from 'zkui'
  export default {
    components: {
      MIcon,
      XButton
    },
    data () {
      return {
        viewModel: ''
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      goBack () {
        this.$router ? this.$router.back() : window.history.back()
      },
      async GetData () {
        var respone = await userService.QrCode()
        console.log(respone.data.result)
        this.viewModel = respone.data
      }
    }
  }
</script>
<style scoped  lang="less">
  body {
    height: 100vh;
  }
  .zkui-user-qrcode {
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
    .qrcode-box {
      width: 100%;
      height: 100vh;
      img {
        width: 100%;
        height: 99%;
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

