import Vue from 'vue'
import App from './App'
import router from 'src/service/router/router'
import store from 'src/store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
  MIcon,
  zkui,
  bootstrap,
  ToastPlugin
} from 'zkui'
import {
  ZkHead,
  ZkFoot
} from 'src/widgets'
import 'src/service/config/rem'
import FastClick from 'fastclick'
import global from 'src/service/common/global' // 公共函数,全局函数

Vue.use(ElementUI)
Vue.use(ToastPlugin)
Vue.use(global)

Vue.component('m-icon', MIcon)
Vue.component('zk-foot', ZkFoot)
Vue.component('zk-head', ZkHead)
Vue.use(zkui)
Vue.use(bootstrap)

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.config.devtools = true
console.info('主函数')

new Vue({
  router,
  ZkFoot,
  ZkHead,
  MIcon,
  store,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#zkcloud')
