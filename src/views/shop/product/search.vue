<template>
  <section class="zkui-shop-product-search">
    <!-- 头部 -->
    <zk-head searchPart="true"></zk-head>
    <search :placeholder="pla" :cancel-text="canceText" :auto-fixed="false"></search>
    <div class="zkui-product_search-item">
      <ul>
        <li v-for="(list, index) in lists" :key="index">
          <a href="">
            <h3>{{list.id}}</h3>
          </a>
        </li>
      </ul>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import { Search } from 'zkui'
  export default {
    components: {
      Search
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
