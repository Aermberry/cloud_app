<template>
  <section class="zkui-reward-list">
    <!-- 头部 -->
    <zk-head title='充值记录' goBack='我的钱包'></zk-head>
    <zk-list :styleType=1 dataType='recharge' diyKey='list_user_recharge' :isLogin='true'></zk-list>
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
