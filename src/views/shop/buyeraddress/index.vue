<template>
  <section class="zkui-user-buyeraddress-index">
    <zk-head title='收货地址' goBack='会员中心'></zk-head>
    <checker v-model="checkerbox" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
      <div class="vux-form-preview weui-form-preview" v-for="(item,index) in viewModel" :key="index">
        <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label address_name">{{item.name}}</label>
          <em class="weui-form-preview__value">{{item.mobile}}</em>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <span class="weui-form-preview__value address_particulars ">
              {{item.address}}承恩哥的家
            </span>
          </div>
        </div>
        <div class="weui-form-preview__ft">
          <a>
            <check-icon :value.sync="demo1"> {{ demo1 }}</check-icon>
          </a>
          <a>编辑</a>
          <a @click="AddressDelete(item.id)">删除</a>
        </div>
      </div>
    </checker>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Checker, CheckerItem, Divider, Group, Cell, Popup, TransferDom, FormPreview, CheckIcon } from 'zkui'
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
      CheckIcon
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
      async AddressDelete (id) {
        console.log(id)
        let parament = {
          id: id
        }
        var deleteResult = await apiUser.DeleteAddress(parament)
        console.log(id)
        if (deleteResult.data.status === 1) {
          this.$vux.toast.success('删除成功')
        } else {
          this.$vux.toast.warn('删除失败')
        }
      },
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
        // this.$nextTick(function () {
        //   this.viewModel.forEach(function () {
        //     vue.set(item, 'active', true)
        //   })
        //   vue.set(item, 'active', false)
        //   console.log(this.viewModel)
        // })
      }
    },
    data () {
      return {
        viewModel: '',
        defaultAddress: '2',
        checkerbox: '',
        demo1: '设为默认',
        demo2: '默认地址'
      }
    }
  }
</script>

<style lang="less">
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
  .weui-form-preview {
    margin-bottom: 0.5rem;
  }
  .weui-form-preview__btn {
    height: 3.33333333rem;
    line-height: 3.33333333rem;
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
</style>

