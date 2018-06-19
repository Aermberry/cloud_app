<template>
  <section class="zkui-user-apply">
    <zk-head title='债事备案' goBack='首页'></zk-head>
    <!-- <group title="备案人信息">
      <x-input title="备案人姓名" required :min="2" :max="12"></x-input>
      <x-input title="备案人手机号" required mask="999 9999 9999" :max="13" is-type="mobile"></x-input>
    </group> -->
    <group title="债权人信息">
      <x-input title="债权人姓名" required :min="2" :max="12" placeholder="填写债权人姓名" v-model="debtApiInput.DebteeName"></x-input>
      <x-input title="债权人手机号" required placeholder="填写债权人手机号" mask="99999999999" :max="11" is-type="mobile" v-model="debtApiInput.DebteePhone"></x-input>
      <x-input title="债权人身份证号码" required placeholder="填写债权人身份证号码" :min="18" :max="18" v-model="debtApiInput.DebteeId"></x-input>
    </group>
    <group title="债务人信息">
      <x-input title="债务人姓名" required :min="2" :max="12" placeholder="填写债务人姓名" v-model="debtApiInput.DebtorName"></x-input>
      <x-input title="债务人手机号" required placeholder="填写债务人手机号" mask="99999999999" :max="11" is-type="mobile" v-model="debtApiInput.DebtorPhone"></x-input>
      <x-input title="债务人身份证号码" required placeholder="填写债务人身份证号码" :min="18" :max="18" v-model="debtApiInput.DebtorId"></x-input>
      <div class="zs-money">
        <x-input title="债事金额" required placeholder="填写债事金额" v-model="debtApiInput.Amount"></x-input>
      </div>
      <x-input title="债务人联系地址" required placeholder="填写债务人联系地址" v-model="debtApiInput.DebtorAddress"></x-input>
      <x-input title="债事过程" required placeholder="请描述时间、地点、人物、经过和结果" v-model="debtApiInput.ApplyProcess"></x-input>
      <div class="vux-x-input weui-cell">
        <div class="weui-cell__hd">
          <label for="vux-x-input-hvsrw" class="weui-label" style="width: 6em;">债事属姓</label>
        </div>
        <div class="weui-cell__bd weui-cell__primary zs-property ">
          <checker v-model="demo1CheckboxMax" default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected">
            <checker-item value="1" type="default">企业</checker-item>
            <checker-item value="2" type="default">个人</checker-item>
            <checker-item value="3" type="default">借贷</checker-item>
            <checker-item value="4" type="default">供应链</checker-item>
          </checker>
        </div>
      </div>
      <div class="vux-x-input weui-cell">
        <div class="weui-cell__hd">
          <label for="vux-x-input-hvsrw" class="weui-label" style="width: 6em;">债事需求(可多选)</label>
        </div>
        <div class="weui-cell__bd weui-cell__primary zs-demand">
          <checker v-model="demo2CheckboxMax" default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected">
            <checker-item value="1" type="default">汽车房产</checker-item>
            <checker-item value="2" type="default">家电数码</checker-item>
            <checker-item value="3" type="default">艺术品</checker-item>
            <checker-item value="4" type="default">矿产</checker-item>
            <checker-item value="5" type="default">家居家纺</checker-item>
            <checker-item value="6" type="default">原材料</checker-item>
            <checker-item value="7" type="default">木材</checker-item>
            <checker-item value="8" type="default">酒类</checker-item>
            <checker-item value="9" type="default">食品饮品</checker-item>
            <checker-item value="10" type="default">其它</checker-item>
          </checker>
        </div>
      </div>
      <zk-upload :fileCount="20" :savePath="savePath" :size="5*1024" ref="uploadFile">上传相关凭证</zk-upload>
    </group>
    <label role="checkbox" class="el-checkbox " :class="{'is-checked':checkeded}">
      <span aria-checked="mixed" class="el-checkbox__input " :class="{'is-checked':checkeded}">
        <span class="el-checkbox__inner"></span><input type="checkbox" class="el-checkbox__original" value=""></span>
      <span class="el-checkbox__label">
        已阅读并同意
        <span class="" @click="showAgreement=true" style="color:#586c94">《债事协议》</span>
      </span>
      <div class="close-box" @click="checker"></div>
    </label>
    <div class="agreement-box" v-if="showAgreement" @click="showAgreement=!showAgreement">
      <span class="vux-close"></span>
      <div v-html="AgreementTest"></div>
    </div>
    <box gap="2rem 6rem">
      <x-button type="primary" @click.native="apiPost()" action-type="button" :disabled="disabledB"> 确认提交</x-button>
    </box>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkUpload } from 'widgets'
  import apiService from 'src/service/api/debt.api'
  import common from 'src/service/api/common.api'
  import { XInput, Group, XButton, Cell, XTextarea, Checker, CheckerItem, Box } from 'zkui'
  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      XTextarea,
      Checker,
      CheckerItem,
      Box,
      ZkUpload
    },
    data () {
      return {
        showAgreement: false,
        AgreementTest: '',
        checkeded: false,
        disabledB: true,
        savePath: '/open/debt',
        demo1CheckboxMax: [],
        demo2CheckboxMax: [],
        debtApiInput: {
          DebteeName: '',
          DebteePhone: '',
          DebteeId: '',
          DebtorId: '',
          DebtorPhone: '',
          DebtorName: '',
          DebtorAddress: '',
          Amount: '',
          NeedType: '',
          DebtProperty: '',
          ApplyProcess: '',
          Attachment: ''
        }
      }
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      checker () {
        this.checkeded = !this.checkeded
        if (this.checkeded === true) {
          this.disabledB = false
        } else {
          this.disabledB = true
        }
      },
      async Getdata () {
        let response = await common.GetConfigValue('DebtAgreementConfig')
        console.log('response', response)
        if (response.data.status === 1) {
          this.AgreementTest = response.data.result.serviceAgreement
          console.log('AgreementTest', this.AgreementTest)
        }
      },
      async apiPost () {
        var a = document.getElementById('input10')
        console.log(a.value)
        // this.debtApiInput.Attachment = a.value
        var NeedType = this.demo2CheckboxMax.join(',')
        var DebtProperty = this.demo1CheckboxMax.join(',')
        let par = {
          DebteeName: this.debtApiInput.DebteeName,
          DebteePhone: this.debtApiInput.DebteePhone,
          DebteeId: this.debtApiInput.DebteeId,
          DebtorPhone: this.debtApiInput.DebtorPhone,
          DebtorId: this.debtApiInput.DebtorId,
          DebtorName: this.debtApiInput.DebtorName,
          DebtorAddress: this.debtApiInput.DebtorAddress,
          Amount: this.debtApiInput.Amount,
          NeedType: NeedType,
          DebtProperty: DebtProperty,
          ApplyProcess: this.debtApiInput.ApplyProcess,
          Attachment: a.value
        }
        var response = await apiService.apply(par)
        if (response.data.status === 1) {
          this.messageSuccess('您的备案已经成功提交，我们将在1-7工作日为您审核，请耐心等待，如有疑问请联系客服热线：400 138 7677')
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>

<style lang="less">
  .zkui-user-apply {
    .agreement-box {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 70vh;
      background: @white;
      border: 1px solid #e5e5e5;
      padding: 1.5rem;
      p {
        text-align: center;
      }
      .vux-close {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .el-checkbox {
      padding: 0.5em 1.25rem;
      position: relative;
      .close-box {
        width: 55%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: @brand;
      border-color: @brand;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: @black;
    }
    .el-checkbox__inner:hover {
      border-color: @brand;
    }
    .check-icon-item-selected .weui-icon-success {
      color: @brand;
    }
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells__title {
      font-size: @h5-font-size;
    }
    .weui-cells {
      .weui-cell {
        padding: 0.83333333rem 0.5rem 0.83333333rem 1.25rem;
        .weui-cell__hd {
          .weui-label {
            width: 7.5rem !important;
            font-size: @h6-font-size;
            font-weight: @font-weight-bold;
          }
        }
        .weui-cell__bd {
          .weui-input {
            font-size: @h6-font-size;
          }
          .vux-checker-box {
            .vux-checker-item {
              font-size: @h6-font-size;
              i {
                font-size: 1rem !important;
              }
            }
          }
        }
      }
    }
    .check-icon-item-selected [class^='weui-icon-']:before,
    .check-icon-item [class^='weui-icon-']:before,
    .check-icon-item-selected [class*=' weui-icon-']:before,
    .check-icon-item [class*=' weui-icon-']:before {
      margin-left: 0;
      margin-right: 0.2rem;
    }
    .zs-money {
      position: relative;
    }
    .zs-money::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 0.08333333rem;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      left: 1.25rem;
    }
    .zs-demand {
      .vux-checker-box {
        .vux-checker-item {
          padding-bottom: 0.2rem;
        }
      }
    }
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
  }
</style>

