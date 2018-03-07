<template>
  <section class="zkui-order-cart">
    <zk-head title='购物车' class="zkui-order-cart-head"></zk-head>

    <checklist ref="carCheckList" required :options="stores" v-model="selectModel" @on-change="change">
      <div slot="content">
        <checklist ref="carCheckList" :options="storeProducts" @on-change="change">

        </checklist>
      </div>
    </checklist>

    <swipeout style="display:none">
      <div class="zkui-order-cart-box">
        <div v-for="(items,indexs) in viewModel.storeProducts" :key="indexs">
          <div class="order-cart-store flex">
            <div class="label">
              <input type="checkbox" />
            </div>
            <h2 class="flex_one">{{items.storeName}} </h2>
          </div>
          <ul>
            <li class="zkui-order-cart-item" v-for="(item,index) in items.productItems" :key="index" @click="onItem(item.productSku.id)">
              <div class="order-cart-commodity">
                <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                  <div slot="right-menu">
                    <swipeout-button type="warn" @click.native="onButtonClick(item.productSku.id)">删除</swipeout-button>
                  </div>
                  <div slot="content" class="demo-content border-top" style="height:10rem">
                    <ul class="flex order-cart-commodity-box">
                      <li class="order-cart-commodity-left">
                        <div class="label">
                          <input type="checkbox" />
                        </div>
                      </li>
                      <li class="flex_one">
                        <div class="order-cart-commodit-into flex">
                          <div class="order-cart-commodity-into_left">
                            <img :src="item.product.thumbnailUrl" alt="">
                          </div>
                          <div class="flex_one order-cart-commodity-into_right ">
                            <p>{{item.product.name}}</p>
                            <span>{{item.productSku.propertyValueDesc}}</span>
                            <ul class="flex">
                              <li class="price_now">￥{{item.product.price}}</li>
                              <li class="price_old">￥{{item.product.displayPrice}}</li>
                              <li class="flex_one price_num">×{{item.count}}</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </swipeout-item>

              </div>
            </li>
          </ul>
        </div>

      </div>
    </swipeout>

    <div class="zkui-order-cart-bar">
      <tabbar>
        <tabbar-item class="bar-left">
          <span slot="label" class="label"><input type="checkbox" /></span>
          <span slot="label">全选(0)</span>
        </tabbar-item>
        <tabbar-item class="bar-right">
          <span slot="label" class="zkui-order-cart-bar-price">￥0.00</span>
          <span slot="label" class="zkui-order-cart-bar-close">结算</span>
        </tabbar-item>
      </tabbar>
    </div>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton, GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, Checklist } from 'zkui'
  export default {
    data () {
      return {
        viewModel: '', // 数据对象
        disabled: false,
        selectModel: '',
        stores: [], // 店铺数据
        storeProducts: [] // 店铺商品数据
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      XButton,
      GroupTitle,
      Checklist,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var reponse = await userService.GetCart()
        this.viewModel = reponse.data.result
        console.info('购物车数据', reponse)
        this.viewModel.storeProducts.forEach(element => {
          var store = {}
          store['key'] = element.storeId
          store['value'] = element.storeName
          element.productItems.forEach(item => {
            var productItem = {}
            productItem['key'] = item.product.id
            productItem['value'] = item.product.name
            this.storeProducts.push(productItem)
            // this.stores['productItems'].push(productItem)
          })
          this.stores.push(store)
        })
        console.info('店铺数据', this.stores)
      },
      async onButtonClick (id) {
        var result = await userService.RemoveCart(id)
        if (result.data.status === 1) {
          this.$vux.toast.success('删除成功')
        } else {
          this.$vux.toast.warn('删除失败')
        }
      },
      handleEvents (type) {
      },
      //  选择事件
      change () {

      }
    }
  }
</script>
<style lang="less">
  body {
    background: @gray-100;
  }
  .zkui-order-cart {
    padding-bottom: 50*@rem;
  }
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
  .label {
    width: 3.5rem;
    height: 3.5rem;
    line-height: 4rem;
    text-align: center;
    input {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .zkui-order-cart-box {
    .zkui-order-cart-item {
      margin-bottom: 10*@rem;
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
      height: 10rem;
      ul.order-cart-commodity-box {
        height: 100%;
      }
      .order-cart-commodity-left {
        width: 3.5rem;
        .label {
          margin-top: 3.25rem;
        }
      }
      .flex_one {
        .order-cart-commodit-into {
          height: 100%;
          .order-cart-commodity-into_left {
            width: 5rem;
            height: 5rem;
            margin-top: 2.5rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .order-cart-commodity-into_right {
            padding: 10*@rem;
            position: relative;
            p {
              font-size: @h6-font-size;
              color: @black;
            }
            span {
              font-size: @h6-font-size;
              color: @gray-500;
            }
            ul {
              width: 95%;
              position: absolute;
              left: 10*@rem;
              bottom: 10*@rem;
              height: 2rem;
              vertical-align: bottom;
              li.price_now {
                color: @black;
                font-size: @h4-font-size;
                font-weight: bold;
              }
              li.price_old {
                padding-left: 5*@rem;
                text-decoration: line-through;
                line-height: 2.25rem;
                color: @gray-500;
              }
              li.price_num {
                text-align: right;
                line-height: 2.25rem;
                color: @gray-500;
                padding-right: 10*@rem;
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
        .weui-tabbar__label {
          text-align: left;
          line-height: 3.5rem !important;
          .label {
            display: inline-block;
          }
        }
      }
      .bar-right {
        .weui-tabbar__label {
          text-align: right;
          padding-right: 10*@rem;
          line-height: 3.5rem !important;
          .zkui-order-cart-bar-price {
            color: @danger;
            font-weight: bold;
          }
          .zkui-order-cart-bar-close {
            margin-left: 10*@rem;
            color: @black;
            padding: 5*@rem 20*@rem;
            background: @danger;
            color: @white;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>

