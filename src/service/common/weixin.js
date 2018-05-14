import api from 'src/service/api/apistore.api'
// import weui from 'weui.js'
export default {
  // 微信登录
  WechatLogin () {
    var u = navigator.userAgent
    if (u.indexOf('MicroMessenger') > -1 || u.indexOf('micromessenger') > -1) {
      try {
        console.info('当前访问微信浏览器')
        // 开始处理code
        var code = window.localStorage.getItem('wechat_code') // 微信返回的Code
        console.info('当前Code', code)
        if (code === undefined || code === null) {
          console.info('获取Code')
          var url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
          url += '?appid=wx3845717402bcb006'
          url +=
            '&redirect_uri=' + encodeURIComponent('http://www.yiqipingou.com/')
          url += '&response_type=code'
          url += '&scope=snsapi_base'
          url += '&state=STATE&connect_redirect=1'
          url += '#wechat_redirect'
          window.location.href = url
          // 获取Url中的Code,长度不够是不保存
          code = this.getQueryString('code')
          if (code !== undefined && code !== 12) {
            window.localStorage.setItem('wechat_code', code)
          }
          console.info('微信Code', code)
        }

        //
        if (code === undefined || code === null) {
          alert('code获取失败，无法获取openId')
        }
        // 开始处理openId
        var openId = window.localStorage.getItem('wechat_openId')
        // 微信使用code登录，获取openId
        if (openId === undefined || openId === null) {
          var data = {
            jsCode: code
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
      } catch (err) {
        console.warn(err)
      }
    }
  },

  getQueryString (name) {
    var querys = window.location.search
    // querys = 'http://www.yiqipingou.com/?code=081Du20u0OUokb1OjB0u0XCr0u0Du20I&state=STATE'
    var num = querys.indexOf('?')
    var str = querys.substr(num + 1)
    var arr = str.split('&')
    for (var i = 0; i < arr.length; i++) {
      num = arr[i].indexOf('=')
      if (num > 0) {
        if (arr[i].substring(0, num) === name) {
          var code = arr[i].substr(num + 1)
          return code
        }
      }
    }
  },
  weixinPay (data) {
    var vm = this
    if (typeof WeixinJSBridge === 'undefined') {
      // 微信浏览器内置对象。参考微信官方文档
      if (document.addEventListener) {
        document.addEventListener(
          'WeixinJSBridgeReady',
          vm.onBridgeReady(data),
          false
        )
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data))
        document.attachEvent('onWeixinJSBridgeReady', vm.onBridgeReady(data))
      }
    } else {
      vm.onBridgeReady(data)
    }
  },
  /**
   * @method 支付费用方法
   * @param data:后台返回的支付对象,(详情微信公众号支付API中H5提交支付);
   */
  onBridgeReady (data) {
    var vm = this
    // eslint-disable-next-line
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest',
      {
        appId: data.appId, // 公众号名称，由商户传入
        timeStamp: data.timeStamp, // 时间戳，自1970年以来的秒数
        nonceStr: data.nonceStr, // 随机串
        package: data.package,
        signType: data.signType, // 微信签名方式：
        paySign: data.paySign // 微信签名
      },
      function (res) {
        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        if (res.err_msg === 'get_brand_wcpay_request：ok') {
          vm.$router.push('/reservedBerth')
        } else {
          alert('支付失败,请跳转页面' + res.err_msg)
        }
      }
    )
  }
}
