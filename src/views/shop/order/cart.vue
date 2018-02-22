<template>
  <section class="zkui-order-cart">
    <!-- 头部 -->
    <zk-head :title='title' :goBack='goBack' class="zkui-order-cart-head"></zk-head>
    <div class="zkui-order-cart-box">
      <ul>
        <li class="zkui-order-cart-list">
          <div class="zkui-order-cart-list-top">
            <div class="zkui-order-cart-list-top-label">
              <div class="zkui-order-cart-list-top-label-box">
                <input type="checkbox" id="check0" class="regular-checkbox" />
                <label for="check0"></label>
              </div>
            </div>
            <div class="zkui-order-cart-list-top-title">
              酷跑运动专营店
            </div>
          </div>
          <div class="zkui-order-cart-list-bottom">
            <div class="zkui-order-cart-list-bottom-label">
              <div class="zkui-order-cart-list-top-label-box">
                <input type="checkbox" id="check25" class="regular-checkbox" />
                <label for="check25"></label>
              </div>
            </div>
            <div class="zkui-order-cart-list-bottom-content clear">
              <div class="zkui-order-cart-list-bottom-content-left left">
                <img src="http://via.placeholder.com/400x400" alt="">

              </div>
              <div class="zkui-order-cart-list-bottom-content-right right">
                <p>阿迪达斯男鞋杨雨阿迪达斯男鞋杨雨阿迪达斯男鞋杨</p>
                <span>
                  颜色：BB9774,尺码36
                </span>
                <div class="zkui-order-cart-list-bottom-content-right-bottom">
                  <ul>
                    <li class="zkui-order-cart-list-bottom-content-right-bottom-nowprice">¥ 439.12</li>
                    <li class="zkui-order-cart-list-bottom-content-right-bottom-oldprice">¥ 499.00</li>
                    <li class="zkui-order-cart-list-bottom-content-right-bottom-quantity ">x1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="zkui-order-cart-list">
          <div class="zkui-order-cart-list-top">
            <div class="zkui-order-cart-list-top-label">
              <div class="zkui-order-cart-list-top-label-box">
                <input type="checkbox" id="check" class="regular-checkbox" />
                <label for="check"></label>
              </div>
            </div>
            <div class="zkui-order-cart-list-top-title">
              酷跑运动专营店
            </div>
          </div>
          <div class="zkui-order-cart-list-bottom">
            <div class="zkui-order-cart-list-bottom-label">
              <div class="zkui-order-cart-list-top-label-box">
                <input type="checkbox" id="check2" class="regular-checkbox" />
                <label for="check2"></label>
              </div>
            </div>
            <div class="zkui-order-cart-list-bottom-content clear">
              <div class="zkui-order-cart-list-bottom-content-left left">
                <img src="http://via.placeholder.com/400x400" alt="">

              </div>
              <div class="zkui-order-cart-list-bottom-content-right right">
                <p>阿迪达斯男鞋杨雨阿迪达斯男鞋杨雨阿迪达斯男鞋杨</p>
                <span>
                  颜色：BB9774,尺码36
                </span>
                <div class="zkui-order-cart-list-bottom-content-right-bottom">
                  <ul>
                    <li class="zkui-order-cart-list-bottom-content-right-bottom-nowprice">¥ 439.12</li>
                    <li class="zkui-order-cart-list-bottom-content-right-bottom-oldprice">¥ 499.00</li>
                    <li class="zkui-order-cart-list-bottom-content-right-bottom-quantity ">X1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="zkui-order-cart-button">
        <div class="zkui-order-cart-button-left">
          <div class="zkui-order-cart-button-left-label">
            <div class="zkui-order-cart-list-top-label-box">
              <input type="checkbox" id="check3" class="regular-checkbox" />
              <label for="check3"></label>
            </div>
          </div>

          <div class="zkui-order-cart-button-left-label">
            <span>全选</span>
          </div>

        </div>
        <div class="zkui-order-cart-button-right">
          <span>￥0.00</span>

          <router-link to="/index">
            <x-button>结算</x-button>
          </router-link>
        </div>
      </div>
    </div>

    <!--<zk-foot></zk-foot>-->
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {
        title: '购物车',
        goBack: ''
      }
    }
  }
