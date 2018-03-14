<template>
  <section>
    <zk-head></zk-head>
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
  </section>
</template>
<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'zkui'
  import orderService from 'src/service/api/order.api'
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        list2: ['全部', '待付款', '待发货', '待收货', '待评价'],
        demo2: '全部',
        index: 0,
        data: ''
      }
    },
    mounted () {
      this.GetData()
      this.ceshi()
    },
    methods: {
      async GetData () {
        let par = {

        }
        var reponse = await orderService.list(par)
        this.data = reponse
        console.log(this.data.data.result)
      },
      async ceshi () {
        let paramter = {
          id: 9
        }
        var response = await orderService.show(paramter)
        console.log('订单详情', response.data)
      }
    }
  }
</script>
