<template>
  <swiper :aspect-ratio="300/800">
    <swiper-item class="swiper-demo-img" v-for="(item, index) in productView.productThums" :key="index">
       <router-link :to="'/product/show_preview/'+productView.id">
          <img :src="item.showCaseUrl">
        </router-link>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'zkui'
  export default {
    props: ['productView'],
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style lang="less">
  .zkui-product-show
  .vux-slider {
    width: 100%;
    min-height: 350*@rem;

    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      width: 100%;
      height: 100%;
      background-size: contain;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet {
      width: 0.833rem;
      height: 0.833rem;
      display: inline-block;
      background: #7c5e53;
    }
  }
</style>
