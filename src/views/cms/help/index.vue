<template>
  <section class="zkui-reward-list">

    <zk-head title='客服中心' goBack='首页'></zk-head>
    <zk-list :styleType=1 dataType='help' diyKey='list_topline' :isLogin="false"></zk-list>
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
