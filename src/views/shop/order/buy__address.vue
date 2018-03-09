<template>
  <section class="zkui_order_buy__address">
    <zk-head title='确认下单' goBack='商品详情'></zk-head>
    <div @click="selectAddress" v-if="!hasSelectAddress">
      <group class="mt-0">
        <cell title="地址" value="请选择地址" is-link svg='zk-orderaddress'> </cell>
      </group>
    </div>
    <div class="vux-form-preview weui-form-preview zkui_order_buy-address" v-if="hasSelectAddress" @click="selectAddress">
      <div class="weui-form-preview__hd">
        <label class="weui-form-preview__label address_name">收货人：{{viewModel.name}}</label>
        <em class="weui-form-preview__value">{{viewModel.mobile}}</em>
        <div class="weui-form-preview__item">
          <span class="weui-form-preview__value address_particulars address_name">
            <m-icon name="zk-orderaddress" size="2.5rem" class="icon"></m-icon>
            收货地址：{{viewModel.addressDescription}}
          </span>
        </div>
      </div>
    </div>
    <divider class="divider-bg "></divider>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Divider, Group, Cell, TransferDom } from 'zkui'
  import local from 'src/service/common/local'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Divider,
      Group,
      Cell
    },
    mounted () {
      this.GetData()
    },
    methods: {
      selectAddress () {
        this.$router.push({
          name: 'address_index',
          params: {
            selectType: true
          }
        })
      },
      async GetData () {
        var defaultAddress = local.getStore('default_address') // 刷新时从缓冲中读取地址
        if (defaultAddress === undefined) {
          // 缓存中不存在地址
          var response = await apiUser.SingleAddress()
          if (response.data.status === 1) {
            this.viewModel = response.data.result
            this.hasSelectAddress = true
            local.setStore('default_address', this.viewModel) // 将购买信息写到缓存中
          } else {
            this.$vux.toast.warn('请先添加地址')
          }
        } else {
          this.viewModel = defaultAddress
          this.hasSelectAddress = true
        }
      }
    },
    data () {
      return {
        viewModel: '', // 数据模型
        hasSelectAddress: false // 已经选择了地址
      }
    }
  }
</script>

<style lang="less">
  .zkui_order_buy__address {
    margin-bottom: 2.5rem;
    .weui-tabbar {
      position: fixed;
      z-index: 500;
      bottom: 0;
      width: 100%;
      // height: 3.33333333rem;
      height: 3.5rem;
      .bar-home {
        width: 15%;
      }
      .weui-tabbar__label {
        text-align: center;
        color: #999999;
        line-height: 0;
      }
      .weui-tabbar__icon {
        display: inline-block;
        width: 2.25rem;
        height: 2.2rem;
      }
      .weui-btn {
        width: 8rem;
        height: 3.5rem;
        white-space: nowrap;
        border-radius: 0px;
        float: right;
      }
      .weui-btn:after {
        content: ' ';
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid rgba(0, 0, 0, 0.2);
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0;
      }
      .weui-cells .vux-no-group-title {
        :after {
          border-bottom: 0;
        }
      }
      .bar-home,
      .bar-star {
        width: 45%;
        border-right: 1px solid #e5e5e5;
      }
    }

    .total {
      float: left;
      margin-left: 8*@rem;
      margin-top: 20*@rem;
      font-weight: bold;
      color: black;
      .money {
        color: @danger;
        font-size: @h3-font-size;
      }
      .total-amount {
        margin-left: 105*@rem;
        position: absolute;
        color: #adb5bd;
        top: 20*@rem;
      }
    }

    .vux-form-preview {
      .weui-form-preview__hd {
        line-height: 2em;
        label {
          color: @black;
        }
      }
      .address_particulars {
        color: @black;
        text-align: left;
      }
    }
    .address_name {
      padding-left: 1.8rem;
    }
    .spec {
      margin-top: 0.5rem;
    }
    .weui-form-preview__value {
      font-size: @h4-font-size;
    }
    .vux-inline-x-number {
      float: right;
      margin-top: 1rem;
    }
    .vux-number-selector-plus {
      padding: 0 0.66666667rem;
      margin-right: 0;
    }
    .weui-media-box__title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      white-space: pre;
    }
    .zkui_order_buy-address {
      .icon {
        position: absolute;
        top: 3rem;
      }
      .weui-cell {
        .vux-cell-bd {
          .vux-label {
            padding-left: 1rem;
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
          border-bottom: 1px solid rgba(229, 229, 229, 0.5);
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
  }
</style>

