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
  },
  // 我的库存
  async userStock (data) {
    var response = await http.getLogin('/UserStock/GetList', data)
    return response
  },
  // 根据订单，查询订单发货商品以及发货商品数量
  async offlineDeliveryProduct (data) {
    var response = await http.getLogin('/UserStock/GetList', data)
    return response
  }
}
