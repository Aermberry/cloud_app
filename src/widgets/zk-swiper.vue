
<template>
  <swiper :list="swiperList" dots-position="center" loop auto height="swiperHeight"></swiper>
</template>
<script>
  import { Swiper, SwiperItem } from 'zkui'
  import apiService from 'src/service/api/diy.api'
  export default {
    name: 'zk-swiper',
    props: {
      swiperHeight: {
        type: String,
        default: '200px'
      },
      diykey: {
        type: String,
        default: '' // 默认Diy方式
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data () {
      return {
        swiperList: []
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var repsonse = await apiService.getLink(this.diykey)
        this.swiperList = repsonse.data.result
      }
    }
  }
</script>
<style scoped  lang="less">
  .zkcloud-body
    .vux-slider
    > .vux-swiper
    > .vux-swiper-item
    > a
    > .vux-swiper-desc {
    padding-bottom: 30*@rem;
  }
</style>
