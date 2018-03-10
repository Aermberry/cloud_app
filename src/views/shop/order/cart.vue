<template>
  <section class="zkui-order-cart">
    <zk-head title='购物车' class="zkui-order-cart-head"></zk-head>
    <checker v-model="demo6" default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected">
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i" type="default">{{[i - 1]}}</checker-item>
    </checker>

    <div class="zkui-order-cart-box" v-if="hasData">
      <div v-for="(store,index) in viewModel.storeItems" :key="index" class="cart_item-box">
        <div class="weui-cells weui-cells_checkbox">
          <label class="weui-cell weui-check_label cart_item-title">
            <div class="weui-cell__hd">
              <input type="checkbox" :id="'store'+store.storeId" class="weui-check" :value="store.storeId" @click='storeProductCheck'>
              <i class="weui-icon-checked vux-checklist-icon-checked"></i>
            </div>
            <div class="weui-cell__bd">
              <p>{{store.storeName}}</p>
            </div>
          </label>
        </div>
        <checker default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected" v-model="productSkuChecks[index]">
          <ul>
            <li class="zkui-order-cart-item" v-for="productSku in store.productSkuItems" :key="productSku.productSkuId">
              <div class="order-cart-commodity">
                <div slot="content" class="demo-content " style="height:7.8rem">
                  <ul class="flex order-cart-commodity-box">
                    <li class="order-cart-commodity-left">
                      <div class="weui-cells weui-cells_checkbox">
                        <label class="weui-cell weui-check_label car_item-left">
                          <div class="weui-cell__hd">
                            <checker-item :value="productSku.productSkuId" :key="productSku.productSkuId" type="default" @on-item-click="storeProductCheck">{{productSku.productSkuId}}</checker-item>
                          </div>
                        </label>
                      </div>
                    </li>
                    <li class="flex_one">
                      <div class="order-cart-commodit-into flex">
                        <div class="order-cart-commodity-into_left">
                          <img :src="productSku.thumbnailUrl" alt="">
                        </div>
                        <div class="flex_one order-cart-commodity-into_right ">
                          <p>{{productSku.name}}</p>
                          <span>{{productSku.propertyValueDesc}}</span>
                          <ul class="flex">
                            <li class="price_now">￥{{productSku.displayPrice}}</li>
                            <li class="price_old">￥{{productSku.markerPrice}}</li>
                            <li class="flex_one price_num">
                              <inline-x-number style="display:block;" :min="0" width="2rem" button-style="round" v-model="productSku.count"></inline-x-number>
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

    </div>
    <div class="zkui-order-cart-bar">
      <tabbar>
        <tabbar-item class="bar-left">
          <span slot="label" class="label">
            <div class="weui-cells weui-cells_checkbox">
              <label for="checkbox_yqyep_8" class="weui-cell weui-check_label car_item-all">
                <div class="weui-cell__hd"><input type="checkbox" name="vux-checkbox-yqyep" id="checkbox_yqyep_8" class="weui-check" value="04">
                  <i class="weui-icon-checked vux-checklist-icon-checked"></i>
                </div>
              </label>
            </div>
          </span>
        </tabbar-item>
        <tabbar-item class="bar-center">
          <span slot="label">全选(0)</span>
        </tabbar-item>
        <tabbar-item class="bar-right">
          <span slot="label" class="zkui-order-cart-bar-price">￥0.00</span>
        </tabbar-item>
        <tabbar-item class="bar-right">
          <span slot="label" class="zkui-order-cart-bar-close">结算</span>
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
        count: '',
        demo6: [2, 3],
        hasData: false, // 判断购物车数据
        viewModel: '', // 数据对象
        productSkuChecks: [], // 店铺选择商品
        storeChecks: [] // 店铺选择
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
    },
    methods: {
      async GetData () {
        var reponse = await userService.GetCart()
        this.viewModel = reponse.data.result
        if (reponse.data.status === 1) {
          this.hasData = true
          for (var i = 0; i < this.viewModel.storeItems.length; i++) {
            var storeItem = this.viewModel.storeItems[i]
            this.productSkuChecks[i] = []
            storeItem.productSkuItems.forEach(element => {
              this.productSkuChecks[i].push(element.productSkuId)
            })
          }


          // console.info('店铺数据', this.viewModel)
        } else {
          this.hasData = false
        }
      },
      async onButtonClick (id) {
        var result = await userService.RemoveCart(id)
        if (result.data.status === 1) {
          this.$vux.toast.success('删除成功')
        } else {
          this.$vux.toast.warn('删除失败')
        }
      },

      // 店铺商品选择事件
      storeProductCheck (item, id) {
        console.info(item, id)
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
                    .vux-number-selector {
                      width: 1.3rem;
                      height: 1.3rem;
                      position: relative;
                    }
                    .vux-number-selector-sub > svg {
                      width: 1.3rem;
                      height: 1.3rem;
                      position: absolute;
                      top: -0.07rem;
                      left: -0.05rem;
                    }
                    .vux-number-selector-plus > svg {
                      width: 1.3rem;
                      height: 1.3rem;
                      position: absolute;
                      top: -0.07rem;
                      left: -0.07rem;
                    }
                    .vux-number-input {
                      font-size: 1.3rem;
                      height: 1.3rem;
                    }
                  }
                  .vux-number-round > div {
                    display: flex;
                    justify-content: flex-end;
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
          width: 3.5rem;
          height: 3.5rem;
          flex: none;
          .weui-cells_checkbox {
            width: 3.5rem;
            height: 3.5rem;
            .car_item-all {
              padding: 0.4rem 0;
            }
          }
        }
        .bar-center {
          .weui-tabbar__label {
            text-align: left;
            line-height: 3.5rem !important;
            .label {
              display: inline-block;
            }
          }
          .weui-cells_checkbox {
            width: 3.5rem;
            height: 3.5rem;
            .car_item-all {
              padding: 0.8rem 0;
            }
          }
        }
        .bar-right {
          .weui-tabbar__label {
            line-height: 3.5rem !important;
            .zkui-order-cart-bar-price {
              color: @danger;
              font-weight: bold;
            }
            .zkui-order-cart-bar-close {
              display: inline-block;
              width: 100%;
              height: 100%;
              color: @black;
              background: @danger;
              color: @white;
              border-radius: 2px;
            }
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
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>

