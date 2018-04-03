<template>
  <section class="zkui-user-apply">

    <zk-head title='债事报备' goBack='首页'></zk-head>
    <!-- <div>
      <group gap="0.51rem 0rem" id="form">
        <x-input title="债务人姓名" required :min="2" :max="12" v-model="debtApiInput.name"></x-input>
        <x-input title="债务人手机号" required placeholder="请输入债务人的手机号" mask="999 9999 9999" v-model="debtApiInput.mobile" :max="13" is-type="mobile"></x-input>
        <x-input title="债务人身份证号" required :max="18" is-type="idcard" v-model="debtApiInput.iDCard"></x-input>
      </group>
      <group>
        <group-title slot="title">债市详情</group-title>
        <box gap="0.2rem 0.2rem">
          <x-input title="债事金额" required type="number" is-type="currency" class="zk-border-bottom" v-model="debtApiInput.amount"></x-input>
          <x-textarea title="债事过程" class="zk-border-bottom" v-model="debtApiInput.debtProcess"></x-textarea>
          <x-upload :fileCount="20" :savePath="savePath" :size="5*1024" ref="savePath">相关资料</x-upload>
          <x-button @click.native="apiPost" type="primary" action-type="button">申请</x-button>
        </box>
      </group>
    </div> -->
    <group title="备案人信息">
      <x-input title="备案人姓名" required :min="2" :max="12" placeholder="填写备案人姓名"></x-input>
      <x-input title="备案人手机号" required placeholder="填写备案人手机号" mask="999 9999 9999" :max="13" is-type="mobile"></x-input>
    </group>
    <group title="债权人信息">
      <x-input title="债权人性名" required :min="2" :max="12" placeholder="填写债权人性名"></x-input>
      <x-input title="债权人手机号" required placeholder="填写债权人手机号" mask="999 9999 9999" :max="13" is-type="mobile"></x-input>
      <x-input title="债权人身份证号码" required placeholder="填写债权人身份证号码" :max="18" is-type="mobile"></x-input>
    </group>
    <group title="债务人信息">
      <x-input title="债务人性名" required :min="2" :max="12" placeholder="填写债务人性名"></x-input>
      <x-input title="债务人手机号" required placeholder="填写债务人手机号" mask="999 9999 9999" :max="13" is-type="mobile"></x-input>
      <x-input title="债务人身份证号码" required placeholder="填写债务人身份证号码" :max="18" is-type="mobile"></x-input>
      <div class="zs-money">
        <x-input title="债事金额" required placeholder="填写债事金额"></x-input>
      </div>
      <x-input title="债务人联系地址" required placeholder="填写债务人联系地址"></x-input>
      <x-input title="申请原因" required placeholder="请描述时间、地点、人物、经过和结果"></x-input>
      <div class="vux-x-input weui-cell">
        <div class="weui-cell__hd">
          <label for="vux-x-input-hvsrw" class="weui-label" style="width: 6em;">债事属性</label>
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
      <zk-upload :fileCount="20" :savePath="savePath" :size="5*1024" ref="savePath">上传相关凭证</zk-upload>
    </group>
    <box gap="2rem 6rem">
      <x-button type="primary" @click.native="save" action-type="button"> 确认提交</x-button>
    </box>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkUpload } from 'widgets'
  // import apiService from 'src/service/api/debt.api'
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
        savePath: '/open/debt',
        // files: [],
        // step2: 0,
        // debtApiInput: {
        //   name: 'ddd',
        //   mobile: '13865466956',
        //   iDCard: '36220119940217361X',
        //   debtProcess: '我卖了一房子没有收到钱',
        //   attachment: '2554144545151515.jag',
        //   amount: '12.03',
        //   applyProductIds: '111,222,5544'
        // },
        demo1CheckboxMax: ['2', '3'],
        demo2CheckboxMax: ['2', '3']
      }
    },
    methods: {
      // async apiPost () {
      //   var response = await apiService.apply(this.debtApiInput)
      //   if (response.data.status === 1) {
      //     this.messageSuccess('申请成功')
      //   } else {
      //     this.$vux.toast.warn(response.data.message)
      //   }
      // }
    }
  }
</script>

<style lang="less">
  .zkui-user-apply {
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

