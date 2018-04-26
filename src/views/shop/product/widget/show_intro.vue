<template>
  <section class="zkui-product-show-intro">
    <divider class="zkui-product-particulars">商品详情</divider>
    <div class="zkui-product-show-images">
      <div v-html='productView.detail.mobileIntro'></div>
    </div>
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
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
      this.ceshi()
      this.imgV = this.slide1
      // window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      ceshi () {
        // console.log('没有发生变化')
        // console.log(this.productView.detail.mobileIntro)
        var a = document.getElementsByClassName('zkui-product-show-intro')[0].getElementsByTagName('img')
        for (let i = 0; i < a.length; i++) {
          let height = 300
          if (a[i].height !== 0) {
            height = a[i].height
          }
          var b
          b = {
            src: a[i].src,
            msrc: a[i].src,
            w: a[i].width,
            h: height
          }
          this.slide1.push(b)
          // this.slide1.splice(0, 1)
        }
      },
      // handleScroll () {
      //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //   console.log('滚动高度', scrollTop)
      //   // var buttonTop = document.getElementsByClassName('vux-button-tab-item')[0].offsetTop
      //   if (scrollTop > 1 && scrollTop < 8) {
      //     // this.slide1.splice(0, 1)
      //     //   var a = document.getElementsByClassName('zkui-product-show-intro')[0].getElementsByTagName('img')
      //     //   // console.log('intro', a)
      //     //   for (let i = 0; i < a.length; i++) {
      //     //     // console.log('intro', a[i].width, a[i].height)
      //     //     var b
      //     //     b = {
      //     //       src: a[i].src,
      //     //       msrc: a[i].src,
      //     //       w: a[i].width,
      //     //       h: a[i].height
      //     //     }
      //     //     this.slide1.push(b)
      //     //   }
      //     //   // console.log('滚动', this.slide1)
      //   }
      // },
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
          // {
          //   src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          //   msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          //   w: 1200,
          //   h: 900
          // }
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
    .zkui-product-show-images > div {
      height: 1px;
      overflow: hidden;
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
    .pswp {
      z-index: 9999;
    }
    .pswp__button--share {
      display: none !important;
    }
    .pswp__button--fs {
      display: none !important;
    }
    // .my-gallery > figure:nth-child(1) {
    //   display: none !important;
    // }
  }
</style>
