import http from 'src/service/common/http'

export default {
  //  商品分类
  class () {
    var response = http.get('/product/class')
    return response
  },
  //  商品详情
  show (data) {
    var response = http.get('/product/show', data)
    return response
  },
  //  商品列表
  list (data) {
    var response = http.get('/product/list', data)
    return response
  },
  //  商品搜索下
  search (data) {
    var response = http.get('/Api/Diy/SearchKeyWord', data)
    return response
  }
}
