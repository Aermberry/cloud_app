import http from 'src/service/common/http'
import local from 'src/service/common/local'
export default {
  //  微信小程序登录
  async miniProgramLogin () {
    var data = {
      jsCode: '0138SwYj0rjidn1Ub2Zj00QAYj08SwYQ',
      mobile: '17727169875'
    }
    var response = await http.get('ApiStore/Login', data)
    return response
  },
  //  债事详情
  async show (data) {
    var response = await http.getLogin('User/Debt/show', data)
    return response
  },
  async weixinLogin () {
    var code = window.localStorage.getItem('code')
    if (code === '') {
      return
    }
    var data = {
      code: code
    }
    var response = await http.get('ApiStore/WeixinPubLogin', data)
    console.log('-------------------')
    console.log(response)
    if (response.data.session.openid) {
      local.setStore('openid', response.data.session.openid)
    }
  }
}
