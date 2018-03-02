<template>
  <section class="zkui-user-account-recharge">

    <zk-head title='充值' goBack='我的钱包'></zk-head>

    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">充值账户</label>
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
          <label class="weui-label">充值金额</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" pattern="[0-9]*" placeholder="请输入充值金额数目">
        </div>
      </div>
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="reg" href="javascript:" id="showTooltips">充值</a>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {

      }
    }
  }
</script>
