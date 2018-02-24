<template>
  <section class="zkui-reward-list">

    <zk-head title='我推荐的会员' goBack='会员中心'></zk-head>
    <zk-list :styleType=1 dataType='RecommendUser' diyKey='list_user_recommenduser' :isLogin='true'></zk-list>
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
