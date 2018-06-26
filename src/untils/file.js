'use strict'

const fs = require('fs')
export default {
  // 写入文件
  write (path, data) {
    fs.writeFile(path, data, function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('ok')
      }
    })
  },
  // 读取文件
  read (path) {
    fs.readFile(path, function (err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
        console.log(data.length + 'bayes')
      }
    })
  }
}
