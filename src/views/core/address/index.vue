<template>
  <section class="user_address">
    <zk-head :title='addressTitle' goBack='会员中心'></zk-head>
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
            <checker-item :value="item.id" type="default" @on-item-click="setDefault">默认地址</checker-item>
          </div>
          <div class="editor_delete">
            <a class="editor" @click="edit(item.id)">
              <m-icon name="zk-editor" size="1rem" class="editor-icon metal"></m-icon>
              <span>编辑</span>
            </a>
            <a class="delete" @click="AddressDelete(item.id)">
              <m-icon name="zk-remove" size="1rem" class="delete-icon brand"></m-icon>
              <span>删除</span>
            </a>
          </div>
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
      if (this.selectType) {
        this.addressTitle = '选择地址'
      }
    },
    methods: {
      // 获取地址
      async GetData () {
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
      // 删除地址
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
      // 添加地址
      add () {
        this.$router.push({
          name: 'address_edit'
        })
      },
      // 设置为默认地址
      async setDefault (item) {
        if (!this.selectType) {
          let param = {
            userId: this.LoginUser().id,
            id: item
          }
          var isDefault = await apiUser.setDefault(param)
          if (isDefault.data.status === 1) {
            this.$vux.toast.success('设置成功')
          } else {
            this.$vux.toast.warn(isDefault.data.message)
          }
        }
      },
      // 编辑地址
      edit (item) {
        if (!this.selectType) {
          this.$router.push({
            name: 'address_edit',
            params: {
              id: item
            }
          })
        }
      },
      selectAddress (id) {
        console.info('选择的地址Id', id)
      }
    },
    data () {
      return {
        viewModel: '', // 数据模型
        selectType: false, // 地址选择默认，如果是选择地址的时为true
        addressTitle: '地址管理',
        defaultCheck: '' // 选中地址
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

