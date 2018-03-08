export default [
  {
    path: '/order/cart',
    meta: {
      title: '购物车'
    },
    name: 'order_cart',
    component: function (resolve) {
      require(['src/views/shop/order/cart'], resolve)
    }
  },
  {
    path: '/order/buy',
    params: {
      buyInfo: '',
      selectId: ''
    },
    meta: {
      title: '确认下单',
      login: true
    },
    name: 'order_buy',
    component: function (resolve) {
      require(['src/views/shop/order/buy'], resolve)
    }
  }
]
