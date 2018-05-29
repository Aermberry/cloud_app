<template>
  <div class="zk-groupbuy">
    <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll">
      <section class="ZKProductItem" v-if="styleType == 1">
        <!-- <div class="zkui-product-item__1 ">
          <ul>
            <li v-for="(item,index) in dataList" :key="index" :class="{'yqp-item':yqp}">
              <dl>
                <dt>
                  <router-link :to="showUrl+item.id">
                    <x-img :src="item.thumbnailUrl" :alt="item.thumbnailUrl"></x-img>
                  </router-link>
                </dt>
                <dd class="itemTitle">
                  <router-link :to="showUrl+item.id">
                    {{item.name}}
                  </router-link>
                </dd>
                <dd class="itemPrice">
                  <div>
                    ￥{{item.displayPrice}}
                    <span v-if="item.marketPrice!==0">￥{{item.marketPrice}}</span>
                  </div>
                </dd>
                <dd class="itembuy">
                  <x-button :link="showUrl+item.id">去拼团</x-button>
                </dd>
              </dl>
            </li>
          </ul>
        </div> -->
        <group class="order_buy_product ">
          <!-- <cell class="border-bottom"> </cell> -->
          <div class="item-contnet">
            <ul>
              <li class="zkui-order-cart-item" v-for="(item,index) in dataList" :key="index">
                <div class="order-cart-commodity">
                  <div class="demo-content " style="height: 7.8rem;">
                    <ul class="flex order-cart-commodity-box">
                      <li class="flex_one">
                        <div class="order-cart-commodit-into flex">
                          <div class="order-cart-commodity-into_left">
                            <router-link :to="showUrl+item.id">
                              <img :src="item.thumbnailUrl" alt="">
                            </router-link>
                          </div>
                          <div class="flex_one order-cart-commodity-into_right ">
                            <router-link :to="showUrl+item.id">
                              <p> {{item.name}}</p>
                            </router-link>
                            <span></span>
                            <div class="price-box">
                              <p class="price_now">￥{{item.displayPrice}}</p>
                              <div class="flex">
                                <span class="price_old flex_one "> ￥{{item.marketPrice}} </span>
                                <x-button type="primary" :link="showUrl+item.id">去拼团</x-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </group>
      </section>
    </x-scroll>
  </div>
</template>

<script>
  import { XImg, XScroll, Tabbar, TabbarItem, Group, Cell, MIcon, XButton, CellFormPreview, CellBox, Panel, InlineXNumber, XTextarea, Picker, Popup, TransferDom, PopupRadio, Divider, XSwitch } from 'zkui'
  import apiService from 'src/service/api/product.api'
  export default {
    name: 'zk-product-item',
    components: {
      XImg,
      XScroll,
      XButton,
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      CellFormPreview,
      CellBox,
      Panel,
      InlineXNumber,
      XTextarea,
      Picker,
      Popup,
      TransferDom,
      PopupRadio,
      Divider,
      XSwitch
    },
    props: {
      classIds: {
        type: String,
        default: '' // 商品分类Id，多个ID用,号隔开
      },
      tagIds: {
        type: String,
        default: '' // 商品标签Id，多个ID用,号隔开
      },
      recommend: {
        type: String,
        default: '' // 商品标签Id，多个ID用,号隔开
      },
      pageSize: {
        type: Number,
        default: 4 // 默认一页的商品数量
      },
      orderType: {
        type: Number,
        default: 0 // 默认排序方式
      },
      totalCount: {
        type: Number,
        default: 0 // 商品总数，如果为0，显示符合条件的商品
      },
      diykey: {
        type: String,
        default: '' // 默认Diy方式
      },
      pagination: { // 显示的页数
        type: Number
      }
    },
    data () {
      return {
        dataList: [], // 组件zklist 的循环数据,使用zklist时，所有的服务端输出结构都一样
        styleType: '', // 风格类型, zklist支持多种样式，判断选择哪种样式
        pageIndex: 1, // 从第一页开始加载
        showUrl: '/product/show/',
        yqp: false
      }
    },
    created () {
      if (window.location.href.indexOf('/product/show1/') !== -1) {
        this.showUrl = '/product/show/'
      }
      if (window.location.href.indexOf('/product/show/') !== -1) {
        this.showUrl = '/product/show1/'
      }
      // if (window.location.href.indexOf('123') === -1) {
      //   this.showUrl = '/product/show/'
      // }
    },
    mounted () {
      if (window.location.href.indexOf('yiqipingou') !== -1) {
        this.yqp = true
      } else {
        this.yqp = false
      }
    },
    methods: {
      async upCallback () {
        let params = {
          pageIndex: this.pageIndex, // 当前第页,下拉一次增加一次
          pageSize: this.pageSize, // 每页显示的数量 建议20
          classIds: this.classIds,
          tagIds: this.tagIds,
          totalCount: this.totalCount,
          IsGroupBuy: true,
          recommend: this.recommend
        }
        let response = await apiService.list(params) // 通过异步方法获取数据
        console.log(response)
        var totalSize = response.data.result.totalSize // 获取总页数
        this.styleType = response.data.result.styleType // 选择何种风格
        if (this.pagination === '' || this.pagination === 'undefined') {
          this.pagination = totalSize
        }
        if (this.pageIndex < this.pagination) {
          this.$refs.mescroll.endSuccess(params, totalSize) // 调用widget xsroll 下拉刷新函数
        }
        this.dataList = this.dataList.concat(response.data.result.productItems)
        if (this.pageIndex < totalSize) {
          this.pageIndex = this.pageIndex + 1 // 下拉时是自动增加一页
        }
      }
    }
  }
