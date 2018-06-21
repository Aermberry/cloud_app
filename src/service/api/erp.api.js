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
  //  虚拟订货商品列表
  productList (data) {
    var response = http.get('/userstock/GetProductList', data)
    return response
  }
}
