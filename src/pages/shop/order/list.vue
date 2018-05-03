<template>
  <section class="zkui-order-list">

    <zk-head title='我的订单'></zk-head>
    <div>
      <tab :line-width=2 active-color='#fc378c' v-model="showView">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="showView" :show-dots="false">
        <swiper-item v-for="(t,i) in list2" :key="i">
          <div class="tab-swiper vux-center">
            <div class="zkui-order-list-box" v-if="i===0&&!showBox">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(items,indexs) in data" :key="indexs">
                  <group class="box-title">
                    <cell :title="items.storeName" :value="items.orderStatuName"></cell>
                  </group>
                  <div class="zkui-order-list-product" v-for="(itemss,indexss) in items.outOrderProducts" :key="indexss">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="'/order/show?id='+items.id">
                          <img :src="itemss.thumbnailUrl" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="'/order/show?id='+items.id">
                          <p>
                            {{itemss.name}}
                          </p>
                        </router-link>
                        <span>
                          {{itemss.propertyValueDesc}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{itemss.price}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <li class="price_count">x {{itemss.buyCount}}</li>
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{items.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{items.paymentAmount}}</span>(含运费
                      <span class="num">￥{{items.expressAmount}}</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain v-if="allState.Shipments[indexs]">退货</x-button>
                      <x-button mini plain v-if="allState.Take[indexs]">确认收货</x-button>
                      <x-button mini plain v-if="allState.Evaluate[indexs]">评价</x-button> -->
                      <!-- <x-button mini plain v-if="allState.Payment[indexs]">取消订单</x-button>-->
                      <x-button mini plain v-if="allState.Payment[indexs]" @click.native="orderCancel(items.id,indexs)">取消订单</x-button>
                      <!-- <x-button mini plain type="primary" v-if="allState.Payment[indexs]">付款</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zk-not-data" v-if="i===0&&showBox">
              <m-icon name="zk-notdata"></m-icon>
              <p>暂无数据</p>
            </div>
            <div class="zkui-order-list-box" v-if="i===1&&!showBox&&!allShow[0]">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(items,indexs) in data" :key="indexs" v-if="items.orderStatus===1">
                  <group class="box-title">
                    <cell :title="items.storeName" :value="items.orderStatuName"></cell>
                  </group>
                  <div class="zkui-order-list-product" v-for="(itemss,indexss) in items.outOrderProducts" :key="indexss">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="'/order/show?id='+items.id">
                          <img :src="itemss.thumbnailUrl" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="'/order/show?id='+items.id">
                          <p>
                            {{itemss.name}}
                          </p>
                        </router-link>
                        <span>
                          {{itemss.propertyValueDesc}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{itemss.price}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <li class="price_count">x {{itemss.buyCount}}</li>
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{items.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{items.paymentAmount}}</span>(含运费
                      <span class="num">￥{{items.expressAmount}}</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <x-button mini plain @click.native="orderCancel(items.id,indexs)">取消订单</x-button>
                      <!-- <x-button mini plain type="primary">付款</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zk-not-data" v-if="i===1&&allShow[0]">
              <m-icon name="zk-notdata"></m-icon>
              <p>暂无数据</p>
            </div>
            <div class="zkui-order-list-box" v-if="i===2&&!showBox&&!allShow[1]">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(items,indexs) in stayShipments" :key="indexs">
                  <group class="box-title">
                    <cell :title="items.storeName" :value="items.orderStatuName"></cell>
                  </group>
                  <div class="zkui-order-list-product" v-for="(itemss,indexss) in items.outOrderProducts" :key="indexss">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="'/order/show?id='+items.id">
                          <img :src="itemss.thumbnailUrl" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="'/order/show?id='+items.id">
                          <p>
                            {{itemss.name}}
                          </p>
                        </router-link>
                        <span>
                          {{itemss.propertyValueDesc}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{itemss.price}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <li class="price_count">x {{itemss.buyCount}}</li>
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{items.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{items.paymentAmount}}</span>(含运费
                      <span class="num">￥{{items.expressAmount}}</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain>退货</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zk-not-data" v-if="i===2&&allShow[1]">
              <m-icon name="zk-notdata"></m-icon>
              <p>暂无数据</p>
            </div>
            <div class="zkui-order-list-box" v-if="i===3&&!showBox&&!allShow[2]">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(items,indexs) in stayTake" :key="indexs">
                  <group class="box-title">
                    <cell :title="items.storeName" :value="items.orderStatuName"></cell>
                  </group>
                  <div class="zkui-order-list-product" v-for="(itemss,indexss) in items.outOrderProducts" :key="indexss">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="'/order/show?id='+items.id">
                          <img :src="itemss.thumbnailUrl" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="'/order/show?id='+items.id">
                          <p>
                            {{itemss.name}}
                          </p>
                        </router-link>
                        <span>
                          {{itemss.propertyValueDesc}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{itemss.price}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <li class="price_count">x {{itemss.buyCount}}</li>
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{items.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{items.paymentAmount}}</span>(含运费
                      <span class="num">￥{{items.expressAmount}}</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain>确认收货</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zk-not-data" v-if="i===3&&allShow[2]">
              <m-icon name="zk-notdata"></m-icon>
              <p>暂无数据</p>
            </div>
            <div class="zkui-order-list-box" v-if="i===4&&!allShow[3]">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(items,indexs) in stayEvaluate" :key="indexs">
                  <group class="box-title">
                    <cell :title="items.storeName" :value="items.orderStatuName"></cell>
                  </group>
                  <div class="zkui-order-list-product" v-for="(itemss,indexss) in items.outOrderProducts" :key="indexss">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="'/order/show?id='+items.id">
                          <img :src="itemss.thumbnailUrl" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="'/order/show?id='+items.id">
                          <p>
                            {{itemss.name}}
                          </p>
                        </router-link>
                        <span>
                          {{itemss.propertyValueDesc}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{itemss.price}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <li class="price_count">x {{itemss.buyCount}}</li>
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{items.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{items.paymentAmount}}</span>(含运费
                      <span class="num">￥{{items.expressAmount}}</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain>评价</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zk-not-data" v-if="i===4&&allShow[3]">
              <m-icon name="zk-notdata"></m-icon>
              <p>暂无数据</p>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import orderService from 'src/service/api/order.api'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Cell, CellBox, CellFormPreview, Group, Badge, Xbutton, Box, GroupTitle } from 'zkui'
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge,
      Xbutton,
      Box,
      GroupTitle
    },
    data () {
      return {
        list2: ['全部', '待付款', '待发货', '待收货', '待评价'],
        demo2: '全部',
        index: 4,
        showView: 0,
        data: [], // 全部商品
        stayPayment: [], // 待付款1
        stayShipments: [], // 待发货2
        stayTake: [], // 待收货3
        stayEvaluate: [], // 待评价4
        allState: {
          Payment: [],
          Shipments: [],
          Take: [],
          Evaluate: []
        }, // 记录是否需要付款
        showBox: false, // 判断总数据是否为空
        allShow: [false, false, false, false]
      }
    },
    created () {
      this.showView = parseInt(this.$route.query.orderStatus)
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async orderCancel (oid, index) {
        let par = {
          id: oid
        }
        var reponse = await orderService.cancel(par)
        if (reponse.data.status === 1) {
          this.data.splice(index, 1)
          console.log(this.data.length)
          this.GetData()
          this.$vux.toast.success('取消成功')
        } else {
          this.$vux.toast.warn('删除失败')
        }
      },
      async GetData () {
        var reponse = await orderService.list()
        this.data = reponse.data.result
        console.log(this.data, this.data.length)
        if (this.data.length === 0) {
          this.showBox = true
        }
        for (var i = 0; i < this.data.length; i++) {
          if (this.data[i].orderStatus === 1) {
            this.stayPayment.push(this.data[i])
            this.allState.Payment[i] = true
          } else {
            this.allState.Payment[i] = false
          }
          if (this.data[i].orderStatus === 2) {
            this.stayShipments.push(this.data[i])
            this.allState.Shipments[i] = true
          } else {
            this.allState.Shipments[i] = false
          }
          if (this.data[i].orderStatus === 3) {
            this.stayTake.push(this.data[i])
            this.allState.Take[i] = true
          } else {
            this.allState.Take[i] = false
          }
          if (this.data[i].orderStatus === 4) {
            this.stayEvaluate.push(this.data[i])
            this.allState.Evaluate[i] = true
          } else {
            this.allState.Evaluate[i] = false
          }
        }
        if (this.stayPayment.length === 0) {
          this.allShow[0] = true
        }
        if (this.stayShipments.length === 0) {
          this.allShow[1] = true
        }
        if (this.stayTake.length === 0) {
          this.allShow[2] = true
        }
        if (this.stayEvaluate.length === 0) {
          this.allShow[3] = true
        }
      }
    }
  }
</script>
<style   lang="less">
  .zkui-order-list {
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
    .vux-slider {
      .vux-swiper {
        min-height: 78vh !important;
        padding-bottom: 20*@rem;
      }
    }
    .weui-cells {
      margin-top: 0;
      .weui-cell {
        height: 3rem;
      }
    }
    .num {
      font-weight: @font-weight-normal;
    }
    .zkui-order-list-box {
      width: 100%;
      height: 80vh;
      .zkui-order-list-content {
        height: 80vh;
        overflow-y: auto;
        padding-bottom: 10*@rem;
        .zkui-order-list-box-item {
          border-bottom: 8px solid rgba(229, 229, 229, 0.5);
          .box-title {
            .weui-cells {
              margin-top: 0;
              .weui-cell {
                .vux-cell-bd {
                  .vux-label {
                    color: @brand;
                    font-weight: @font-weight-bold;
                  }
                }
                .weui-cell__ft {
                  color: @gray-500;
                }
              }
            }
          }
          .product-option {
            padding-right: 10*@rem;
            .weui-cells:after {
              content: none;
            }
            .weui-cells {
              .weui-cell {
                padding: 0.5rem 0;
                .weui-cell__ft {
                  .weui-btn + .weui-btn {
                    margin-top: 0;
                  }
                  .weui-btn {
                    width: 6rem;
                    height: 2rem;
                    padding: 0;
                    line-height: 2rem;
                    border-radius: 15px;
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
                a {
                  display: block;
                  width: 4.5rem;
                  height: 4.5rem;
                }
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
                  color: @black;
                }
                span {
                  font-size: @h6-font-size;
                  color: @gray-600;
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
                  font-size: @h5-font-size;
                }
              }
            }
          }
          .list-aggregate {
            span {
              color: @brand;
            }
          }
        }
      }
    }
    .zk-not-data {
      margin: 0 auto;
      padding-top: 150*@rem;
      text-align: center;
      svg {
        width: 50*@rem;
        height: 50*@rem;
      }
      p {
        font-size: @h4-font-size;
      }
    }
  }
</style>
