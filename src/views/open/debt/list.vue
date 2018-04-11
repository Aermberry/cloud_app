<template>
  <section class="zkui-user-debt-list">
    <zk-head title='我的债事'></zk-head>
    <zk-list :styleType=1 dataType='debt' diyKey='list_user_reward' :isLogin='true'></zk-list>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import apiService from 'src/service/api/debt.api'
  import { ZkList } from 'widgets'
  export default {
    components: {
      ZkList
    },
    mounted () {
      this.data()
    },
    methods: {
      async data () {
        let par = {
          dataType: 'debt'
        }
        var response = await apiService.list(par)
        console.log(response)
      }
    }
  }
</script>
