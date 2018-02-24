<template>
  <section class="market">

    <zk-head title='通知详情' goBack='会员通知'></zk-head>
    <div class="page article">
      <div class="page__bd">
        <article class="weui-article">
          <h1>{{modelView.name}}</h1>
          <section>
            <h6>发布时间：{{modelView.createTime}}</h6>
            <section>
              <div v-html='modelView.content'></div>
            </section>
          </section>
        </article>
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/cms.api'
  export default {
    data () {
      return {
        modelView: null
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        let params = {
          Id: this.$route.params.id // 获取URL当中的Id参数
        }
        var response = await apiService.aboutDetail(params)
        if (response.data.status !== 1) {
          this.messageWarn('您访问的内容不存在')
        } else {
          this.modelView = response.data.result
          this.modelView.createTime = this.formatDate(this.modelView.createTime, 'yyyy-MM-dd hh:mm:ss')
        }
      }
    }
  }
</script>

