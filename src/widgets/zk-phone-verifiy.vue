<template>
  <section>
    <div class="weui-cell weui-cell_vcode">
      <div class="weui-cell__hd">
        <label class="weui-label">验证码</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="输入六位数手机验证码">
      </div>
      <div class="weui-cell__ft">
        <button class="weui-vcode-btn" @click="sendMessage()">{{word}}</button>
      </div>
    </div>
  </section>
</template>

<script>
  /* eslint-disable */
  import apiService from 'src/service/api/common.api'
  export default {
    data () {
      return {
        word: '发送验证码',
        isOvertime: false
      }
    },
    props: {
      mobile: {
        type: String,
        default: '17727169875'
      }
    },
    methods: {
      //  Regex rg = new Regex(@"^0?(13[0-9]|15[0-9]|18[0-9]|17[0-9]|19[0-9]|16[0-9]|14[0-9])[0-9]{8}$");
      async sendMessage () {
        var repsonse = await apiService.sendPhoneVerifiyCode('17727169875')
        if (repsonse.data.status === 2) {
          this.$vux.toast.text('验证码发送成功', 'bottom')
        } else {
          this.$vux.toast.warn('验证码发送失败')
        }

        if (this.isOvertime) {
          return false
        }
        let that = this
        let time = 60
        var sendTimer = setInterval(function () {
          that.isOvertime = true
          time--
          that.word = '重新发送' + time
          if (time < 0) {
            that.isOvertime = false
            clearInterva(sendTimer)
            this.word = '获取验证码'
          }
        }, 1000)
      }
    }
  }
</script>

