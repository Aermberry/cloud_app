<template>
  <section class="zkui-debt-reference">
    <zk-head title='咨询中心'></zk-head>
    <div>
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  // import apiService from 'src/service/api/diy.api'
  // import userService from 'src/service/api/user.api'
  import { Tab, TabItem, Swiper, SwiperItem } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Swiper, SwiperItem
    },
    data () {
      return {
        list2: ['公司公告页面', '行业新闻页面', '公司活动通知页面'],
        demo2: '公司公告页面',
        index: 0
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {

    }
  }
</script>
<style   lang="less">

</style>
