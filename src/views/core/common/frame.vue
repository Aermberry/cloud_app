<template>
  <section>
    <zk-head :title='title' :goBack='goBack' share='true'></zk-head>
    <div class="page__bd">
      <iframe width="100%" height="1500px" src="https://wqs.jd.com/portal/wx/portal_indexV4.shtml?PTAG=17007.13.1&ptype=1" frameborder="0" scrolling="no"></iframe>
    </div>
    <transition name="router-show">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>

export default {
  data () {
    return {
      title: '企业主页',
      goBack: '工作'
    }
  },
  components: {
    zkhead
  }
}

</script>

