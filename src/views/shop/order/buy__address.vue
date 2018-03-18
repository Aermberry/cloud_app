<template>
  <section class="zkui_order_buy__address">
    <zk-head goBack='商品详情'></zk-head>
    <div @click="selectAddress" v-if="!hasSelectAddress">
      <group class="mt-0">
        <cell title="地址" value="请选择地址" is-link svg='zk-orderaddress'> </cell>
      </group>
    </div>
    <div class="vux-form-preview weui-form-preview zkui_order_buy-address" v-if="hasSelectAddress" @click="selectAddress">
      <div class="address-left-icon">
        <m-icon name="zk-orderaddress" class="icon"></m-icon>
      </div>
      <div class="address-right-icon">
        <m-icon name="zk-right" class="icon"></m-icon>
      </div>
      <div class="weui-form-preview__hd">
        <label class="weui-form-preview__label address_name">收货人：{{viewModel.name}}</label>
        <em class="weui-form-preview__value">{{viewModel.mobile}}</em>
        <div class="weui-form-preview__item">
          <span class="weui-form-preview__value address_particulars address_name">
            收货地址：{{viewModel.addressDescription}}
          </span>
        </div>
      </div>
    </div>
    <divider class="divider-bg "></divider>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Divider, Group, Cell, TransferDom } from 'zkui'
  import local from 'src/service/common/local'
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
        var defaultAddress = local.getLoginStore('default_address') // 刷新时从缓冲中读取地址
        if (defaultAddress === undefined) {
          // 缓存中不存在地址
          var response = await apiUser.SingleAddress()
          if (response.data.status === 1) {
            this.viewModel = response.data.result
            this.hasSelectAddress = true
            local.setLoginStore('default_address', this.viewModel) // 将购买信息写到缓存中
          } else {
            this.$vux.toast.warn('请先添加地址')
          }
        } else {
          this.viewModel = defaultAddress
          this.hasSelectAddress = true
        }
      }
    },
    data () {
      return {
        viewModel: '', // 数据模型
        hasSelectAddress: false // 已经选择了地址
      }
    }
  }
</script>

<style lang="less">
  .zkui_order_buy__address {
    .vux-form-preview {
      .weui-form-preview__hd {
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        line-height: 2em;
        label {
          color: @metal;
        }
      }
      .address_particulars {
        color: @metal;
        text-align: left;
      }
    }
    .address_name {
      padding-left: 1.8rem;
      padding-right: 1.8rem;
      word-break: break-all;
      text-overflow: ellipsif;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .weui-form-preview__value {
      font-size: @h5-font-size;
      padding-right: 1.8rem;
    }

    .weui-media-box__title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      white-space: pre;
    }
    .zkui_order_buy-address {
      position: relative;
      .address-left-icon {
        position: absolute;
        top: 50%;
        left: 0;
        width: 40*@rem;
        height: 40*@rem;
        transform: translatey(-50%);
        svg {
          width: 100%;
          height: 100%;
        }
      }
      .address-right-icon {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
</style>

