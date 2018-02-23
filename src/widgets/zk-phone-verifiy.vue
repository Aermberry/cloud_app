<template>
  <section>
    <div class="weui-cell weui-cell_vcode">
      <div class="weui-cell__hd">
        <label class="weui-label">验证码</label>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="number" required maxlength="6" minlength="6" v-model="currentValue" placeholder="输入六位数手机验证码">
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
        isOvertime: false,
        currentValue: ''
      }
    },
    props: {
      mobile: {
        type: String,
        default: ''
      }
    },
    created () {
      this.currentValue = this.value
    },
    watch: {
      currentValue (newVal) {
        if (this.max && newVal && newVal.length > this.max) {
          this.currentValue = newVal.slice(0, this.max)
        }
        this.$emit('input', this.currentValue)
        this.$emit('on-change', this.currentValue)
      }
    },
    methods: {
      async sendMessage () {
        this.mobile = this.mobile.replace(/\s+/g, '')
        console.dir(this.mobile)
        var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

        if (!myreg.test(this.mobile)) {
          this.$vux.toast.warn('手机号不正确')
        } else {
          var repsonse = await apiService.sendmobileVerifiyCode(this.mobile)
          if (repsonse.data.status === 1) {
            this.$vux.toast.text('验证码发送成功', 'bottom')
          } else {
            this.$vux.toast.warn('发送失败' + repsonse.data.message)
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
  }
</script>

