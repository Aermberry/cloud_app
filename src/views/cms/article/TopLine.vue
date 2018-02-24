<template>
  <section class="zkui-reward-list">

    <zk-head title='头条' goBack='首页'></zk-head>
    <zk-list :styleType=1 dataType='topline' diyKey='list_topline' :isLogin="false"></zk-list>
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
