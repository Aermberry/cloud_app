<template>
  <section class="zkui-user-account-withdrawbill">

    <zk-head title='提现记录' goBack='我的钱包'></zk-head>
    <zk-list :styleType=1 dataType='withdraw' diyKey='list_user_withdraw' :isLogin='true'></zk-list>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import { ZkList } from 'widgets'
  import apiUser from 'src/service/api/account.api'
  export default {
    components: {
      ZkList
    },
    data () {
      return {
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData () {
        var list = await apiUser.withdraw()
        console.log('list', list)
      }
    }
  }
</script>
