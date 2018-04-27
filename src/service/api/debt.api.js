import http from 'src/service/common/http'

export default {
  //  债事申请
  async apply (data) {
    var response = await http.postLogin('User/Debt/apply', data)
    return response
  },
  //  债事详情
  async show (data) {
    var response = await http.getLogin('User/Debt/show', data)
    return response
  },
  //  债事列表
  async list (data) {
    var response = await http.getLogin('User/Debt/List', data)
    return response
  },
  //  解债方案选择
  async Solution (data) {
    var response = await http.postLogin('User/Debt/Solution', data)
    return response
  },
  // 实名认证
  async Identity (data) {
    var response = await http.postLogin('/UserDetail/Identity', data)
    return response
  },
  // 获取实名认证信息
  async getIdentity (data) {
    var response = await http.getLogin('/UserDetail/GetIdentity', data)
    return response
  },
  // 获取是否实名认证
  async Identitys (data) {
    var response = await http.getLogin('/UserDetail/StateJudgment', data)
    return response
  },
  async Member (data) {
    var response = await http.post('/DataSyn/Member', data)
    return response
  },
  async Order (data) {
    var response = await http.post('/DataSyn/Order', data)
    return response
  },
  async MemberCount (data) {
    var response = await http.post('/DataSyn/MemberCount', data)
    return response
  },
  async OrderCount (data) {
    var response = await http.post('/DataSyn/OrderCount', data)
    return response
  }
}
