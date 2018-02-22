<template>
  <section class="market">
    <!-- 头部 -->
    <zk-head :title='title' :goBack='goBack'></zk-head>
    <div class="weui-cells">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">用户名</label>
            <em class="weui-form-preview__value zkui-reward-show-price brand">{{modelView.userName}} </em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">编号</label>
            <span class="weui-form-preview__value"> </span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账户</label>
            <span class="weui-form-preview__value"> </span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">描述</label>
            <span class="weui-form-preview__value"></span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">时间</label>
            <span class="weui-form-preview__value"></span>
          </div>
        </div>
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/user.api'
  export default {
    data () {
      return {
        title: '财务详情',
        goBack: '财务记录',
        modelView: null
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        let params = {
          EntityId: this.$route.params.id // 获取URL当中的Id参数
        }
        var response = await apiService.view(params)
        this.modelView = response.data.result
        console.dir((this.modelView))
      }
    }
  }
</script>
