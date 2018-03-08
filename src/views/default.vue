<template>
  <section class="zkui-default">
    <div class="index-search weui-header ">
      <router-link to="/product/search" class="zkui-default-search-box">
        <search placeholder="搜索您想要的商品"></search>
      </router-link>
      <m-icon name="zk-qrcode1" class="icon-brand index-qrcode mr-1 mt-1" link="/user/qrcode" size="1rem"></m-icon>
    </div>
    <zk-swiper diykey="swiper_index" height="210px"></zk-swiper>
    <zk-grid diykey="grid_index" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>

    <group-title>流行单品</group-title>
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

<style lang="less">
  .zkui-default {
    .weui-search-bar {
      padding-top: 10*@rem;
    }

    .weui-search-bar {
      background-color: transparent !important;
      opacity: 0.7;
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
    }

    .index-qrcode {
      display: block;
      width: 30*@rem;
      height: 30*@rem;
      overflow: hidden;
    }
    .weui-grid__icon {
      width: 0;
      height: 0;
      margin: 0 auto;
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
  }
</style>
