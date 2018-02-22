<template>
  <div class="zkui-product-show-swiper floor ">
    <z-swiper :swiperimages="swiperimages" :swiperheight="swiperheight"></z-swiper>
  </div>
</template>
<script>
import { ZProductItem } from 'src/components/'
export default {
  components: {
    ZProductItem
  },
  data () {
    return {
      swiperimages: [],
      swiperheight: 500
    }
  }
}
</script>
