<template>
  <section>
    <zk-head title='会员通知' goBack='首页'></zk-head>
    <zk-list :styleType=1 dataType='UserNotice' diyKey='list_topline' :isLogin="false"></zk-list>
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
