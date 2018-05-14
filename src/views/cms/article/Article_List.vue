<template>
  <section class="zkui-reward-list">

    <zk-head title='文章列表' goBack='首页'></zk-head>
    <zk-list :styleType=1 dataType='article' diyKey='article' :isLogin="false"></zk-list>
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
