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
  import api from 'src/service/api/apistore.api'
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
        // 微信使用code登录，获取openId
        if (openId === undefined || openId === null) {
          var data = {
            jsCode: '021weWEm1DipDi0XvhIm1OqSEm1weWE9'
          }
          api.weixinLogin(data).then(response => {
            console.info('请求数据result', response)
            if (response.data.status === 1) {
              openId = response.data.result.session.openid
              console.info('openId获取成功', openId)
              if (openId !== undefined && openId.length > 12) {
                window.localStorage.setItem('wechat_openId', openId)
              }
            } else {
              console.info('失败', response)
              alert(response.data.message)
            }
          })
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


