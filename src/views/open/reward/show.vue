<template>
  <section class="market">

    <zk-head title='分润详情' goBack='我的分润'></zk-head>
    <div class="weui-cells">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price brand">{{modelView.reward.amount}} </em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">编号</label>
            <span class="weui-form-preview__value">{{modelView.reward.serial}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">用户名</label>
            <span class="weui-form-preview__value">{{modelView.shareUser.userName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">等级</label>
            <span class="weui-form-preview__value">{{modelView.shareUser.gradeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">收益账户</label>
            <span class="weui-form-preview__value">{{modelView.moneyTypeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">分润分类</label>
            <span class="weui-form-preview__value">{{modelView.shareModule}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">账后金额</label>
            <span class="weui-form-preview__value">{{modelView.reward.afterAmount}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">触发用户</label>
            <span class="weui-form-preview__value">{{modelView.orderUser.userName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">描述</label>
            <span class="weui-form-preview__value">{{modelView.reward.intro}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">时间</label>
            <span class="weui-form-preview__value">{{modelView.reward.createTime}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">状态</label>
            <span class="weui-form-preview__value">{{modelView.shareUser.status}}</span>
          </div>
        </div>
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/reward.api'
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
        var response = await apiService.show(params)
        this.modelView = response.data.result
        console.dir((this.modelView))
      }
    }
  }
</script>
