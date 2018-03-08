<template>
  <section class="zkui-user-account-transferbillview">

    <zk-head title='转账明细' goBack='转账记录'></zk-head>
    <div class="weui-cells zkui-reward-show-user">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price">¥1000.00</em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">流水号</label>
            <span class="weui-form-preview__value">0000000000</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账户名称</label>
            <span class="weui-form-preview__value">余额账户</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账户余额</label>
            <span class="weui-form-preview__value">2000</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">操作类型</label>
            <span class="weui-form-preview__value">转出</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">货币类型</label>
            <span class="weui-form-preview__value">人民币</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">币种类型</label>
            <span class="weui-form-preview__value">余额账户</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账户状态</label>
            <span class="weui-form-preview__value">成功</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">描述</label>
            <span class="weui-form-preview__value">杨大哥转个了一百给别人</span>
          </div>
        </div>
      </div>
    </div>
    <!--<zk-foot></zk-foot>-->
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
