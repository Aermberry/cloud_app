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
      </ul>
      <div class="order-store" v-for="(store,storeIndex) in modelView.storeItems " :key="storeIndex">
        <div class="store-name">
          {{store.storeName}}
        </div>
        <ul class="order-message" v-for="(productSku,productSkuIndex) in store.productSkuItems " :key="productSkuIndex">
          <li class="td-0 info-detail">
            <router-link :to="'/product/show/'+productSku.productId" class="detail-img">
              <img :src="productSku.thumbnailUrl " alt="">
            </router-link>
            <div class="detail-title">
              <router-link :to="'/product/show/'+productSku.productId">
                {{productSku.name}}
              </router-link>
            </div>
          </li>
          <li class="td-1 info-sku">
            <p>{{productSku.bn}} {{productSku.propertyValueDesc}} 重量：{{productSku.weight}}g</p>
          </li>
          <li class="td-2 info-price">
            <p>￥{{productSku.displayPrice}}</p>
          </li>
          <li class="td-3 quantity">
            <p>
              X 24
            </p>
          </li>
          <li class="td-4 discounts ">

          </li>
        </ul>
      </div>
      <div class="order-ext">
        <div class="ext-left">
          <div class="order-memo">
            给卖家留言:
            <el-input v-model="memoInput" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="ext-right">
          <div class="delivery">
            <div class="delivery-title">
              运送方式:
            </div>
            <div class="delivery-info">
              普通配送
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="delivery-price">
              10.00
            </div>
          </div>
        </div>
      </div>
      <div class="order-pay">
        <div class="pay-txt">
          店铺合计(含运费):
        </div>
        <div class="pay-price">
          ￥50.00
        </div>
      </div>
      <div class="order-payInfo">
        <div class="payInfo-wrapper">
          <div class="payInfo-shadow">
            <div class="order-realpay">
              <div class="realpay-left">
                <p>实付款：</p>
              </div>
              <div class="realpay-right">
                <p>￥25.80</p>
              </div>
            </div>
            <div class="order-confirmAddr">
              <div class="confirmAddr-left">寄送至：</div>
              <div class="confirmAddr-right">Lorem ipsum dolor sit amet consectetur adipisicicia rerum euia accusamu</div>
            </div>
            <div class="confirmAddr-addr-user">
              <div class="addr-user-left">
                收件人：
              </div>
              <div class="addr-user-right">
                刘成恩 136448444965
              </div>
            </div>
          </div>
        </div>
        <div class="paybutton">
          <el-button type="primary">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import apiService from 'src/service/api/order.api'
  import local from 'src/service/common/local'
  export default {
    components: {
    },
    mounted () {
      this.GetData()
    },
    methods: {
      handleChange (value) {
        console.log(value)
      },
      async GetData () {
        var buyProductInfo = ''
        // let buyProduct = [{
        //   ProductSkuId: this.selectSku.id,
        //   Count: this.buyCount,
        //   ProductId: this.productShow.id,
        //   storeId: this.productShow.storeId,
        //   LoginUserId: this.LoginUser().id
        // }]
        // buyProductInfo = buyProduct
        if (this.$route.params.buyInfo !== undefined) {
          buyProductInfo = this.$route.params.buyInfo
          local.setStore('order_buy', buyProductInfo) // 将购买信息写到缓存中
        } else {
          buyProductInfo = local.getStore('order_buy') // 刷新时从缓冲中读取数据
        }
        if (this.$route.params.isFromCart !== undefined) {
          this.isFromCart = this.$route.params.isFromCart // 记录购买信息是否来自购物车
        }
        if (buyProductInfo === undefined) {
          this.$message.error('暂无商品，清先购买商品')
          this.$router.push({
            name: 'commont_index'
          })
        } else {
          var buyInfoInput = {
            loginUserId: this.LoginUser().id,
            productJson: JSON.stringify(buyProductInfo)
          }
          var response = await apiService.buyProduct(buyInfoInput)
          if (response.data.status === 1) {
            this.modelView = response.data.result
            console.log('modelView', this.modelView)
            for (var i = 0; i < this.modelView.storeItems.length; i++) {
              this.showDelivery[i] = this.modelView.storeItems[i].expressTemplates[0].key
              this.userMessages[i] = '' // 初始化留言信息
            }
            // 初始化币种
            for (var k = 0; k < this.modelView.allowMoneys.length; k++) {
              this.reduceMoneys[k] = true
            }
          }
        }
      }
    },
    data () {
      return {
        modelView: '',
        showDelivery: [], // 显示物流快递
        userMessages: [], // 留言信息
        reduceMoneys: [], // 非人民币资产信息
        memoInput: '',
        isFromCart: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
<style lang="less" >
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
        width: 230px;
      }
      .td-2 {
        width: 160px;
      }
      .td-3 {
        width: 160px;
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
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-bottom: 3px solid #b2d1ff;
          font-size: 14px;
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
        background-color: #fbfcff;
        border-bottom: 1px solid @white;
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
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .detail-title {
            flex: 1;
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
            font-size: 14px;
            text-align: center;
          }
        }
        li.info-price {
          p {
            font-size: 14px;
            text-align: center;
          }
        }
        li.quantity {
          p {
            font-size: 14px;
            text-align: center;
          }
        }
        li.subtotal {
          .price {
            color: @brand;
            font-size: 14px;
            text-align: right;
            padding-right: 10px;
          }
        }
      }
      .order-ext {
        display: flex;
        background-color: #f2f7ff;
        border-bottom: 1px solid @white;
        .ext-left {
          flex: 1;
          border-right: 1px solid @white;
          .order-memo {
            height: 40px;
            display: flex;
            padding: 10px;
            font-size: 12px;
            align-items: center;
            font-size: 12px;
            .el-input {
              flex: 1;
              padding-left: 5px;
              .el-input__inner {
                height: 25px;
              }
            }
          }
        }
        .ext-right {
          flex: 1;
          .delivery {
            height: 40px;
            padding: 10px;
            display: flex;
            align-items: center;
            .delivery-title {
              display: flex;
              align-items: center;
              text-align: right;
              width: 95px;
              padding-right: 15px;
              font-size: 12px;
            }
            .delivery-info {
              flex: 1;
              display: flex;
              align-items: center;
              font-size: 12px;
              .el-input__inner {
                height: 20px;
              }
              .el-select .el-input .el-select__caret {
                display: block;
              }
              .el-select > .el-input {
                padding-left: 5px;
              }
            }
            .delivery-price {
              color: @brand;
              display: flex;
              align-items: center;
              font-size: 12px;
              text-align: right;
            }
          }
        }
      }
      .order-pay {
        background-color: #f2f7ff;
        height: 50px;
        display: flex;
        .pay-txt {
          flex: 1;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 5px;
        }
        .pay-price {
          font-size: 18px;
          display: flex;
          align-items: center;
          color: @brand;
          padding-right: 10px;
        }
      }
      .order-payInfo {
        margin-top: 15px;
        .payInfo-wrapper {
          width: 373px;
          margin-left: 617px;
          border: 1px solid @brand;
          .payInfo-shadow {
            border: 3px solid #fff0e8;
            width: 370px;
            padding: 10px 10px 10px 20px;
            .order-realpay {
              display: flex;
              .realpay-left {
                flex: 1;
                p {
                  display: flex;
                  align-items: flex-end;
                  font-size: 14px;
                  color: @black;
                  font-weight: blod;
                  height: 100%;
                  justify-content: flex-end;
                  font-weight: bold;
                }
              }
              .realpay-right {
                p {
                  font-size: 18px;
                  color: @brand;
                  font-weight: bold;
                }
              }
            }
            .order-confirmAddr {
              margin-top: 10px;
              display: flex;
              .confirmAddr-left {
                font-weight: bold;
                font-size: 14px;
              }
              .confirmAddr-right {
                flex: 1;
                width: 200px;
                font-size: 14px;
              }
            }
            .confirmAddr-addr-user {
              display: flex;
              .addr-user-left {
                font-weight: bold;
                font-size: 14px;
                flex: 1;
                text-align: right;
              }
              .addr-user-right {
                font-size: 14px;
              }
            }
          }
        }
      }
      .paybutton {
        button {
          display: block;
          margin-left: 876px;
          border-radius: 0;
          span {
            font-size: 18px;
          }
        }
      }
    }
  }
  .el-select-dropdown__item span {
    font-size: 12px;
  }
</style>
