<template>
  <section class="zkui-reward-list">
    <zk-head :title='headTitle' goBack='我的钱包'></zk-head>
    <zk-list :styleType=1 dataType='bill' diyKey='list_user_bill' :isLogin='true'></zk-list>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import { ZkList } from 'widgets'
  export default {
    components: {
      ZkList
    },
    data () {
      return {
        headTitle: '财务记录'
      }
    },
    mounted () {
      console.log(window.location.host)
      if (window.location.host.indexOf('czhait') !== -1) {
        this.headTitle = '交易明细'
      }
    }
  }
</script>
