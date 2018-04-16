<template>
  <section class="zkui-product-show-intro">
    <divider class="zkui-product-particulars">商品详情</divider>
    <div class="zkui-product-show-images">
      <div v-html='productView.detail.mobileIntro'></div>
    </div>
    <vue-preview :slides="imgV" @close="handleClose"></vue-preview>
  </section>
</template>
<script>
  import { Group, Cell, Divider, Swiper, SwiperItem, Previewer, TransferDom } from 'zkui'
  export default {
    components: {
      Group,
      Cell,
      Divider,
      Swiper,
      SwiperItem,
      Previewer,
      TransferDom
    },
    directives: {
      TransferDom
    },
    props: ['productView'],
    created () {

    },
    mounted () {
      console.log(this.productView.detail.mobileIntro)
      var a = document.getElementsByClassName('zkui-product-show-intro')[0].getElementsByTagName('img')
      for (let i = 0; i < a.length; i++) {
        var b
        b = {
          src: a[i].src,
          msrc: a[i].src,
          w: a[i].width,
          h: a[i].height
        }
        this.imgV[i] = b
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    },
    data () {
      return {
        b: {},
        imgV: [],
        hide: false,
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            w: 1200,
            h: 900
          }
        ]
      }
    }

  }
</script>


<style   lang="less">
  @import 'product_show';
  .zkui-product-show-intro {
    .zkui-product-particulars {
      font-weight: @font-weight-bold;
      color: @black;
    }
    .zkui-product-show-images {
    }
    .zkui-product-show-images img {
      width: 100%;
    }
    .show-intro-img {
      img {
      }
    }
    .my-gallery {
      img {
        width: 100%;
      }
    }
  }
</style>
