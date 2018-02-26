import http from 'src/service/common/http'

export default {
  //  微信小程序登录
  async miniProgramLogin () {
    var data = {
      jsCode: 'user_code',
      mobile: '17727169875'
    }
    var response = await http.get('ApiStore/Login', data)
    return response
  },
  //  债事详情
  async show (data) {
    var response = await http.getLogin('User/Debt/show', data)
    return response
  }
}
