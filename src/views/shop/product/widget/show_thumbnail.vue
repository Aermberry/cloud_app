<template>
  <div class="product-show-thum">
    <swiper :aspect-ratio="520/520" loop dots-position="center" auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in productView.productExtensions.productThums" :key="index">
        <img class="previewer-demo-img" :src="item.showCaseUrl" @click="show(index)">
        <!-- <img class="previewer-demo-img" :src="item.showCaseUrl"> -->
      </swiper-item>
    </swiper>
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options"></previewer>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, Previewer, TransferDom } from 'zkui'
  export default {
    props: ['productView'],
    components: {
      Swiper,
      SwiperItem,
      Previewer,
      TransferDom
    },
    directives: {
      TransferDom
    },
    created () {
      for (var i = 0; i < this.productView.productExtensions.productThums.length; i++) {
        var originalUrl = this.productView.productExtensions.productThums[i].originalUrl
        var imgItem = {
          src: originalUrl
        }
        this.list[i] = imgItem
      }
    },
    mounted () {
    },
    methods: {
      show (index) {
        this.$refs.previewer.show(index)
      }
    },
    data () {
      return {
        list: [],
        options: {
          getThumbBoundsFn (index) {
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          }
        },
        imagesList: this.productView.productThums
      }
    }
  }
</script>

<style   lang="less">
  .product-show-thum {
    .vux-slider {
      overflow: hidden;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

