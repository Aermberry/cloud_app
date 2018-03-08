<template>
  <section class="user_address">
    <zk-head title='收货地址' goBack='会员中心'></zk-head>
    <checker v-model="checkerbox" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
      <div class="vux-form-preview weui-form-preview" v-for="(item,index) in viewModel" :key="index">
        <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label address_name">{{item.name}}</label>
          <em class="weui-form-preview__value">{{item.mobile}}</em>
          <div class="weui-form-preview__item">
            <span class="weui-form-preview__value address_particulars ">
              {{item.address}}
            </span>
          </div>
        </div>
        <div class="weui-form-preview__ft">
          <a>
            <check-icon :value.sync="demo1">
              <span class="adress-default">默认地址</span>
            </check-icon>
          </a>
          <a class="editor">
            <m-icon name="zk-editor" size="1rem" class="editor-icon"></m-icon>编辑
          </a>
          <a class="delete" @click="AddressDelete(item.id)">
            <m-icon name="zk-remove" size="1rem" class="delete-icon"></m-icon>删除
          </a>
        </div>
        <divider class="divider-bg "></divider>
      </div>
    </checker>
    <div class="add_addressBtn">
      <x-button type="warn" @click.native="add">添加地址</x-button>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
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
      async GetData () {
        var response = await apiUser.GetAddress()
        this.viewModel = response.data.result
        console.log(this.viewModel)
      },
      // 添加默认地址
      async AddressDelete (id) {
        console.log(id)
        let parament = {
          id: id
        }
        var deleteResult = await apiUser.DeleteAddress(parament)
        console.log(id)
        if (deleteResult.data.status === 1) {
          this.GetData()
          this.$vux.toast.success('删除成功')
        } else {
          this.$vux.toast.warn('删除失败')
        }
      },
      // 设置默认地址
      async cutDefault (item, id) {
        console.log(item)
        let par = {
          id: id,
          isDefault: true
        }
        var isDefault = await apiUser.UpdateAddress(par)
        if (isDefault.data.status === 1) {
          this.$vux.toast.success('设置成功')
        } else {
          this.$vux.toast.warn('设置失败')
        }
      },
      add () {
        this.$router.push({
          name: 'address_edit'
        })
      }
    },
    data () {
      return {
        viewModel: '',
        defaultAddress: '2',
        checkerbox: '',
        demo1: false
      }
    }
  }
</script>

<style lang="less">
  .user_address {
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
    .weui-icon-circle {
      font-size: @h4-font-size;
      color: #c9c9c9;
    }
    .weui-icon-success {
      font-size: @h4-font-size;
    }
    [class^='weui-icon-']:before,
    [class*=' weui-icon-']:before {
      margin-top: 0;
      margin-left: 0.5em;
      margin-right: 0;
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
    .demo2-item {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      display: inline-block;
      line-height: 40*@rem;
      text-align: center;
    }
    .demo2-item-selected {
      border-color: @brand;
    }
    .editor {
      margin-left: 14.5rem;
      font-size: @h6-font-size;
    }
    .delete {
      margin-left: 2rem;
      font-size: @h6-font-size;
    }
    .editor-icon {
      position: absolute;
      top: 0.4rem;
      right: 6.9rem;
      color: @gray-600;
    }
    .delete-icon {
      position: absolute;
      top: 0.4rem;
      right: 2.9rem;
      color: @gray-600;
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

