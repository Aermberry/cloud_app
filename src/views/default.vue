<template>
  <section class="zkui-default">
    <div class="index-search weui-header ">
      <router-link to="/product/search" class="zkui-default-search-box">
        <search placeholder="搜索您想要的商品"></search>
      </router-link>
      <m-icon name="zk-qrcode1" class="icon-brand index-qrcode " link="/user/qrcode" size="1rem"></m-icon>
    </div>
    <zk-swiper diykey="swiper_index" height="210px"></zk-swiper>
    <zk-grid diykey="grid_index" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>

    <group-title>
      <div class="fashion-title">
        流行单品
      </div>
    </group-title>
    <zk-product-item :pageSize=4 classIds='' tagsId='' diykey='index'></zk-product-item>

    <zk-foot></zk-foot>

  </section>
</template>

<script>
  import { ZkSwiper, ZkGrid, ZkProductItem } from 'widgets'
  import { Search, Grid, GridItem, Swiper, Box, GroupTitle } from 'zkui'
  export default {
    components: {
      Search,
      Swiper,
      ZkGrid,
      Grid,
      GroupTitle,
      GridItem,
      ZkSwiper,
      Box,
      ZkProductItem
    }
  }
</script>

<style  lang="less">
  .zkui-default {
    .weui-search-bar:before {
      content: none;
    }
    .weui-search-bar::after {
      content: none;
    }
    .index-search {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      width: 100%;
      .zkui-default-search-box {
        .vux-search-box {
          .weui-search-bar {
            background: transparent;
          }
        }
      }
    }

    .index-qrcode {
      display: block;
      width: 30*@rem;
      height: 30*@rem;
      overflow: hidden;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
    }

    .zkui-default-search-box {
      display: block;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    .index-qrcode > div {
      margin: 10px 0 0 5*@rem;
    }

    .scroller {
      .mescroll-upwarp {
        padding: 0;
        height: 0rem;
      }
    }
    .weui-cells__title {
      padding-left: 0;
      .fashion-title {
        height: 2rem;
        line-height: 2rem;
        width: 6.5rem;
        color: @light;
        background: @warning;
        padding-left: 1.5rem;
        font-weight: @font-weight-bold;
        position: relative;
      }
      .fashion-title:before {
        content: '';
        display: block;
        position: absolute;
        right: -1rem;
        top: 0;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: @warning;
      }
    }
  }
</style>
