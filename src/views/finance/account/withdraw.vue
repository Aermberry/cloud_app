<template>
  <section class="zkui-user-account-withdraw">

    <zk-head title="提现" goBack="我的钱包"></zk-head>


    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">银行卡</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1">
            <option selected="" value="1">中国银行1111</option>
            <option value="2">中国农业银行2222</option>
          </select>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">提现账户</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1">
            <option selected="" value="1">现金账户</option>
            <option value="2">积分账户</option>
          </select>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">账户余额</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="password" pattern="[0-9]*" placeholder="此处显示当前所提现账户的余额数目">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">申请提现金额</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" pattern="[0-9]*" placeholder="请输入申请提现金额数目">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">支付密码</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="password" pattern="[0-9]*" placeholder="请输入支付密码">
        </div>
      </div>
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="reg" href="javascript:" id="showTooltips">提现</a>
    </div>
    <div class="zkui-reg-bottom-div clear">
      <div class="zkui-reg-bottom-div-help left">
        <a href="#" class="zkui-reg-bottom-div-help-a">此处显示出提现说明信息（信息是后台设置）</a>
      </div>
    </div>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'

  import apiAccount from 'src/service/api/account.api'
  export default {
    data () {
      return {
        withdraw: []
      }
    },
    mounted () {
      this.GetWhidraw()
    },
    methods: {
      async GetWhidraw () {
        let params = {}
        let d = await apiAccount.withdraw(params)
        this.withdraw = d.data.result
      }
    }
  }
</script>
