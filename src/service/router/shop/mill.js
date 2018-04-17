export default [{
    path: '/mill/point',
    meta: {
      title: '资产包商城'
    },
    name: 'mill_point',
    component: function (resolve) {
      require(['src/views/shop/mill/point'], resolve)
    }
  },
  {
    path: '/mill/point1',
    meta: {
      title: '零售商城'
    },
    name: 'mill_point1',
    component: function (resolve) {
      require(['src/views/shop/mill/point1'], resolve)
    }
  }
]
