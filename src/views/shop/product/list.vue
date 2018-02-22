
<template>
  <section class="zkui-product_list">
    <!-- 头部 -->
    <zk-head :title='title' :goBack='goBack'></zk-head>
    <grid :cols="4">
      <grid-item v-for="(item,index) in list.Ltitle" :key="index">
        <router-link :to="item.url">
          <p>{{item.test}}</p>
        </router-link>
      </grid-item>
    </grid>
    <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll">
      <z-product-item :dataList="dataList" :styleType="styleType"></z-product-item>
    </x-scroll>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { XScroll, Grid, GridItem } from 'zkui'
  import { ZkProductItem } from 'widgets'
  export default {
    components: {
      XScroll,
      ZkProductItem,
      Grid,
      GridItem
    },
    data () {
      return {
        title: '列表页面',
        goBack: '',
        selected: 1,
        list: {
          Ltitle: [
            {
              test: '默认',
              url: 'user/debt/apply'
            },
            {
              test: '销量',
              url: 'user/qrcode'
            },
            {
              test: '价格',
              url: 'user/account/index'
            },
            {
              test: '新品',
              url: 'user/tree'
            }
          ]
        }
      }
    }
  }
</script>
<style lang="less">
  // @import 'zkui/src/styles/zkui.less';
  // //全局变量CSS，颜色，大小，边框，尺寸，尽量使用变量库里头的变量，请悉知所有变量

  // .zkui-product_list-tabbar {
  //   background: #ffffff;
  //   color: $brand !important;
  //   position: fixed;
  //   width: 100%;
  //   top: 2.06933rem;
  //   left: 0;
  //   height: 36*@rem;
  //   line-height: 36*@rem;
  //   vertical-align: middle;
  //   @include zk-border-bottom;
  //   li {
  //     width: 25%;
  //     float: left;
  //     display: block;
  //     text-align: center;
  //     font-size: 0.7rem;
  //     height: 36*@rem;
  //     line-height: 36*@rem;
  //   }
  //   .active {
  //     color: $brand;
  //   }
  // }
  // .weui-grids {
  //   background: rgba(229, 229, 229, 0.1);
  //   .weui-grid {
  //     padding: 15px 10*@rem;
  //     p {
  //       @include sizeColor($H3Size, $sc);
  //       text-align: center;
  //     }
  //   }
  // }
</style>
