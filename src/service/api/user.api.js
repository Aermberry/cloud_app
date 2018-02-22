import http from 'src/service/common/http'
// import helper from 'src/service/common/helper'
import local from 'src/service/common/local'
import { md5 } from 'zkui' // md5 函数

export default {
  //  用户登录
  async login (data) {
    var param = data
    param.password = md5(param.password)
    var response = await http.post('/user/login', param)
    data.password = ''
    return response
  },

  //  获取当前登录用户
  loginUser () {
    var store = local.getStore('user')
    return store
  },
  //  获取当个用户
  async getSingUser (userId) {
    var response = await http.get('/user/getSingUser', userId)
    return response
  },

  //  用户退出
  async logout (data) {
    var response = await http.post('/user/logout', data)
    return response
  },

  //  用户注册
  async reg (data) {
    var response = await http.post('/user/reg', data)
    return response
  },
  // 会员资料更新
  async update (data) {
    var response = await http.putLogin('/user/update', data)
    return response
  },
  // 修改密码
  async changePassword (data) {
    var response = await http.putLogin('/user/changePassword', data)
    return response
  },
  // 修改密码
  async findPassword (data) {
    var response = await http.put('/user/findPassword', data)
    return response
  },
  //  获取用户列表
  async userList (data) {
    var response = await http.get('/user/list', data)
    return response
  },
  //  会员明细
  view (data) {
    var response = http.getLogin('/user/view', data)
    return response
  }
}
