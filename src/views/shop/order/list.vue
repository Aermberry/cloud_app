<template>
  <section class="zkui-order-list">

    <zk-head title='我的订单' goBack='会员中心'></zk-head>
    <div>
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" :show-dots="false">
        <swiper-item v-for="(item, indexe) in list2" :key="indexe">
          <!-- <div class="tab-swiper vux-center">{{item}} Container</div> -->
          <div v-if="indexe===0" class="zkui-order-list-box">
            <div class="zkui-order-list-content">
              <div class="zkui-order-list-box-item" v-for="(store,indexs) in data" :key="indexs">
                <group class="box-title">
                  <cell :title="store.storeItems[0].storeName" value="状态"></cell>
                </group>
                <div class="zkui-order-list-product" v-for="(product,index) in store.storeItems[0].productSkuItems" :key="index">
                  <ul class="flex">
                    <li class="left-img">
                      <img :src="product.thumbnailUrl" alt="">
                    </li>
                    <li class="flex_one center-content">
                      <p>
                        {{product.name}}
                      </p>
                    </li>
                    <li class="left-price">
                      <ul>
                        <li class="price_now">￥{{product.price}}</li>
                        <li class="price_old">￥69.00</li>
                        <li class="price_count">
                          X{{product.buyCount}}
                        </li>
                      </ul>
                    </li>
                  </ul>

                </div>
                <group>
                  <cell>
                    共1件商品 合计：￥69.00(含运费￥0.00)
                  </cell>
                </group>
                <group class="product-option">
                  <cell>
                    <x-button mini plain>取消订单</x-button>
                    <x-button mini plain>朋友代付</x-button>
                    <x-button mini plain type="primary">付款</x-button>
                  </cell>
                </group>
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
        index: 0,
        data: ''
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var reponse = await orderService.list()
        this.data = reponse.data.result
        console.log(this.data)
      }
    }
  }
</script>
<style lang="less">
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
      }
    }
    .weui-cells {
      margin-top: 0;
      .weui-cell {
        height: 3rem;
      }
    }
    .zkui-order-list-box {
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
                .weui-cell__ft {
                  color: @warning;
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
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .center-content {
                padding: 0 0.5rem;
                p {
                  font-size: @h6-font-size;
                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  font-family: Helvetica;
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
        }
      }
    }
  }
</style>
