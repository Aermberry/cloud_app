<template>
  <section class="zkui-czt-default">
    <div class="index-search weui-header ">
      <router-link to="/product/search" class="zkui-default-search-box">
        <!-- <search placeholder="搜索您想要的商品"></search> -->
        <div class="search-box">
          <input type="text">
          <div class="search-text">
            <m-icon name="zk-search" size="1rem"></m-icon>
            搜索您想要的商品
          </div>
        </div>
      </router-link>
      <m-icon name="zk-qrcode1" class="icon-brand index-qrcode " link="/user/qrcode" size="1rem"></m-icon>
    </div>
    <zk-swiper diykey="swiper_index" height="210px"></zk-swiper>
    <zk-grid diykey="grid_index" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>

    <group-title class="flex">
      <div class="fashion-title">
        最新快报:
      </div>
      <div class="fashion-topline flex_one">
        <swiper auto height="35px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item v-for="(item,index) in this.topline.apiDataList" :key="index">
            <p>
              <router-link to="/topline">
                {{item.title}}
              </router-link>
            </p>
          </swiper-item>
        </swiper>
      </div>
      <div class="fashion-icon">
        <m-icon name="zk-trumpet"></m-icon>
      </div>
    </group-title>
    <!-- <zk-product-item :pageSize=4 classIds='' :pagination=6 tagsId='' diykey='index'></zk-product-item> -->
    <zk-singlead diykey="SingleAd3Config"></zk-singlead>
    <zk-foot></zk-foot>
    <!-- <zkdebt-foot></zkdebt-foot> -->
  </section>
</template>

<script>
  import apiService from 'src/service/api/user.api'
  import { ZkSwiper, ZkGrid, ZkProductItem, ZkdebtFoot, ZkSinglead } from 'widgets'
  import { Search, Grid, GridItem, Swiper, Box, GroupTitle, MIcon, SwiperItem } from 'zkui'
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
      SwiperItem,
      ZkSinglead
    },
    data () {
      return {
        topline: ''
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        let style = {
          DataType: 'topline'
        }
        var response = await apiService.topline(style)
        this.topline = response.data.result
      }
    }
  }
</script>

<style  lang="less" >
  .zkui-czt-default {
    .flex {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .flex_one {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
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
        // .vux-search-box {
        //   .weui-search-bar {
        //     background: transparent;
        //   }
        // }
        .search-box {
          padding: 0.5rem 0.83333333rem;
          height: 100%;
          position: relative;
          input {
            width: 100%;
            background: rgba(255, 255, 255, 0.8);
            height: 100%;
          }
          .search-text {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 2rem;
            line-height: 2rem;
            transform: translate(-50%, -50%);
            color: @gray-600;
          }
        }
      }
    }

    .index-qrcode {
      display: block;
      width: 30 * @rem;
      height: 30 * @rem;
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
      margin: 10px 0 0 5 * @rem;
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
      .fashion-topline {
        .vux-slider {
          .vux-swiper {
            .vux-swiper-item {
              p {
                height: 100%;
                padding-right: 1rem;
                line-height: 2.5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                white-space: nowrap;
                a {
                  color: @cell-value-color;
                }
              }
            }
          }
        }
      }
      .fashion-icon {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 50%;
        right: 0.5rem;
        transform: translate(0, -50%);
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