</script>
<style lang="less">
  // @import 'zkui/src/styles/zkui.less';
  // //全局变量CSS，颜色，大小，边框，尺寸，尽量使用变量库里头的变量，请悉知所有变量
  // .zkui-order-cart-head {
  //   background: $white;
  // }
  // .zkui-order-cart {
  //   height: 100vh;
  //   .zkui-order-cart-box {
  //     height: 100%;
  //     padding-bottom: 2rem;
  //     position: relative;
  //     background-color: #eeeeee;
  //     .zkui-order-cart-button {
  //       position: fixed;
  //       bottom: 0;
  //       left: 0;
  //       background: $white;
  //       @include widthHeight(100%,2rem);
  //       display: -moz-box;
  //       display: -ms-flexbox;
  //       display: -webkit-box;
  //       display: -webkit-flex;
  //       display: flex;
  //       .zkui-order-cart-button-left {
  //         -ms-flex: 1;
  //         -moz-box-flex: 1;
  //         -webkit-flex: 1;
  //         flex: 1;
  //         padding-left: 10*@rem;
  //         display: -moz-box;
  //         display: -ms-flexbox;
  //         display: -webkit-box;
  //         display: -webkit-flex;
  //         display: flex;
  //         .zkui-order-cart-button-left-label {
  //           position: relative;
  //           @include widthHeight(2rem,2rem);
  //         }
  //       }
  //       .zkui-order-cart-button-left span {
  //         line-height: 2rem;
  //         font-size: $H3Size;
  //       }
  //       .zkui-order-cart-button-right {
  //         -ms-flex: 1;
  //         -moz-box-flex: 1;
  //         -webkit-flex: 1;
  //         flex: 1;
  //         text-align: right;
  //         line-height: 2rem;
  //         padding-right: 10*@rem;
  //       }
  //       .zkui-order-cart-button-right > span {
  //         @include sizeColor($H3Size,$brand);
  //       }
  //       .zkui-order-cart-button-right button {
  //         @include sizeColor($H3Size,$white);
  //         padding: 5px 10*@rem;
  //         background: $brand;
  //       }
  //     }
  //   }
  //   .zkui-order-cart-list {
  //     background: #fff;
  //     margin-bottom: 0.4rem;
  //     .zkui-order-cart-list-top {
  //       @include widthHeight(100%,1.8rem);
  //       border-bottom: 1px solid #e5e5e5;
  //       display: -moz-box;
  //       display: -ms-flexbox;
  //       display: -webkit-box;
  //       display: -webkit-flex;
  //       display: flex;
  //       .zkui-order-cart-list-top-label {
  //         @include widthHeight(2rem,1.8rem);
  //         text-align: center;
  //         position: relative;
  //       }

  //       .zkui-order-cart-list-top-title {
  //         padding-left: 10*@rem;
  //         line-height: 1.6rem;
  //         -ms-flex: 1;
  //         -moz-box-flex: 1;
  //         -webkit-flex: 1;
  //         flex: 1;
  //         @include sizeColor($H2Size,$sc);
  //       }
  //     }
  //     .zkui-order-cart-list-bottom {
  //       padding: 15px 0;
  //       border-bottom: 1px solid #e5e5e5;
  //       background-color: $white;
  //       display: -moz-box;
  //       display: -ms-flexbox;
  //       display: -webkit-box;
  //       display: -webkit-flex;
  //       display: flex;
  //       .zkui-order-cart-list-bottom-label {
  //         @include widthHeight(2rem,4rem);
  //         position: relative;
  //       }
  //       .zkui-order-cart-list-bottom-content {
  //         padding-left: 3*@rem;
  //         -ms-flex: 1;
  //         -moz-box-flex: 1;
  //         -webkit-flex: 1;
  //         flex: 1;
  //         height: 4.3rem;
  //         display: -moz-box;
  //         display: -ms-flexbox;
  //         display: -webkit-box;
  //         display: -webkit-flex;
  //         display: flex;
  //         .zkui-order-cart-list-bottom-content-left {
  //           @include widthHeight(3rem,4.2rem);
  //         }
  //         .zkui-order-cart-list-bottom-content-left > img {
  //           margin-top: 0.5rem;
  //           @include widthHeight(100%,3rem);
  //         }
  //         .zkui-order-cart-list-bottom-content-right {
  //           -ms-flex: 1;
  //           -moz-box-flex: 1;
  //           -webkit-flex: 1;
  //           flex: 1;
  //           padding-left: 10*@rem;
  //           position: relative;
  //         }
  //         .zkui-order-cart-list-bottom-content-right > p {
  //           @include sizeColor($H4Size,$sc);
  //           line-height: 0.8rem;
  //         }
  //         .zkui-order-cart-list-bottom-content-right > span {
  //           font-size: $H4Size;
  //         }
  //         .zkui-order-cart-list-bottom-content-right-bottom {
  //           position: absolute;
  //           bottom: 0;
  //           left: 0.6rem;
  //           @include widthHeight(100%,1rem);

  //           .zkui-order-cart-list-bottom-content-right-bottom-nowprice {
  //             @include sizeColor($H2Size,$brand);
  //             margin-right: 5*@rem;
  //           }
  //           .zkui-order-cart-list-bottom-content-right-bottom-oldprice {
  //             font-size: $H4Size;
  //             text-decoration: line-through;
  //             padding-top: 0.18rem;
  //             -ms-flex: 1;
  //             -moz-box-flex: 1;
  //             -webkit-flex: 1;
  //             flex: 1;
  //           }
  //           .zkui-order-cart-list-bottom-content-right-bottom-quantity {
  //             font-size: $H3Size;
  //             padding-right: 0.5rem;
  //           }
  //           .zkui-order-cart-list-bottom-content-right-bottom-delete {
  //             @include widthHeight(1.5rem,1.5rem);
  //           }
  //           .zkui-order-cart-list-bottom-content-right-bottom-delete > a {
  //             display: block;
  //             @include widthHeight(100%,100%);
  //           }
  //         }
  //         .zkui-order-cart-list-bottom-content-right-bottom > ul {
  //           display: -moz-box;
  //           display: -ms-flexbox;
  //           display: -webkit-box;
  //           display: -webkit-flex;
  //           display: flex;
  //           padding-right: 5*@rem;
  //         }
  //       }
  //     }
  //   }
  // }

  // /*首先第一步就是隐藏原来的复选框*/
  // .regular-checkbox {
  //   display: none;
  // }
  // /*第二部定义现在复选框样式*/
  // .regular-checkbox + label {
  //   position: relative;
  //   display: inline-block;
  //   /*lable是内联元素所以需要加inline-block*/
  //   padding: 9*@rem;
  //   /*设置复选框大小*/
  //   background-color: #ffffff;
  //   /*设置背景颜色*/
  //   border-radius: 10*@rem;
  //   /*复选框border*/
  //   border: 1px solid #cacaca;
  // }
  // /*第三部分做一个active的效果*/
  // .regular-checkbox + label:active,
  // .regular-checkbox + label:checked + label:active {
  //   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  // }
  // /*选中之后的样式*/
  // .regular-checkbox:checked + label {
  //   background-color: #e9ecee;
  //   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  // }
  // /*选中后的效果*/
  // .regular-checkbox:checked + label:after {
  //   content: '\2714';
  //   /*这是一个对勾*/
  //   position: absolute;
  //   font-size: 16*@rem;
  //   /*设置对勾的大小*/
  //   top: 0*@rem;
  //   left: 2*@rem;
  //   /*设置位置的偏向*/
  //   color: $brand;
  //   /*设置颜色绿色*/
  //   font-weight: bold;
  //   /*设置对勾的粗细*/
  // }
  // .zkui-order-cart-list-top-label-box {
  //   position: absolute;
  //   left: 50%; /* 定位父级的50% */
  //   top: 55%;
  //   transform: translate(-50%, -50%); /*自己的50% */
  // }
</style>
