<template>
  <section class="zkui-reward-list">
    <!-- 头部 -->
    <zk-head title='转账记录' goBack='我的钱包'></zk-head>
    <zk-list :styleType=1 dataType='transfer' diyKey='list_user_transfer' isLogin='true'></zk-list>
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
