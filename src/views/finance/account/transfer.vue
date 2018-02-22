<template>
  <section class="zkui-user-account-transfer">
    <!-- 头部 -->
    <zk-head :title='title' :goBack='goBack'></zk-head>

    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">转账方式</label>
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
          <label class="weui-label">对方用户名</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入转账对方的用户名">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">账户余额</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="password" pattern="[0-9]*" placeholder="此处显示当前用户的余额数目">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">转账金额</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" pattern="[0-9]*" placeholder="请输入转账金额数目">
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
      <a class="weui-btn weui-btn_primary" @click="reg" href="javascript:" id="showTooltips">确定</a>
    </div>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {
        title: '转账',
        goBack: '我的钱包'
      }
    }
  }
</script>

<script>
  import apiAccount from 'src/service/api/account.api'
export default {
  data () {
    return {
      transfer: []
    }
  },
  mounted () {
    this.GetTransfer()
  },
  methods: {
    async GetTransfer () {
      let params = {}
      let d = await apiAccount.transfer(params)
      this.transfer = d.data.result
    }
  }
}
</script>
