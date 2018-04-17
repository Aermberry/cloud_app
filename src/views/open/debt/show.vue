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
            <span class="weui-form-preview__value">{{modelView.plan.debteeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人联系电话</label>
            <span class="weui-form-preview__value">{{modelView.plan.debteePhone}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人身份证号码</label>
            <span class="weui-form-preview__value">{{modelView.plan.debteeId}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事过程（描述）</label>
            <span class="weui-form-preview__value">{{modelView.plan.applyReason}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事状态（描述）</label>
            <span class="weui-form-preview__value">{{modelView.planStatus}}</span>
          </div>
          <!-- <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">申请的商品Id</label>
            <span class="weui-form-preview__value">{{modelView.plan.applyProductIds}}</span>
          </div> -->
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">是否付款</label>
            <span class="weui-form-preview__value">{{modelView.plan.isPay}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">借条附件上传</label>
            <span class="weui-form-preview__value">{{modelView.plan.attachment}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">时间</label>
            <span class="weui-form-preview__value">{{modelView.plan.createTime}}</span>
          </div>
          <!-- <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">备注</label>
            <span class="weui-form-preview__value">{{modelView.plan.remark}}</span>
          </div> -->
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access" v-for="(item,index) in modelView.debtSolutions" :key="index">
      <div class="weui-panel__hd">方案{{index+1}}</div>
      <div class="weui-panel__bd" v-for="(i,n) in item.debtProducts" :key="n">
        <div class="weui-media-box weui-media-box_text">
          <h4 class="weui-media-box__title">资产包</h4>
          <div class="property-img">
            <img :src="i.thumbnailUrl" alt="">
          </div>
          <h4 class="weui-media-box__title">资产简介</h4>
          <p class="weui-media-box__desc">{{i.name}}{{i.debtProductSkus[0].skuValues}}</p>
          <h4 class="weui-media-box__title">市场价值</h4>
          <p class="weui-media-box__desc">0</p>
          <h4 class="weui-media-box__title">兑现债务</h4>
          <p class="weui-media-box__desc">0</p>
          <h4 class="weui-media-box__title">服务费</h4>
          <p class="weui-media-box__desc">0</p>
        </div>
      </div>
      <div class="weui-panel__ft">
        <a href="http://vux.li" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">
            总市场价值:{{item.marketPrice}} <br>总兑现债务：{{item.debtAmount}} <br>总服务费：{{item.cnyAmount }}
          </div>
        </a>
      </div>
    </div>
    <!-- <div class="table-box" v-for="(item,index) in modelView.debtSolutions" :key="index">
      <load-more :tip="'方案'+(index+1)" :show-loading="false" background-color="#fbf9fe"></load-more>
      <div style="overflow: auto; width: 100%;">
        <x-table style="background-color:#fff;     white-space: nowrap;">
          <thead>
            <tr style="background-color: #F7F7F7">
              <th>资产包</th>
              <th>资产简介</th>
              <th>市场价值</th>
              <th>兑现债额</th>
              <th>服务费</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i,n) in item.debtProducts" :key="n">
              <td class="td-img"><img :src="i.thumbnailUrl" alt=""></td>
              <td class="td-brief ">{{i.name}}<br>{{i.debtProductSkus[0].skuValues}}</td>
              <td> 0</td>
              <td>0</td>
              <td>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>{{item.marketPrice}}</td>
              <td>{{item.debtAmount}}</td>
              <td>
                {{item.cnyAmount }}
              </td>
            </tr>
          </tbody>
        </x-table>
      </div>
    </div> -->
    <div class="select-scheme">
      <group title="最终方案选择">
        <radio :options="radio001" @on-change="change"></radio>
      </group>
      <group>
        <x-input title="电子签名" is-type="china-name" v-model="screenName"></x-input>
        <x-input title="日期" v-model="time"></x-input>
      </group>
      <box gap="3rem 1rem">
        <x-button type="primary" @click.native="sumbit">
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
  import { XTable, LoadMore, Checker, CheckerItem, Radio, Group, XInput, XButton, Box, Cell } from 'zkui'
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
      Box,
      Cell
    },
    data () {
      return {
        modelView: '',
        radio001: [],
        subscript: '',
        screenName: '',
        time: ''
      }
    },
    mounted () {
      this.GetData()
      var myDate = new Date()
      this.time = myDate.toLocaleDateString()
    },
    methods: {
      change (value, label) {
        // console.log('change:', value, label)
        this.subscript = value
      },
      async sumbit () {
        console.log(this.modelView.debtSolutions[this.radio001.indexOf(this.subscript)].id)
        let parameter = {
          AdminPlanId: this.modelView.debtSolutions[this.radio001.indexOf(this.subscript)].id,
          Signature: this.screenName
        }
        var message = await apiService.Solution(parameter)
        console.log(message)
      },
      async GetData () {
        let params = {
          EntityId: this.$route.params.id // 获取URL当中的Id参数
        }
        var response = await apiService.show(params)
        this.modelView = response.data.result
        console.dir((this.modelView))
        for (var i = 0; i < this.modelView.debtSolutions.length; i++) {
          console.log(i)
          this.radio001[i] = '方案' + (i + 1)
        }
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-debt-show {
    .table-box {
    }
    .select-scheme {
      background: @white;
      margin-top: 0.83333333rem;
      border-top: 1px solid #e5e5e5;
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
    .td-img {
      width: 5rem;
      img {
        width: 100%;
      }
    }
    .td-brief {
      width: 7rem;
    }
    .weui-loadmore {
      margin-top: 2.4em;
      margin-bottom: 0;
    }
    .weui-media-box__title {
      margin-bottom: 0;
      font-size: @h5-font-size;
    }
    .weui-media-box__desc {
      margin-bottom: 0.66666667rem;
    }
    .weui-panel__hd {
      color: @brand;
      font-weight: @font-weight-bold;
    }
    .weui-panel {
      border: 1px solid #e5e5e5;
    }
    .weui-media-box {
      padding: 0.8rem 1.2rem 0 1.2rem;
      border-bottom: 1px solid #e5e5e5;
    }
    .property-img {
      width: 4rem;
      height: 4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
