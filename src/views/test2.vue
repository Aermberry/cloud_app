<template>
  <div>
    ClientType：
    <span>{{clientType}}</span>
  </div>
</template>

<script>
  import { ZkGroupbuy } from 'widgets'
  import apiUser from 'src/service/api/apistore.api'
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
        clientType: ''
      }
    },
    methods: {
      async ceshi () {
        console.info('当前url', this.$route.path, window.location.href)
        var localUrl = window.location.href // 当前页面url
        this.clientType = this.ClientType()
        if (this.ClientType() === 'Wechat') {
          var url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
          url += '?appid=wx3845717402bcb006'
          url += '&redirect_uri=' + encodeURIComponent(localUrl)
          url += '&response_type=code'
          url += '&scope=snsapi_base'
          url += '&state=STATE&connect_redirect=1'
          url += '#wechat_redirect'
          window.location.href = url
        }
        var code = window.localStorage.getItem('code')
        console.info('code', code)
        var data = {
          code: '061jYT8s0BAD9d1av97s0FZH8s0jYT8l'
        }
        var response = await apiUser.weixinLogin(data)
        console.log('返回结果', response)
        if (response.data.result.session.openid) {
          local.setStore('openid', response.data.result.session.openid)
        }
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


