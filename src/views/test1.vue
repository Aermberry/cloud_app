<template>
  <div>
    <x-input title="用户名" v-model="aa2.MemberStr"></x-input>
    <box gap=" 3rem 1rem ">
      <x-button @click.native="ceshi" type="primary" action-type="button ">数据传输数据传输数据传输</x-button>
    </box>
  </div>
</template>
<script>
  import apiUser from 'src/service/api/user.api'
  import { Group, XInput, Agree, Box, XButton } from 'zkui'
  import { ZkPhoneVerifiy } from 'widgets'
  import { SSL_OP_NO_TLSv1_1 } from 'constants';
  export default {
    components: {
      Group,
      XInput,
      Agree,
      Box,
      ZkPhoneVerifiy,
      XButton
    },
    mounted () {
      // // 云债通八图暂用这页面提示
      // this.$vux.toast.show('敬请期待')
      // setTimeout(function () {
      //   this.$router ? this.$router.back() : window.history.back()
      // }, 2000)
      // this.ceshi()
    },
    data () {
      return {
        user: {
          ReviewType: '1',
          ProductScore: '2',
          ServiceScore: '2',
          Images: 'upload/2014/sss.jpg',
          Intro: '我来测试的好么',
          LogisticsScore: '2'
        },
        aa2: {
          InsurancePolicyStr: ''
        }
      }
    },
    methods: {
      async ceshi () {
        // var response = await apiService.Member(this.user)
        var response = await apiUser.Rate(this.user)
        console.log(response)
      }
    },
    watch: {
    }
  }
</script>
<style lang="less">

</style>
