<template>
  <div>
    <!-- <x-input title="用户名" v-model="aa2.MemberStr"></x-input>
    <box gap=" 3rem 1rem ">
      <x-button @click.native="ceshi" type="primary " action-type="button ">评价</x-button>
    </box> -->
    <zk-groupbuy :pageSize=4 classIds='' :pagination=6 tagsId='' diykey='index'></zk-groupbuy>
  </div>
</template>

<script>
  import { ZkGroupbuy } from 'widgets'
  import apiUser from 'src/service/api/user.api'
  export default {
    components: {
      ZkGroupbuy
    },
    mounted () {
      // this.ceshi()
    },
    data () {
      return {
        rateInfo: {
          ReviewType: 1, // 好评 1-3
          ProductScore: 2, // 商品与实物相符度 1-5
          ServiceScore: 2, // 服务态度  1-5
          Images: 'upload/2014/sss.jpg', // 评论图片
          Intro: '我来测试的好么', // 评论详情
          LogisticsScore: '2', // 快递评分 1-5
          EntityId: '8', // 订单ID
          LoginUserId: 85
        },
        aa2: {
          InsurancePolicyStr: ''
        },
        content: '初始值'
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
<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }
  #app {
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>


