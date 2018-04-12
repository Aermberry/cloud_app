export default [{
    path: '/user/debt/apply',
    meta: {
      title: '债事报备',
      login: true
    },
    name: 'debt_apply',
    component: function (resolve) {
      require(['src/views/open/debt/apply'], resolve)
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
      title: '我的债事',
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
  }
]
