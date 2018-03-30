<template>
  <section class="user_address">
    <zk-head :title='addressTitle' goBack=''>
      <a slot="right" href="/user/address/index">管理</a>
    </zk-head>
    <checker v-model="defaultCheck" default-item-class="check-icon-item" type="radio" selected-item-class="check-icon-item-selected">
      <div class="vux-form-preview weui-form-preview" v-for="(item,index) in viewModel" :key="index" @click="selectAddress(item.id)">
        <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label address_name">{{item.name}}</label>
          <em class="weui-form-preview__value">{{item.mobile}}</em>
          <div class="weui-form-preview__item">
            <span class="weui-form-preview__value address_particulars ">
              {{item.addressDescription}}
            </span>
          </div>
        </div>
        <div class="weui-form-preview__ft">
          <div class="editor_default">
            <checker-item :value="item.id" type="default">默认地址</checker-item>
          </div>
        </div>
        <divider class="divider-bg "></divider>
      </div>
    </checker>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import local from 'src/service/common/local'
  import { Checker, CheckerItem, Divider, Group, Cell, Popup, TransferDom, FormPreview, CheckIcon, XButton } from 'zkui'
  export default {
    directives: {
      TransferDom
    },
    components: {
      FormPreview,
      Checker,
      CheckerItem,
      Divider,
      Group,
      Cell,
      Popup,
      CheckIcon,
      XButton
    },
    mounted () {
      this.GetData()
    },
    methods: {
      // 获取地址
      async GetData () {
        var selectStatus = this.$route.params.selectType
        if (selectStatus !== undefined) {
          this.selectType = true // 选择地址模式
        }
        var response = await apiUser.GetAddress()
        if (response.data.status === 1) {
          this.viewModel = response.data.result
          this.viewModel.forEach(element => {
            if (element.isDefault) {
              this.defaultCheck = element.id
            }
          })
        } else {
          this.messageWarn(response.data.message)
        }
      },
      // 选择地址，同时将地址写入缓存中
      async selectAddress (id) {
        let param = {
          id: id
        }
        var response = await apiUser.SingleAddress(param)
        if (response.data.status === 1) {
          local.setLoginStore('default_address', response.data.result) // 将地址信息写到缓存中
        }
        this.$router.push({
          name: 'order_buy'
        })
      }
    },
    data () {
      return {
        viewModel: '', // 数据模型
        selectType: false, // 地址选择默认，如果是选择地址的时为true
        addressTitle: '选择地址',
        defaultCheck: '' // 选中地址
      }
    }
  }
</script>

<style scoped  lang="less">
  .user_address {
    padding-bottom: 35*@rem;
    body {
      background: @gray-100;
      padding-bottom: 50*@rem;
    }
    .address_name {
      font-size: 1.2rem;
      color: @black;
      text-align-last: none;
    }
    .address_particulars {
      font-size: 1rem;
      color: @black;
      text-align: left;
    }
    .weui-form-preview:after {
      border-bottom: 0;
    }
    .weui-form-preview__btn {
      height: 3.33333333rem;
      line-height: 3.33333333rem;
    }
    .weui-form-preview__hd {
      padding: 0.2rem 1.25rem 0.2rem 1.25rem;
      line-height: 2em;
      .weui-form-preview__value {
        font-size: @h5-font-size;
      }
    }
    .weui-form-preview__hd:after {
      border-bottom: 0;
    }
    .weui-form-preview__ft {
      line-height: 2.2rem;
    }
    .vux-x-switch {
      height: 3.33333333rem;
      padding: 0;
    }
    .weui-cell__ft {
      height: 3.33333333rem;
      input {
        margin-top: 0.35rem;
      }
    }
    .weui-switch:before,
    .weui-switch-cp__box:before {
      height: 2.66666667rem !important;
    }
    .weui-switch:after,
    .weui-switch-cp__box:after {
      height: 2.66666667rem !important;
      width: 2.66666667rem !important;
    }
    .editor_default {
      width: 70%;
      float: left;
    }
    .editor_delete {
      display: block;
      width: 30%;
      float: right;
      font-size: @h6-font-size;
      .editor {
        span {
          left: 1rem;
        }
        svg {
          top: 0.4rem;
          left: 0rem;
        }
      }
      .delete {
        span {
          left: 3rem;
        }
        svg {
          top: 0.4rem;
          left: 2rem;
        }
      }
    }
    .adress-default {
      font-size: @h6-font-size;
    }
    .add_addressBtn {
      position: fixed;
      width: 100%;
      height: 2.5rem;
      overflow-y: auto;
      z-index: 5;
      background-color: white;
      bottom: 3.33333333rem;
      .weui-btn {
        border-radius: 0;
        height: 2.5rem;
      }
    }
  }
</style>

