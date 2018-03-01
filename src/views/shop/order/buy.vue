<template>
  <section class="zkui-order-buyfromproduct">
    <zk-head title='确认下单' goBack='商品详情'></zk-head>
    <group>
      <cell title="地址" value="请选择地址" is-link></cell>
    </group>
    <group class="zkui-order-buy-parameter-amount">
      <panel header="户外专营店" :list="list" :type="type"></panel>
      <cell title="购买数量 ">
        <inline-x-number style="display:block; " :min="1 " width="50px " v-model="buyCount" button-style="round"></inline-x-number>
      </cell>
      <cell title="店铺优惠" value="399包邮" is-link></cell>
      <cell title="配送方式" value="快递 免邮" is-link></cell>
      <cell title="运费险" value="卖家送收货前可赔付" is-link></cell>
      <x-textarea title="卖家留言" placeholder="选填：填写内容已和卖家协商确认" :show-counter="false" :rows="1" autosize></x-textarea>
    </group>
    <tabbar>
      <tabbar-item>
        <div slot="label" class="total">
          <span>总计:</span>
          <span class="money">￥1250.45</span>
          <span class="amount">共8件商品</span>
        </div>
        <x-button slot="customer" type="primary" @click.native="showSaleProperty">提交订单</x-button>
      </tabbar-item>
    </tabbar>
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
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '阿迪达斯贝壳头休闲鞋男款易烊千玺',
          desc: '颜色：AQ6278炫彩; 尺码：36',
          url: '/component/cell'
        }
        ]
      }
    }
  }
</script>

<style lang="less">
  .zkui-order-buyfromproduct {
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
  }
  .total {
    float: left;
    margin-left: 8*@rem;
    margin-top: 13*@rem;
    font-weight: bold;
    font-size: 32px;
    color: black;
    .money {
      color: @danger;
    }
    .amount {
      margin-left: 55*@rem;
      color: @gray-500;
    }
  }
  .zkui-order-buy-parameter-amount {
    .vux-number-round .vux-number-selector-sub svg {
      position: relative;
      top: -0.3rem;
      right: 0.05rem;
    }
    .vux-number-round .vux-number-selector-plus {
      border: 1px solid @actionsheet-label-disabled-color;
      svg {
        position: relative;
        top: -0.2rem;
        right: 2*@rem;
        fill: @actionsheet-label-disabled-color;
      }
    }
  }
</style>
