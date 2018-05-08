<template>
  <section class="zkui-gs">
    <div class="gs-top">
      <ul>
        <li class="top-left">
          <div class="logo">
            <img :src="Ilogo" alt="">
          </div>
        </li>
        <li class="top-center">
          <router-link to="product/search" class="center-content">
            输入关键字、搜索商品
            <m-icon name="zk-search" link="/user/qrcode"></m-icon>
          </router-link>
        </li>
        <li class="top-right">
          <m-icon name="zk-qrcode1" link="/user/qrcode"></m-icon>
        </li>
      </ul>
    </div>
    <div class="point-tab">
      <ul>
        <li>
          <router-link to="">
            限时秒杀
          </router-link>
        </li>
        <li>
          <router-link to="">
            进口美妆
          </router-link>
        </li>
        <li>
          <router-link to="">
            母婴用品
          </router-link>
        </li>
        <li>
          <router-link to="">
            休闲零食
          </router-link>
        </li>
        <li>
          <router-link to="">
            洗涤用品
          </router-link>
        </li>
      </ul>
    </div>
    <zk-swiper diykey="Swiper4Config" height="210px"></zk-swiper>
    <zk-grid diykey="GSGrid4Config" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>
    <div class="gs-item">
      <div class="item-title">
        母婴专区
        <span>Baby area</span>
      </div>
      <div class="item-img">
        <img :src="poster[0]" alt="">
      </div>
      <zk-product-item :pageSize=2 classIds='' tagIds='107' diykey=''></zk-product-item>
    </div>
    <div class="gs-item">
      <div class="item-title">
        美妆护肤
        <span>Cosmetics area</span>
      </div>
      <div class="item-img">
        <img :src="poster[1]" alt="">
      </div>
      <zk-product-item :pageSize=2 classIds='' tagIds='108' diykey=''></zk-product-item>
    </div>
    <div class="gs-item">
      <div class="item-title">
        家庭用品
        <span>Household product</span>
      </div>
      <div class="item-img">
        <img :src="poster[1]" alt="">
      </div>
      <zk-product-item :pageSize=2 classIds='' tagIds='109' diykey=''></zk-product-item>
    </div>
    <div class="gs-item">
      <div class="item-title">
        进口零食
        <span>Snack area</span>
      </div>
      <div class="item-img">
        <img :src="poster[2].imageUrl" alt="">
      </div>
      <zk-product-item :pageSize=2 classIds='' tagIds='110' diykey=''></zk-product-item>
    </div>
    <div class="ga-bottom">
      <img v-for="(item,index) in bottomBanner" :key="index" :src="item.imageUrl" alt="">
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import common from 'src/service/api/common.api'
  import apiService from 'src/service/api/diy.api'
  import { ZkSwiper, ZkGrid, ZkProductItem } from 'widgets'
  import { MIcon } from 'zkui'
  export default {
    components: {
      MIcon,
      ZkSwiper,
      ZkGrid,
      ZkProductItem
    },
    data () {
      return {
        imgData: '',
        message: '',
        Ilogo: '',
        bottomBanner: '',
        poster: ['', '', '', '']
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var response = await apiService.getLink('GSSingleAd3Config')
        this.imgData = response.data.result
        for (var i = 0; i < this.imgData.length; i++) {
          if (this.imgData[i].imageUrl !== '' && this.imgData[i].imageUrl !== 'undefined') {
            this.poster[i] = this.imgData[i].imageUrl
          }
        }
        var gsimg = await apiService.getLink('GSSingleAd4Config')
        this.bottomBanner = gsimg.data.result
        var setMessage = await common.GetConfigValue('WebSiteConfig')
        this.message = setMessage.data.result
        this.Ilogo = this.message.apiImagesUrl + this.message.logo
      }
    }
  }
</script>

<style  lang="less" >
  .zkui-gs {
    .gs-top {
      width: 100%;
      height: 3rem;
      background: #f99e26;
      ul {
        display: flex;
        height: 3rem;
        li {
          height: 3rem;
          padding-top: 0.5rem;
        }
        li.top-left {
          padding-left: 0.5rem;
          .logo {
            width: 3rem;
            height: 2rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        li.top-center {
          flex: 1;
          padding-left: 1rem;
          .center-content {
            display: block;
            background: @white;
            height: 2rem;
            border-radius: 15px;
            line-height: 2rem;
            font-size: @h6-font-size;
            color: @gray-600;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              margin-left: 0.2rem;
              width: @h6-font-size;
              height: @h6-font-size;
              color: @gray-600;
            }
          }
        }
        li.top-right {
          padding: 0.5rem 1rem 0 1rem;
          svg {
            width: 2rem;
            height: 2rem;
            color: @white;
          }
        }
      }
    }
    .point-tab {
      width: 100%;
      height: 2.3rem;
      overflow: hidden;
      border-bottom: 1px solid rgba(229, 229, 229, 0.7);
      ul {
        width: 100%;
        height: 2.6rem;
        display: flex;
        overflow: auto;
        li {
          width: 25%;
          height: 2.6rem;
          text-align: center;
          a {
            display: block;
            min-width: 4rem;
            margin: 0 0.5rem;
            line-height: 2.6rem;
            color: @gray-600;
            font-size: @h6-font-size;
          }
        }
      }
    }
    .gs-item {
      .item-title {
        height: 3rem;
        padding: 0 1rem;
        line-height: 3rem;
        font-weight: @font-weight-bold;
        display: flex;
        align-items: center;
        span {
          margin-left: 2rem;
          font-size: 0.8rem;
          font-weight: normal;
          color: @gray-600;
        }
      }
      .item-img {
        width: 100%;
        height: 220px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ga-bottom {
      width: 100%;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
