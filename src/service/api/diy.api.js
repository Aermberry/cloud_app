import http from 'src/service/common/http'

export default {
  // zk-gird zk-cell zk-swiper 的数据都通过该方法获取
  async getLink (key) {
    var param = {
      diyKey: key
    }
    var response = await http.get('/diy/getlink', param)
    return response
  },
  // zk-list 的数据都通过该方法获取
  async getList (data) {
    // 获取需要登录的数据
    if (data.isLogin) {
      var response = await http.getLogin('/diy/GetListByLogin', data)
      return response
    } else {
      response = await http.get('/diy/GetList', data)
      return response
    }
  }
}
