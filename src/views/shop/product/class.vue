<template>
  <section class="zkui-shop-product-class">

    <zk-head title='商品分类' goBack='首页'></zk-head>

    <router-link to="/product/search">
      <search placeholder="搜索您想要的商品" cancel-text="取消" :auto-fixed="false"></search>
    </router-link>

    <div class="zk-class-tab">
      <tab :line-width=2 active-color='#0090ff' v-model="index" class="zk-class-tab-left">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false" class="zk-class-tab-right">
        <swiper-item v-for="(items, indexs) in listDatas" :key="indexs">
          <grid :cols="3">
            <h1>{{items.name}}</h1>
            <grid-item v-for="(item,index) in items.childClass" :key="index">
              <router-link :to="'/product/list'+'?'+'ClassIds='+item.id">
                <img :src="item.icon">
                <p>{{item.name}}</p>
              </router-link>
            </grid-item>
          </grid>

        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>



<script>
  import apiService from 'src/service/api/product.api'
  import { Search, Tab, TabItem, Sticky, Divider, Swiper, SwiperItem, Grid, GridItem, GroupTitle, MIcon } from 'zkui'
  export default {
    components: {
      Search,
      Tab,
      TabItem,
      Sticky,
      Divider,
      Swiper,
      SwiperItem,
      Grid,
      GridItem,
      GroupTitle,
      MIcon
    },
    data () {
      return {
        listDatas: [],
        list2: [],
        list: [],
        demo2: '',
        index: 3,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async  getData () {
        let response = await apiService.class()
        this.listDatas = response.data.result
        this.demo2 = this.listDatas[0].name
        for (var i = 0; i < this.listDatas.length; i++) {
          this.list2.push(this.listDatas[i].name)
        }
      },
      menu () {

      },
      switchTabItem (index) {
        console.log('on-before-index-change', index)
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 1000)
      },
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = this.list.slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = this.list.slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    }
  }
</script>
<style   lang="less">
  .zkui-shop-product-class {
    height: 100vh;
    .zkuidebt-foot {
      .placeholder {
        height: 4rem;
      }
    }
    .weui-grids {
      height: 100%;
      overflow-y: auto;
    }
    .weui-grids::after,
    .weui-grids::before {
      content: none;
    }
    .weui-grid::after,
    .weui-grid::before {
      content: none;
    }
    .weui-grids > .weui-grid {
      text-align: center;
      padding: 0.7143rem 0.7143rem;
    }
    .weui-grids > .weui-grid img {
      display: block;
      width: 4.2857rem;
      height: 4.2857rem;
      margin: 0 auto;
      border-radius: 50%;
    }
    .weui-grids > .weui-grid p {
      font-size: @h6-font-size;
      margin: 0.3571rem;
      color: black;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      height: 1.3rem;
      display: flex;
      justify-content: center;
    }
    .weui-grids > h1 {
      padding: 0 0.7143rem;
      line-height: 3.66666667rem;
      height: 3.2143rem;
      color: black;
      font-weight: bold;
      border-bottom: 1px solid #e5e5e5;
      font-size: @h6-font-size;
    }
    .vux-tab-ink-bar {
      background-color: transparent !important;
    }
  }
  .zk-class-tab {
    width: 100%;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: auto;
  }
  .zk-class-tab-left .vux-tab-item {
    height: 3.2143rem !important;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: @h6-font-size;
    display: flex;
    justify-content: center;
  }
  .zk-class-tab-left {
    width: 5.3571rem;
    height: 79vh !important;
    display: block !important;
    overflow-y: auto;
    // border-right: 1px solid #e5e5e5;
    background: @search-bg-color !important;
    .vux-tab-selected {
      background: @white !important;
      border-bottom: 1px solid #e5e5e5 !important;
    }
  }
  .zk-class-tab-left::-webkit-scrollbar {
    display: none;
  }
  .zk-class-tab-right {
    -ms-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    .vux-swiper {
      height: 79vh !important;
    }
  }
</style>
