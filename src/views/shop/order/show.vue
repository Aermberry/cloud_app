<template>
  <section class="zkui-order-show">
    <zk-head title='订单详情' goBack='我的订单'></zk-head>
    <!-- <div>
      <group class="mt-0">
        <cell title="地址" value="请选择地址" is-link svg='zk-orderaddress'> </cell>
      </group>
    </div> -->
    <div class="vux-form-preview weui-form-preview zkui_order_buy-address">
      <div class="address-left-icon">
        <m-icon name="zk-orderaddress" class="icon"></m-icon>
      </div>

      <div class="weui-form-preview__hd">
        <label class="weui-form-preview__label address_name" style="width:12rem">收货人：{{viewModel.name}}</label>
        <em class="weui-form-preview__value">{{viewModel.mobile}}</em>
        <div class="weui-form-preview__item">
          <span class="weui-form-preview__value address_particulars address_name">
            收货地址：{{viewModel.addressDescription}}
          </span>
        </div>
      </div>
    </div>
    <divider class="divider-bg "></divider>
    <group class="order_show-title">
      <cell :title="data.storeName" :value="state"></cell>
    </group>
    <div class="zkui-order-list-product" v-for="(item,index) in data.productSkuItems" :key="index">
      <ul class="flex">
        <li class="left-img"><img :src="item.thumbnailUrl" alt=""></li>
        <li class="flex_one center-content">
          <p>
            {{item.name}}
          </p>
          <span>
            {{item.propertyValueDesc}}
          </span>
        </li>
        <li class="left-price">
          <ul>
            <li class="price_now">￥{{item.price}}</li>
            <!-- <li class="price_old">￥69.00</li> -->
            <li class="price_count">
              x {{item.buyCount}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <group>
      <cell title="公益宝贝" is-link></cell>
    </group> -->

    <div class="zkui-order-show-price">
      <div class="vux-form-preview weui-form-preview">
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">运费</label>
            <span class="weui-form-preview__value">￥{{data.expressAmount}}</span>
          </div>
          <!-- <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">冲冠促销</label>
            <span class="weui-form-preview__value">-￥69.00</span>
          </div> -->
          <div class="weui-form-preview__item reality-payment">
            <label class="weui-form-preview__label">实付款(含运费)</label>
            <span class="weui-form-preview__value">￥{{data.totalAmount}}</span>
          </div>
        </div>
        <!-- <div class="weui-form-preview__ft">
          <a href="javascript:" class="weui-form-preview__btn">联系卖家</a>
          <a href="javascript:" class="weui-form-preview__btn ">拨打电话</a>
        </div> -->
      </div>
    </div>
    <divider class="divider-bg "></divider>
    <div class="zkui-order-information">
      <div class="vux-form-preview weui-form-preview">
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">订单编号:45662485624896214598</label>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">创建时间: {{data.createTime}}</label>
          </div>
        </div>
      </div>
    </div>
    <group class="operation " v-if="showPay">
      <cell>
        <x-button mini plain type="primary" @click.native="pay()">付款</x-button>
      </cell>
    </group>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import orderService from 'src/service/api/order.api'
  import apiUser from 'src/service/api/user.api'
  import orderService from 'src/service/api/order.api'
  import { Divider, Group, Cell, XButton, Box } from 'zkui'
  import local from 'src/service/common/local'
  export default {
    components: {
      Divider,
      Group,
      Cell,
      XButton,
      Box
    },
    data () {
      return {
        viewModel: '', // 数据模型
        data: '',
        state: '',
        showPay: false
      }
    },
    mounted () {
      this.GetData()
      console.log(this.$route.query)
    },
    methods: {
      async GetData () {
        var defaultAddress = local.getLoginStore('default_address') // 刷新时从缓冲中读取地址
        if (defaultAddress === undefined) {
          // 缓存中不存在地址
          var response = await apiUser.SingleAddress()
          if (response.data.status === 1) {
            this.viewModel = response.data.result
            local.setLoginStore('default_address', this.viewModel) // 将购买信息写到缓存中
          }
        } else {
          this.viewModel = defaultAddress
        }
        // console.log(this.$route.params.showId)
        var id = this.$route.query.id
        let par = {
          id: id
        }
        var showData = await orderService.show(par)
        this.data = showData.data.result
        if (this.data.orderStatus === 1) {
          this.state = '待付款'
          this.showPay = true
        } else if (this.data.orderStatus === 2) {
          this.state = '待发货'
        } else if (this.data.orderStatus === 3) {
          this.state = '待收货'
        } else if (this.data.orderStatus === 4) {
          this.state = '待评价'
        }
      },
      pay () {
        console.log(123, this.data)
        var buyProductInfo = []
        console.log(this.data.productSkuItems[0].productId)
        var buyItem = {
          // ProductSkuId: this.data.productSkuItems[0].productSkuId,
          // Count: this.data.productSkuItems[0].buyCount,
          // ProductId: this.data.productSkuItems[0].productId,
          // storeId: this.data.storeId,
          LoginUserId: this.LoginUser().id,
          Count: 1,
          ProductId: 65,
          ProductSkuId: 372,
          storeId: 1
        }
        buyProductInfo.push(buyItem)
        console.log(buyProductInfo)
        this.$router.push({
          name: 'order_buy',
          params: {
            buyInfo: buyProductInfo
          }
        })
      }
    }
  }
</script>
<style   lang="less">
  .zkui-order-show {
    .flex {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .flex_one {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .weui-cells {
      margin-top: 0;
      .weui-cell {
        height: 3rem;
      }
    }
    .order_show-title {
      .weui-cell {
        .vux-label {
          color: @brand;
          font-weight: @font-weight-bold;
        }
      }
    }
    .zkui-order-show-price {
      .vux-form-preview {
        .weui-form-preview__bd {
          padding: 5*@rem 10*@rem;
          line-height: 1.5;
          .weui-form-preview__item {
            .weui-form-preview__label {
              color: @black;
              font-size: @h6-font-size;
              font-weight: @font-weight-normal;
            }
            .weui-form-preview__value {
              padding-right: 0;
              color: @brand;
              font-size: @h6-font-size;
              font-weight: @font-weight-normal;
            }
          }
          .reality-payment {
            margin-top: 5*@rem;
            .weui-form-preview__label,
            .weui-form-preview__value {
              font-size: @h5-font-size;
              font-weight: @font-weight-normal;
            }
          }
        }
        .weui-form-preview__ft {
          .weui-form-preview__btn {
            color: @brand;
          }
        }
      }
    }
    .zkui-order-information {
      .vux-form-preview {
        .weui-form-preview__bd {
          padding: 5*@rem 10*@rem;
          line-height: 1.5;
          .weui-form-preview__item {
            .weui-form-preview__label,
            .weui-form-preview__value {
              font-size: @h6-font-size;
              font-weight: @font-weight-normal;
            }
            .weui-form-preview__value {
              padding-right: 0;
              .weui-btn {
                line-height: 1.5;
                font-size: @h6-font-size;
              }
            }
          }
        }
      }
    }
    .zkui-order-list-product {
      width: 100%;
      background: @gray-100;

      ul {
        padding: 0.5rem;
        height: 5.5rem;
        .left-img {
          width: 4.5rem;
          height: 4.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .center-content {
          padding: 0 0.5rem;
          p {
            font-size: @h5-font-size;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-family: Helvetica;
          }
          span {
            color: @gray-500;
            font-size: @h6-font-size;
          }
        }
      }
      .left-price {
        min-width: 4.5rem;
        height: 6.5rem;
        ul {
          padding: 0;
          li {
            width: 100%;
            text-align: right;
            font-family: Helvetica;
            font-weight: @font-weight-normal;
          }
          li.price_now {
            color: @brand;
            font-size: @h4-font-size;
            font-weight: @font-weight-bold;
          }
          li.price_old {
            color: @gray-500;
            text-decoration: line-through;
          }
          li.price_count {
            color: @gray-500;
            font-size: 0.85rem;
          }
        }
      }
    }
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
    }
    .operation {
      .weui-btn {
        width: 6rem;
        height: 2rem;
        line-height: 2rem;
      }
    }
  }
</style>
