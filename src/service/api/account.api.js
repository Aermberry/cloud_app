import http from 'src/service/common/http'

export default {
  //  财务记录
  financeBill (data) {
    var response = http.getLogin('/user/account/bill', data)
    return response
  },
  //  会员所有资产账户
  allAccounts () {
    var response = http.getLogin('/user/account/AllAccounts')
    return response
  },
  //  财务明细
  financeBillView (data) {
    var response = http.getLogin('/user/account/billview', data)
    return response
  },
  //  充值记录
  recharge: function (data) {
    var response = http.getLogin('/user/account/recharge', data)
    return response
  },
  //  转账记录
  transfer: function (data) {
    var response = http.getLogin('/user/account/transfer', data)
    return response
  },
  //  提现记录
  withdraw: function (data) {
    var response = http.getLogin('/user/account/withdraw', data)
    return response
  },
  // 获取银行卡类型
  bankCardType: function (data) {
    var response = http.getLogin('/BankCard/GetBankType', data)
    return response
  },
  // 获取银行卡列表
  bankCardList: function (data) {
    var response = http.getLogin('/BankCard/GetList', data)
    return response
  },
  // 添加银行卡
  bankCardAdd: function (data) {
    var response = http.postLogin('/BankCard/Add', data)
    return response
  },
  // 删除银行卡
  bankCardDelete: function (data) {
    var response = http.deleteLogin('/BankCard/Delete', data)
    return response
  },
  // 更改银行卡
  bankCardUpdate: function (data) {
    var response = http.putLogin('/BankCard/Update', data)
    return response
  },
  // 获取单个银行卡
  bankCardSingle: function (data) {
    var response = http.getLogin('/BankCard/get', data)
    return response
  }
}
