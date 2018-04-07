<template>
  <section class="zkui-czt-default">
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
        最新快报

      </div>
      <div class="fashion-icon">
        <m-icon name="zk-trumpet"></m-icon>
      </div>
    </group-title>
    <zk-product-item :pageSize=4 classIds='' tagsId='' diykey='index'></zk-product-item>

    <!-- <zk-foot></zk-foot> -->
    <!-- <zk-notdata></zk-notdata> -->
    <zkdebt-foot></zkdebt-foot>
  </section>
</template>

<script>
  import { ZkSwiper, ZkGrid, ZkProductItem, ZkdebtFoot, ZkNotdata } from 'widgets'
  import { Search, Grid, GridItem, Swiper, Box, GroupTitle, MIcon } from 'zkui'
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
      ZkProductItem,
      ZkdebtFoot,
      MIcon,
      ZkNotdata
    }
  }
</script>

<style  lang="less" >
  .zkui-czt-default {
    #index_scroll {
      .mescroll-upwarp {
        display: none;
      }
    }
    .weui-grid__icon img {
      display: block;
      width: 100% !important;
      height: 100% !important;
    }
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
      margin-top: 0.3rem;
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
    .weui-grids {
      border-bottom: none;
    }
    .weui-cells__title {
      padding-left: 0;
      margin-top: 0;
      border-top: 1px solid @gray-500;
      border-bottom: 1px solid @gray-500;
      position: relative;
      .fashion-title {
        height: 2.5rem;
        line-height: 2.5rem;
        width: 6.5rem;
        color: @info;
        padding-left: 1.5rem;

        font-weight: @font-weight-bold;
        position: relative;
      }
      .fashion-icon {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translate(0, -50%);
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
