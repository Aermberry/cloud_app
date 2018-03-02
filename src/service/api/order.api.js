import http from 'src/service/common/http'

export default {
  //  根据商品信息，确认订单页面，获取商品的购买信息,包括价格，物理、等计算
  buyProduct (data) {
    var response = http.getLogin('/order/GetBuyInfo', data)
    return response
  },
  //  提交订单，购物商品
  Buy (data) {
    var response = http.postLogin('/order/buy', data)
    return response
  },
  //  我的订单
  list (data) {
    var response = http.getLogin('/order/list', data)
    return response
  },
  //  订单详情页
  show (data) {
    var response = http.getLogin('/order/show', data)
    return response
  }
}
