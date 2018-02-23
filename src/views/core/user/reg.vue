<template>
  <section class="zkui-user-reg">
    <!-- 头部 -->
    <zk-head title='注册' goBack='返回'></zk-head>
    <group gap="2rem 0.2rem" id="form">
      <x-input title="用户名" required :min="2" :max="12" v-model="user.username"></x-input>
      <x-input title="手机号" required placeholder="请输入您的手机号" mask="999 9999 9999" v-model="user.mobile" :max="13" is-type="mobile"></x-input>
      <zk-phone-verifiy v-model="user.mobileVerifiyCode" :mobile="user.mobile"></zk-phone-verifiy>
      <x-input title="密码" required type="password" :min="6" :max="16" v-model="user.password"></x-input>
      <x-input title="确认密码" required type="password" :min="6" :max="16" class="border-bottom" v-model="user.confirmPassword"></x-input>
      <agree v-model="user.agree">已阅读并同意
        <router-link to="/user/agreement">《服务条款》</router-link>
      </agree>

    </group>
    <box gap="3rem 1rem">
      <x-button @click.native="reg" type="primary" action-type="button">注册会员</x-button>
    </box>
    <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="/user/login">会员登录</a>
          <a href="/user/findpassword">重置密码</a>
        </p>
      </div>
    </div>

  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Group, XInput, Agree, Box, XButton } from 'zkui'
  import { ZkPhoneVerifiy } from 'widgets'
  export default {
    components: {
      Group,
      XInput,
      Agree,
      Box,
      ZkPhoneVerifiy,
      XButton
    },
    data () {
      return {
        user: {
          username: '',
          password: '',
          agree: true,
          confirmPassword: '',
          mobileVerifiyCode: ''
        }
      }
    },
    methods: {
      async reg () {
        this.user.mobile = this.user.mobile.replace(/\s+/g, '')
        var response = await apiUser.reg(this.user)
        if (response.data.status === 1) {
          this.$vux.toast.success('注册成功')
          this.$router.push({
            name: 'user_login'
          }
          )
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>
