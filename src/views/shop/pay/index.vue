<template>
  <section class="zkui-pay-index">

    <zk-head :title='title' :goBack='goBack'></zk-head>
    <mt-radio align="right" v-model="value" :options="options">
    </mt-radio>

    <div class="zkui-pay-index-bottom">
      <ul>
        <li class="zkui-pay-index-bottom-left">
          <p>
            <span>支付:</span>￥1552.00</p>
        </li>
        <li class="zkui-pay-index-bottom-right">
          <x-button>
            付款
          </x-button>
        </li>
      </ul>
    </div>
    <!--<zk-foot></zk-foot>-->
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  export default {
    data () {
      return {
        title: '支付订单',
        goBack: '提交订单',
        //  存放所选选项（字符串）
        value: '',
        //  radio的选项
        options: [{
          label: '微信',
          value: 'A'
        },
        {
          label: '支付宝',
          value: 'B'
        },
        {
          label: '余额',
          value: 'C'
        }
        ]
      }
    }
  }
</script>
<style lang="less">
  // @import 'zkui/src/styles/zkui.less';
  // //全局变量CSS，颜色，大小，边框，尺寸，尽量使用变量库里头的变量，请悉知所有变量
  // .zkui-pay-index {
  //   height: 100vh;
  //   padding-bottom: 2rem;
  //   .mint-radio-label {
  //     @include sizeColor($H3Size,$sc);
  //   }
  //   .zkui-pay-index-bottom {
  //     position: fixed;
  //     bottom: 0;
  //     left: 0;
  //     background: $white;
  //     @include widthHeight(100%,2.5rem);
  //     .zkui-pay-index-bottom-left {
  //       padding-left: 10*@rem;
  //       line-height: 2.5rem;
  //     }
  //     .zkui-pay-index-bottom-left > p {
  //       @include sizeColor($H2Size,$brand);
  //       font-weight: bold;
  //       padding-left: 5*@rem;
  //     }
  //     .zkui-pay-index-bottom-left > p > span {
  //       @include sizeColor($H3Size,$brand);
  //     }
  //     .zkui-pay-index-bottom-right {
  //       text-align: right;
  //       padding-right: 10*@rem;
  //       line-height: 2.5rem;
  //     }
  //     .zkui-pay-index-bottom-right > button {
  //       background: $brand;
  //       border-radius: 5*@rem;
  //       padding: 10px 15*@rem;
  //       @include sizeColor($H2Size,$white);
  //       vertical-align: middle;
  //     }
  //   }
  //   .zkui-pay-index-bottom > ul {
  //     display: -moz-box;
  //     display: -ms-flexbox;
  //     display: -webkit-box;
  //     display: -webkit-flex;
  //     display: flex;
  //   }
  //   .zkui-pay-index-bottom > ul > li {
  //     -ms-flex: 1;
  //     -moz-box-flex: 1;
  //     -webkit-flex: 1;
  //     flex: 1;
  //   }
  // }
</style>
