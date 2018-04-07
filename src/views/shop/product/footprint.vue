<template>
  <section class="zkui-user-product-footprint">
    <zk-head title='我的足迹' goBack='会员中心'></zk-head>
    <!-- <zk-list :styleType=1 dataType='bill' diyKey='list_user_bill' :isLogin="true"></zk-list> -->
    <div>
      <div class="item-contnet">
        <ul>
          <li class="zkui-order-cart-item" v-for="(item,index) in modelView.productItems " :key="index">
            <div class="order-cart-commodity">
              <div class="demo-content " style="height: 7.8rem;">
                <ul class="flex order-cart-commodity-box">
                  <li class="flex_one">
                    <div class="order-cart-commodit-into flex">
                      <div class="order-cart-commodity-into_left"><img :src="item.thumbnailUrl" alt=""></div>
                      <div class="flex_one order-cart-commodity-into_right ">
                        <p>{{item.name}}</p>
                        <div class="commodity-into_right_bottom flex">
                          <span class="now">
                            ￥{{item.price}}
                          </span>
                          <span class="old">
                            ￥{{item.marketPrice}}
                          </span>
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
    </div>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import apiService from 'src/service/api/product.api'
  import { ZkList } from 'widgets'
  export default {
    components: {
      ZkList
    },
    data () {
      return {
        modelView: ''
      }
    },
    mounted () {
      this.data()
    },
    methods: {
      async data () {
        var response = await apiService.footprint()
        this.modelView = response.data.result
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-product-footprint {
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
          .order-cart-commodity {
            height: 7.8rem;
            .order-cart-commodit-into {
              height: 100%;
              .order-cart-commodity-into_left {
                width: 6.5rem;
                height: 6.5rem;
                margin-top: 0.8rem;
                margin-left: 10*@rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .order-cart-commodity-into_right {
                margin-top: 0.8rem;
                padding: 0 0.8rem;
                position: relative;
                min-height: 5rem;
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
                .commodity-into_right_bottom {
                  width: 100%;
                  min-height: 2rem;
                  position: absolute;
                  right: 0.8rem;
                  bottom: 0;
                  vertical-align: bottom;
                  align-items: flex-end;
                  span.now {
                    color: @brand;
                    font-weight: @font-weight-bold;
                    padding-left: 2rem;
                  }
                  span.old {
                    margin-left: 10px;
                    text-decoration: line-through;
                    font-size: @h6-font-size;
                    color: @gray-500;
                  }
                  .btn-box {
                    width: 7rem;
                  }
                }
              }
            }
          }
        }
      }
    }

    .weui-media-box__hd {
      width: 45px !important;
      height: 45px !important;
      margin: 10px auto;
      .brand {
        width: 50*@rem;
        height: 50*@rem;
        padding-top: 0.1rem;
        border-radius: 50%;
      }
    }
    .weui-media-box__title__extra {
      float: right;
    }
    .weui-media-box__bd {
      padding-left: 0.1rem;
    }
    .weui-media-box__desc {
      padding-top: 0.3rem;
      font-size: @h6-font-size;
    }
    .weui-media-box__title__extra {
      font-size: @h4-font-size;
      font-weight: bold;
    }
  }
</style>

