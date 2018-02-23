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

  // 日期格式化函数
  Vue.prototype.formatDate = function (date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : this.padLeftZero(str)
        )
      }
    }
    return fmt
  }

  Vue.prototype.padLeftZero = function (str) {
    return ('00' + str).substr(str.length)
  }
}
