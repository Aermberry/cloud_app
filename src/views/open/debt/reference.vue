<template>
  <section class="zkui-debt-reference">
    <zk-head title='资讯中心'></zk-head>
    <div>
      <tab :line-width=2 active-color='#0090ff' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item>
          <div class="reference-box" v-for="(item,index) in UserNotice" :key="index">
            <ul>
              <li class="box-left">
                <div class="left-time">
                  <p>{{item.extra}}</p>
                </div>
              </li>
              <li class="box-right">
                <div class="title">
                  <p>{{item.title}}</p>
                </div>
                <div class="introduction ">
                  <p>{{item.intro}}</p>
                  <router-link :to="item.url">
                    点击查看详情
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="zk-not-data" v-if="showUserNotice">
            <m-icon name="zk-notdata"></m-icon>
            <p>暂无数据</p>
          </div>
        </swiper-item>
        <swiper-item>
          <div class="reference-box" v-for="(item,index) in article" :key="index">
            <ul>
              <li class="box-left">
                <div class="left-time">
                  <p>{{item.extra}}</p>
                </div>
              </li>
              <li class="box-right">
                <div class="title">
                  <p>{{item.title}}</p>
                </div>
                <div class="introduction ">
                  <p>{{item.intro}}</p>
                  <router-link :to="item.url">
                    点击查看详情
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="zk-not-data" v-if="showarticle">
            <m-icon name="zk-notdata"></m-icon>
            <p>暂无数据</p>
          </div>
        </swiper-item>
        <!-- <swiper-item>
          <div class="tab-swiper vux-center">公司活动通知页面</div>
        </swiper-item> -->
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
        list2: ['公司公告', '行业新闻'],
        demo2: '公司公告',
        index: 0,
        UserNotice: '',
        showUserNotice: false,
        article: '',
        showarticle: false
      }
    },
    created () {
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        let un = {
          dataType: 'UserNotice',
          diyKey: 'UserNotice'
        }
        var response = await apiService.getList(un)
        this.UserNotice = response.data.result.apiDataList
        if (this.UserNotice.length === 0) {
          this.showUserNotice = true
        }
        let article = {
          dataType: 'article',
          diyKey: 'article'
        }
        var articleMessage = await apiService.getList(article)
        this.article = articleMessage.data.result.apiDataList
        console.log(this.article)
        if (this.article.length === 0) {
          this.showarticle = true
        }
      }
    }
  }
</script>
<style   lang="less">
  .zkui-debt-reference {
    .zk-not-data {
      margin: 0 auto;
      padding-top: 150 * @rem;
      text-align: center;
      svg {
        width: 50 * @rem;
        height: 50 * @rem;
      }
      p {
        font-size: @h4-font-size;
      }
    }
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
            width: 6rem;
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
