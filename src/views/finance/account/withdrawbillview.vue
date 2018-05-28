<template>
  <section class="zkui-user-account-withdrawbillview">

    <zk-head title='提现详情' goBack='提现记录'></zk-head>
    <div class="weui-cells zkui-reward-show-user">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price">¥{{data.amount}}</em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">手续费：</label>
            <span class="weui-form-preview__value">¥{{data.fee}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账户类型</label>
            <span class="weui-form-preview__value">{{data.moneyTypeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">提现状态：</label>
            <span class="weui-form-preview__value">{{data.status}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">用户名称:</label>
            <span class="weui-form-preview__value">{{data.userName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">创建时间：</label>
            <span class="weui-form-preview__value">{{data.createTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">到账时间：</label>
            <span class="weui-form-preview__value">{{data.payTime}}</span>
          </div>
        </div>
      </div>
    </div>
    <!--<zk-foot></zk-foot>-->
  </section>
</template>

<script>
  import apiUser from 'src/service/api/account.api'
  export default {
    data () {
      return {
        title: '提现详情',
        goBack: '提现记录',
        data: ''
      }
    },
    mounted () {
      this.Getdate()
      console.log(this.$route.params.id)
    },
    methods: {
      async Getdate () {
        let par = {
          id: this.$route.params.id
        }
        var data = await apiUser.WithDrawGet(par)
        this.data = data.data.result
        console.log(data)
      }
    }
  }
</script>
