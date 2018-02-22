<template>
  <div class="swiper-container floor">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in thumbnails" :key="index">
        <router-link :to="'/product/show_preview/'+id">
          <img :src="item.thumbnailUrl">
        </router-link>

      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props: ['thumbnails', 'id'],
    data () {
      return {

      }
    },
    mounted () {

      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: true,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>

<style lang="less">
  .swiper-container {
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
