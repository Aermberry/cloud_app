<template>
  <section class="zkui-zm">
    <div class="zkui-zm-top-placeholder"></div>
    <div class="zkui-zm-top flex">
      <div class="zm-head-left">
        <img :src="Ilogo">
      </div>
      <div class="zm-head-center">
        <div class="center-box">
          <m-icon name="zk-search"></m-icon>
          <div class="cneter-test">
            搜索商品
          </div>
        </div>
      </div>
      <div class="zm-head-right">
        <m-icon name="zk-qrcode1" class="icon-brand index-qrcode " link="/user/qrcode"></m-icon>
      </div>
    </div>
    <zk-swiper diykey="swiper_index" height="210px"></zk-swiper>
    <zk-grid diykey="grid_index" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>
    <zk-product-item :pageSize=4 classIds='' :pagination=8 tagsId='' diykey='index'></zk-product-item>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import common from 'src/service/api/common.api'
  // import apiService from 'src/service/api/user.api'
  import { ZkSwiper, ZkGrid, ZkProductItem, ZkSinglead, ZkGroupbuy } from 'widgets'
  import { Search, Grid, GridItem, Swiper, Box, GroupTitle, SwiperItem, XImg, XButton } from 'zkui'
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
      SwiperItem,
      XImg,
      ZkSinglead,
      XButton,
      ZkGroupbuy
    },
    data () {
      return {
        message: '',
        Ilogo: '',
        Ititle: ''
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var setMessage = await common.GetConfigValue('WebSiteConfig')
        this.message = setMessage.data.result
        this.Ilogo = this.message.apiImagesUrl + this.message.logo
        this.Ititle = this.message.companyName
      },
      success (src, ele) {
        console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }
    }
  }
</script>

<style  lang="less" >
  body {
    background: white;
  }
  .zkui-zm {
    .zkui-zm-top-placeholder {
      height: 2.5rem;
    }
    .zkui-zm-top {
      width: 100%;
      height: 3rem;
      background: @white;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      border-bottom: 1px solid rgba(229, 229, 229, 0.7);
      .zm-head-left {
        height: 100%;
        padding: 0.3rem 1.5rem;
        img {
          width: 4rem;
          height: 2.4rem;
        }
      }
      .zm-head-center {
        flex: 1;
        height: 3rem;
        padding: 0.5rem 0;
        .center-box {
          background: #eeeeee;
          height: 100%;
          display: flex;
          padding-left: 1rem;
          svg {
            height: 1.4rem;
            width: 1.4rem;
            margin: 0.3rem;
          }
          .cneter-test {
            color: #6c757d;
            line-height: 2rem;
            font-size: 1rem;
          }
        }
      }
      .zm-head-right {
        padding: 0.3rem;
        width: 3rem;
        height: 3rem;
        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
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
    .scroller {
      .mescroll-upwarp {
        padding: 0;
        height: 0rem;
      }
    }
    .weui-cells__title {
      padding-left: 0;
      .fashion-title {
        height: 2.5rem;
        line-height: 2.5rem;
        width: 6.5rem;
        color: @light;
        background: @warning;
        padding-left: 1.5rem;
        font-weight: @font-weight-bold;
        position: relative;
      }
      .fashion-topline {
        .vux-slider {
          .vux-swiper {
            .vux-swiper-item {
              p {
                padding-left: 2rem;
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
      .fashion-title:before {
        content: '';
        display: block;
        position: absolute;
        right: -1rem;
        top: 0;
        width: 2rem;
        height: 2.5rem;
        border-radius: 50%;
        background: @warning;
      }
    }
    .zkui-product-item__1 ul {
      padding-bottom: 0;
    }
  }
</style>
