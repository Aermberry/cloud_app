<template>
  <section>
    <zk-head title='确认下单' goBack='商品详情'></zk-head>
    <div @click="selectAddress">
      <group class="mt-0">
        <cell title="地址" value="请选择地址" is-link v-if="addressBox" svg='zk-orderaddress'> </cell>
      </group>
    </div>
    <div>
      <div class="vux-form-preview weui-form-preview" v-if="!addressBox" @click="selectAddress">
        <div class="weui-form-preview__hd">
          <label class="weui-form-preview__label address_name">收货人：{{viewModel.name}}</label>
          <em class="weui-form-preview__value">{{viewModel.mobile}}</em>
          <div class="weui-form-preview__item">
            <span class="weui-form-preview__value address_particulars address_name">
              <m-icon name="zk-orderaddress" size="2.5rem" class="icon"></m-icon>
              收货地址：{{viewModel.addressDescription}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <divider class="divider-bg "></divider>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Divider, Group, Cell, TransferDom } from 'zkui'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Divider,
      Group,
      Cell
    },
    mounted () {
      this.GetData()
    },
    methods: {
      selectAddress () {
        this.$router.push({
          name: 'address_index',
          params: {
            selectType: true
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
        addressMessage: '',
        addressBox: true,
        showAddress: true // 显示地址
      }
    }
  }
</script>

<style lang="less">

</style>

