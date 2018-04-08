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

    <div v-for="(src,index) in list" :key="index" style="text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>

    <group-title class="flex">
      <div class="fashion-title">
        流行单品
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
    </group-title>
    <zk-product-item :pageSize=4 classIds='' tagsId='' diykey='index'></zk-product-item>

    <zk-foot></zk-foot>

  </section>
</template>

<script>
  import apiService from 'src/service/api/user.api'
  import { ZkSwiper, ZkGrid, ZkProductItem } from 'widgets'
  import { Search, Grid, GridItem, Swiper, Box, GroupTitle, SwiperItem, XImg } from 'zkui'
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
      XImg
    },
    data () {
      return {
        topline: '',
        list: [
          'https://o5omsejde.qnssl.com/demo/test1.jpg',
          'https://o5omsejde.qnssl.com/demo/test2.jpg',
          'https://o5omsejde.qnssl.com/demo/test4.jpg',
          'https://o5omsejde.qnssl.com/demo/test5.jpg',
          'https://o5omsejde.qnssl.com/demo/test6.jpg',
          'https://o5omsejde.qnssl.com/demo/test7.jpg',
          'https://o5omsejde.qnssl.com/demo/test8.jpg'
        ]
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
        console.log(response)
        this.topline = response.data.result
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
  .zkui-default {
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
  }
</style>
