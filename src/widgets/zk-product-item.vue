<template>
  <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll">
    <section class="ZKProductItem" v-if="styleType == 1">
      <div class="zkui-product-item__1 ">
        <ul>
          <li v-for="(item,index) in dataList" :key="index">
            <dl>
              <dt>
                <router-link :to="showUrl+item.id">
                  <x-img :src="item.thumbnailUrl" :alt="item.thumbnailUrl"></x-img>
                </router-link>
              </dt>
              <dd class="itemTitle">
                <router-link :to="showUrl+item.id">
                  {{item.name}}
                </router-link>
              </dd>
              <dd class="itemPrice">
                <div>
                  ￥{{item.displayPrice}}
                  <span v-if="item.marketPrice!==0">￥{{item.marketPrice}}</span>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </section>
  </x-scroll>
</template>

<script>
  import { XImg, XScroll } from 'zkui'
  import apiService from 'src/service/api/product.api'
  export default {
    name: 'zk-product-item',
    components: {
      XImg,
      XScroll
    },
    props: {
      classIds: {
        type: String,
        default: '' // 商品分类Id，多个ID用,号隔开
      },
      tagIds: {
        type: String,
        default: '' // 商品标签Id，多个ID用,号隔开
      },
      recommend: {
        type: String,
        default: '' // 商品标签Id，多个ID用,号隔开
      },
      pageSize: {
        type: Number,
        default: 4 // 默认分页数量
      },
      orderType: {
        type: Number,
        default: 0 // 默认排序方式
      },
      totalCount: {
        type: Number,
        default: 0 // 商品总数，如果为0，显示符合条件的商品
      },
      diykey: {
        type: String,
        default: '' // 默认Diy方式
      },
      pagination: {
        type: Number
      }
    },
    data () {
      return {
        dataList: [], // 组件zklist 的循环数据,使用zklist时，所有的服务端输出结构都一样
        styleType: '', // 风格类型, zklist支持多种样式，判断选择哪种样式
        pageIndex: 1, // 从第一页开始加载
        showUrl: '/product/show/'
      }
    },
    created () {
      if (window.location.href.indexOf('/product/show1/') !== -1) {
        this.showUrl = '/product/show/'
      }
      if (window.location.href.indexOf('/product/show/') !== -1) {
        this.showUrl = '/product/show1/'
      }
      // if (window.location.href.indexOf('123') === -1) {
      //   this.showUrl = '/product/show/'
      // }
    },
    methods: {
      async upCallback () {
        let params = {
          pageIndex: this.pageIndex, // 当前第页,下拉一次增加一次
          pageSize: this.pageSize, // 每页显示的数量 建议20
          classIds: this.classIds,
          tagIds: this.tagIds,
          totalCount: this.totalCount,
          recommend: this.recommend
        }
        let response = await apiService.list(params) // 通过异步方法获取数据
        var totalSize = response.data.result.totalSize // 获取总页数
        this.styleType = response.data.result.styleType // 选择何种风格
        if (this.pagination === '' || this.pagination === 'undefined') {
          this.pagination = totalSize
        }
        if (this.pageIndex < this.pagination) {
          this.$refs.mescroll.endSuccess(params, totalSize) // 调用widget xsroll 下拉刷新函数
        }
        this.dataList = this.dataList.concat(response.data.result.productItems)
        if (this.pageIndex < totalSize) {
          this.pageIndex = this.pageIndex + 1 // 下拉时是自动增加一页
        }
      }
    }
  }
</script>

<style lang="less">
  #index_scroll {
    .mescroll-upwarp {
      display: none;
    }
  }
  .zkui-product-item__1 {
    background: #ffffff;
    ul::after {
      content: '';
      display: block;
      clear: both;
    }
    ul {
      padding-bottom: 10*@rem;
    }
    li {
      display: block;
      float: left;
      width: 47%;
      // height: 20rem;
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
            color: @black;
            font-size: 14px;
            height: 40px;
          }
        }
        .itemPrice {
          padding-left: 0.3rem;
          min-height: 3rem;
          div {
            display: flex;
            color: @brand;
            height: 2.5rem;
            margin-left: -0.2rem;
            font-size: @h6-font-size;
            flex-wrap: wrap;
            span {
              padding-left: 5px;
              text-decoration: line-through;
              color: @gray-600;
              font-size: @h6-font-size;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              font-weight: normal;
            }
          }
        }
      }
    }
  }
</style>
