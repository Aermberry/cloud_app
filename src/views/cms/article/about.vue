<template>
  <section class="zkui-reward-list">
    <!-- 头部 -->
    <zk-head title='关于我们' goBack='会员中心'></zk-head>
    <zk-list :styleType=1 dataType='about' diyKey='list_about' :isLogin="false"></zk-list>
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
