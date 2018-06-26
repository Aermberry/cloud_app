<template>
<<<<<<< HEAD
  <section class="zkui-login">
    <zk-head title='登录' goBack='首页'></zk-head>
    <cell title="用户名/手机/邮箱登录"></cell>
    <group gap="5rem 0.2rem" id="form">
      <x-input title="帐号" ref="user_username" required placeholder="用户名/手机/邮箱登录" :min="2" :max="20" v-model="user.username"></x-input>
      <x-input title="密码" required type="password" :min="6" :max="16" v-model="password1" class="border-bottom"></x-input>
    </group>

    <box gap=" 3rem 1rem">
      <x-button @click.native="login" type="primary" action-type="button">会员登录</x-button>
    </box>
    <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="/user/findpassword">找回密码</a>
          <a href="/user/reg">会员注册</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import { Group, XInput, Box, XButton, Cell } from 'zkui'
  import api from 'src/untils/api'
  import { USER_LOGIN_POST } from 'src/untils/apiUrl'
=======
  <div>

  </div>
</template>

<script>
  import apiService from 'src/service/api/product.api'
  import { } from 'zkui'
>>>>>>> 4f07c812ba1b02dab2cfe0a6e30fa200a51aa7e1
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
<<<<<<< HEAD
        password1: '',
        user: {
          username: '',
          password: '',
          openId: ''
        }
=======
        imageUrl: '',
        actionUrl: '',
        imageName: ''
>>>>>>> 4f07c812ba1b02dab2cfe0a6e30fa200a51aa7e1
      }
    },
    computed: {
      ...mapActions({
        UserLogin: 'UserLogin'
      })
    },
    mounted () {
      this.ceshi()
    },
    methods: {
<<<<<<< HEAD
      async  login () {
        this.user.password = this.password1
        this.user.openId = window.localStorage.getItem('wechat_openId')
        var response = await api.post(USER_LOGIN_POST, this.user)
        this.$vux.toast.success('登录成功')
        this.$store.dispatch('UserLogin', response.data.result)
        var openId = response.data.result.openId
        if (helper.length(openId) >= 12) {
          window.localStorage.setItem('wechat_openId', openId)
          window.localStorage.setItem('wechat_autoLoginByOpenId', true)
        }
        window.location = '/user/index'
=======
      async ceshi () {
        let params = {
          PageSize: 20,
          PageIndex: 1
        }
        let response = await apiService.groupBuylist(params)
        console.log('response', response)
>>>>>>> 4f07c812ba1b02dab2cfe0a6e30fa200a51aa7e1
      }
    }
  }
</script>

<style   lang="less">
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
