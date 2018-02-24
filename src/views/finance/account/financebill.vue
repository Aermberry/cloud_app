<template>
  <section class="zkui-reward-list">

    <zk-head title='财务记录' goBack='我的钱包'></zk-head>
    <zk-list :styleType=1 dataType='bill' diyKey='list_user_bill' :isLogin='true'></zk-list>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import { ZkList } from 'widgets'
  export default {
    components: {
      ZkList
    }
  }
</script>
