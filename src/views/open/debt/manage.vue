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
            <div class="zkui-order-list-box" v-if="i==0">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(item,index) in all" :key="index">
                  <div class="zkui-order-list-product">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="item.url">
                          <img :src="item.image" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="item.url">
                          <p>
                            {{item.title}}
                          </p>
                        </router-link>
                        <span>
                          {{item.intro}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{item.extra}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <!-- <li class="price_count">x 60</li> -->
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <!-- <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">789</span> 件商品 合计：
                      <span class="num">￥456</span>
                      (含运费
                      <span class="num">￥123</span>)
                    </cell>
                  </group> -->
                  <group class="product-option">
                    <cell>
                      <x-button mini plain>取消订单</x-button>
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zkui-order-list-box" v-if="i==1">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(item,index) in stayAudit" :key="index">
                  <div class="zkui-order-list-product">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="item.url">
                          <img :src="item.image" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="item.url">
                          <p>
                            {{item.title}}
                          </p>
                        </router-link>
                        <span>
                          {{item.intro}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{item.extra}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <!-- <li class="price_count">x 60</li> -->
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <!-- <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">789</span> 件商品 合计：
                      <span class="num">￥456</span>
                      (含运费
                      <span class="num">￥123</span>)
                    </cell>
                  </group> -->
                  <group class="product-option">
                    <cell>
                      <x-button mini plain>取消订单</x-button>
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zkui-order-list-box" v-if="i==2">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(item,index) in stayCome" :key="index">
                  <div class="zkui-order-list-product">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="item.url">
                          <img :src="item.image" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="item.url">
                          <p>
                            {{item.title}}
                          </p>
                        </router-link>
                        <span>
                          {{item.intro}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{item.extra}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <!-- <li class="price_count">x 60</li> -->
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <!-- <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">789</span> 件商品 合计：
                      <span class="num">￥456</span>
                      (含运费
                      <span class="num">￥123</span>)
                    </cell>
                  </group> -->
                  <group class="product-option">
                    <cell>
                      <x-button mini plain>取消订单</x-button>
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zkui-order-list-box" v-if="i==3">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(item,index) in stayDecide" :key="index">
                  <div class="zkui-order-list-product">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="item.url">
                          <img :src="item.image" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="item.url">
                          <p>
                            {{item.title}}
                          </p>
                        </router-link>
                        <span>
                          {{item.intro}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{item.extra}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <!-- <li class="price_count">x 60</li> -->
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <!-- <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">789</span> 件商品 合计：
                      <span class="num">￥456</span>
                      (含运费
                      <span class="num">￥123</span>)
                    </cell>
                  </group> -->
                  <group class="product-option">
                    <cell>
                      <x-button mini plain>取消订单</x-button>
                    </cell>
                  </group>
                </div>
              </div>
            </div>
            <div class="zkui-order-list-box" v-if="i==4">
              <div class="zkui-order-list-content">
                <div class="zkui-order-list-box-item" v-for="(item,index) in stayEvaluate" :key="index">
                  <div class="zkui-order-list-product">
                    <ul class="flex">
                      <li class="left-img">
                        <router-link :to="item.url">
                          <img :src="item.image" alt="">
                        </router-link>
                      </li>
                      <li class="flex_one center-content">
                        <router-link :to="item.url">
                          <p>
                            {{item.title}}
                          </p>
                        </router-link>
                        <span>
                          {{item.intro}}
                        </span>
                      </li>
                      <li class="left-price">
                        <ul>
                          <li class="price_now">￥{{item.extra}}</li>
                          <!-- <li class="price_old">￥69.00</li> -->
                          <!-- <li class="price_count">x 60</li> -->
                        </ul>
                      </li>
                    </ul>

                  </div>
                  <!-- <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">789</span> 件商品 合计：
                      <span class="num">￥456</span>
                      (含运费
                      <span class="num">￥123</span>)
                    </cell>
                  </group> -->
                  <group class="product-option">
                    <cell>
                      <x-button mini plain>取消订单</x-button>
                    </cell>
                  </group>
                </div>
              </div>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import orderService from 'src/service/api/order.api'
  import apiService from 'src/service/api/debt.api'
  import { XScroll, Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Cell, CellBox, CellFormPreview, Group, Badge, Xbutton, Box, GroupTitle } from 'zkui'
  export default {
    components: {
      XScroll,
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
        list2: ['全部', '待审核', '待出方案', '待定方案', '待评价'],
        demo2: '全部',
        showView: 0,
        all: '', // 全部
        stayAudit: '',
        stayCome: '',
        stayDecide: '',
        stayEvaluate: ''
      }
    },
    created () {
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        let params = {
          dataType: 'debt',
          PlanStatus: ''
        }
        let response = await apiService.list(params)
        this.all = response.data.result.apiDataList
        console.log('数量', this.all)
        let params1 = {
          dataType: 'debt',
          PlanStatus: 1
        }
        let stayAudit = await apiService.list(params1)
        this.stayAudit = stayAudit.data.result.apiDataList
        let params2 = {
          dataType: 'debt',
          PlanStatus: 2
        }
        let stayCome = await apiService.list(params2)
        this.stayCome = stayCome.data.result.apiDataList
        let params3 = {
          dataType: 'debt',
          PlanStatus: 3
        }
        let stayDecide = await apiService.list(params3)
        this.stayDecide = stayDecide.data.result.apiDataList
        let params4 = {
          dataType: 'debt',
          PlanStatus: 4
        }
        let stayEvaluate = await apiService.list(params4)
        this.stayEvaluate = stayEvaluate.data.result.apiDataList
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
