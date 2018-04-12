import http from 'src/service/common/http'

export default {
    //  工单申请
    feedBack (data) {
        var response = http.getLogin('/UserWorkOrder/FeedBack', data)
        return response
    },
    //  工单申请
    feedBackApply (data) {
        var response = http.postLogin('/UserWorkOrder/FeedBack', data)
        return response
    }
}
