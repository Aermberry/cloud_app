<template>
  <section class="market">

    <zk-head :title='title' :goBack='goBack'></zk-head>
    <div class="weui-cells">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">付款金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price brand">{{modelView.amount}} </em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">编号</label>
            <span class="weui-form-preview__value">{{modelView.serialNum}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账户</label>
            <span class="weui-form-preview__value">{{modelView.moneyTypeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">资金流向</label>
            <span class="weui-form-preview__value">{{modelView.flow}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账后金额</label>
            <span class="weui-form-preview__value">{{modelView.afterAmount}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">操作类型</label>
            <span class="weui-form-preview__value">{{modelView.acctionType}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">描述</label>
            <span class="weui-form-preview__value">{{modelView.intro}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">时间</label>
            <span class="weui-form-preview__value">{{modelView.createTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">备注</label>
            <span class="weui-form-preview__value">{{modelView.remark}}</span>
          </div>
        </div>
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/account.api'
  export default {
    data () {
      return {
        title: '财务详情',
        goBack: '财务记录',
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
        var response = await apiService.financeBillView(params)
        this.modelView = response.data.result
        console.dir((this.modelView))
      }
    }
  }
</script>
