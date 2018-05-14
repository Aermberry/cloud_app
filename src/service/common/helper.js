// 常用帮助函数
'use strict'
import store from 'src/store/index'
import local from 'src/service/common/local'
import api from 'src/service/api/apistore.api'
// import weui from 'weui.js'
export default {
  // 操作成功提示函数
  alertSucess (data) {
    // weui.toast(data, 3000)
    //  alert(data)
  },
  // 操作失败提示函数
  alertError (data) {
    //  weui.toast(data, 3000)
    //  alert(data)
  },
  // 判断用户是否登录，如果没有登陆则跳转到登录页面，或者不执行操作
  checkLogin (isPush = false) {
    var loginUser = store.state.userStore.loginUser
    if (loginUser === null) {
      if (isPush === true) {
        // alert('请先登录')
        // weui.toast('请先登录', 3000)
        location.href = '/user/login'
      }
      return false
    }
    return true
  },
  // 微信登录
  WechatLogin () {
    var u = navigator.userAgent
    if (u.indexOf('MicroMessenger') > -1 || u.indexOf('micromessenger') > -1) {
      try {
        console.info('当前访问微信浏览器')
        // 微信浏览器
        var localCode = local.getStore('Wechat_code') // 微信返回的Code
        console.info('当前Code', localCode)
        if (localCode === undefined || localCode === '') {
          console.info('获取Code')
          // var url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
          // url += '?appid=wx3845717402bcb006'
          // url +=
          //   '&redirect_uri=' + encodeURIComponent('http://www.yiqipingou.com/')
          // url += '&response_type=code'
          // url += '&scope=snsapi_base'
          // url += '&state=STATE&connect_redirect=1'
          // url += '#wechat_redirect'
          // window.location.href = url
          // 获取Url中的Code
          var querys = window.location.search
          var num = querys.indexOf('?')
          var str = querys.substr(num + 1)
          var arr = str.split('&')
          for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf('=')
            if (num > 0) {
              if (arr[i].substring(0, num) === 'code') {
                var code = arr[i].substr(num + 1)
                console.info('微信Code', code)
                local.setStore('Wechat_code', code)
                break
              }
            }
          }
        }

        localCode = local.getStore('Wechat_code') // 重新获取code
        var localOpenId = local.getStore('Wechat_openId') // openId
        // 微信使用code登录，获取openId
        if (
          localOpenId === undefined ||
          localOpenId === '' ||
          localOpenId === 'undefined'
        ) {
          var data = {
            code: localCode
          }
          var response = api.weixinLogin(data)
          console.log('返回结果', response)
          if (response.data.status === 1) {
            var openId = response.data.result.session.openid
            console.info('openId获取成功', openId)
            if (openId !== undefined) {
              local.setStore('Wechat_openId', openId)
            }
          } else {
            console.info('失败', response)
          }
        }
      } catch (err) {
        console.warn(err)
      }
    }
  }
}
