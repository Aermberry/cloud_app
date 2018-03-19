<template>
  <section class="zkui-order-cart">
    <zk-head title='购物车' class="zkui-order-cart-head"></zk-head>
    <div class="zkui-order-cart-box" v-if="hasData">
      <div v-for="(store,storeIndex) in viewModel.storeItems" :key="storeIndex" class="cart_item-box">
        <div class="weui-cells weui-cells_checkbox">
          <label class="weui-cell weui-check_label cart_item-title">
            <div class="weui-cell__hd">
              <input type="checkbox" v-model="storeCheckModel[storeIndex]" class="weui-check" @click='storeCheck(store.storeId,storeIndex)'>
              <i class="weui-icon-checked vux-checklist-icon-checked"></i>
            </div>
            <div class="weui-cell__bd">
              <p>{{store.storeName}}</p>
            </div>
          </label>
        </div>
        <checker default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected" v-model="productSkuIdChecks[storeIndex]">
          <ul>
            <li class="zkui-order-cart-item" v-for="(productSku,skuIndex) in store.productSkuItems" :key="skuIndex">
              <div class="order-cart-commodity">
                <div slot="content" class="demo-content " style="height:7.8rem">
                  <ul class="flex order-cart-commodity-box">
                    <li class="order-cart-commodity-left">
                      <div class="weui-cells weui-cells_checkbox">
                        <label class="weui-cell weui-check_label car_item-left">
                          <div class="weui-cell__hd">
                            <checker-item :value="productSku.productSkuId" :key="productSku.productSkuId" type="default" @on-item-click="storeProductCheck(productSku.productSkuId,storeIndex,skuIndex)"></checker-item>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="flex_one">
                      <div class="order-cart-commodit-into flex">
                        <div class="order-cart-commodity-into_left">
                          <router-link :to="'/product/show/'+productSku.productId">
                            <img :src="productSku.thumbnailUrl" alt="">
                          </router-link>
                        </div>
                        <div class="flex_one order-cart-commodity-into_right ">
                          <router-link :to="'/product/show/'+productSku.productId">
                            <p>{{productSku.name}}</p>
                          </router-link>
                          <span>{{productSku.propertyValueDesc}}</span>
                          <ul class="flex">
                            <li class="price_now">￥{{productSku.price}}</li>
                            <li class="price_old">￥{{productSku.marketPrice}}</li>
                            <li class="flex_one price_num">
                              <inline-x-number @click.native="changeCount(storeIndex,skuIndex,productSku.productSkuId)" :min="0" width="3rem" :max="productSku.stock" button-style="round" v-model="buySkuCount[storeIndex][skuIndex]"></inline-x-number>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </checker>
      </div>
    </div>
    <div class="empty-cart" v-if="!hasData">
      <p class="upwarp-nodata">
        <i class="weui-icon weui_icon_waiting weui-icon-waiting weui-icon_msg"></i><br>
        <span>暂无数据</span>
      </p>
    </div>
    <div class="zkui-order-cart-bar">
      <tabbar>
        <tabbar-item class="bar-left">
          <span slot="label" class="label">
            <div class="weui-cells weui-cells_checkbox">
              <label class="weui-cell weui-check_label car_item-all">
                <div class="weui-cell__hd"><input type="checkbox" v-model="allCheck" class="weui-check" @click="allChecker">
                  <i class="weui-icon-checked vux-checklist-icon-checked"></i>
                </div>
              </label>
            </div>
          </span>
        </tabbar-item>
        <tabbar-item class="bar-center">
          <span slot="label">全选({{totalCount}})</span>
        </tabbar-item>
        <tabbar-item class="bar-num">
          <span slot="label" class="zkui-order-cart-bar-price">{{totalAmount}}</span>
        </tabbar-item>
        <tabbar-item class="bar-right">
          <x-button slot="customer" type="primary" class="zkui-order-cart-bar-close" @click.native="buy">结算</x-button>
        </tabbar-item>
      </tabbar>
    </div>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton, GroupTitle, Checklist, InlineXNumber, Checker, CheckerItem } from 'zkui'
  export default {
    data () {
      return {
        totalCount: 0, // 店铺选择商品总数量
        totalAmount: 0, // 店铺选择商品总价格
        hasData: true, // 判断购物车数据
        viewModel: '', // 数据对象
        buySkuCount: [], // 商品sku 选择数量
        productSkuChecks: [], // 店铺选择商品
        productSkuIdChecks: [], // 店铺选择商品，绑定checker
        storeCheckModel: [], // 店铺选择数组，实现全选和取消全选事件
        allCheck: true, // 整个购物车全选
        storeTotalSkuIds: [] // 计算店铺skuId总数量，实现全选事件
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      XButton,
      Checklist,
      GroupTitle,
      Checker,
      CheckerItem,
      InlineXNumber
    },
    mounted () {
      this.GetData()
      if (this.storeCheckModel.indexOf(false) === -1) {
        this.allCheck = true
      } else {
        this.allCheck = false
      }
    },
    updated () {
      this.ceshi()
    },
    methods: {
      async GetData () {
        var reponse = await userService.GetCart()
        this.viewModel = reponse.data.result
        if (reponse.data.status === 1) {
          this.initCart(reponse.data.result) // 初始化购物车
          if (reponse.data.result.storeItems.length === 0) {
            this.hasData = false
          }
        } else {
          // this.$vux.toast.warn(reponse.data.message)
          this.hasData = false
        }
      },
      // 全选、
      allChecker () {
        if (this.allCheck === true) {
          for (var r = 0; r < this.storeCheckModel.length; r++) {
            this.storeCheckModel[r] = false
          }
          for (var e = 0; e < this.productSkuIdChecks.length; e++) {
            this.productSkuIdChecks[e] = []
          }
        } else {
          for (var u = 0; u < this.storeCheckModel.length; u++) {
            this.storeCheckModel[u] = true
          }
          var allList = {}
          for (var n = 0; n < this.viewModel.storeItems.length; n++) {
            allList[n] = []
            for (var m = 0; m < this.viewModel.storeItems[n].productSkuItems.length; m++) {
              allList[n].push(this.viewModel.storeItems[n].productSkuItems[m].productSkuId)
            }
          }
          for (var k = 0; k < this.viewModel.storeItems.length; k++) {
            this.productSkuIdChecks[k] = allList[k]
          }
        }
      },
      // 初始化购物车
      initCart (data) {
        this.hasData = true
        this.totalCount = this.viewModel.totalCount
        this.totalAmount = this.viewModel.totalAmount
        // 默认选中所有的元素
        for (var i = 0; i < this.viewModel.storeItems.length; i++) {
          var storeItem = this.viewModel.storeItems[i]
          this.storeTotalSkuIds[i] = []
          this.storeCheckModel[i] = true // 设置所有默认被选择
          this.storeTotalSkuIds[i].push(storeItem.productSkuItems.length)
          this.productSkuChecks[i] = [] // 店铺skuIds数量
          this.productSkuIdChecks[i] = []
          //  console.info('数量', this.storeTotalSkuIds[i], i)
          // 计算商品sku 的选择数量
          this.buySkuCount[i] = []
          for (var j = 0; j < storeItem.productSkuItems.length; j++) {
            var productSkuItem = storeItem.productSkuItems[j]
            this.productSkuChecks[i].push(productSkuItem)
            this.productSkuIdChecks[i].push(productSkuItem.productSkuId)
            // 设置商品sku数量
            this.buySkuCount[i][j] = []
            this.buySkuCount[i][j] = productSkuItem.buyCount
          }
          // console.log(this.buySkuCount)
        }
      },
      // 店铺商品选择事件
      // 店铺商品ID， 商品所属店铺下标  店铺商品下标
      storeProductCheck (skuId, stroeIndex, skuIndex) {
        // console.info('skuId', skuId, '店铺索引', stroeIndex, 'sku索引', skuIndex, '店铺商品总数', this.storeTotalSkuIds[stroeIndex][0], '店铺已选skuId', this.productSkuChecks[stroeIndex].length, this.productSkuChecks[stroeIndex])
        // console.log(this.productSkuChecks[stroeIndex].length)
        console.log(this.productSkuChecks[stroeIndex].length)// 店铺选择商品数量
        console.log('店铺skuId总数量', this.storeTotalSkuIds[stroeIndex])
        console.log('店铺已选择商品总数量', this.productSkuIdChecks[stroeIndex].length)
        console.log('店铺商品数量：', this.productSkuIdChecks[stroeIndex])
        console.log('店铺已选择商品ID', this.productSkuIdChecks[stroeIndex])
        console.log('点击的商品ID', skuId)
        // if (this.productSkuIdChecks[stroeIndex].indexOf(skuId) !== -1) {
        //   this.productSkuIdChecks[stroeIndex].splice(this.productSkuIdChecks[stroeIndex].indexOf(skuId), 1)
        // } else {
        //   this.productSkuIdChecks[stroeIndex].push(skuId)
        // }
        if (this.productSkuIdChecks[stroeIndex].length === this.storeTotalSkuIds[stroeIndex][0]) {
          this.storeCheckModel[stroeIndex] = true
          this.allCheck = true
        } else {
          this.storeCheckModel[stroeIndex] = false
          this.allCheck = false
        }
        // console.info(this.storeCheckModel[stroeIndex])
        // console.info(this.productSkuChecks[stroeIndex].length)
        // console.info(this.storeTotalSkuIds[stroeIndex][0])
      },
      // 店铺选择事件
      storeCheck (storeId, index) {
        console.info('店铺ID', storeId, '店铺索引', index, '店铺商品总数', this.storeTotalSkuIds[index], '店铺已选skuId', this.productSkuChecks[index])
        // 实现店铺全选，和取消全选
        // this.productSkuChecks[index] = []// 店铺选择第[index]个商品
        // for (var j = 0; j < this.viewModel.storeItems[index].productSkuItems.length; j++) {
        //   if (!this.storeCheckModel[index]) {
        //     var productSkuItem = this.viewModel.storeItems[index].productSkuItems[j]
        //     this.productSkuChecks[index].push(productSkuItem.productSkuId)
        //     console.log(this.productSkuChecks)
        //   }
        // }
        if (this.storeCheckModel.indexOf(false) === -1) {
          this.allCheck = false
        } else {
          this.allCheck = true
        }
        var list = []
        for (var s = 0; s < this.viewModel.storeItems[index].productSkuItems.length; s++) {
          list.push(this.viewModel.storeItems[index].productSkuItems[s].productSkuId)
        }
        console.log(list)
        if (this.storeCheckModel[index] === true) {
          this.productSkuIdChecks[index] = []
        } else {
          this.productSkuIdChecks[index] = list
        }
      },
      // 计算选择价格和数量
      countPrice () {
        for (var i = 0; i < this.viewModel.storeItems.length; i++) {
          var storeItem = this.viewModel.storeItems[i]
          this.productSkuChecks[i] = [] // 店铺skuIds数量
          //  console.info('数量', this.storeTotalSkuIds[i], i)
          storeItem.productSkuItems.forEach(element => {
            this.productSkuChecks[i].push(element.productSkuId)
          })
        }
      },
      // 测试
      async ceshi () {
        // for (var f = 0; f < this.viewModel.storeItems.length; f++) {
        //   console.log(123)
        //   for (var g = 0; g < this.buySkuCount[f].length; g++) {
        //     console.log(this.buySkuCount[f])
        //   }
        // }
        // for (var f = 0; f < this.viewModel.storeItems.length; f++) {
        //   for (var g = 0; g < this.viewModel.storeItems[f].productSkuItems.length; g++) {
        //     console.log(this.viewModel.storeItems[f].productSkuItems[g])
        //     if (this.buySkuCount[f][g] === 0) {
        //       console.table(this.viewModel.storeItems[f].productSkuItems[g].productSkuId)
        //       let par = {
        //         ProductSkuId: this.viewModel.storeItems[f].productSkuItems[g].productSkuId
        //       }
        //       var deleteMsg = await userService.GetCart(par)
        //       console.table(deleteMsg)
        //     } else {
        //       console.log('都大于0')
        //     }
        //   }
        // }
      },
      // 修改数量,到0的时候，删除商品，增加的时候，判断库存
      changeCount (storeIndex, skuIndex, skuId) {
        // 店铺数量  商品排位 skuid
        // console.info('修改数量', storeIndex, skuIndex, skuId)
        // console.info(this.buySkuCount[storeIndex][skuIndex])

        var t
        clearTimeout(t)
        t = setTimeout(function () {
          // for (var qa = 0; qa < this.buySkuCount.length; qa++) {
          //   for (var qw = 0; qw < this.buySkuCount[qa].length; qw++) {
          //     if (this.buySkuCount[qa][qw] === 0) {
          //       console.log('为0')
          //     } else {
          //       console.log('不为0')
          //     }
          //   }
          // }
        }, 1000)
      },
      // 结算购买
      buy () {
        var buyProductInfo = []
        for (var i = 0; i < this.viewModel.storeItems.length; i++) {
          var storeItem = this.viewModel.storeItems[i]
          for (var j = 0; j < this.productSkuChecks[i].length; j++) {
            var element = this.productSkuChecks[i][j]
            var buyItem = {
              ProductSkuId: element.productSkuId,
              Count: this.buySkuCount[i][j],
              ProductId: element.productId,
              storeId: storeItem.storeId,
              LoginUserId: this.LoginUser().id
            }
            buyProductInfo.push(buyItem)
          }
          console.info('店铺最终购买数据', storeItem.storeName, this.productSkuChecks[i])
        }
        console.info('格式', buyProductInfo)
        this.$router.push({
          name: 'order_buy',
          params: {
            buyInfo: buyProductInfo,
            isFromCart: true // 购买信息来自购物车
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .zkui-order-cart {
    padding-bottom: 50*@rem;
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
    .zkui-order-cart-box {
      .cart_item-box {
        border-bottom: 8*@rem solid rgba(229, 229, 229, 0.5);
        .weui-cells_checkbox {
          .vux-checklist-icon-checked::before {
            margin-left: 0.5rem;
            margin-right: 0;
            font-size: 1.3rem;
          }
        }
        .weui-cells:after {
          content: none;
        }
        .weui-cells:before {
          content: none;
        }
      }
      .weui-cells_checkbox {
        .cart_item-title {
          padding: 0.3rem 0;
          border-bottom: 1px solid rgba(229, 229, 229, 0.5);
        }
      }
      .zkui-order-cart-item {
        background: @white;
      }
      .order-cart-store {
        height: 3.5rem;
        border-bottom: 1px solid @load-more-line-color;
        background: @white;
        h2 {
          line-height: 3.5rem;
          padding-left: 5*@rem;
          color: @black;
          font-size: @h5-font-size;
        }
      }
      .order-cart-commodity {
        height: 7.8rem;
        ul.order-cart-commodity-box {
          height: 100%;
        }
        .order-cart-commodity-left {
          width: 2.5rem;
          position: relative;
          .weui-cells_checkbox {
            width: 2.5rem;
            height: 3.5rem;
            margin-top: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            .weui-cell {
              padding: 0;
            }
          }
          .weui-cells:before,
          .weui-cells:after {
            content: none;
          }
        }
        .flex_one {
          .order-cart-commodit-into {
            height: 100%;
            .order-cart-commodity-into_left {
              width: 6.5rem;
              height: 6.5rem;
              margin-top: 0.8rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .order-cart-commodity-into_right {
              border-bottom: 1px solid rgba(229, 229, 229, 0.5);
              margin-top: 0.8rem;
              padding: 0 0.8rem;
              position: relative;
              height: 7rem;
              p {
                font-size: @h6-font-size;
                color: @black;
              }
              span {
                font-size: 0.8rem;
                color: @gray-500;
              }
              ul {
                width: 95%;
                position: absolute;
                left: 10*@rem;
                bottom: 10*@rem;
                height: 2rem;
                vertical-align: bottom;
                align-items: flex-end;
                li.price_now {
                  color: @danger;
                  font-size: @h4-font-size;
                  font-weight: bold;
                }
                li.price_old {
                  padding-left: 5*@rem;
                  text-decoration: line-through;
                  color: @gray-500;
                }
                li.price_num {
                  text-align: right;
                  color: @gray-500;
                  padding-right: 10*@rem;
                  padding-left: 10*@rem;
                  .vux-number-round {
                    height: 1.3rem;
                    font-size: 10px;
                  }
                  .vux-number-round > div {
                    height: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .zkui-order-cart-bar {
      .weui-tabbar {
        background: @white;
        height: 3.5rem;
        position: fixed;
        bottom: 0;
        left: 0;
        .weui-tabbar__item {
          height: 3.5rem !important;
          p {
            height: 3.5rem !important;
            line-height: none;
          }
        }
        .bar-left {
          width: 2.5rem;
          height: 3.5rem;
          flex: none;
          .weui-icon-checked:before {
            font-size: 1.3rem;
          }
          .weui-cells_checkbox {
            width: 2.5rem;
            height: 3.5rem;
            .car_item-all {
              padding: 0.4rem 0;
              position: relative;
              height: 100%;
              padding: 0;
              .weui-cell__hd {
                position: absolute;
                top: 50%;
                left: 0.5rem;
                transform: translateY(-50%);
              }
            }
          }
        }
        .bar-center {
          span {
            display: block;
            line-height: 3.5rem;
            text-align: left;
          }
        }
        .bar-num {
          span {
            display: block;
            line-height: 3.5rem;
            text-align: right;
            padding-right: 5*@rem;
          }
        }
        .bar-right {
          .weui-btn {
            height: 100%;
          }
          .zkui-order-cart-bar-close {
            border-radius: 0;
          }
        }
      }
    }
    .weui-cells {
      margin: 0;
    }
    .empty-cart {
      width: 100%;
      position: fixed;
      top: 20%;
      transform: translateY(-50%);
      .upwarp-nodata {
        min-height: 8rem;
        padding-top: 0.1rem;
        text-align: center;
      }
      .upwarp-nodata .weui-icon-waiting {
        color: #b2b2b2;
        font-size: 3.5rem;
      }
    }
  }
</style>

