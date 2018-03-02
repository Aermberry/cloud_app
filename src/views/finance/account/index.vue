<template>
  <section class="zkui-account-index">
    <zk-head title='我的钱包' goBack='会员中心'></zk-head>
    <card :header="{title: '我的资产'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="border-right card-item" v-for="(list, index) in listDatas" :key="index">
          <span>
            <countup :end-val="(list.amount)"></countup>
          </span>
          <br/> {{list.moneyTypeName}}
        </div>
      </div>
    </card>

    <p class="account-index-service">服务</p>
    <div class="account-index-service-list">
      <div class="weui-grids">
        <router-link to="/user/account/recharge" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-recharge" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">充值</p>
        </router-link>
        <router-link to="/user/account/rechargebill" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-rechargebill" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">充值记录</p>
        </router-link>
        <router-link to="/user/account/financebill" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-financebill" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">财务记录</p>
        </router-link>
        <router-link to="/user/account/withdraw" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-withdraw" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">提现</p>
        </router-link>
        <router-link to="/user/account/withdrawbill" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-withdrawbill" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">提现记录</p>
        </router-link>
        <router-link to="/user/account/bankcard/index" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-bankcard" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">我的银行卡</p>
        </router-link>
        <router-link to="/user/account/transfer" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-transfer" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">转账</p>
        </router-link>
        <router-link to="/user/account/transferbill" class="weui-grid">
          <div class="weui-grid__icon">
            <m-icon name="zk-transferbill" class="metal"></m-icon>
          </div>
          <p class="weui-grid__label">转账记录</p>
        </router-link>
      </div>
    </div>

    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import apiService from 'src/service/api/account.api'
  import { Card, Countup, MIcon, Grid, GridItem, Group, GroupTitle } from 'zkui'
  export default {
    components: {
      Card,
      Countup,
      MIcon,
      Grid,
      GridItem,
      GroupTitle,
      Group
    },
    data () {
      return {
        listDatas: [],
        doStart: false
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData () {
        let response = await apiService.allAccounts()
        this.listDatas = response.data.result
      }
    }
  }
</script>


<style lang="less">
  .card-demo-flex {
    display: block;
    width: 100%;
  }
  .card-demo-content01 {
    width: 100%;
    overflow: hidden;
  }
  .card-padding {
    padding: 15*@rem;
  }
  .card-demo-flex > div {
    text-align: center;
    font-size: 12*@rem;
    width: 25%;
    float: left;
    padding: 0.5rem 0 0.5rem 0;
  }
  .card-demo-flex span {
    color: #f74c31;
    font-size: 0.65rem;
  }
</style>
