<template>
  <div class="zkui-pc-orderbuy">
    <div class="address-box auto">
      <h2 class="title">选择收货地址</h2>
      <ul class="address-select">
        <li class="item active">
          <div class="recipients">
            （刘成恩）收
          </div>
          <p class="particular ">
            虎门 东莞市虎门镇新湾富民路海产品市场老渔夫海味店
          </p>
          <p class="default ">默认地址</p>
        </li>
        <li class="item">
          <div class="recipients">
            （刘成恩）收
          </div>
          <p class="particular ">
            虎门 东莞市虎门镇新湾富民路海产品市场老渔夫海味店
          </p>
          <p class="default ">默认地址</p>
        </li>
      </ul>
      <div class="operation ">
        <el-button type="primary">使用新地址</el-button>
        <span class="operation-right fr">
          管理收货地址
        </span>
      </div>
    </div>
    <div class="order-box auto">
      <h2 class="title">确认订单信息 </h2>
      <ul class="buy-tr">
        <li class="td-0">店铺宝贝</li>
        <li class="td-1">商品属性</li>
        <li class="td-2">单价</li>
        <li class="td-3">数量</li>
        <li class="td-4">优惠方式</li>
        <li class="td-5">小计</li>
      </ul>
      <div class="store-name">
        Lorem ipsum, dolor sit amet consectetur ad
      </div>
      <ul class="order-message">
        <li class="td-0 info-detail">
          <router-link to="" class="detail-img">
            <img src="" alt="">
          </router-link>
          <div class="detail-title">
            <router-link to="">
              标题
            </router-link>
          </div>
        </li>
        <li class="td-1 info-sku">
          <p>参数</p>
        </li>
        <li class="td-2 info-price">
          <p>￥3.00</p>
        </li>
        <li class="td-3 quantity">
          <div>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    mounted () {
    },
    methods: {
      handleChange (value) {
        console.log(value)
      }
    },
    data () {
      return {
        num1: 1
      }
    }
  }
</script>
<style lang="less" >
  body {
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clearfix:after {
    content: '';
    display: table;
    clear: both;
  }
  .zkui-pc-orderbuy {
    .auto {
      margin: 0 auto;
      width: 990px;
    }
    background: @white;
    .address-box {
      padding-bottom: 10px;
      margin-top: 30px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
      .title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .address-select {
        display: flex;
        li.item {
          border: 2px solid #e5e5e5;
          vertical-align: top;
          position: relative;
          width: 237px;
          margin: 0 14px 14px 0;
          padding: 11px 15px;
          color: #666;
          cursor: pointer;
          .recipients {
            font-size: 12px;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 5px;
          }
          .particular {
            margin-top: 5px;
            font-size: 12px;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: 5px;
          }
          .default {
            font-size: 12px;
            text-align: right;
            margin-bottom: 10px;
            color: @brand;
          }
        }
        li.active {
          border: 2px solid @brand;
        }
      }
      .operation {
        position: relative;
        button.el-button {
          display: block;
          padding: 10px 10px;
          span {
            font-size: 12px;
            font-weight: 700;
          }
        }
        .operation-right {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          color: @warning;
          font-size: 12px;
        }
      }
    }
    .order-box {
      .title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .td-0 {
        width: 255px;
      }
      .td-1 {
        width: 180px;
      }
      .td-2 {
        width: 120px;
      }
      .td-3 {
        width: 120px;
      }
      .td-4 {
        width: 180px;
      }
      .td-5 {
        width: 130px;
      }
      .buy-tr {
        display: flex;
        li {
          font-size: 12px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-bottom: 3px solid #b2d1ff;
          font-size: 12px;
          margin-left: 1px;
          vertical-align: bottom;
        }
      }
      .store-name {
        padding-bottom: 5px;
        margin-top: 25px;
        border-bottom: 1px dotted #80b2ff;
        height: 22px;
        font-size: 12px;
      }
      .order-message {
        display: flex;
        li {
          padding: 10px 0;
        }
        li.info-detail {
          display: flex;
          padding-left: 10px;
          a.detail-img {
            display: block;
            width: 50px;
            height: 50px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .detail-title {
            padding-left: 10px;
            vertical-align: top;
            a {
              display: block;
              font-size: 12px;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              color: #666;
            }
          }
        }
        li.info-sku {
          p {
            color: @brand;
            font-size: 12px;
            text-align: center;
          }
        }
        li.info-price {
          p {
            font-size: 12px;
            text-align: center;
          }
        }
        li.quantity {
          .el-input-number {
            display: block;
          }
          .el-icon-minus,
          .el-icon-plus {
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
