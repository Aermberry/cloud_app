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
  import local from 'src/service/common/local'
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
      async ceshi () {
        this.clientType = this.ClientType()
        this.code = local.getStore('Wechat_code')
        this.openId = local.getStore('Wechat_openId')
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


