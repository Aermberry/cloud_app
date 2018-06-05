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
  //  获取允许提现的账户类型
  GetAccountType: function (data) {
    var response = http.getLogin('/WithDraw/GetAccountType', data)
    return response
  },
  //  用户申请提现
  WithDrawAdd: function (data) {
    var response = http.postLogin('/WithDraw/Add', data)
    return response
  },
  //  获取提现详情
  WithDrawGet: function (data) {
    var response = http.getLogin('/WithDraw/Get', data)
    return response
  },
  // 删除用户提现
  WithDrawDelete: function (data) {
    var response = http.deleteLogin('/WithDraw/Delete', data)
    return response
  },
  // 获取银行卡类型
  bankCardType: function (data) {
    var response = http.get('/BankCard/GetBankType', data)
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
    let paras = {
      id: data
    }
    var response = http.deleteLogin('/BankCard/Delete', paras)
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
  },
  // 获取允许充值的账户类型
  AccountType: function (data) {
    var response = http.getLogin('/Recharge/GetAccountType', data)
    return response
  },
  // 线下充值
  AddOffOnline: function (data) {
    var response = http.postLogin('/Recharge/AddOffOnline', data)
    return response
  },
  // 线上充值
  AddOnline: function (data) {
    var response = http.postLogin('/Recharge/AddOnline', data)
    return response
  },
  // 获取用户所有充值数据
  UserList: function (data) {
    var response = http.getLogin('/Recharge/GetUserList', data)
    return response
  },
  // 删除用户充值
  RechargeDelete: function (data) {
    var response = http.deleteLogin('/Recharge/Delete', data)
    return response
  },
  // 获取充值详情
  RechargeGet: function (data) {
    var response = http.getLogin('/Recharge/Get', data)
    return response
  },
  // 转账
  TransferAdd: function (data) {
    var response = http.postLogin('/Transfer/Add', data)
    return response
  },
  // 转账类型
  GetTransferConfis: function (data) {
    var response = http.getLogin('/Transfer/GetTransferConfis', data)
    return response
  }
}
