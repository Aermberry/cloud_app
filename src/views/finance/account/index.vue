<template>
  <section class="zkui-account-index">
    <zk-head title='我的钱包' goBack='会员中心'></zk-head>
    <card :header="{title: '我的资产'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="border-right card-item" v-for="(list, index) in listDatas" :key="index">
          <span>
            <countup :end-val="(list.amount)" :duration="3" :decimals="2"></countup>
          </span>
          <br/> {{list.moneyTypeName}}
        </div>
      </div>
    </card>
    <group class="zkui-user-order-title">
      <cell title="服务"></cell>
    </group>
    <zk-grid diykey="grid_user_account_index" class="icon-metal zkui-grid zkui-grid-border__none "></zk-grid>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import apiService from 'src/service/api/account.api'
  import { ZkGrid } from 'widgets'
  import { Card, Countup, MIcon, Grid, GridItem, Group, GroupTitle, Cell } from 'zkui'
  export default {
    components: {
      Card,
      Countup,
      MIcon,
      Grid,
      GridItem,
      GroupTitle,
      Group,
      ZkGrid,
      Cell
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
    padding: 15 * @rem;
  }
  .card-demo-flex > div {
    text-align: center;
    font-size: 12 * @rem;
    width: 25%;
    float: left;
    padding: 0.5rem 0 0.5rem 0;
  }
  .card-demo-flex span {
    color: #f74c31;
    font-size: 0.65rem;
  }
</style>
