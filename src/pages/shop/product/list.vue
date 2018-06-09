
<template>
  <section class="zkui-product_list">
    ssssssssssssssss
  </section>
</template>
<script>
  import { ZkNotdata } from 'widgets'
  import { XImg, XScroll, Tab, TabItem, Sticky, Divider } from 'zkui'
  import apiService from 'src/service/api/product.api'
  export default {
    components: {
      XImg,
      XScroll,
      Tab,
      TabItem,
      Sticky,
      Divider,
      ZkNotdata
    },
    data () {
      return {
        dataList: [], // 组件zklist 的循环数据,使用zklist时，所有的服务端输出结构都一样
        styleType: '', // 风格类型, zklist支持多种样式，判断选择哪种样式
        pageIndex: 1, // 从第一页开始加载
        sort: '',
        pageSize: 20,
        tabDown: false,
        datashow: true,
        productList: {
          SortOrder: '', // 商品排序方式
          Keyword: '', // 搜索关键字
          MinPrice: '', // 最低价格
          MaxPrice: '', // 最高价格
          ClassIds: '', // 商品分类Id
          TagIds: '', // 商品标签ID
          ProductIds: '', // 商品Id
          BrandId: '', // 商品品牌Id
          PriceStyleId: '', //  商品模式
          OrderType: '', // 排序方式
          ClasssId: ''
        }
      }
    },
    created () {
      this.GetData()
      console.log('create', this.$route.query)
    },
    mounted () {
      console.log(this.$route.params)
    },
    methods: {
      async GetData (id) {
        let params = {
          SortOrder: id,
          Keyword: this.productList.Keyword, // 搜索关键字
          MinPrice: this.productList.MinPrice, // 最低价格
          MaxPrice: this.productList.MaxPrice, // 最高价格
          ClassIds: this.productList.ClassIds, // 商品分类Id
          TagId: this.productList.TagIds, // 商品标签ID
          ProductIds: this.productList.ProductIds, // 商品Id
          BrandId: this.productList.BrandId, // 商品品牌Id
          PriceStyleId: this.productList.PriceStyleId, //  商品模式
          OrderType: this.productList.OrderType, // 排序方式
          ClasssId: this.productList.ClasssId,
          pageIndex: this.pageIndex, // 当前第页,下拉一次增加一次
          pageSize: this.pageSize // 每页显示的数量 建议20
        }
        // this.sort = id
        let response = await apiService.list(params) // 通过异步方法获取数据
        console.info('商品分类', response)
      }
    }
  }
</script>
<style lang="less">
  .zkui-product_list {
    .placeholder {
      height: 3.66666667rem;
    }
    .list-fixed {
      position: fixed;
      top: 2.91666667rem;
      left: 0;
      .vux-tab {
        .vux-tab-item {
          position: relative;
          svg {
            width: 1rem;
            height: 1rem;
          }
          ul {
            position: absolute;
            top: 3.66666667rem;
            left: 0;
            width: 100%;
            li {
              background: @white;
              border-bottom: 1px solid rgba(229, 229, 229, 1);
              border-right: 1px solid rgba(229, 229, 229, 1);
            }
          }
        }
      }
    }
    #index_scroll {
      .mescroll-upwarp {
        display: none;
      }
      div:first-child {
        font-size: 12px;
      }
    }
    .zkui-product-item__1 {
      background: #ffffff;
      ul::after {
        content: '';
        display: block;
        clear: both;
      }
      li {
        display: block;
        float: left;
        width: 47%;
        height: 20rem;
        margin: 2% 0 0 2%;
        padding-bottom: 0.3rem;
        border-radius: 2 * @rem;
        border: 1px solid rgba(229, 229, 229, 0.4);

        dl {
          a {
            display: block;
            img {
              width: 100%;
              display: block;
            }
          }

          .itemTitle {
            a {
              display: block;
              margin: 0.3rem 0.3rem 0.1rem 0.3rem;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              color: @black;
              font-size: 14px;
              height: 40px;
            }
          }
          .itemPrice {
            padding-left: 10 * @rem;
            min-height: 3rem;
            p {
              color: @brand;
              height: 2.5rem;
              font-weight: bold;
              margin-left: -0.2rem;
              font-size: @h6-font-size;
            }
            span {
              text-decoration: line-through;
              padding-top: 0.3rem;
              color: @gray-500;
            }
          }
        }
      }
    }
  }
</style>

