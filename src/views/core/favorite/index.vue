<template>
  <section class="zkui-user-favorite-index">

    <zk-head title='我的收藏' goBack='会员中心'></zk-head>
    <zk-list :styleType=1 dataType='favarite' diyKey='list_user_favarite' :isLogin='true'></zk-list>
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