</script>

<style lang="less">
  .zk-groupbuy {
    .order_buy_product {
      .weui-cells {
        margin-top: 0;
      }
    }
    #index_scroll {
      .mescroll-upwarp {
        display: none;
      }
    }
    .zkui-product-item__1 {
      background: #ffffff;
      ul::after {
        content: '';
        display: block;
        clear: both;
      }
      ul {
        padding-bottom: 10 * @rem;
      }
      li {
        display: block;
        float: left;
        width: 47%;
        // height: 20rem;
        margin: 2% 0 0 2%;
        padding-bottom: 0.3rem;
        border-radius: 2 * @rem;
        border: 1px solid rgba(229, 229, 229, 0.4);

        dl {
          a {
            display: block;
            img {
              width: 100%;
              display: block;
            }
          }

          .itemTitle {
            a {
              display: block;
              margin: 0.3rem 0.3rem 0.1rem 0.3rem;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              color: @black;
              font-size: 14px;
              height: 40px;
            }
          }
          .itemPrice {
            padding-left: 0.3rem;
            div {
              display: flex;
              color: @brand;
              margin-left: -0.2rem;
              font-size: @h5-font-size;
              flex-wrap: wrap;
              span {
                padding-left: 5px;
                text-decoration: line-through;
                color: @gray-600;
                font-size: @h6-font-size;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                font-weight: normal;
              }
            }
          }
          .itembuy {
            .weui-btn {
              width: 50%;
              background: @brand;
              color: @white;
              margin-right: 0;
            }
          }
        }
      }
      li.yqp-item {
        dl {
          .itemPrice {
            height: auto;
            div {
              height: 1.5rem;
              font-size: @h5-font-size;
            }
          }
        }
      }
    }
    .item-contnet {
      .weui-cells {
        margin-top: 0;
      }
      .weui-cells_checkbox {
        .cart_item-title {
          padding: 0.3rem 0;
        }
      }
      ul {
        .zkui-order-cart-item {
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 0.5rem;
          .order-cart-commodity {
            height: 7.8rem;
            .order-cart-commodit-into {
              height: 100%;
              .order-cart-commodity-into_left {
                width: 6.5rem;
                height: 6.5rem;
                margin-top: 0.8rem;
                margin-left: 10 * @rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .order-cart-commodity-into_right {
                margin-top: 0.8rem;
                padding: 0 0.8rem;
                position: relative;
                p {
                  font-size: @h5-font-size;
                  color: @black;
                  font-family: Helvetica;
                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
                span {
                  font-size: 0.8rem;
                  color: @gray-500;
                  font-family: Helvetica;
                }
                div.price-box {
                  width: 95%;
                  position: absolute;
                  left: 10 * @rem;
                  bottom: 10 * @rem;
                  height: 2rem;
                  vertical-align: bottom;
                  align-items: flex-end;
                  p.price_now {
                    color: @danger;
                    font-size: @h5-font-size;
                    font-weight: bold;
                    font-family: Helvetica;
                  }
                  span.price_old {
                    padding-left: 5 * @rem;
                    text-decoration: line-through;
                    color: @gray-500;
                    font-family: Helvetica;
                  }
                  .weui-btn {
                    width: 8rem;
                    height: 2rem;
                    line-height: 2rem;
                  }
                  span.price_num {
                    text-align: right;
                    color: @gray-500;
                    padding-left: 10 * @rem;
                    font-family: Helvetica;
                    .vux-number-round {
                      height: 1.3rem;
                      div {
                        display: block;
                        .vux-number-selector-sub {
                          position: relative;
                          svg {
                            position: absolute;
                            top: 0;
                            left: 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
