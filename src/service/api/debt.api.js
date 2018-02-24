import http from 'src/service/common/http'

export default {
    //  债事申请
    async apply (data) {
        var response = await http.postLogin('User/Debt/apply', data)
        return response
    }
}
