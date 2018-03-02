<template>
  <section class="zkui-user-debt-list">

    <zk-head title='我的债事' goBack='会员中心'></zk-head>
    <zk-list :styleType=1 dataType='debt' diyKey='list_user_reward' :isLogin='true'></zk-list>
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
