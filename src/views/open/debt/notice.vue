<template>
  <section class="zkui-debt-notice">
    <zk-head title='债事公告'></zk-head>
    <div>

      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item>
          <div class="notice-box" v-for="(item,index) in dataList" :key="index">
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
        </swiper-item>
      </swiper>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import apiService from 'src/service/api/diy.api'
  // import userService from 'src/service/api/user.api'
  import { Tab, TabItem, Swiper, SwiperItem } from 'zkui'
  export default {
    components: {
      Tab, TabItem, Swiper, SwiperItem
    },
    data () {
      return {
        list2: ['公司公告', '行业新闻', '公司活动通知'],
        demo2: '公司公告页面',
        index: 0,
        dataList: ''
      }
    },
    created () {
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        let par = {
          dataType: 'userNotice',
          diyKey: 'userNotice'
        }
        let response = await apiService.getList(par)
        console.log(response)
        this.dataList = response.data.result.apiDataList
        console.log('dataList', this.dataList)
      }
    }
  }
</script>
<style   lang="less">
  .zkui-debt-notice {
    .vux-slider {
      overflow: visible;
      .vux-swiper {
        overflow: visible;
      }
    }
    .notice-box {
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
