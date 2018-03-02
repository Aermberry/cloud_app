<template>
  <section class="zkui-order-list">

    <zk-head title='我的订单' goBack='会员中心'></zk-head>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待付款</mt-tab-item>
      <mt-tab-item id="3">待发货</mt-tab-item>
      <mt-tab-item id="4">待收货</mt-tab-item>
      <mt-tab-item id="5">待评价</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="zkui-order-list-all">
          <ul class="zkui-order-list-content">
            <li>
              <h2 class="zkui-order-list-content-title">
                龙府国际运动
              </h2>
              <ul class="zkui-order-list-message">
                <li class="zkui-order-list-message-img">
                  <img src="../../../../static/images/swiper/01.jpg" alt="">
                </li>
                <li class="zkui-order-list-message-content">
                  <p>承恩哥的阿迪达斯承恩哥的阿迪达斯承恩哥的阿迪达斯</p>
                  <span>颜色：AQ6272 镭射尾；尺码42</span>
                </li>
                <li class="zkui-order-list-message-price">
                  <p class="zkui-order-list-message-oldprice">￥829.00</p>
                  <p class="zkui-order-list-message-nowprice">￥372.92</p>
                  <p class="zkui-order-list-message-quantity">X1</p>
                </li>
              </ul>
              <div class="zkui-order-list-aggregate ">
                <ul>
                  <li>全国包邮</li>
                  <li>总计</li>
                  <li class="zkui-order-list-aggregate-price ">￥397.92</li>
                </ul>
              </div>
            </li>
            <li>
              <h2 class="zkui-order-list-content-title">
                龙府国际运动
              </h2>
              <ul class="zkui-order-list-message">
                <li class="zkui-order-list-message-img">
                  <img src="../../../../static/images/swiper/01.jpg" alt="">
                </li>
                <li class="zkui-order-list-message-content">
                  <p>承恩哥的阿迪达斯承恩哥的阿迪达斯承恩哥的阿迪达斯</p>
                  <span>颜色：AQ6272 镭射尾；尺码42</span>
                </li>
                <li class="zkui-order-list-message-price">
                  <p class="zkui-order-list-message-oldprice">￥829.00</p>
                  <p class="zkui-order-list-message-nowprice">￥372.92</p>
                  <p class="zkui-order-list-message-quantity">X1</p>
                </li>
              </ul>
              <div class="zkui-order-list-aggregate ">
                <ul>
                  <li>全国包邮</li>
                  <li>总计</li>
                  <li class="zkui-order-list-aggregate-price ">￥397.92</li>
                </ul>
              </div>
            </li>
            <li>
              <h2 class="zkui-order-list-content-title">
                龙府国际运动
              </h2>
              <ul class="zkui-order-list-message">
                <li class="zkui-order-list-message-img">
                  <img src="../../../../static/images/swiper/01.jpg" alt="">
                </li>
                <li class="zkui-order-list-message-content">
                  <p>承恩哥的阿迪达斯承恩哥的阿迪达斯承恩哥的阿迪达斯</p>
                  <span>颜色：AQ6272 镭射尾；尺码42</span>
                </li>
                <li class="zkui-order-list-message-price">
                  <p class="zkui-order-list-message-oldprice">￥829.00</p>
                  <p class="zkui-order-list-message-nowprice">￥372.92</p>
                  <p class="zkui-order-list-message-quantity">X1</p>
                </li>
              </ul>
              <div class="zkui-order-list-aggregate ">
                <ul>
                  <li>全国包邮</li>
                  <li>总计</li>
                  <li class="zkui-order-list-aggregate-price ">￥397.92</li>
                </ul>
              </div>
            </li>
            <li>
              <h2 class="zkui-order-list-content-title">
                龙府国际运动
              </h2>
              <ul class="zkui-order-list-message">
                <li class="zkui-order-list-message-img">
                  <img src="../../../../static/images/swiper/01.jpg" alt="">
                </li>
                <li class="zkui-order-list-message-content">
                  <p>承恩哥的阿迪达斯承恩哥的阿迪达斯承恩哥的阿迪达斯</p>
                  <span>颜色：AQ6272 镭射尾；尺码42</span>
                </li>
                <li class="zkui-order-list-message-price">
                  <p class="zkui-order-list-message-oldprice">￥829.00</p>
                  <p class="zkui-order-list-message-nowprice">￥372.92</p>
                  <p class="zkui-order-list-message-quantity">X1</p>
                </li>
              </ul>
              <div class="zkui-order-list-aggregate ">
                <ul>
                  <li>全国包邮</li>
                  <li>总计</li>
                  <li class="zkui-order-list-aggregate-price ">￥397.92</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
      </mt-tab-container-item>
    </mt-tab-container>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {

        selected: 1
      }
    }
  }

