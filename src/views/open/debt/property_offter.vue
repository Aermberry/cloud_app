<template >
  <section class="zkui-user-property_offter">
    <zk-head title='资产提供'></zk-head>
    <div class="from">
      <div class="from-col">
        <popup-radio title="请选择提供方属性" :options="options1" v-model="option1"></popup-radio>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入资产拥有者姓名和单位名称"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请选择所提供的资产类型"></x-input>
      </div>
      <div class="from-col-checker">
        <div class="box">
          <p>请选择合作需求(多选)</p>
        </div>
        <checker v-model="demo1CheckboxMax" default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected">
          <checker-item value="1" type="default">汽车房产</checker-item>
          <checker-item value="2" type="default">家居家纺</checker-item>
          <checker-item value="3" type="default">鞋服箱包</checker-item>
          <checker-item value="4" type="default">矿产珠宝</checker-item>
          <checker-item value="5" type="default">粮油速食</checker-item>
          <checker-item value="6" type="default">艺术品</checker-item>
        </checker>
      </div>
      <div class="from-col-checker ">
        <x-textarea :max="50" placeholder="输入详细地址" :rows="2"></x-textarea>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入资产名称"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入联系电话"></x-input>
      </div>
      <div class="from-col">
        <popup-picker title="所在地区" :data="addressData" :columns="3" show-name v-model="addressValue" ref="addressRef"></popup-picker>

      </div>
      <div class="from-col">
        <x-input required placeholder="请输入品牌"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入型号"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入生产日期"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入存量"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入市场价"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入云债通供货价"></x-input>
      </div>
      <div class="sumbit">
        <x-button type="primary" action-type="button"> 确认提交</x-button>
      </div>
    </div>
    <!-- <zk-foot></zk-foot> -->
  </section>
</template>

<script>
  import { XInput, PopupPicker, Picker, Checker, CheckerItem, XTextarea, XButton, Group, PopupRadio } from 'zkui'
  import { ZkAddress } from 'widgets/address'
  import address from 'src/service/common/address'

  export default {
    components: {
      XInput,
      PopupPicker,
      Picker,
      Checker,
      CheckerItem,
      ZkAddress,
      XTextarea,
      XButton,
      Group,
      PopupRadio
    },
    data () {
      return {
        list1: [['个人', '机构', '企业', '政府']],
        value1: ['个人'],
        demo1CheckboxMax: [],
        addressValue: [],
        addressData: [],
        option1: '',
        options1: ['企业', '政府机构', '金融机构', '集体', '个人', '其他']
      }
    },
    mounted () {
      this.addressData = address.addressData
    },
    methods: {
      onChange (val) {
        console.log('val change', val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      }
    }
  }
</script>

<style lang="less">
  html {
    height: 100%;
    body {
      height: 100%;
    }
  }
  .zkui-user-property_offter {
    height: 100%;
    .from {
      height: 100vh;
      padding: 1rem 40*@rem 0 40*@rem;
      background: @white;
      .from-col {
        border: 2px solid @info;
        border-radius: 20px;
        margin-bottom: 10px;
        .weui-cell {
          padding: 0.63333333rem 1.25rem;
        }
        .weui-label {
          color: @gray-600;
        }
        .vux-label {
          color: @gray-600;
        }
      }
      .from-col-checker {
        border: 2px solid @info;
        min-height: 42*@rem;
        border-radius: 20px;
        margin-bottom: 10px;
        .box {
          padding: 0.83333333rem 1.25rem;
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          p {
            color: @gray-600;
          }
        }
        .vux-checker-item {
          color: @gray-600;
        }
      }
      .sumbit {
        padding: 2rem 4rem;
        button {
          height: 3rem;
        }
      }
    }
  }
</style>

