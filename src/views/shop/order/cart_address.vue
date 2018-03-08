<template>
  <section class="zkui-user-buyeraddress-index">
    <zk-head title='选择收货地址' goBack=''></zk-head>
    <div class="vux-form-preview weui-form-preview" v-for="(item,index) in viewModel" :key="index" @click="selectId(item.id)">
      <div class="weui-form-preview__hd">
        <label class="weui-form-preview__label address_name">{{item.name}}</label>
        <em class="weui-form-preview__value">{{item.mobile}}</em>
      </div>
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <span class="weui-form-preview__value address_particulars ">
            {{item.address}}承恩哥的家承恩哥的家 承恩哥的家承恩哥的家承恩哥的家承恩哥的家
          </span>
        </div>
      </div>
      <div class="weui-form-preview__ft">
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { FormPreview } from 'vux'
  import { Checker, CheckerItem, Divider, Group, Cell, Popup, TransferDom, XSwitch } from 'zkui'
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
      XSwitch
    },
    mounted () {
      this.GetData()
    },
    methods: {
      selectId (a) {
        this.$router.push({
          name: 'order_buy',
          params: {
            selectId: a
          }
        })
      },
      async GetData () {
        var response = await apiUser.GetAddress()
        this.viewModel = response.data.result
      }
    },
    data () {
      return {
        viewModel: '',
        defaultAddress: '2'
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
</style>