</script>
<style lang="less">
  // @import 'zkui/src/styles/zkui.less';
  // //全局变量CSS，颜色，大小，边框，尺寸，尽量使用变量库里头的变量，请悉知所有变量
  // .zkui-order-list {
  //   .mint-tab-container-item {
  //     padding: 0 10*@rem;
  //   }

  //   .zkui-order-list-content {
  //     .zkui-order-list-content-title {
  //       @include widthHeight(100%,1.5rem);
  //       line-height: 1.5rem;
  //       padding-left: 5*@rem;
  //       border-bottom: 1px solid $BorderColor;
  //     }
  //     .zkui-order-list-message {
  //       display: -moz-box;
  //       display: -ms-flexbox;
  //       display: -webkit-box;
  //       display: -webkit-flex;
  //       display: flex;
  //       border-bottom: 1px solid $BorderColor;
  //     }
  //     .zkui-order-list-message-img {
  //       @include widthHeight(3rem,3.5rem);
  //     }
  //     .zkui-order-list-message-img > img {
  //       margin: 0.5rem 0 0 0.5rem;
  //       @include widthHeight(2.5rem,2.5rem);
  //     }
  //     .zkui-order-list-message-content {
  //       -ms-flex: 1;
  //       -moz-box-flex: 1;
  //       -webkit-flex: 1;
  //       flex: 1;
  //       padding: 0.5rem 10px 0.5rem 5*@rem;
  //     }
  //     .zkui-order-list-message-content > p {
  //       @include sizeColor($H4Size,$sc);
  //     }
  //     .zkui-order-list-message-content > span {
  //     }
  //     .zkui-order-list-message-price {
  //       margin-top: 0.5rem;
  //       padding-right: 5*@rem;
  //     }
  //     .zkui-order-list-message-price > p {
  //       text-align: right;
  //     }
  //     .zkui-order-list-message-oldprice {
  //       text-decoration: line-through;
  //     }
  //     .zkui-order-list-message-nowprice {
  //       @include sizeColor($H4Size,$sc);
  //     }
  //     .zkui-order-list-message-quantity {
  //       @include sizeColor($NomarlSize,$sc);
  //     }

  //     .zkui-order-list-aggregate {
  //       height: 2rem;
  //       padding: 0 10*@rem;
  //       line-height: 2rem;
  //     }
  //     .zkui-order-list-aggregate > ul {
  //       display: -moz-box;
  //       display: -ms-flexbox;
  //       display: -webkit-box;
  //       display: -webkit-flex;
  //       display: flex;
  //     }
  //     .zkui-order-list-aggregate > ul > li:first-child {
  //       -ms-flex: 1;
  //       -moz-box-flex: 1;
  //       -webkit-flex: 1;
  //       flex: 1;
  //     }
  //     .zkui-order-list-aggregate > ul > li {
  //       text-align: right;
  //       padding-right: 10*@rem;
  //     }
  //     .zkui-order-list-aggregate-price {
  //       @include sizeColor($H2Size,$brand);
  //       font-weight: bold;
  //       padding-right: 0;
  //     }
  //   }
  //   .zkui-order-list-content > li {
  //     margin-top: 0.5rem;
  //     background: $white;
  //     border: 1px solid $BorderColor;
  //   }
  // }
</style>
