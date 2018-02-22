<template>
  <section class="zkui-reward-list">
    <!-- 头部 -->
    <zk-head title='提现记录' goBack='我的钱包'></zk-head>
    <zk-list :styleType=1 dataType='withdraw' diyKey='list_user_withdraw' :isLogin='true'></zk-list>
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
