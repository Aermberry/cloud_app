<template>
  <section class="zkui-user-apply">

    <zk-head title='找回密码' goBack='返回'></zk-head>
    <div>
      <group gap="1rem 0rem">

        <x-input title="用户名" required :min="2" :max="12" v-model="findPasswordInput.userName"></x-input>
        <x-input title="手机号码" required placeholder="输入与用户名对应的手机号" mask="999 9999 9999" v-model="findPasswordInput.mobile" :max="13" is-type="mobile"></x-input>
        <zk-phone-verifiy v-model="findPasswordInput.mobileVerifiyCode" :mobile="findPasswordInput.mobile"></zk-phone-verifiy>
      </group>
      <group-title slot=" title " gap="0.51rem 0rem">重新设置密码</group-title>
      <group>
        <x-input title="新密码" required type="password" :min="6" :max="16" v-model="findPasswordInput.password"></x-input>
        <x-input title="确认新密码" required type="password" :min="6" :max="16" class="border-bottom" v-model="findPasswordInput.confirmPassword"></x-input>
      </group>
      <box gap="0.2rem 0.2rem ">
        <box gap="3rem 1rem ">
          <x-button @click.native="findPassword " type="primary " action-type="button ">确定</x-button>
        </box>
      </box>
    </div>
    <!-- <zk-foot></zk-foot> -->
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Group, XInput, Box, XTextarea, XUpload, GroupTitle, XButton } from 'zkui'
  import { ZkPhoneVerifiy } from 'widgets'
  export default {
    components: {
      Group, XInput, Box, XTextarea, XButton, XUpload, GroupTitle, ZkPhoneVerifiy
    },
    data () {
      return {
        findPasswordInput: {
          password: '',
          userName: '',
          mobile: '',
          confirmPassword: '',
          mobileVerifiyCode: ''
        }
      }
    },
    methods: {
      async findPassword () {
        this.findPasswordInput.mobile = this.findPasswordInput.mobile.replace(/\s+/g, '')
        var response = await apiUser.findPassword(this.findPasswordInput)
        if (response.data.status === 1) {
          this.messageSuccess('您的密码已重置成功，请妥善保管')
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>
<style scoped  lang="less">
  .zkui-user-apply {
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
  }
</style>

