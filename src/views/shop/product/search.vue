<template>
  <section class="zkui-shop-product-search">
    <x-button class="return"></x-button>
    <search placeholder="搜索您想要的商品" cancel-text="取消" :auto-fixed="false"></search>
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
  import { Search, Tab, TabItem, XButton } from 'zkui'
  export default {
    components: {
      Search,
      Tab,
      TabItem,
      XButton
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
        ]
      }
    }
  }


</script>
<style lang="less">
  // @import 'zkui/src/styles/zkui.less';
  //全局变量CSS，颜色，大小，边框，尺寸，尽量使用变量库里头的变量，请悉知所有变量
  .zkui-shop-product-search {
    .zkui-product-search {
      height: 60px !important;
      width: 95%;
      float: right;
    }
    .zkui-product_search-item {
      width: 100%;
      margin-left: 1rem;
      ul {
        width: 100%;
        list-style: none;
        li {
          text-align: center;
          float: left;
          margin-right: 3%;
          margin-top: 0.6rem;
          padding: 0.3rem 0.7rem 0.2rem 0.7rem;
          border: 1px solid #e5e5e5;
          background-color: #e5e5e5 !important;
          border-radius: 4*@rem;
          h3 {
            color: #666;
          }
        }
      }
    }
    .weui-search-bar__box {
      position: relative;
      padding-left: 7.5rem;
    }
    button.weui-btn,
    input.weui-btn {
      width: 5%;
      float: left;
    }
    .vux-search-box {
      width: 90%;
      float: right;
    }
     .sale-info-close {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      display: inline-block;
      position: absolute;
      padding: 0.32rem;
      background-color: @brand;
      padding-top: 0px;
    }
    .sale-info-close::after {
      content: '\2716'; //特殊字符或形状，一个勾
      color: @light;
      font-size: @h2-font-size;
      position: absolute;
      right: 0.3rem;
    }
  }
</style>
