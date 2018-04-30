<template>
  <section class="zkui-debt-reference">
    <zk-head title='资讯中心'></zk-head>
    <div>
      <tab :line-width=2 active-color='#0090ff' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item>
          <div class="reference-box">
            <ul>
              <li class="box-left">
                <div class="left-time">
                  <p>04:08</p>
                  <p>14:20</p>
                </div>
              </li>
              <li class="box-right">
                <div class="title">
                  <p>关于市场部用业绩置换区级代理政策</p>
                </div>
                <div class="introduction ">
                  <p>市场拓展商家的业绩可置换区级代理的相关条件和收益，详情请点击查看</p>
                  <router-link to="">
                    点击查看详情
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="reference-box">
            <ul>
              <li class="box-left">
                <div class="left-time">
                  <p>04:08</p>
                  <p>14:20</p>
                </div>
              </li>
              <li class="box-right">
                <div class="title">
                  <p>关于市场部用业绩置换区级代理政策</p>
                </div>
                <div class="introduction ">
                  <p>市场拓展商家的业绩可置换区级代理的相关条件和收益，详情请点击查看</p>
                  <router-link to="">
                    点击查看详细
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">行业新闻页面</div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">公司活动通知页面</div>
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  // import userService from 'src/service/api/user.api'
  import apiService from 'src/service/api/diy.api'
  import { Tab, TabItem, Swiper, SwiperItem } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Swiper, SwiperItem
    },
    data () {
      return {
        list2: ['公司公告', '行业新闻', '公司活动通知'],
        demo2: '公司公告页面',
        index: 0
      }
    },
    created () {
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        let par = {
          dataType: 'article'
        }
        var response = await apiService.getList(par)
        console.log(response)
      }
    }
  }
</script>
<style   lang="less">
  .zkui-debt-reference {
    .vux-slider {
      overflow: visible;
      .vux-swiper {
        overflow: visible;
      }
    }
    .reference-box {
      margin-bottom: 2rem;
      ul {
        width: 100%;
        display: flex;
        padding: 0.5rem;
        li {
          min-height: 50px;
        }
        .box-left {
          width: 8rem;
          .left-time {
            width: 5rem;
            height: 3rem;
            background: @brand;
            padding: 0.5rem;
            p {
              text-align: center;
              font-size: @h6-font-size;
              color: @white;
            }
          }
        }
        .box-right {
          flex: 1;
          .title {
            padding: 0.5rem;
            p {
              font-size: @h4-font-size;
            }
            border-bottom: 1px solid rgba(229, 229, 299, 0.7);
            border-right: 1px solid rgba(229, 229, 299, 0.7);
          }
          .introduction {
            padding: 0.5rem;
            border-bottom: 1px solid rgba(229, 229, 299, 0.7);
            border-right: 1px solid rgba(229, 229, 299, 0.7);
            p {
              font-size: @h6-font-size;
            }
            a {
              margin-top: 1.5rem;
              display: block;
              color: @gray-500;
            }
          }
        }
      }
    }
  }
</style>
