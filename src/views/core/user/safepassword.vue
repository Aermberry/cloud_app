<template>
  <section class="zkui-user-password">

    <zk-head title='修改安全密码' goBack='安全设置'></zk-head>
    <group gap="2rem 0.2rem" id="form">
      <cell title="初始默认密码为:222222(未进行修改情况下)"></cell>
      <x-input title="原始密码" required type="password" :min="6" :max="16" v-model="passwordInput.lastPassword"></x-input>
      <x-input title="新安全密码" required type="password" :min="6" :max="16" v-model="passwordInput.password"></x-input>
      <x-input title="确认新安全密码" required type="password" :min="6" :max="16" class="border-bottom" v-model="passwordInput.confirmPassword"></x-input>
    </group>
    <box gap="3rem 1rem">
      <x-button @click.native="reg" type="primary" action-type="button">修改安全密码</x-button>
    </box>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Group, XInput, Agree, Box, XButton, Cell } from 'zkui'
  export default {
    components: {
      Group,
      XInput,
      Agree,
      Box,
      XButton,
      Cell
    },
    data () {
      return {
        passwordInput: {
          type: '2',
          lastPassword: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      async reg () {
        var response = await apiUser.changePassword(this.passwordInput)
        if (response.data.status === 1) {
          this.messageSuccess('安全密码修改成功，请妥善保管')
        } else {
          this.$vux.toast.warn(response.data.message)
          this.passwordInput = {
            type: '1',
            lastPassword: '',
            password: '',
            confirmPassword: ''
          }
        }
      }
    }
  }
</script>
