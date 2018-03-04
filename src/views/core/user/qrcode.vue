<template>
  <section class="zkui-user-qrcode">

    <zk-head title='二维码名片' goBack='会员中心'></zk-head>
    <div class="qrcode-box">
      <img :src="viewModel.result" alt="二维码名片">
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  export default {
    data () {
      return {
        viewModel: ''
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var respone = await userService.QrCode()
        console.log(respone.data.result)
        this.viewModel = respone.data
      }
    }
  }
</script>
<style lang="less">
  body {
    height: 100vh;
  }
  .qrcode-box {
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

