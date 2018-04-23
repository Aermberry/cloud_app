<template>
  <section class="zkui-point">
    <!-- <zk-head goBack='商品详情'></zk-head> -->
    <div class="point-top">
      <div class="top-left" :class="{'text-top':true}">
        <router-link to="/mill/point">
          资产包商城
        </router-link>
      </div>
      <div class="top-right">
        <router-link to="/mill/point1">
          新零售云商城
        </router-link>
      </div>
    </div>
    <div class="point-tab">
      <ul>
        <li v-for="(item,index) in data " :key="index">
          <router-link :to="'/product/list?Keyword='+item.name">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <zk-swiper diykey="Swiper1Config" height="210px"></zk-swiper>
    <zk-grid diykey="Grid1Config" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>
    <div class="point-title">
      <span class="title-text">
        首推平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagIds='13728' diykey=''></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        热门平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagIds='13729'></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        私人订制平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagIds='13730'></zk-product-item>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import apiService from 'src/service/api/product.api'
  import { ZkSwiper, ZkGrid, ZkProductItem } from 'widgets'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'zkui'
  export default {
    directives: {

    },
    components: {
      Tab,
      TabItem,
      ZkSwiper,
      ZkGrid,
      ZkProductItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        var response = await apiService.class()
        console.log(response)
        this.data = response.data.result
      }
    },
    data () {
      return {
        data: ''
      }
    }
  }
</script>

<style   lang="less">
  .zkui-point {
    .vux-tab .vux-tab-item a {
      font-size: 0.8rem;
      color: @black;
    }
    .point-top {
      height: 2.91666667rem;
      display: flex;
      background: @brand;
      .top-left,
      .top-right {
        flex: 1;
        text-align: center;
        height: 100%;
        line-height: 2.91666667rem;
        a {
          color: @black;
        }
      }
      .text-top {
        a {
          color: @white;
        }
      }
    }
    .point-title {
      border-bottom: 1px solid rgba(229, 229, 229, 0.5);
      height: 3rem;
      .title-text {
        margin-left: 2rem;
        margin-top: 0.5rem;
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        background: @brand;
        color: @white;
        border-radius: 10px;
        padding: 0 10px;
      }
    }
    .point-content-box {
      width: 100%;
      min-height: 180px;
    }
    .point-tab {
      width: 100%;
      height: 3.3rem;
      overflow: hidden;
      border-bottom: 1px solid rgba(229, 229, 229, 0.7);
      ul {
        width: 100%;
        height: 3.66666667rem;
        display: flex;
        overflow: auto;

        li {
          height: 3.66666667rem;
          text-align: center;
          a {
            display: block;
            min-width: 4rem;
            margin: 0 0.5rem;
            line-height: 3.66666667rem;
            color: @black;
          }
        }
      }
    }
  }
</style>

