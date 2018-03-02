<template>
  <section class="zkui-order-list">
    <zk-head title='我的订单' goBack='会员中心'></zk-head>
    <group class="zkui-order-buy-parameter-amount">
      <panel header="户外专营店" :list="list" :type="type"></panel>
      <cell-form-preview :list="message"></cell-form-preview>
      <cell :value="1024"></cell>
    </group>
    <tabbar>
      <tabbar-item>
        <div slot="label" class="total">
          <span>总计</span>
          <span class="money">￥{{modelView.totalAmount}}</span>
          <span class="amount">共{{modelView.totalCount}}件商品</span>
        </div>
      </tabbar-item>
    </tabbar>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton, CellFormPreview, CellBox, Panel, XAddress, InlineXNumber, XTextarea } from 'zkui'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      XButton,
      CellFormPreview,
      CellBox,
      Panel,
      XAddress,
      InlineXNumber,
      XTextarea
    },
    data () {
      return {
        buyCount: 0,
        type: '1',
        modelView: '', // 商品数据，从服务器上远程获取
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '阿迪达斯贝壳头休闲鞋男款易烊千玺',
          desc: '颜色：AQ6278炫彩; 尺码：36',
          url: '/component/cell'
        }
        ],
        message: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
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
