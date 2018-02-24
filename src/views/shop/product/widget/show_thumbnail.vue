<template>
<div>
  <swiper :aspect-ratio="520/520" loop dots-position="center" auto >
    <swiper-item class="swiper-demo-img" v-for="(item, index) in productView.productThums"  :key="index" >
      <!-- <img  class="previewer-demo-img" :src="item.showCaseUrl" @click="show(index)"> -->
       <img  class="previewer-demo-img" :src="item.showCaseUrl">
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
  methods: {
    show (index) {
     console.dir(this.list)
      for (var i = 0; i < this.productView.productThums.length; i++) {
         var originalUrl = this.productView.productThums[i].originalUrl
         var imgItem = {
           src: originalUrl
          }
          this.list[i] = imgItem
       }

      this.$refs.previewer.show(index)
    }
  },
   data () {
    return {
       list: [{
        src: 'https://ooo.0o0.ooo/2017/05/17/591c271ab71b1.jpg'
      },
      {
        src: 'https://ooo.0o0.ooo/2017/05/17/591c271acea7c.jpg'
      }, {
        src: 'https://ooo.0o0.ooo/2017/06/15/59425a592b949.jpeg'
      }],

      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        }
      },
      imagesList: this.productView.productThums
    }
  }
  }
</script>

