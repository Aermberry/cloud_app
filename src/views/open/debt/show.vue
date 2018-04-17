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
    <div class="table-box">
      <div>
        <load-more tip="content-bordered=false" :show-loading="false" background-color="#fbf9fe"></load-more>
        <x-table style="background-color:#fff;">
          <thead>
            <tr style="background-color: #F7F7F7">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple</td>
              <td>$1.25</td>
              <td> x 1</td>
              <td> x 2</td>
            </tr>
            <tr>
              <td>Banana</td>
              <td>$1.20</td>
              <td> x 2</td>
              <td> x 2</td>
            </tr>
          </tbody>
        </x-table>
      </div>
    </div>
    <div class="select-scheme">
      <group title="最终方案选择">
        <radio :options="radio001" @on-change="change"></radio>
      </group>
      <group>
        <x-input title="电子签名" is-type="china-name"></x-input>
        <x-input title="日期"></x-input>
      </group>
      <box gap="3rem 1rem">
        <x-button type="primary">
          点击进入资产包云商城
        </x-button>
      </box>
    </div>
    <div></div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/debt.api'
  import { XTable, LoadMore, Checker, CheckerItem, Radio, Group, XInput, XButton, Box } from 'zkui'
  export default {
    components: {
      XTable,
      LoadMore,
      Checker,
      CheckerItem,
      Radio,
      Group,
      XInput,
      XButton,
      Box
    },
    data () {
      return {
        modelView: '',
        radio001: ['China', 'Japan']
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      change (value, label) {
        console.log('change:', value, label)
      },
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
<style lang="less">
  .zkui-user-debt-show {
    .table-box {
      padding-bottom: 3rem;
    }
    .select-scheme {
      background: @white;
      padding-bottom: 3rem;
      .weui-cell {
        padding: 0.43333333rem 1.25rem;
      }
      .weui-cell__hd {
        width: 6rem;
      }
      .weui-btn {
        height: 3rem;
      }
    }
  }
</style>
