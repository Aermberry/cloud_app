<template>
  <section class="zkui-user-account-transferbillview">

    <zk-head title='转账明细' goBack='转账记录'></zk-head>
    <div class="weui-cells zkui-reward-show-user">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price">{{data.account}}</em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">流水号</label>
            <span class="weui-form-preview__value">{{data.serial}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">对方用户名</label>
            <span class="weui-form-preview__value">{{data.tragetUserName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">转出账户（金额）</label>
            <span class="weui-form-preview__value">{{data.outMoenyTypeIntr}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">转出账户（金额)</label>
            <span class="weui-form-preview__value">{{data.inMoenyTypeIntr}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">手续费</label>
            <span class="weui-form-preview__value">{{data.fee}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">操作类型</label>
            <span class="weui-form-preview__value">{{data.transferConfigIntr}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">状态</label>
            <span class="weui-form-preview__value">{{data.status}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">留言</label>
            <span class="weui-form-preview__value">{{data.message}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">交易时间</label>
            <span class="weui-form-preview__value">{{data.dateTime}}</span>
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
        title: '转账详情',
        goBack: '转账记录',
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
        var data = await apiUser.TransferDetail(par)
        this.data = data.data.result
        console.log(data)
      }
    }
  }
</script>
