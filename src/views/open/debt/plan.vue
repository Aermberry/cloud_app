<template>
  <section class="zkui-user-plan">
    <zk-head title='平债计划'></zk-head>
    <zk-singlead diykey="SingleAd1Config"></zk-singlead>
    <div>
      <tab :line-width=2 active-color='@brand' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" min-height="100px" :show-dots="false">
        <swiper-item style="min-height:100px;">
          <group>
            <cell title="备案公告" is-link></cell>
            <cell title="爆款平债资产" is-link></cell>
            <cell title="首推平债资产包" is-link></cell>
          </group>
        </swiper-item>
        <swiper-item>
          <group>
            <cell title="结案喜报" is-link></cell>
            <cell title="债权转移声明" is-link></cell>
          </group>
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkSinglead } from 'widgets'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, ZkSinglead
    },
    data () {
      return {
        list2: ['债事备案', '平债计划页面'],
        demo2: '债事备案',
        demo4: '即将上映',
        index: 0
      }
    },
    mounted () {
    },
    methods: {
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

<style lang="less">
  .zkui-user-plan {
    .weui-cells {
      margin-top: 0;
    }
    .vux-swiper {
      min-height: 180px !important;
    }
  }
</style>

