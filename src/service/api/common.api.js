import http from 'src/service/common/http'

export default {
 //  获取自动配置
  GetConfigValue (data) {
    var response = http.get('/Common/GetAutoConfig', data)
    return response
  },
 //  文件上传
  upload (file, path) {
   //  var data={
   //    SavePath : path,
   //    FileType : file.file.type,
   //    FileSize :  file.file.size
   //  }
    var response = http.post('/common/upload', file)
    return response
  },
 //  商品列表
  list (data) {
    var response = http.get('/product/list', data)
    return response
  }
}
