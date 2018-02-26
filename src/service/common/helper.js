// 常用帮助函数
'use strict'
import store from 'src/store/index'
export default {
  // 操作成功提示函数
  alertSucess (data) {
    // 使用mint-ui的toast函数  http://mint-ui.github.io/docs/#/en2/toast
    console.info(data)
    alert(data)
    // weui.toast(data)
  },
  // 操作失败提示函数
  alertError (data) {
    console.error(data)
    // alert(data)
    //  weui.toast(data)
  },

  // 在开发模式下输出类的详细
  console (data) {
    if (process.env.NODE_ENV === 'development') {
      console.dir(data)
    }
  },

  // 判断用户是否登录，如果没有登陆则跳转到登录页面，或者不执行操作
  checkLogin (isPush = false) {
    var loginUser = store.state.userStore.loginUser
    if (loginUser === null) {
      if (isPush === true) {
        location.href = '/user/login'
      }
      return false
    }
    return true
  }
}
