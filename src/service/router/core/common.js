export default [{
    path: '/',
    meta: {
      title: '会员中心',
      login: true
    },
    name: '/',
    component: function (resolve) {
      require(['src/views/core/user/index'], resolve)
    }
  },
  {
    path: '/default',
    meta: {
      title: '会员中心',
      login: true
    },
    name: 'default',
    component: function (resolve) {
      require(['src/views/core/user/index'], resolve)
    }
  },
  // {
  //   path: '/', // 默认为空的时候，挑战到首页
  //   meta: {
  //     title: '首页'
  //   },
  //   name: 'commont_index',
  //   component: function (resolve) {
  //     require(['src/views/default'], resolve)
  //   }
  // },
  // {
  //   path: '/index', // 默认为空的时候，挑战到首页
  //   meta: {
  //     title: '首页'
  //   },
  //   name: 'commont_index_2',
  //   component: function (resolve) {
  //     require(['src/views/default'], resolve)
  //   }
  // },
  // {
  //   path: '/default', // 默认为空的时候，挑战到首页
  //   meta: {
  //     title: '首页'
  //   },
  //   name: 'commont_default',
  //   component: function (resolve) {
  //     require(['src/views/default'], resolve)
  //   }
  // },
  {
    path: '/url', // 默认为空的时候，挑战到首页
    meta: {
      title: '网站地图'
    },
    name: 'commont_url',
    component: function (resolve) {
      require(['src/views/url'], resolve)
    }
  },
  {
    path: '/cztIndex', // 云债通首页
    meta: {
      title: '云债通首页'
    },
    name: 'czt',
    component: function (resolve) {
      require(['src/views/cztIndex'], resolve)
    }
  },
  {
    path: '/yqpIndex', // 一起拼首页
    meta: {
      title: '一起拼首页'
    },
    name: 'yqp',
    component: function (resolve) {
      require(['src/views/yqpIndex'], resolve)
    }
  },
  {
    path: '/gsIndex', // 港生首页
    meta: {
      title: '港生首页'
    },
    name: 'gs',
    component: function (resolve) {
      require(['src/views/gsIndex'], resolve)
    }
  },
  {
    path: '/zmIndex', // 中酶首页
    meta: {
      title: '中酶首页'
    },
    name: 'zm',
    component: function (resolve) {
      require(['src/views/zmIndex'], resolve)
    }
  },
  {
    path: '/pay',
    meta: {
      title: '支付成功'
    },
    name: 'pay',
    component: function (resolve) {
      require(['src/views/core/user/pay'], resolve)
    }
  },
  {
    path: '/apitest', // Api接口测试页面
    meta: {
      title: 'Api接口'
    },
    name: 'api_test',
    component: function (resolve) {
      require(['src/views/apitest'], resolve)
    }
  },
  {
    path: '/zkindex', // 默认为空的时候，挑战到首页
    meta: {
      title: '测试'
    },
    name: 'commont_test1',
    component: function (resolve) {
      require(['src/views/zkindex'], resolve)
    }
  },
  {
    path: '/test2', // 默认为空的时候，挑战到首页
    meta: {
      title: '测试'
    },
    name: 'commont_test2',
    component: function (resolve) {
      require(['src/views/test2'], resolve)
    }
  },
  {
    path: '/message/', // 操作提示
    params: {
      message: '操作成功',
      type: 'success'
    },
    meta: {
      title: '操作提示'
    },
    name: 'message',
    component: function (resolve) {
      require(['src/views/core/common/message.vue'], resolve)
    }
  }
]
