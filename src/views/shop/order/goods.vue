<template>
  <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll">
    <section class="zkui-order-goods">
      <zk-head title='订货下单'></zk-head>
      <div class="order-goods-box">
        <div class="goods-item" v-for="(item,index) in dataList" :key="index">
          <div class="item-top">
            <router-link :to="'/product/show/'+item.id" class="top-img">
              <img :src="item.thumbnailUrl" alt="">
            </router-link>
            <div class="top-message">
              <router-link :to=" '/product/show/'+item.id" class="message-title">
                {{item.name}}
              </router-link>
              <p class="selling">售价：{{item.displayPrice}}</p>
              <!-- <p class="purchasing ">进货价：￥60.00</p> -->
            </div>
            <div class="top-right">
              <router-link :to=" '/product/show/'+item.id">
                <m-icon name="zkui-cart_ok"></m-icon>
                <p>立即订货</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <zk-foot></zk-foot>
    </section>
  </x-scroll>
</template>

<script>
  import { XScroll } from 'zkui'
  import apiService from 'src/service/api/product.api'
  import local from 'src/service/common/local'
  export default {
    data () {
      return {
        dataList: [],
        pageIndex: 1, // 从第一页开始加载
        pageSize: 20, // 每页显示的数量 建议20
        totalCount: '' // 商品总数，如果为0，显示符合条件的商品
      }
    },
    components: {
      XScroll
    },
    mounted () {
      this.data()
    },
    methods: {
      data () {
        local.setStore('goods', 'true')
      },
      async upCallback () {
        let params = {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize

        }
        let response = await apiService.list(params)
        console.log('response', response)
        var totalSize = response.data.result.totalSize // 获取总页数
        this.styleType = response.data.result.styleType // 选择何种风格
        if (this.pageIndex < totalSize) {
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
<style  lang="less">
  .zkui-order-goods {
    .order-goods-box {
      .goods-item {
        border: 1px solid rgba(229, 229, 229, 0.7);
        margin-top: 0.5rem;
        .item-top {
          padding: 0.5rem;
          height: 5rem;
          display: flex;
          .top-img {
            display: block;
            width: 4rem;
            height: 4rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .top-message {
            flex: 1;
            padding-left: 0.5rem;
            .message-title {
              display: block;
              color: @black;
              font-weight: @font-weight-bold;
              margin-bottom: 0.5rem;
            }
            .selling {
              font-size: @h6-font-size;
              color: @gray-600;
            }
            .purchasing {
              font-size: @h6-font-size;
              color: @success;
            }
          }
          .top-right {
            width: 4rem;
            height: 4rem;
            a {
              width: 100%;
              height: 100%;
              display: block;
              padding-top: 0.5rem;
              svg {
                display: block;
                margin: 0 auto;
              }
              p {
                text-align: center;
                font-size: @h6-font-size;
                color: @gray-600;
              }
            }
          }
        }
      }
    }
  }
</style>

