<template>
  <swiper :aspect-ratio="520/520" loop dots-position="center" auto >
    <swiper-item class="swiper-demo-img" v-for="(item, index) in productView.productThums"  :key="index">
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

