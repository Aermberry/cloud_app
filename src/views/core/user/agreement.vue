<template>
  <section class="zkui-user-agreement">

    <zk-head :title='title' :goBack='goBack'></zk-head>
    <div class="page article js_show">
      <div class="page__bd">
        <article class="weui-article">
          <h2 class="title">服务条款</h2>
          <div class="title" v-html='modelView.serviceAgreement'></div>
        </article>
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/common.api'
  export default {
    data () {
      return {
        modelView: '',
        title: '服务条款',
        goBack: '注册'
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        let params = {
          EntityId: 'WebsiteConfig' // 获取URL当中的Id参数
        }
        var response = await apiService.GetConfigValue(params)
        this.modelView = response.data.result
        console.dir((this.modelView))
      }
    }
  }
</script>
