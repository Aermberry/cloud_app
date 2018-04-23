<template>
  <section class="zkui-user-plan">
    <zk-head title='智能平债'></zk-head>
    <zk-singlead diykey="SingleAd1Config"></zk-singlead>
    <div>
      <tab :line-width=2 active-color='@brand' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" min-height="100px" :show-dots="false">
        <swiper-item style="min-height:100px;">
          <group>
            <cell title="债事报备" is-link link="/user/debt/apply"></cell>
          </group>
          <group>
            <cell title="备案公告" si-link></cell>
          </group>
          <div class="plan-announcement ">
            <div class="vux-form-preview weui-form-preview">
              <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">累计备案总债额：</label>
                  <span class="weui-form-preview__value">电动打蛋机</span>
                </div>
                <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">累计债权人备案人次：</label>
                  <span class="weui-form-preview__value">名字名字名字</span>
                </div>
                <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">累计债务人备案人次：</label>
                  <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
                </div>
              </div>
            </div>
          </div>
          <group>
            <cell title="爆款平债资产"></cell>
          </group>
          <div class="point-content-box">
            <zk-product-item :pageSize=2 classIds='' tagIds='13731' diykey=''></zk-product-item>
          </div>
          <group>
            <cell title="首推平债资产包" is-link></cell>
          </group>
          <div class="point-content-box">
            <zk-product-item :pageSize=2 classIds='' tagIds='13728' diykey=''></zk-product-item>
          </div>
        </swiper-item>
        <swiper-item>
          <group>
            <cell title="债事详情" is-link link="user/debt/list"></cell>
          </group>
          <group>
            <cell title="结案喜报"></cell>
          </group>
          <div class="plan-announcement ">
            <div class="vux-form-preview weui-form-preview">
              <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">累计结案总债额：</label>
                  <span class="weui-form-preview__value">电动打蛋机</span>
                </div>
                <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">累计债权人结案人次：</label>
                  <span class="weui-form-preview__value">名字名字名字</span>
                </div>
                <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">累计债务人结案人次：</label>
                  <span class="weui-form-preview__value">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <group>
            <cell title="债权转移声明" is-link></cell>
          </group> -->
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkSinglead, ZkProductItem } from 'widgets'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, FormPreview } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, ZkSinglead, ZkProductItem, FormPreview
    },
    data () {
      return {
        list2: ['债事备案', '平债计划'],
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
    .point-content-box {
      width: 100%;
      min-height: 180px;
      padding-bottom: 45*@rem;
    }
    .vux-slider {
      overflow: visible !important;
    }
    .vux-swiper {
      overflow: visible !important;
    }
    .vux-label {
    }
    .plan-announcement {
      margin-bottom: 10*@rem;
    }
  }
</style>

