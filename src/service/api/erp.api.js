/*  */
import http from 'src/service/common/http'

export default {
  //  商品分类
  class () {
    var response = http.get('/product/class')
    return response
  },
  //  线下发货
  offlineDelivery (data) {
    var response = http.get('/userstock/OfflineDelivery', data)
    return response
  },
  //  虚拟订货商品列表
  productList (data) {
    var response = http.get('/userstock/GetProductList', data)
    return response
  }
}
