import http from 'src/service/common/http'

export default {
  //  债事申请
  async apply (data) {
    console.dir(data)
    var response = await http.post('User/Debt/apply', data)
    return response
  }
}
