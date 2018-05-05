<template>
  <div>
    <x-input title="用户名" v-model="aa2.MemberStr"></x-input>
    <box gap=" 3rem 1rem ">
      <x-button @click.native="ceshi" type="primary " action-type="button ">评价</x-button>
    </box>
  </div>
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
    mounted () {
      // this.ceshi()
    },
    data () {
      return {
        rateInfo: {
          ReviewType: 1,
          ProductScore: 2,
          ServiceScore: 2,
          Images: 'upload/2014/sss.jpg',
          Intro: '我来测试的好么',
          LogisticsScore: '2',
          EntityId: '8',
          LoginUserId: 85
        },
        aa2: {
          InsurancePolicyStr: ''
        }
      }
    },
    methods: {
      // 评价
      async ceshi () {
        console.log(this.aa2)
        var response = await apiUser.Rate(this.rateInfo)
        console.log(response)
      }
    },
    watch: {
    }
  }
</script>

