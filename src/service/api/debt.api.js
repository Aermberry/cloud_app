import http from 'src/service/common/http'

export default {
  //  债事申请
  apply () {
    var response = http.post('User/Debt/apply')
    return response
  },
  // 商品详情
  show (data) {
    var response = http.get('/product/show', data)
    return response
  },
  // 商品列表
  list (data) {
    var response = http.get('/product/list', data)
    return response
  }
}
