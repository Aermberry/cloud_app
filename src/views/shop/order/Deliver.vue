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
          <div class="zkui-order-list-box" v-if="i===0">
            <div class="zkui-order-list-content">
              <div class="zkui-order-list-box-item">
                <group class="box-title">
                  <cell title="自营店铺" value="待发货"></cell>
                </group>
                <div class="zkui-order-list-product">
                  <ul class="flex">
                    <li class="left-img">
                      <a href="/order/show?id=378" class=""><img src="http://zqingchun.yiqipingou.com//wwwroot/Uploads/Product/2018/04/b1d526395f5240bd8b3b4c18deb7d36f.jpg_320X320.jpg" alt=""></a>
                    </li>
                    <li class="flex_one center-content">
                      <a href="/order/show?id=378" class="">
                        <p>
                          韩国Paparecipe春雨 美白面膜 25g*10
                        </p>
                      </a>
                      <span>
                        一盒
                      </span>
                    </li>
                    <li class="left-price">
                      <ul>
                        <li class="price_now">￥111</li>
                        <li class="price_count">x 1</li>
                      </ul>
                    </li>
                  </ul>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">1</span> 件商品 合计：
                      <span class="num">￥111</span>(含运费
                      <span class="num">￥0</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain>确认收货</x-button>
                      <x-button mini plain>取消订单</x-button>
                      <x-button mini plain type="primary">付款</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
              <div class="zkui-order-list-box-item">
                <group class="box-title">
                  <cell title="自营店铺" value="已发货"></cell>
                </group>
                <div class="zkui-order-list-product">
                  <ul class="flex">
                    <li class="left-img">
                      <a href="/order/show?id=378" class=""><img src="http://zqingchun.yiqipingou.com//wwwroot/Uploads/Product/2018/04/b1d526395f5240bd8b3b4c18deb7d36f.jpg_320X320.jpg" alt=""></a>
                    </li>
                    <li class="flex_one center-content">
                      <a href="/order/show?id=378" class="">
                        <p>
                          韩国Paparecipe春雨 美白面膜 25g*10
                        </p>
                      </a>
                      <span>
                        一盒
                      </span>
                    </li>
                    <li class="left-price">
                      <ul>
                        <li class="price_now">￥111</li>
                        <li class="price_count">x 1</li>
                      </ul>
                    </li>
                  </ul>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">1</span> 件商品 合计：
                      <span class="num">￥111</span>(含运费
                      <span class="num">￥0</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain>确认收货</x-button>
                      <x-button mini plain>取消订单</x-button>
                      <x-button mini plain type="primary">付款</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
          </div>
          <!-- 代发货 -->
          <div class="zkui-order-list-box" v-if="i===1">
            <div class="zkui-order-list-content">
              <div class="zkui-order-list-box-item">
                <group class="box-title">
                  <cell title="自营店铺" value="待发货"></cell>
                </group>
                <div class="zkui-order-list-product">
                  <ul class="flex">
                    <li class="left-img">
                      <a href="/order/show?id=378" class=""><img src="http://zqingchun.yiqipingou.com//wwwroot/Uploads/Product/2018/04/b1d526395f5240bd8b3b4c18deb7d36f.jpg_320X320.jpg" alt=""></a>
                    </li>
                    <li class="flex_one center-content">
                      <a href="/order/show?id=378" class="">
                        <p>
                          韩国Paparecipe春雨 美白面膜 25g*10
                        </p>
                      </a>
                      <span>
                        一盒
                      </span>
                    </li>
                    <li class="left-price">
                      <ul>
                        <li class="price_now">￥111</li>
                        <li class="price_count">x 1</li>
                      </ul>
                    </li>
                  </ul>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">1</span> 件商品 合计：
                      <span class="num">￥111</span>(含运费
                      <span class="num">￥0</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain>确认收货</x-button>
                      <x-button mini plain>取消订单</x-button>
                      <x-button mini plain type="primary">付款</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
          </div>
          <!-- 已发货 -->
          <div class="zkui-order-list-box" v-if="i===2">
            <div class="zkui-order-list-content">
              <div class="zkui-order-list-box-item">
                <group class="box-title">
                  <cell title="自营店铺" value="已发货"></cell>
                </group>
                <div class="zkui-order-list-product">
                  <ul class="flex">
                    <li class="left-img">
                      <a href="/order/show?id=378" class=""><img src="http://zqingchun.yiqipingou.com//wwwroot/Uploads/Product/2018/04/b1d526395f5240bd8b3b4c18deb7d36f.jpg_320X320.jpg" alt=""></a>
                    </li>
                    <li class="flex_one center-content">
                      <a href="/order/show?id=378" class="">
                        <p>
                          韩国Paparecipe春雨 美白面膜 25g*10
                        </p>
                      </a>
                      <span>
                        一盒
                      </span>
                    </li>
                    <li class="left-price">
                      <ul>
                        <li class="price_now">￥111</li>
                        <li class="price_count">x 1</li>
                      </ul>
                    </li>
                  </ul>
                  <group class="list-aggregate">
                    <cell>
                      共
                      <span class="num">1</span> 件商品 合计：
                      <span class="num">￥111</span>(含运费
                      <span class="num">￥0</span>)
                    </cell>
                  </group>
                  <group class="product-option">
                    <cell>
                      <!-- <x-button mini plain>确认收货</x-button>
                      <x-button mini plain>取消订单</x-button>
                      <x-button mini plain type="primary">付款</x-button> -->
                    </cell>
                  </group>
                </div>
              </div>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </section>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, Xbutton } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, Xbutton
    },
    data () {
      return {
        list2: ['全部', '待发货', '已发货'],
        demo2: '全部',
        showView: 0
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style  lang="less">
  .zkui-order-Deliver {
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

