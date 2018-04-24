<template>
  <section class="zkui-user-data">
    <zk-head title='数据宝库'></zk-head>
    <zk-singlead diykey="SingleAd1Config"></zk-singlead>
    <div>
      <tab :line-width=2 active-color='@brand' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" min-height="100px" :show-dots="false">
        <swiper-item style="min-height:100px;">
          <div class=" data-item">
            <group>
              <selector title="区域" placeholder="请选择区域" :options="A" v-model="value7"></selector>
              <selector title="时段" placeholder="请选择时段" :options="['工艺技术', '其他']" v-model="value7"></selector>
              <selector title="等级" placeholder="请选择等级" :options="['工艺技术', '其他']" v-model="value7"></selector>
              <selector title="分类" placeholder="请选择分类" :options="['工艺技术', '其他']" v-model="value7"></selector>
              <selector title="完成率" placeholder="请选择完成率" :options="['工艺技术', '其他']" v-model="value7"></selector>
              <selector title="达标率" placeholder="请选择达标率" :options="['工艺技术', '其他']" v-model="value7"></selector>
              <selector title="经理" placeholder="请选择经理" :options="['工艺技术', '其他']" v-model="value7"></selector>
              <selector title="总监" placeholder="请选择总监" :options="['工艺技术', '其他']" v-model="value7"></selector>
              <selector title="大区总监" placeholder="请选择大区总监" :options="['工艺技术', '其他']" v-model="value7"></selector>
            </group>
          </div>
        </swiper-item>
        <swiper-item>
          <group>
            <selector title="债额" placeholder="请选择债额" :options="A" v-model="value7"></selector>
            <selector title="债事性质" placeholder="请选择债事性质" :options="['工艺技术', '其他']" v-model="value7"></selector>
            <selector title="区域" placeholder="请选择区域" :options="['工艺技术', '其他']" v-model="value7"></selector>
            <selector title="时段" placeholder="请选择时段" :options="['工艺技术', '其他']" v-model="value7"></selector>
            <selector title="平债成功率" placeholder="请选择平债成功率" :options="['工艺技术', '其他']" v-model="value7"></selector>
            <selector title="个人" placeholder="请选择个人" :options="['工艺技术', '其他']" v-model="value7"></selector>
            <selector title="企业" placeholder="请选择企业" :options="['工艺技术', '其他']" v-model="value7"></selector>
            <selector title="总监" placeholder="请选择总监" :options="['工艺技术', '其他']" v-model="value7"></selector>
            <selector title="政府" placeholder="请选择政府" :options="['工艺技术', '其他']" v-model="value7"></selector>
          </group>
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkSinglead } from 'widgets'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, Selector } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, ZkSinglead, Selector
    },
    data () {
      return {
        list2: ['会员数据', '债事数据'],
        demo2: '会员数据',
        index: 0,
        value7: '',
        A: ['工艺技术', '其他', '成恩']
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
  .zkui-user-data {
    .data-item {
      margin-bottom: 90*@rem;
    }
    .weui-cells {
      margin-top: 0;
    }
    .vux-swiper {
      min-height: 180px !important;
    }
    .vux-slider {
      overflow: visible !important;
    }
    .vux-swiper {
      overflow: visible !important;
    }
  }
</style>

