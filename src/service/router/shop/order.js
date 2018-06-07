import equipment from 'src/service/common/equipment'
export default [{
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
      isFromCart: false,
      selectId: ''
    },
    meta: {
      title: '确认下单',
      login: true
    },
    name: 'order_buy',
    component: function (resolve) {
      require(['src/' + equipment.equipment + '/shop/order/buy'], resolve)
    }
  },
  {
    path: '/order/list',
    meta: {
      title: '我的订单',
      login: true
    },
    name: 'order_list',
    component: function (resolve) {
      require(['src/views/shop/order/list'], resolve)
    }
  },
  {
    path: '/order/show',
    meta: {
      title: '订单详情',
      login: true
    },
    params: {
      showId: ''
    },
    name: 'order_show',
    component: function (resolve) {
      require(['src/views/shop/order/show'], resolve)
    }
  }, {
    path: '/order/evaluate',
    meta: {
      title: '发表评价',
      login: true
    },
    name: 'order_evaluate',
    component: function (resolve) {
      require(['src/views/shop/order/evaluate'], resolve)
    }
  }, {
    path: '/order/goods',
    meta: {
      title: '订货下单',
      login: true
    },
    name: 'order_goods',
    component: function (resolve) {
      require(['src/views/shop/order/goods'], resolve)
    }
  }, {
    path: '/order/UserStock',
    meta: {
      title: '我的库存',
      login: true
    },
    name: 'order_UserStock',
    component: function (resolve) {
      require(['src/views/shop/order/UserStock'], resolve)
    }
  }
]
