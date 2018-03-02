<template>
  <section class="zkui-order-cart">

    <zk-head title='购物车' class="zkui-order-cart-head"></zk-head>
    <div class="zkui-order-cart-box">
      <ul>
        <li class="zkui-order-cart-item">
          <div class="order-cart-store flex">
            <div class="label">
              <input type="checkbox" />
            </div>
            <h2 class="flex_one">酷跑运动</h2>
          </div>
          <div class="order-cart-commodity">
            <ul class="flex order-cart-commodity-box">
              <li class="order-cart-commodity-left">
                <div class="label">
                  <input type="checkbox" />
                </div>
              </li>
              <li class="flex_one">
                <div class="order-cart-commodit-into flex">
                  <div class="order-cart-commodity-into_left">
                    <img src="https://o5omsejde.qnssl.com/demo/test1.jpg" alt="">
                  </div>
                  <div class="flex_one order-cart-commodity-into_right ">
                    <p>阿迪达斯阿迪达斯阿迪达斯阿迪达斯阿迪达斯</p>
                    <span>颜色：BB9774,尺码：36</span>
                    <ul class="flex">
                      <li class="price_now">￥439.12</li>
                      <li class="price_old">￥499.00</li>
                      <li class="flex_one price_num">×1</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="zkui-order-cart-item">
          <div class="order-cart-store flex">
            <div class="label">
              <input type="checkbox" />
            </div>
            <h2 class="flex_one">酷跑运动</h2>
          </div>
          <div class="order-cart-commodity">
            <ul class="flex order-cart-commodity-box">
              <li class="order-cart-commodity-left">
                <div class="label">
                  <input type="checkbox" />
                </div>
              </li>
              <li class="flex_one">
                <div class="order-cart-commodit-into flex">
                  <div class="order-cart-commodity-into_left">
                    <img src="https://o5omsejde.qnssl.com/demo/test1.jpg" alt="">
                  </div>
                  <div class="flex_one order-cart-commodity-into_right ">
                    <p>阿迪达斯阿迪达斯阿迪达斯阿迪达斯阿迪达斯</p>
                    <span>颜色：BB9774,尺码：36</span>
                    <ul class="flex">
                      <li class="price_now">￥439.12</li>
                      <li class="price_old">￥499.00</li>
                      <li class="flex_one price_num">×1</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
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
    <!--<zk-foot></zk-foot>-->
  </section>
</template>

<script>
  import apiOrder from 'src/service/api/order.api'
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton } from 'zkui'
  export default {
    data () {
      return {
<<<<<<< HEAD
        title: '购物车',
        goBack: '',
        moduleView: ''
=======

>>>>>>> 5672481ea44c2092bb926711028026b64f7ce0a2
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      XButton
    },
    mounted () {
      this.GetData()
      var chbAll = document.querySelector('.bar-left input')
      var chbs = document.querySelectorAll('.zkui-order-cart-box input')
      chbAll.onclick = function () {
        for (var i = 0; i < chbs.length; i++) {
          chbs[i].checked = this.checked
        }
      }
      for (var i = 0; i < chbs.length; i++) {
        chbs[i].onclick = function () {
          if (!this.checked) {
            chbAll.checked = false
          } else {
            var unchecked =
              document.querySelector('.zkui-order-cart-box input:not(:checked)')
            if (unchecked === null) {
              chbAll.checked = true
            }
          }
        }
      }
    },
    methods: {
      async GetData () {
        var response = await apiOrder.GetCart()
        this.moduleView = response
        console.log(this.moduleView)
      }
    }
  }
</script>
<style lang="less">
  body {
    background: @gray-100;
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
              width: 100%;
              position: absolute;
              left: 10*@rem;
              bottom: 10*@rem;
              height: 2rem;
              padding-right: 20*@rem;
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

