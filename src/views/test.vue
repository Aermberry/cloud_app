<template>

  <div class="zk-class-tab">
    <tab :line-width=2 active-color='#fc378c' v-model="index" class="zk-class-tab-left">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false" class="zk-class-tab-right">
      <swiper-item v-for="(item, index) in list2" :key="index">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>

</template>



<script>

  import apiService from 'src/service/api/apistore.api'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'zkui'
  const list = () => ['精选', '美食', '电影', '酒店', '外卖']
  export default {
    mounted: function () {
      var response = apiService.miniProgramLogin()
      console.dir(response)
    },
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
        list2: list(),
        demo2: '美食',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    methods: {
      switchTabItem (index) {
        console.log('on-before-index-change', index)
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 1000)
      },
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    }
  }
</script>

<style>
  .zk-class-tab {
    width: 100%;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: auto;
  }
  .zk-class-tab-left {
    width: 75px;
    display: block !important;
  }
  .zk-class-tab-right {
    -ms-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
</style>

