<template>
  <div>
    ClientType：
    <span>{{clientType}}</span>
    Code:
    <span>{{code}}</span>

    OpenId:
    <span>{{openId}}</span>
  </div>
</template>

<script>
  import { ZkGroupbuy } from 'widgets'
  export default {
    components: {
      ZkGroupbuy
    },
    mounted () {
      this.ceshi()
    },
    data () {
      return {
        clientType: '',
        code: '',
        openId: ''
      }
    },
    methods: {
      ceshi () {
        this.clientType = this.ClientType()
        this.code = window.localStorage.getItem('wechat_code')
        this.openId = window.localStorage.getItem('wechat_openId')
        // 开始处理openId
        var openId = window.localStorage.getItem('wechat_openId')
        this.openId = openId
        console.info('openId', openId)
      }
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


