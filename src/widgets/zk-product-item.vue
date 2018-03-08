<template>
  <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll">
    <section class="ZKProductItem" v-if="styleType == 1">
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
                <em>{{item.displayPrice}}</em>
                <span>￥{{item.marketPrice}}</span>
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
      pageSize: {
        type: Number,
        default: 4 // 默认分页数量
      },
      orderType: {
        type: Number,
        default: 0 // 默认排序方式
      },
      diykey: {
        type: String,
        default: '' // 默认Diy方式
      }
    },
    data () {
      return {
        dataList: [], // 组件zklist 的循环数据,使用zklist时，所有的服务端输出结构都一样
        styleType: '', // 风格类型, zklist支持多种样式，判断选择哪种样式
        pageIndex: 1 // 从第一页开始加载
      }
    },
    methods: {
      async upCallback () {
        let params = {
          pageIndex: this.pageIndex, // 当前第页,下拉一次增加一次
          pageSize: 10 // 每页显示的数量 建议20
        }

        let response = await apiService.list(params) // 通过异步方法获取数据
        let totalSize = response.data.result.totalSize // 获取总页数
        this.styleType = response.data.result.styleType // 选择何种风格
        if (this.pageIndex < 6) {
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

<style lang="less" scoped>

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
          em {
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
