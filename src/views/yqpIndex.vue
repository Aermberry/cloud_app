<template>
  <section class="zkui-yqp">
    <div class="zkui-yqp-top flex">
      <div class="top-left">
        <div class="logo">
          <img :src="Ilogo" alt="">
        </div>
        <p>{{Ititle}}</p>
      </div>
      <div class="top-right">
        <ul class="right-box flex">
          <li>
            <router-link to="/product/search">
              <m-icon name="zk-topsearch" size="1rem"></m-icon>
              关注
            </router-link>
          </li>
          <li class="right-box-record ">
            <router-link to="/user/index">
              我的记录
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <zk-swiper diykey="swiper_index" height="210px"></zk-swiper>
    <div class="index-search weui-header ">
      <router-link to="/product/search" class="zkui-yqp-search-box">
        <!--  <search placeholder="搜索您想要的商品"></search> -->
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
    <zk-grid diykey="grid_index" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>
    <zk-singlead diykey="index_single_ad"></zk-singlead>
    <group class="flex">
      <div class="fashion-title">
        拼团
      </div>
    </group>
    <zk-groupbuy :pageSize=4 classIds='' :pagination=6 tagsId='' diykey='index'></zk-groupbuy>
    <group class="flex">
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
    </group>

    <zk-product-item :pageSize=4 classIds='' :pagination=6 tagsId='' diykey='index'></zk-product-item>
    <div class="yqp-more">
      <router-link to="/product/list?SortOrder=2">查看更多 </router-link>
    </div>
    <div class="yqp-foot">
      <ul class="foot-item flex">
        <li>
          <router-link to="/default">
            店铺主页
          </router-link>
        </li>
        <li>
          <router-link to="/user/index">
            会员中心
          </router-link>
        </li>
        <li>
          <router-link to="/user/qrcode">
            关注我们
          </router-link>
        </li>
        <li class="item-last">
          <router-link to="/default">
            店铺信息
          </router-link>
        </li>
      </ul>
      <div class="foot-img">
        <img :src="Ilogo" alt="">
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import common from 'src/service/api/common.api'
  import apiService from 'src/service/api/user.api'
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
        topline: '',
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
        let style = {
          DataType: 'topline'
        }
        var response = await apiService.topline(style)
        this.topline = response.data.result
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
  .zkui-yqp {
    .zkui-yqp-top {
      height: 2.5rem;
      background: @black;
      .top-left {
        width: 60%;
        height: 100%;
        padding-left: 3rem;
        position: relative;
        .logo {
          position: absolute;
          top: 50%;
          left: 0.5rem;
          transform: translateY(-50%);
          width: 2rem;
          height: 2rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          width: 100%;
          height: 100%;
          line-height: 2.5rem;
          color: @gray-500;
        }
      }
      .top-right {
        width: 40%;
        height: 100%;
        ul {
          width: 100%;
          height: 100%;
          li {
            height: 100%;
            flex: 1;
            a {
              height: 100%;
              display: block;
              text-align: center;
              line-height: 2.5rem;
              color: @gray-500;
              svg {
                margin-right: 10px;
              }
            }
          }
          li.right-box-record {
            position: relative;
          }
          li.right-box-record::after {
            content: '';
            position: absolute;
            display: block;
            width: 0.5px;
            height: 1.5rem;
            background: @white;
            top: 0.5rem;
            left: 0;
          }
        }
      }
    }
    .yqpimg {
      width: 100%;
      a {
        width: 100%;
        height: 180px;
        img {
          width: 100%;
          height: 100%;
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
      // position: fixed;
      // top: 0;
      // left: 0;
      // z-index: 9999;
      width: 100%;
      .zkui-yqp-search-box {
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
            border: 1px solid @load-more-line-color;
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
    .zkui-yqp-search-box {
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
    .yqp-more {
      padding: 0 0.5rem;
      margin-top: 2rem;
      a {
        text-align: center;
        display: block;
        background: @search-bg-color;
        color: @brand;
        font-size: @h5-font-size;
        border-radius: 10px;
        padding: 0.5rem 0;
      }
    }
    .yqp-foot {
      width: 100%;
      margin-top: 2rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      background: @search-bg-color;
      .foot-item {
        padding: 0 4rem;
        li {
          flex: 1;
          position: relative;
          height: 2rem;
          line-height: 2rem;
          a {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: @h6-font-size;
            color: @gray-600;
          }
        }
        li:after {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 1rem;
          top: 0.5rem;
          right: 0;
          background: @gray-500;
        }
        li.item-last:after {
          content: none;
        }
      }
      .foot-img {
        margin: 1.5rem auto auto;
        width: 5rem;
        height: 5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
