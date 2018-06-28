<template>
  <section class="zkui-user-adduser">

    <zk-head title='注册' goBack='返回'></zk-head>
    <group title="推荐人信息">
      <x-input title="推荐人" required :min="2" :max="12" v-model="user.parentUserName"></x-input>
      <x-input title="门店" required :min="2" :max="12" v-model="user.serviceCenter" v-if="userConfig.needSelectServiceCenter===true"></x-input>
    </group>

    <group gap="2rem 0.2rem" id="form" title="新用户信息">
      <x-input title="用户名" required placeholder="请输入您的用户名( 字母数字组合)" :min="2" :max="12" v-model="user.username"></x-input>
      <x-input title="手机号" required mask="999 9999 9999" v-model="user.mobile" :max="13" is-type="mobile"></x-input>
      <x-input title="姓名" required v-model="user.name" :max="13"></x-input>
      <zk-phone-verifiy v-model="user.mobileVerifiyCode" :mobile="user.mobile"></zk-phone-verifiy>
      <x-input title="密码" required type="password" :min="6" :max="16" v-model="user.password"></x-input>
      <x-input title="确认密码" required type="password" :min="6" :max="16" class="border-bottom" v-model="user.confirmPassword"></x-input>
    </group>
    <label role="checkbox" class="el-checkbox " :class="{'is-checked':checkeded}">
      <span aria-checked="mixed" class="el-checkbox__input " :class="{'is-checked':checkeded}">
        <span class="el-checkbox__inner"></span><input type="checkbox" class="el-checkbox__original" value=""></span>
      <span class="el-checkbox__label">
        已阅读并同意
        <router-link to="/user/agreement" class="">《服务条款》</router-link>
      </span>
      <div class="close-box" @click="checker"></div>
    </label>
    <box gap="3rem 1rem">
      <x-button @click.native="reg" type="primary" action-type="button" :disabled="disabledB">注册会员</x-button>
    </box>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import apiService from 'src/service/api/common.api'
  import { Group, XInput, Agree, Box, XButton, Cell } from 'zkui'
  import { ZkPhoneVerifiy } from 'widgets'
  // import local from 'src/service/common/local'
  export default {
    components: {
      Group,
      XInput,
      Agree,
      Box,
      ZkPhoneVerifiy,
      XButton,
      Cell
    },
    data () {
      return {
        disabledB: true, // 判断是否同意了条框
        user: {
          username: '',
          password: '',
          agree: true,
          name: '',
          emmail: '',
          mobile: '',
          confirmPassword: '',
          mobileVerifiyCode: '',
          serviceCenter: '', // 门店或服务中心
          parentUserName: ''
        },
        checkeded: false,
        userConfig: '' // 会员配置
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      checker () {
        this.checkeded = !this.checkeded
        if (this.checkeded === true) {
          this.disabledB = false
        } else {
          this.disabledB = true
        }
      },
      async GetData () {
        this.user.parentUserName = this.LoginUser().userName
        // 用户注册选项
        var response = await apiService.GetConfigValue('UserConfig')
        this.userConfig = response.data.result
        // 会员测试时用
        var type = this.$route.query.type
        if (type === '1') {
          this.user.username = 'B21' + Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10)
          this.user.password = '111111'
          this.user.agree = true
          this.user.name = '张三' + Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10)
          this.user.emmail = ''
          this.user.mobile = '13508794' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
          this.user.confirmPassword = '111111'
          this.user.mobileVerifiyCode = '111111'
        }
      },
      async reg () {
        this.user.mobile = this.user.mobile.replace(/\s+/g, '')
        var response = await apiUser.reg(this.user)
        console.log(response)
        if (response.data.status === 1) {
          this.messageSuccess('新会员注册成功')
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>

<style   lang="less">
  .zkui-user-adduser {
    .el-checkbox {
      padding: 0.5em 1.25rem;
      position: relative;
      .close-box {
        width: 55%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: @brand;
      border-color: @brand;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: @black;
    }
    .el-checkbox__inner:hover {
      border-color: @brand;
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


