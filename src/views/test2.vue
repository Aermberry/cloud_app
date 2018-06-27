<template>
  <section class="zkui-login">
    <zk-head title='登录' goBack='首页'></zk-head>
    <cell title="用户名/手机/邮箱登录"></cell>
    <div class="weui-footer">
      <p class="weui-footer__links">
        <a href="/user/findpassword">找回密码</a>
        <a href="/user/reg">会员注册</a>
      </p>
    </div>

  </section>
</template>

<script>
  import { Group, XInput, Box, XButton, Cell } from 'zkui'
  import apiService from 'src/service/api/common.api'
  export default {
    components: {
      Group,
      XInput,
      Box,
      XButton,
      Cell
    },
    data () {
      return {
      }
    },
    computed: {
    },
    mounted () {
      this.ApiGet()
    },
    methods: {
      async  ApiGet () {
        let params = {

        }
        var repsonse = await apiService.GetApi(params)
        console.log(repsonse.data)
      }
    }
  }

</script>
<style lang="less">
  .zkui-login {
    .weui-cells {
      margin-top: 0;
    }
    .weui-cell {
      .vux-label {
        font-weight: @font-weight-bold;
        font-size: @h4-font-size;
        color: @brand;
      }
    }
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
    .weui-msg__extra-area {
      width: 100%;
      .weui-footer {
        margin: 0 auto;
        .weui-footer__links {
          margin: 15 * @rem 10 * @rem 0 0;
          text-align: right;
        }
      }
    }
  }
</style>
