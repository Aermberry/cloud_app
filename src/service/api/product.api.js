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
    var response = http.get('/Diy/SearchKeyWord', data)
    return response
  },
  //  商品收藏
  favorite (data) {
    var response = http.getLogin('/product/favoriteProduct', data)
    return response
  },
  //  足迹
  footprint (data) {
    var response = http.getLogin('/product/FootprintProduct', data)
    return response
  },
  // 拼团
  groupBuyRecord (data) {
    var response = http.getLogin('/GroupBuy/ProductRecord', data)
    return response
  }
}
