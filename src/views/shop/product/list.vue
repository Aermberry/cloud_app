
<template>
  <section class="zkui-product_list">
    <zk-head title='商品列表' goBack=''></zk-head>
    <div style="width: 100%;" class="list-fixed">
      <!-- <tab-item  @click.native="sortNum(0)" selected>默认排序</tab-item> -->
      <!-- <tab-item @click.native="sortNum(1)">价格</tab-item> -->
      <!-- <tab-item @click.native="sortNum(2)">商品添加时间</tab-item> -->
      <!-- <tab-item @click.native="sortNum(3)">人气</tab-item> -->
      <!-- <tab-item @click.native="sortNum(4)">销售数量</tab-item> -->
      <!-- <tab-item @click.native="sortNum(5)">喜欢数量</tab-item> -->
      <!-- <tab-item @click.native="sortNum(6)">收藏数量</tab-item> -->
      <tab :animate="false">
        <tab-item active-class="active-6-1" selected @click.native="tabDown=!tabDown">默认排序
          <m-icon name="zk-arrowsDown" class="icon"></m-icon>
          <ul v-show="tabDown">
            <li @click="sortNum(2)">最新</li>
            <li @click="sortNum(5)">最热</li>
            <li @click="sortNum(6)">关注</li>
          </ul>
        </tab-item>
        <tab-item active-class="active-6-2" @click.native="sortNum(1)">价格</tab-item>
        <tab-item active-class="active-6-3" @click.native="sortNum(3)">人气</tab-item>
        <tab-item active-class="active-6-4" @click.native="sortNum(4)">销量</tab-item>
      </tab>
    </div>
    <div class="placeholder"></div>
    <section class="ZKProductItem" v-if="!datashow">
      <div class="zkui-product-item__1 ">
        <ul>
          <li v-for="(item,index) in dataList" :key="index">
            <dl>
              <dt>
                <router-link :to="'/product/show/'+item.id">
                  <x-img :src="item.thumbnailUrl" :alt="item.thumbnailUrl"></x-img>
                </router-link>
              </dt>
              <dd class="itemTitle">
                <router-link :to="'/product/show/'+item.id">
                  {{item.name}}
                </router-link>
              </dd>
              <dd class="itemPrice">
                <p>{{item.displayPrice}}</p>
                <span>￥{{item.marketPrice}}</span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <zk-foot></zk-foot>
    </section>
    <zk-notdata v-if="datashow"></zk-notdata>
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
      console.log(this.$route.query)
    },
    mounted () {
      this.upCallback()
    },
    methods: {
      async sortNum (id) {
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
          ClasssId: this.productList.ClasssId
        }
        this.sort = id
        let response = await apiService.list(params) // 通过异步方法获取数据
        this.dataList = response.data.result.productItems
      },
      async upCallback () {
        for (var index in this.$route.query) {
          if (this.$route.query[index] !== '') {
            this.productList[index] = this.$route.query[index]
          }
        }
        let params = {
          SortOrder: this.productList.SortOrder, // 商品排序方式
          Keyword: this.productList.Keyword, // 搜索关键字
          MinPrice: this.productList.MinPrice, // 最低价格
          MaxPrice: this.productList.MaxPrice, // 最高价格
          ClassIds: this.productList.ClassIds, // 商品分类Id
          TagId: this.productList.TagIds, // 商品标签ID
          ProductIds: this.productList.ProductIds, // 商品Id
          BrandId: this.productList.BrandId, // 商品品牌Id
          PriceStyleId: this.productList.PriceStyleId, //  商品模式
          OrderType: this.productList.OrderType, // 排序方式
          ClasssId: this.productList.ClasssId
        }
        console.log('参数', this.productList, params)
        let response = await apiService.list(params) // 通过异步方法获取数据
        this.dataList = response.data.result.productItems
        if (this.dataList.length !== 0) {
          this.datashow = false
        }
      }
    }
  }
</script>
<style lang="less" scoped>
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
      margin: 2% 0 0 2%;
      padding-bottom: 0.3rem;
      border-radius: 2*@rem;
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
            height: 38px;
          }
        }
        .itemPrice {
          padding-left: 10*@rem;
          min-height: 3rem;
          p {
            color: @brand;

            font-weight: bold;
            margin-left: -0.2rem;
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
</style>

