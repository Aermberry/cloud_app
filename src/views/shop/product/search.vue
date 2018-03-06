<template>
  <section class="zkui-shop-product-search">
<<<<<<< HEAD
=======

    <div class="vux-header zk-head-fixed" searchpart="true">
      <div class="vux-header-left">
        <a class="vux-header-back"></a>
        <div class="left-arrow"></div>
      </div>
      <h1 class="vux-header-title"></h1>
      <!---->
      <div class="vux-header-right">
        <!---->
      </div>
    </div>
>>>>>>> 893aaef012109c8124da126750e46319116552c2
    <search :placeholder="pla" :cancel-text="canceText" :auto-fixed="false"></search>
    <div>
      <flexbox orient="vertical">
        <flexbox-item :span="4">
          <div class="flex-demo">1/3</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">2/3</div>
        </flexbox-item>
      </flexbox>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { Search, Flexbox, FlexboxItem } from 'zkui'
  export default {
    components: {
      Search,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        lists: [
          { id: '羽绒暖' },
          { id: '冲锋衣服' },
          { id: '羽绒棉甲' },
          { id: '保暖衫' },
          { id: '羽绒裤' },
          { id: '羽绒衣羽绒裤' }
        ],
        pla: 'pla',
        canceText: '取消'
      }
    }
  }


</script>

<style lang="less">
  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
  }
  // @import 'zkui/src/styles/zkui.less';
  //全局变量CSS，颜色，大小，边框，尺寸，尽量使用变量库里头的变量，请悉知所有变量
  // .zkui-product-search {
  //   height: 60px !important;
  //   width: 95%;
  //   float: right;
  //   .mint-searchbar {
  //     background-color: $white !important;
  //     padding: 2*@rem;
  //   }
  //   .mint-searchbar-core {
  //     background-color: $bgcolor;
  //   }
  //   .mint-searchbar-inner {
  //     height: 40*@rem;
  //     .mintui-search {
  //       font-size: 18*@rem;
  //     }
  //   }
  // }
  // .zkui-product_search-item {
  //   width: 100%;
  //   position: absolute;
  //   top: 122*@rem;
  //   left: 10*@rem;
  //   ul {
  //     width: 100%;
  //     list-style: none;
  //     li {
  //       text-align: center;
  //       float: left;
  //       margin-right: 3%;
  //       margin-top: 0.5rem;
  //       padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  //       border: 1px solid #e5e5e5;
  //       background-color: #e5e5e5 !important;
  //       border-radius: 4*@rem;
  //       h3 {
  //         color: #666;
  //       }
  //     }
  //   }
  // }
</style>
