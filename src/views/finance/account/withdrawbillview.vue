<template>
  <section class="zkui-user-account-withdrawbillview">

    <zk-head title='提现详情' goBack='提现记录'></zk-head>
    <div class="weui-cells zkui-reward-show-user">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price">¥{{datalist.amount}}</em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">状态</label>
            <span class="weui-form-preview__value">{{datalist.status}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">申请时间</label>
            <span class="weui-form-preview__value">{{datalist.createTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">支付时间</label>
            <span class="weui-form-preview__value">{{datalist.payTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">提现账户</label>
            <span class="weui-form-preview__value">{{datalist.moneyTypeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">手续费</label>
            <span class="weui-form-preview__value">{{datalist.fee}}</span>
          </div>
        </div>
      </div>
    </div>
    <group>
      <x-button type="primary" action-type="button" @click.native="deleteT(datalist.id)" v-if="datalist.status=='待处理'"> 删除</x-button>
    </group>
    <!--<zk-foot></zk-foot>-->
  </section>
</template>

<script>
  import { Group, XButton, Box } from 'zkui'
  import apiUser from 'src/service/api/account.api'
  export default {
    components: {
      Group,
      XButton,
      Box
    },
    data () {
      return {
        title: '提现详情',
        datalist: ''
      }
    },
    mounted () {
      this.Getdate()
    },
    methods: {
      async deleteT (tid) {
        let par = {
          id: tid
        }
        console.log(tid)
        var deleteM = await apiUser.WithDrawDelete(par)
        if (deleteM.data.status === 1) {
          this.$vux.toast.success(deleteM.data.message)
          this.$router.push({
            name: 'account_withdrawbill'
          })
        } else {
          this.$vux.toast.warn(deleteM.data.message)
        }
      },
      async Getdate () {
        let par = {
          id: this.$route.params.id
        }
        var data = await apiUser.WithDrawGet(par)
        this.datalist = data.data.result
        console.log('deleteM', this.datalist)
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-account-withdrawbillview {
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
  }
</style>
