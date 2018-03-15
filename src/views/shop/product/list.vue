
<template>
  <section class="zkui-product_list">
    <zk-head title='商品列表' goBack=''></zk-head>
    <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;" class="list-fixed">
      <tab style="width:800px;" bar-active-color="#668599" :line-width="2">
        <tab-item selected @click.native="sortNum(0)">默认排序</tab-item>
        <tab-item @click.native="sortNum(1)">价格</tab-item>
        <tab-item @click.native="sortNum(2)">商品添加时间</tab-item>
        <tab-item @click.native="sortNum(3)">查看次数</tab-item>
        <tab-item @click.native="sortNum(4)">销售数量</tab-item>
        <tab-item @click.native="sortNum(5)">喜欢数量</tab-item>
        <tab-item @click.native="sortNum(6)">收藏数量</tab-item>
      </tab>
    </div>
    <div class="placeholder"></div>
    <section class="ZKProductItem">
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
  </section>
</template>
<script>
  import { XImg, XScroll, Tab, TabItem, Sticky, Divider } from 'zkui'
  import apiService from 'src/service/api/product.api'
  export default {
    components: {
      XImg,
      XScroll,
      Tab,
      TabItem,
      Sticky,
      Divider
    },
    data () {
      return {
        dataList: [], // 组件zklist 的循环数据,使用zklist时，所有的服务端输出结构都一样
        styleType: '', // 风格类型, zklist支持多种样式，判断选择哪种样式
        pageIndex: 1, // 从第一页开始加载
        sort: ''
      }
    },
    mounted () {
      this.upCallback()
    },
    methods: {
      async sortNum (id) {
        let params = {
          SortOrder: id
        }
        this.sort = id
        let response = await apiService.list(params) // 通过异步方法获取数据
        this.dataList = response.data.result.productItems
      },
      async upCallback () {
        let params = {
          SortOrder: 0
        }
        let response = await apiService.list(params) // 通过异步方法获取数据
        this.dataList = response.data.result.productItems
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
  }
  #index_scroll {
    div:first-child {
      font-size: 12px;
    }
  }
  .zkui-product-item__1 {
    background: #ffffff;
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
          width: 100%;
          min-height: 2rem;
          img {
            width: 100%;
            display: block;
          }
        }

        .itemTitle {
          a {
            display: block;
            margin: 0.3rem 0.3rem 0.1rem 0.3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            white-space: nowrap;
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
          }
        }
      }
    }
  }
</style>

