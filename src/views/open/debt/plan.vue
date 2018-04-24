<template>
  <section class="zkui-user-plan">
    <zk-head title='智能平债'></zk-head>
    <!-- <zk-singlead diykey="SingleAd1Config"></zk-singlead> -->
    <zk-swiper diykey="Swiper3Config" height="210px"></zk-swiper>
    <zk-grid diykey="Grid3Config" :cols="2" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>
    <div>
      <div class="plan-condition ">
        <div class="box">
          <p class="title">备案公告</p>
          <div class="content">
            <p>累计备案债额：</p>
            <p>累计债权人备案人次：</p>
            <p>累计债务人备案人次：</p>
          </div>
        </div>
        <div class="box">
          <p class="title">喜案接报</p>
          <div class="content">
            <p>累计结案债额：</p>
            <p>累计债权人结案人次：</p>
            <p>累计债务人结案人次：</p>
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
      <zk-product-item :pageSize=2 classIds='' tagIds='13728' diykey=''></zk-product-item>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkSinglead, ZkProductItem, ZkSwiper, ZkGrid } from 'widgets'
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, FormPreview } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Group, Cell, ZkSinglead, ZkProductItem, FormPreview, ZkSwiper, ZkGrid
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
    .plan-condition {
      display: flex;
      .box {
        flex: 1;
        padding: 0 1rem 1rem 1rem;
        p.title {
          height: 2.5rem;
          color: @black;
          line-height: 2.5rem;
          text-align: center;
        }
        .content {
          background: @brand;
          p {
            height: 2rem;
            line-height: 2rem;
            color: @white;
            font-size: 0.8rem;
            padding: 0 5px;
          }
        }
      }
    }
    .weui-cells {
      margin-top: 0;
    }
    .vux-swiper {
      min-height: 180px !important;
    }
    .point-content-box {
      width: 100%;
      min-height: 180px;
      padding-bottom: 20*@rem;
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

