import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store/index'
import helper from 'src/service/common/helper'
import local from 'src/service/common/local'
// import api from 'src/service/api/apistore.api'
// core
import Common from './core/common' // 通用、、
import User from './core/User' // 用户

// open 项目
import Reward from './open/reward' // 分润
import Debt from './open/debt' // 分润

// 财务
// finance
import Account from './finance/account' // 通用
import Bill from './finance/bill' // 财务

// 商城
import order from './shop/order' // 订单
import Product from './shop/product' // 商品
// import store from './shop/store' //dian

// mall
import mill from './shop/mill'
// CMS
import Help from './cms/help' // 帮助
import Article from './cms/article' // 文章
// import http from 'src/service/common/http'

Vue.use(Router)

const router = new Router({
  routes: [
    //  ...demo,
    ...Common,
    ...User,
    ...Reward,
    ...Account,
    ...Bill,
    ...Product,
    ...Debt,
    ...order,
    ...Help,
    ...Article,
    ...mill
  ],
  mode: 'history', // 路由模式
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  var u = navigator.userAgent
  if (u.indexOf('MicroMessenger') > -1 || u.indexOf('micromessenger') > -1) {
    console.info('当前访问微信浏览器')
    // 微信浏览器
    var localCode = local.getStore('Wechat_code') // 微信返回的Code
    console.info('当前Code', localCode)
    if (
      localCode === undefined ||
      localCode === 'undefined' ||
      localCode === ''
    ) {
      console.info('获取Code')
      // var url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
      // url += '?appid=wx3845717402bcb006'
      // url += '&redirect_uri=' + encodeURIComponent('http://www.yiqipingou.com/')
      // url += '&response_type=code'
      // url += '&scope=snsapi_base'
      // url += '&state=STATE&connect_redirect=1'
      // url += '#wechat_redirect'
      window.location.href =
        'http://localhost:7001/?code=021OEdtN0OxaM42tcSvN08JrtN0OEdt9&state=STATE'

      // 获取Url中的Code
      var querys = window.location.search
      var num = querys.indexOf('?')
      var str = querys.substr(num + 1)
      var arr = str.split('&')
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf('=')
        if (num > 0) {
          if (arr[i].substring(0, num) === 'code') {
            var code = arr[i].substr(num + 1)
            console.info('微信Code', code)
            local.setStore('Wechat_code', code)
            break
          }
        }
      }
    }
  }
  window.document.title = to.meta.title
  var isLogin = store.state.userStore.isLogin // 判断是否登陆
  if (to.meta.login) {
    if (!isLogin) {
      helper.alertError('请先登录')
      return next({
        path: '/user/login'
      })
    }
  }
  //  如果访问的是登陆页面或者注册页面，登陆成功后跳转到登陆会员中心
  if (
    isLogin &&
    (to.path === '/user/login' ||
      to.path === '/user/reg' ||
      to.path === '/user/findpassword')
  ) {
    helper.alertSucess('您已成功登陆')
    return next({
      path: '/user/index'
    })
  }
  next()
})

router.afterEach((toRoute, fromRoute) => {
  //  const to = toRoute.path
  //  const h = sess.get(to)
  //  if (h && h.scrollTop >= 0) {
  //    Vue.nextTick(() => {
  //      window.scroll(0, h.scrollTop)
  //    })
  //  }
  //  store.commit('updateLoadingStatus', {isLoading: false})
})

export default router
