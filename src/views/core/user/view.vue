<template>
  <section class="zkui-finance-view">

    <zk-head title='会员信息'></zk-head>
    <div class="weui-cells">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">用户名</label>
            <em class="weui-form-preview__value zkui-reward-show-price brand">{{modelView.userName}}</em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">姓名</label>
            <span class="weui-form-preview__value">{{modelView.name}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">手机号</label>
            <span class="weui-form-preview__value">{{modelView.mobile}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">等级</label>
            <span class="weui-form-preview__value">{{modelView.gradeName}}</span>
          </div>
          <!-- <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">时间</label>
            <span class="weui-form-preview__value"></span>
          </div> -->
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
