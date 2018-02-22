// 公共函数

exports.install = function (Vue, options) {
  // 操作错误信息提示，跳转到信息提示页面，并显示错误信息
  Vue.prototype.messageWarn = function (message) {
    this.$router.push({
      name: 'message',
      params: {
        message: message,
        type: 'warn'
      }
    })
  }

  // 操作成功信息提示，跳转到信息提示页面，并显示成功信息
  Vue.prototype.messageSuccess = function (message) {
    this.$router.push({
      name: 'message',
      params: {
        message: message,
        type: 'success'
      }
    })
  }
}
