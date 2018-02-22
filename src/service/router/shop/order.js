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
    path: '/user/favorite/index',
    meta: {
      title: '我的收藏',
      login: true
    },
    name: 'user_favorite',
    component: function (resolve) {
      require(['src/views/shop/favorite/index'], resolve)
    }
  },
  {
    path: '/user/buyeraddress/index',
    meta: {
      title: '收货地址',
      login: true
    },
    name: 'buyeraddress_index',
    component: function (resolve) {
      require(['src/views/shop/buyeraddress/index'], resolve)
    }
  },
  {
    path: '/order/buyfromproduct',
    meta: {
      title: '提交订单'
    },
    name: 'order_buyfromproduct',
    component: function (resolve) {
      require(['src/views/shop/order/buyfromproduct'], resolve)
    }
  },
  {
    path: '/pay/index',
    meta: {
      title: '支付订单',
      login: true
    },
    name: 'pay_index',
    component: function (resolve) {
      require(['src/views/shop/pay/index'], resolve)
    }
  },
  {
    path: '/user/buyeraddress/edit',
    meta: {
      title: '地址编辑',
      login: true
    },
    name: 'buyeraddress_edit',
    component: function (resolve) {
      require(['src/views/shop/buyeraddress/edit'], resolve)
    }
  }
]
