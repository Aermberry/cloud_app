<template>
  <section>

    <buy-address></buy-address>
    <group class="zkui_order_buy order_buy_product " v-for="(store,storeIndex) in modelView.storeItems " :key="storeIndex">
      <cell :title="store.storeName" class="border-bottom"> </cell>
      <div class="item-contnet">
        <ul>
          <li class="zkui-order-cart-item" v-for="(productSku,productSkuIndex) in store.productSkuItems " :key="productSkuIndex">
            <div class="order-cart-commodity">
              <div class="demo-content " style="height: 7.8rem;">
                <ul class="flex order-cart-commodity-box">
                  <li class="flex_one">
                    <div class="order-cart-commodit-into flex">
                      <div class="order-cart-commodity-into_left"><img :src="productSku.thumbnailUrl " alt=""></div>
                      <div class="flex_one order-cart-commodity-into_right ">
                        <p>{{productSku.name}}</p>
                        <span>{{productSku.bn}} {{productSku.propertyValueDesc}} </span>
                        <ul class="flex">
                          <li class="price_now">￥{{productSku.price}}</li>
                          <li class="price_old"> ￥{{productSku.marketPrice}}</li>
                          <li class="flex_one price_num">
                            X {{productSku.buyCount}}
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
      </div>
      <popup-radio title="请选择 " :options="store.expressTemplates" v-model="showDelivery">
        <p slot="popup-header" class="border-bottom popup-header">选择快递方式</p>
      </popup-radio>
      <x-textarea title="卖家留言 " placeholder="选填：填写内容已和卖家协商确认 " :show-counter="false " :rows="1 " autosize></x-textarea>
      <cell>
        <div>共{{store.totalCount}}商品 小计{{store.totalAmount}}</div>
      </cell>
      <divider class="divider-bg "></divider>
    </group>
    <tabbar class="zkui_order_buy">
      <tabbar-item>
        <div slot="label" class="total">
          <span>总计</span>
          <span class="money">￥{{modelView.totalAmount}}</span>
          <span class="total-amount">共{{modelView.totalCount}}件商品</span>
        </div>
      </tabbar-item>
      <tabbar-item>
        <x-button slot="customer" type="primary" @click.native="buy">提交订单</x-button>
      </tabbar-item>
    </tabbar>
    <zk-pay ref="show_pay"></zk-pay>
  </section>

</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton, CellFormPreview, CellBox, Panel, InlineXNumber, XTextarea, Picker, Popup, TransferDom, PopupRadio, Divider } from 'zkui'
  import { ZkPay } from 'widgets'
  import apiService from 'src/service/api/order.api'
  import BuyAddress from './buy__address' // 地址
  import local from 'src/service/common/local'

  export default {
    components: {
      Tabbar,
      BuyAddress,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      XButton,
      CellFormPreview,
      CellBox,
      Panel,
      InlineXNumber,
      XTextarea,
      PopupRadio,
      Picker,
      Popup,
      Divider,
      TransferDom,
      ZkPay
    },
    data () {
      return {
        modelView: '', // 商品数据，从服务器上远程获取
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        showPay: false, // 显示支付方式
        payAmount: '', // 需要支付的金额，人民币支付
        showDelivery: '' // 显示物流快递
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async buy () {
        // var orderBuyInput = {
        //   // addressId: '72be65e6-3a64-414d-972e-1a3d4a36f88', // 选择地址Id
        //   payType: 3, // 支付方式
        //   totalAmount: 1256.26, // 订单总金额
        //   paymentAmount: 1250.99, // 订单总金额
        //   orderType: 1,
        //   userId: this.LoginUser().id // 下单用户ID
        // }

        var storeProduct =
          [
            {
              StoreId: 6,
              DeliveryId: '72be65e6-3a64-414d-972e-1a3d4a36f701',
              UserMessage: '我是一个好人对不对 不对是吗？',
              ProductItems: [
                {
                  ProductId: 44,
                  ProductSkuId: 17,
                  Count: 12,
                  Amount: 1234.0
                },
                {
                  ProductId: 44,
                  ProductSkuId: 18,
                  Count: 28,
                  Amount: 32814.0
                }
              ]
            }
          ]
        var moneyitem =
          [
            {
              MoneyTypeId: 'e97ccd1e-1478-49bd-bfc7-e73a5d699002',
              Currency: 2,
              Name: '积分账户',
              ReduceAmount: 123.0
            },
            {
              MoneyTypeId: 'e97ccd1e-1478-49bd-bfc7-e73a5d699000',
              Currency: 0,
              Name: '现金账户',
              ReduceAmount: 123.0
            }
          ]

        let buyInfo = {
          MonenyItemJson: JSON.stringify(moneyitem),
          StoreOrderJson: JSON.stringify(storeProduct),
          AddressId: '72be65e6-3a64-414d-972e-1a3d4a36f123',
          UserId: 1,
          TotalAmount: 125656,
          PaymentAmount: 154,
          PayType: 4,
          OrderType: 1
        }

        var response = await apiService.Buy(buyInfo)
        console.dir(response)
        if (response.data.status === 1) {
          this.payAmount = '1250.23' // 设置实际需支付的金额
          this.$refs.show_pay.$emit('payMethod', this.payAmount) // 唤起支付窗口
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      },
      async GetData () {
        var buyProductInfo = ''
        if (this.$route.params.buyInfo !== undefined) {
          buyProductInfo = this.$route.params.buyInfo
          local.setStore('order_buy', buyProductInfo) // 将购买信息写到缓存中
        } else {
          buyProductInfo = local.getStore('order_buy') // 刷新时从缓冲中读取数据
        }
        if (buyProductInfo === undefined) {
          this.$vux.toast.warn('暂无商品，清先购买商品')
          this.$router.push({
            name: 'commont_index'
          })
        } else {
          let buyInfoInput = {
            loginUserId: this.LoginUser().id,
            productJson: JSON.stringify(buyProductInfo)
          }
          var response = await apiService.buyProduct(buyInfoInput)
          if (response.data.status !== 1) {
            this.messageWarn(response.data.message)
          } else {
            this.modelView = response.data.result
          }
          this.modelView = response.data.result
          this.asyncFlag = true
        }
      }
    }
  }
</script>

<style lang="less">
  .zkui_order_buy {
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
      .weui-cells {
        .vux-no-group-title {
          margin-top: 0.77em;
          :after {
            border-bottom: 0;
          }
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
      color: @metal;
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
          color: @metal;
        }
      }
      .address_particulars {
        color: @black;
        text-align: left;
      }
    }

    .spec {
      margin-top: 0.5rem;
    }
    .weui-form-preview__value {
      font-size: @h5-font-size;
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
                        font-size: @h6-font-size;
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
  }
</style>
