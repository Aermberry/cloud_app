<template>
  <section class="zkui-order-Deliver">
    <zk-head title='发货管理'></zk-head>
    <div>
      <tab :line-width=2 active-color='#fc378c' v-model="showView">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="showView" height="100px" :show-dots="false">
        <swiper-item v-for="(t, i) in list2" :key="i">
          <!-- 全部 -->
          <div class="zkui-order-list-box" v-if="i===0&&showBox">
            <div class="zkui-order-list-content">
              <div class="zkui-order-list-box-item" v-for="(item,index) in data" :key="index">
                <group class="box-title">
                  <cell :title="item.storeName" :value="item.orderStatuName"></cell>
                </group>
                <div class="zkui-order-list-product" v-for="(itemss,indexss) in item.outOrderProducts" :key="indexss">
                  <ul class="flex">
                    <li class="left-img">
                      <router-link :to="'/order/Show?id='+item.id" class="">
                        <img :src="itemss.thumbnailUrl" alt="">
                      </router-link>
                    </li>
                    <li class="flex_one center-content">
                      <router-link :to="'/order/Show?id='+item.id" class="">
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
                        <!-- <li class="price_now">￥111</li> -->
                        <li class="price_count">x {{itemss.buyCount}}</li>
                      </ul>
                    </li>
                  </ul>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{item.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{item.paymentAmount}}</span>(含运费
                      <span class="num">￥{{item.expressAmount}}</span>)
                    </cell>
                  </group>
                  <!-- <group class="product-option">
                    <cell>
                      <x-button mini plain>确认收货</x-button>
                      <x-button mini plain>取消订单</x-button>
                      <x-button mini plain type="primary">付款</x-button>
                    </cell>
                  </group> -->
                </div>
              </div>
            </div>
          </div>
          <div class="zk-not-data" v-if="i===0&&!showBox">
            <m-icon name="zk-notdata"></m-icon>
            <p>暂无数据</p>
          </div>
          <!-- 代发货 -->
          <div class="zkui-order-list-box" v-if="i===1&&allShow[0]">
            <div class="zkui-order-list-content">
              <div class="zkui-order-list-box-item" v-for="(item,index) in stayShipments" :key="index">
                <group class="box-title">
                  <cell :title="item.storeName" :value="item.orderStatuName"></cell>
                </group>
                <div class="zkui-order-list-product" v-for="(itemss,indexss) in item.outOrderProducts" :key="indexss">
                  <ul class="flex">
                    <li class="left-img">
                      <router-link :to="'/order/Show?id='+item.id" class="">
                        <img :src="itemss.thumbnailUrl" alt="">
                      </router-link>
                    </li>
                    <li class="flex_one center-content">
                      <router-link :to="'/order/Show?id='+item.id" class="">
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
                        <!-- <li class="price_now">￥111</li> -->
                        <li class="price_count">x {{itemss.buyCount}}</li>
                      </ul>
                    </li>
                  </ul>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{item.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{item.paymentAmount}}</span>(含运费
                      <span class="num">￥{{item.expressAmount}}</span>)
                    </cell>
                  </group>
                  <!-- <group class="product-option">
                    <cell>
                      <x-button mini plain>确认收货</x-button>
                      <x-button mini plain>取消订单</x-button>
                      <x-button mini plain type="primary">付款</x-button>
                    </cell>
                  </group> -->
                </div>
              </div>
            </div>
          </div>
          <div class="zk-not-data" v-if="i===1&&!allShow[0]">
            <m-icon name="zk-notdata"></m-icon>
            <p>暂无数据</p>
          </div>
          <!-- 已发货 -->
          <div class="zkui-order-list-box" v-if="i===2&&allShow[1]">
            <div class="zkui-order-list-content">
              <div class="zkui-order-list-box-item" v-for="(item,index) in stayEvaluate" :key="index">
                <group class="box-title">
                  <cell :title="item.storeName" :value="item.orderStatuName"></cell>
                </group>
                <div class="zkui-order-list-product" v-for="(itemss,indexss) in item.outOrderProducts" :key="indexss">
                  <ul class="flex">
                    <li class="left-img">
                      <router-link :to="'/order/Show?id='+item.id" class="">
                        <img :src="itemss.thumbnailUrl" alt="">
                      </router-link>
                    </li>
                    <li class="flex_one center-content">
                      <router-link :to="'/order/Show?id='+item.id" class="">
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
                        <!-- <li class="price_now">￥111</li> -->
                        <li class="price_count">x {{itemss.buyCount}}</li>
                      </ul>
                    </li>
                  </ul>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">{{item.totalCount}}</span> 件商品 合计：
                      <span class="num">￥{{item.paymentAmount}}</span>(含运费
                      <span class="num">￥{{item.expressAmount}}</span>)
                    </cell>
                  </group>
                  <!-- <group class="product-option">
                    <cell>
                      <x-button mini plain>确认收货</x-button>
                      <x-button mini plain>取消订单</x-button>
                      <x-button mini plain type="primary">付款</x-button>
                    </cell>
                  </group> -->
                </div>
              </div>
            </div>
          </div>
          <div class="zk-not-data" v-if="i===2&&!allShow[1]">
            <m-icon name="zk-notdata"></m-icon>
            <p>暂无数据</p>
          </div>
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import orderService from 'src/service/api/order.api'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, Xbutton } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, Xbutton
    },
    data () {
      return {
        list2: ['全部', '待发货', '已发货'],
        demo2: '全部',
        showView: 0,
        data: [],
        showBox: false,
        allShow: [false, false],
        stayShipments: [], // 待发货
        stayEvaluate: [] // 已发货
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var reponse = await orderService.list()
        this.data = reponse.data.result
        if (this.data.length !== 0) {
          this.showBox = true
        }
        for (var i = 0; i < this.data.length; i++) {
          if (this.data[i].orderStatus === 2) {
            console.log('this.data[i]', this.data[i])
            this.stayShipments.push(this.data[i])
          }
          if (this.data[i].orderStatus === 4) {
            console.log('this.data[i]', this.data[i])
            this.stayEvaluate.push(this.data[i])
          }
        }
        if (this.stayShipments.length !== 0) {
          this.allShow[0] = true
        }
        if (this.stayEvaluate.length !== 0) {
          this.allShow[1] = true
        }
        console.log('data', this.data)
        console.log('stayShipments', this.stayShipments)
        console.log('stayEvaluate', this.stayEvaluate)
      }
    }
  }
</script>
<style  lang="less">
  .zkui-order-Deliver {
    .zk-not-data {
      margin: 0 auto;
      padding-top: 150 * @rem;
      text-align: center;
      svg {
        width: 50 * @rem;
        height: 50 * @rem;
      }
      p {
        font-size: @h4-font-size;
      }
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
    .vux-slider {
      .vux-swiper {
        min-height: 78vh !important;
        padding-bottom: 20 * @rem;
      }
    }
    .weui-cells {
      margin-top: 0;
      .weui-cell {
        height: 3rem;
      }
    }
    .zkui-order-list-box {
      width: 100%;
      height: 80vh;
      .zkui-order-list-content {
        height: 80vh;
        overflow-y: auto;
        padding-bottom: 10 * @rem;
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
            padding-right: 10 * @rem;
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
  }
</style>

