var equipment = 'views'

function isMobile () {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag
}
if (isMobile()) {
  equipment = 'views'
} else {
  equipment = 'pages'
}
export default [{
    path: '/user/debt/apply',
    meta: {
      title: '债事备案',
      login: true
    },
    name: 'debt_apply',
    component: function (resolve) {
      require(['src/' + equipment + '/open/debt/apply'], resolve)
    }
  },
  {
    path: '/user/debt/show/:id',
    meta: {
      title: '债事详情',
      login: true
    },
    name: 'debt_show',
    component: function (resolve) {
      require(['src/views/open/debt/show'], resolve)
    }
  },
  {
    path: '/user/debt/list',
    meta: {
      title: '平债计划',
      login: true
    },
    name: 'debt_list',
    component: function (resolve) {
      require(['src/views/open/debt/list'], resolve)
    }
  },
  {
    path: '/user/debt/college',
    meta: {
      title: '云债通债事生态学院',
      login: true
    },
    name: 'debt_college ',
    component: function (resolve) {
      require(['src/views/open/debt/college'], resolve)
    }
  },
  {
    path: '/user/debt/alliance',
    meta: {
      title: '战略联盟',
      login: true
    },
    name: 'debt_alliance ',
    component: function (resolve) {
      require(['src/views/open/debt/alliance'], resolve)
    }
  },
  {
    path: '/user/debt/property_offter',
    meta: {
      title: '资产提供',
      login: true
    },
    name: 'debt_property_offter ',
    component: function (resolve) {
      require(['src/views/open/debt/property_offter'], resolve)
    }
  },
  {
    path: '/user/debt/property_demand',
    meta: {
      title: '资产需求',
      login: true
    },
    name: 'debt_property_demand ',
    component: function (resolve) {
      require(['src/views/open/debt/property_demand'], resolve)
    }
  },
  {
    path: '/user/debt/plan',
    meta: {
      title: '智能平债',
      login: true
    },
    name: 'debt_plan ',
    component: function (resolve) {
      require(['src/views/open/debt/plan'], resolve)
    }
  },
  {
    path: '/user/debt/data',
    meta: {
      title: '债事数据',
      login: true
    },
    name: 'debt_data ',
    component: function (resolve) {
      require(['src/views/open/debt/data'], resolve)
    }
  },
  {
    path: '/user/debt/reference',

    meta: {
      title: '咨询中心'
    },
    name: 'debt_reference ',
    component: function (resolve) {
      require(['src/views/open/debt/reference'], resolve)
    }
  },
  {
    path: '/user/debt/manage',
    meta: {
      title: '个人债事详情管理',
      login: true
    },
    name: 'debt_manage',

    component: function (resolve) {
      require(['src/views/open/debt/manage'], resolve)
    }
  },
  {
    path: '/user/debt/notice',
    meta: {
      title: '债事公告'
    },
    name: 'debt_notice',

    component: function (resolve) {
      require(['src/views/open/debt/notice'], resolve)
    }
  },
  {
    path: '/user/debt/interests',
    meta: {
      title: '会员权益',
      login: true
    },
    name: 'interests',
    component: function (resolve) {
      require(['src/views/core/user/interests'], resolve)
    }
  }
]
