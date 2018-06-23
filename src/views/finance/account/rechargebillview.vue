<template>
  <section class="zkui-user-account-rechargebillview">

    <zk-head title="充值详情" goBack="充值记录"></zk-head>
    <zk-head :title='title' :goBack='goBack'></zk-head>
    <div class="weui-cells zkui-reward-show-user">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">充值金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price">{{data.account}}元</em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">流水号</label>
            <span class="weui-form-preview__value">{{data.serial}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">充值账户（金额）</label>
            <span class="weui-form-preview__value">{{data.moneyTypeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">状态</label>
            <span class="weui-form-preview__value">{{data.status}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">手续费</label>
            <span class="weui-form-preview__value">{{data.fee}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">留言</label>
            <span class="weui-form-preview__value">{{data.message}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">创建时间</label>
            <span class="weui-form-preview__value">{{data.dateTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">支付时间</label>
            <span class="weui-form-preview__value">{{data.payTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">描述</label>
            <span class="weui-form-preview__value">{{data.description}}</span>
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
        title: '充值详情',
        goBack: '充值记录',
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
        var data = await apiUser.RechargeDetail(par)
        this.data = data.data.result
        console.log(data)
      }
    }
  }
</script>
