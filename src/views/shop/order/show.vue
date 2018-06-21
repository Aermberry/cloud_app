<template>
  <section class="zkui-order-show">
    <zk-head title='订单详情'></zk-head>
    <!-- <div>
      <group class="mt-0">
        <cell title="地址" value="请选择地址" is-link svg='zk-orderaddress'> </cell>
      </group>
    </div> -->
    <!-- <div class="vux-form-preview weui-form-preview zkui_order_buy-address">
      <div class="address-left-icon">
        <m-icon name="zk-orderaddress" class="icon"></m-icon>
      </div>

      <div class="weui-form-preview__hd" v-if="viewModel.order.deliverUserId>0">
        <label class="weui-form-preview__label address_name" style="width:12rem">销售人：杨雨</label>
        <em class="weui-form-preview__value">{{viewModel.mobile}}</em>
        <div class="weui-form-preview__item">
          <span class="weui-form-preview__value address_particulars address_name">
            联系电话：1376198489484
          </span>
        </div>
      </div>
      <div class="address-right-icon">
        <m-icon name="zk-fixation-phone" class="icon"></m-icon>
      </div>
    </div>
    <div class="vux-form-preview weui-form-preview zkui_order_buy-address">
      <div class="address-left-icon">
        <m-icon name="zk-orderaddress" class="icon"></m-icon>
      </div>

      <div class="weui-form-preview__hd">
        <label class="weui-form-preview__label address_name" style="width:12rem">发货人：{{viewModel.name}}</label>
        <em class="weui-form-preview__value">{{viewModel.mobile}}</em>
        <div class="weui-form-preview__item">
          <span class="weui-form-preview__value address_particulars address_name">
            联系电话：1376198489484
          </span>
        </div>
      </div>
      <div class="address-right-icon">
        <m-icon name="zk-fixation-phone" class="icon"></m-icon>
      </div>
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
    <divider class="divider-bg"></divider>
    <div class="stayShare" v-if="data.orderStatus === 10">
      <div class="stitle flex">
        <div class="stitle-left">
          <m-icon name="zk-cart"></m-icon>
        </div>
        <div class="stitle-right">
          待分享,还差{{GroupUserFirst.count}}人,剩余
          <zk-timedown @time-end="message = '倒计时结束'" :endTime='GroupUserFirst.time '></zk-timedown>
        </div>
      </div>
      <div class="scontent flex">
        <div class="scontent-left">
          <ul class="">
            <li v-for="(item,index) in OrderGroupUser" :key="index">
              ?
              <img :src="item.avator" alt="">
            </li>
            <li>
              ?
              <img src="" alt="">
            </li>
          </ul>
        </div>
        <div class="scontent-right">
          <x-button type="primary" :link="'/product/show/'+data.productSkuItems[0].productId+'?activitySelectId='+OrderGroupUser[0].activityRecordId+'&&userId='+OrderGroupUser[0].userId">邀请好友</x-button>
        </div>
      </div>
    </div>
    <div class="stayShare-popup" v-if="showStayshare">
      <div class="popup-box">
        <span class="vux-close" @click="showStayshare=!showStayshare"></span>
        <div class="p-title">还差
          <span>5</span>人,赶快邀请好友来拼单吧
        </div>
        <div class="p-content">
          <ul class="flex">
            <li>
              <m-icon name="zk-vx" class="icon"></m-icon>
              <p>点击右上角分享给微信好友</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <divider class="divider-bg " v-if="data.orderStatus === 10"></divider>
    <group class="order_show-title">
      <cell :title="data.storeName" :value="state"></cell>
    </group>
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
            <li class="price_count">
              x {{item.buyCount}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <x-textarea title="卖家留言 " placeholder="填写内容已和卖家协商确认 " :show-counter="false " :rows="1"></x-textarea> -->
    <divider class="divider-bg "></divider>
    <div class="zkui-order-information">
      <div class="vux-form-preview weui-form-preview">
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">订单编号:{{data.serial}}</label>
          </div>
          <div class="weui-form-preview__item" v-for="(item,index) in this.data.orderDeliverys" :key="index">
            <label class="weui-form-preview__label">物流编号:{{item.expressNumber}}({{item.name}})</label>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">创建时间: {{data.createTime}}</label>
          </div>
        </div>
      </div>
    </div>
    <group class="operation" v-if="data.orderStatus===1 && data.order.deliverUserId>0">
      <cell>
        <x-button mini plain type="primary" :link="'/order/isonLineDeliver/'+$route.query.id">发货</x-button>
      </cell>
    </group>
    <group class="operation">
      <cell>
        <x-button mini plain type="primary" :link="'/order/isonLineDeliver/'+$route.query.id">发货</x-button>
      </cell>
    </group>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import orderService from 'src/service/api/order.api'
  import { ZkTimedown } from 'widgets'
  import { Divider, Group, Cell, XButton, Box, XTextarea } from 'zkui'
  export default {
    components: {
      Divider,
      Group,
      Cell,
      XButton,
      Box,
      XTextarea,
      ZkTimedown
    },
    data () {
      return {
        viewModel: '', // 数据模型
        data: '',
        state: '',
        showPay: false,
        showStayshare: false,
        OrderGroupUser: '',
        GroupUserFirst: {
          tiem: '',
          count: ''
        }
      }
    },
    mounted () {
      this.GetData()
      console.log(this.$route.query)
    },
    methods: {
      async GetData () {
        var id = this.$route.query.id
        let par = {
          id: id
        }
        var response = await orderService.show(par)
        if (response.data.status === 1) {
          this.data = response.data.result
          console.info('订单详情', this.data)
          this.viewModel = this.data.order.orderExtension.userAddress
          if (this.data.orderStatus === 1) {
            this.state = '待付款'
            this.showPay = true
          } else if (this.data.orderStatus === 2) {
            this.state = '待发货'
          } else if (this.data.orderStatus === 3) {
            this.state = '待收货'
          } else if (this.data.orderStatus === 4) {
            this.state = '待评价'
          } else if (this.data.orderStatus === 10) {
            this.state = '待分享'
          }
          if (this.data.isGroupBuy === true) {
            let oId = {
              orderId: this.data.id
            }
            var OrderGroupUser = await orderService.OrderGroupUser(oId)
            if (OrderGroupUser.data.result === 1) {
              this.OrderGroupUser = OrderGroupUser.data.result
              this.GroupUserFirst.time = this.OrderGroupUser[0].endTime
              this.GroupUserFirst.count = this.OrderGroupUser[0].remainCount
            }
          }
        }
      },
      pay () {
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
    .stayShare {
      .stitle {
        height: 2.5rem;
        padding: 0 1.25rem;
        .stitle-left {
          width: 2rem;
          position: relative;
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: @brand;
          }
        }
        .stitle-right {
          flex: 1;
          color: @gray-600;
          line-height: 2.5rem;
          padding-left: 1.25rem;
        }
      }
      .scontent {
        padding: 0.5rem;
        min-height: 2rem;
        padding-left: 4rem;
        .scontent-left {
          flex: 1;
          ul {
            li {
              float: left;
              width: 2.5rem;
              height: 2.5rem;
              border: 2px dashed #e5e5e5;
              border-radius: 50%;
              margin-right: 0.5rem;
              line-height: 2.5rem;
              text-align: center;
              color: #e5e5e5;
              font-size: @h4-font-size;
              font-weight: bold;
              position: relative;
              img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .scontent-left::after {
          content: '';
          display: block;
          clear: both;
        }
        .scontent-right {
          width: 7rem;
        }
      }
    }
    .stayShare-popup {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 8888;
      background: rgba(0, 0, 0, 0.8);
      .popup-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        background: white;
        min-height: 3rem;
        border-radius: 10px;
        padding: 2rem;
        .vux-close {
          position: absolute;
          top: 0;
          right: 0;
        }
        .p-title {
          height: 2.5rem;
          color: @black;
          font-size: @h4-font-size;
          font-weight: bold;
          text-align: center;
          span {
            font-size: @h4-font-size;
            font-weight: bold;
            color: @brand;
          }
        }
        .p-content {
          .flex {
            li {
              flex: 1;
              svg {
                display: block;
                margin: 0 auto;
                width: 3.5rem;
                height: 3.5rem;
              }
              p {
                text-align: center;
                color: @gray-600;
                margin-top: 0.5rem;
              }
            }
          }
        }
      }
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
          padding: 5 * @rem 10 * @rem;
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
            margin-top: 5 * @rem;
            .weui-form-preview__label,
            .weui-form-preview__value {
              font-size: @h5-font-size;
              font-weight: @font-weight-normal;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
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
          padding: 5 * @rem 10 * @rem;
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
        left: 0.8rem;
        width: 20 * @rem;
        height: 20 * @rem;
        transform: translatey(-50%);
        svg {
          width: 100%;
          height: 100%;
        }
      }
      .address-right-icon {
        position: absolute;
        top: 50%;
        right: 0.5rem;
        width: 20 * @rem;
        height: 20 * @rem;
        transform: translatey(-50%);
        svg {
          width: 100%;
          height: 100%;
          color: @success;
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
