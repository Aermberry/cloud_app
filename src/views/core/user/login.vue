<template>
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
        password1: '',
        user: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapActions({
        UserLogin: 'UserLogin'
      })
    },
    mounted () {
    },
    methods: {
      login () {
        if (this.$refs.user_username.valid) {
          this.user.password = this.password1
          console.log('1', this.password1)
          console.log(this.user.password)
          this.$store.dispatch('UserLogin', this.user)
        }
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
          margin: 15*@rem 10*@rem 0 0;
          text-align: right;
        }
      }
    }
  }
</style>
