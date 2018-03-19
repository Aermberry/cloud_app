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
    <zk-grid diykey="grid_user_account_index" class="weui-grid weui-grid__icon weui-grid__label metal"></zk-grid>
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


<style scoped  lang="less">
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
