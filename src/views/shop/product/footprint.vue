<template>
  <section class="zkui-reward-list">
    <!-- 头部 -->
    <zk-head title='我的足迹' goBack='会员中心'></zk-head>
    <zk-list :styleType=1 dataType='bill' diyKey='list_user_bill' :isLogin="true"></zk-list>
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
