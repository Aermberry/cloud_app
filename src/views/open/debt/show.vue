<template>
  <section class="zkui-user-debt-show">

    <zk-head title='债事详情' goBack='我的债事'></zk-head>
    <div class="weui-cells">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price brand">{{modelView.plan.amount}} </em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人姓名</label>
            <span class="weui-form-preview__value">{{modelView.plan.name}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人联系电话</label>
            <span class="weui-form-preview__value">{{modelView.plan.mobile}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人身份证号码</label>
            <span class="weui-form-preview__value">{{modelView.plan.iDcard}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事过程（描述）</label>
            <span class="weui-form-preview__value">{{modelView.plan.debtProcess}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事状态（描述）</label>
            <span class="weui-form-preview__value">{{modelView.planStatus}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">申请的商品Id</label>
            <span class="weui-form-preview__value">{{modelView.plan.applyProductIds}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">是否付款</label>
            <span class="weui-form-preview__value">{{modelView.isPay}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">借条附件上传</label>
            <span class="weui-form-preview__value">{{modelView.plan.attachment}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">时间</label>
            <span class="weui-form-preview__value">{{modelView.plan.createTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">备注</label>
            <span class="weui-form-preview__value">{{modelView.plan.remark}}</span>
          </div>
        </div>
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/debt.api'
  export default {
    data () {
      return {
        modelView: ''
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
        var response = await apiService.show(params)
        this.modelView = response.data.result
        console.dir((this.modelView))
      }
    }
  }
</script>
