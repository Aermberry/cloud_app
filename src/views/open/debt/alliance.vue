<template>
  <section class="zkui-user-alliance">
    <zk-head title='战略联盟'></zk-head>
    <div class="banner">

    </div>
    <div class="from">
      <div class="from-col">
        <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="please select"></popup-picker>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入对应姓名或单位名称"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入联系电话" mask="99999999999" :max="11" is-type="mobile"></x-input>
      </div>
      <div class="from-col">
        <x-input required placeholder="请输入邮箱" name="email" is-type="email"></x-input>
      </div>
      <div class="from-col-checker">
        <div class="box">
          <p>请输入邮箱</p>
        </div>
        <checker v-model="demo1CheckboxMax" default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected">
          <checker-item value="1" type="default">企业</checker-item>
          <checker-item value="2" type="default">个人</checker-item>
          <checker-item value="3" type="default">借贷</checker-item>
          <checker-item value="4" type="default">供应链</checker-item>
        </checker>
      </div>
    </div>
    <!-- <zk-foot></zk-foot> -->
  </section>
</template>

<script>
  import { XInput, PopupPicker, Picker, Checker, CheckerItem } from 'zkui'
  export default {
    components: {
      XInput,
      PopupPicker,
      Picker,
      Checker,
      CheckerItem
    },
    data () {
      return {
        title1: '手机机型',
        list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
        value1: ['iPhone'],
        demo1CheckboxMax: []
      }
    },
    mounted () {
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
  .zkui-user-alliance {
    .banner {
      width: 100%;
      height: 90px;
    }
    .from {
      padding: 0 40*@rem;
      .weui-cell:before {
        content: none;
      }
      .from-col {
        border: 2px solid @info;
        height: 42*@rem;
        border-radius: 20px;
        margin-bottom: 10px;
        .weui-label {
          color: @gray-600;
        }
        .vux-cell-value {
          color: @gray-600;
        }
      }
      .from-col-checker {
        min-height: 42*@rem;
        border: 2px solid @info;
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
      }
    }
  }
</style>

