import http from 'src/service/common/http'

export default {
  //  根据商品信息，确认订单页面，获取商品的购买信息,包括价格，物理、等计算
  buyProduct (data) {
    var response = http.postLogin('/order/BuyInfo', data)
    return response
  },
  //  提交订单，购物商品
  Buy (data) {
    var response = http.postLogin('/order/buy', data)
    return response
  },
  //  提交订单，购物商品
  getPrice (data) {
    var response = http.postLogin('/order/getPrice', data)
    return response
  },
  //  我的订单
  list (data) {
    var response = http.getLogin('/order/Index', data)
    return response
  },
  //  订单详情页
  show (data) {
    var response = http.getLogin('/order/show', data)
    return response
  },
  //  订单详情页
  cancel (data) {
    var response = http.getLogin('/Order/Cancel', data)
    return response
  },
  //  确认收货
  Confirm (data) {
    var response = http.postLogin('order/Confirm', data)
    return response
  }
}
