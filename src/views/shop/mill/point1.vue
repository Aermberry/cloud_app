<template>
  <section class="zkui-point">
    <!-- <zk-head goBack='商品详情'></zk-head> -->
    <div class="point-top">
      <div class="top-left">
        <router-link to="/mill/point">
          资产包商城
        </router-link>
      </div>
      <div class="top-right" :class="{'text-top':true}">
        <router-link to="/mill/point1">
          新零售云商城
        </router-link>
      </div>
    </div>
    <tab :scroll-threshold="5">
      <tab-item>
        <router-link to="/product/list?Keyword=房产">房产</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/product/list?Keyword=汽车">汽车</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/product/list?Keyword=艺术品">艺术品</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/product/list?Keyword=原材料">原材料</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/product/list?Keyword=半成品">半成品</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/product/list?Keyword=机器设备">机器设备</router-link>
      </tab-item>
      <tab-item>
        <router-link to="/product/list?Keyword=其他">其他</router-link>
      </tab-item>
    </tab>
    <zk-grid diykey="grid1_config" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>
    <div class="point-title">
      <span class="title-text">
        首推平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagsId='' diykey='index'></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        热门平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagsId='' diykey='index'></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        私人订制平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagsId='' diykey='index'></zk-product-item>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import { ZkSwiper, ZkGrid, ZkProductItem } from 'widgets'
  import { Tab, TabItem } from 'zkui'
  export default {
    directives: {

    },
    components: {
      Tab,
      TabItem,
      ZkSwiper,
      ZkGrid,
      ZkProductItem
    },
    mounted () {
    },
    methods: {

    },
    data () {
      return {

      }
    }
  }
</script>

<style   lang="less">
  .zkui-point {
    .vux-tab .vux-tab-item {
      font-size: 0.8rem;
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
  }
</style>

