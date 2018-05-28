<template>
  <div>
    <section class="ZKList-Items weui-panel weui-panel_access" v-if="styleType === 1">
      <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll" v-if="notDataf">
        <div class="weui-panel__bd">
          <a :href="item.url" class="weui-media-box weui-media-box_appmsg" v-for="item in dataList" :key="item.id">
            <div class="weui-media-box__hd">
              <router-link :to="item.url">
                <x-img :src="item.image"></x-img>
              </router-link>
            </div>
            <div class="weui-media-box__bd">
              <router-link :to="item.url">
                <h4 class="weui-media-box__title zkui-user-account-finacebill-fontcolor">{{item.title}}
                  <span class="weui-media-box__title__extra zkui-user-account-finacebill-fontcolor brand">{{item.extra}}</span>
                </h4>
              </router-link>
              <p class="weui-media-box__desc">{{item.intro}}</p>
            </div>
          </a>
        </div>
      </x-scroll>
      <!-- <zk-notdata  :name="dataName"></zk-notdata> -->
      <div class="zk-not-data" v-if="!notDataf">
        <m-icon name="zk-notdata"></m-icon>
        <p>暂无数据</p>
      </div>
    </section>
    <div v-if="styleType === 2">
      <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll" v-if="notDatas">
        <div class="weui-panel weui-panel_access" v-for="item in dataList" :key="item.id">
          <!-- <div class="weui-panel__hd">图文组合列表</div> -->
          <div class="weui-panel__bd">
            <a :href="item.url" class="weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">
                <router-link :to="item.url">
                  <img :src="item.image" alt="" class="weui-media-box__thumb">
                </router-link>
              </div>

              <div class="weui-media-box__bd">
                <router-link :to="item.url">
                  <h4 class="weui-media-box__title">
                    {{item.title}}</h4>
                </router-link>
                <p class="weui-media-box__desc">{{item.intro}}</p>
                <p class="weui-media-box__desc" style="text-align: right">{{item.extra}}</p>
              </div>
            </a>
          </div>
        </div>
      </x-scroll>
      <div class="zk-not-data" v-if="!notDatas">
        <m-icon name="zk-notdata"></m-icon>
        <p>暂无数据</p>
      </div>
    </div>
  </div>
</template>


<script>
  import { XScroll, XImg, MIcon } from 'zkui'
  import { ZkNotdata } from 'widgets'
  import apiService from 'src/service/api/diy.api'
  export default {
    name: 'zk-list',
    components: {
      XScroll,
      XImg,
      ZkNotdata,
      MIcon
    },
    props: {
      styleType: {
        type: Number,
        default: 2 // 样式显示方式
      },
      diykey: {
        type: String,
        default: '' // 默认Diy方式
      },
      dataType: {
        type: String,
        default: '' // 数据方式，比如分润使用 'reward',财务列表使用'bill'，与服务端数据先对应
      },
      isLogin: {
        type: Boolean,
        default: false // 获取数据是否需要登录
      }
    },

    data () {
      return {
        dataList: [],
        pageIndex: 1, //  从第一页开始加载
        notDataf: true,
        notDatas: true
      }
    },
    methods: {
      async upCallback () {
        let params = {
          pageIndex: this.pageIndex, //  当前第页,下拉一次增加一次
          pageSize: 20, // 每页显示的数量 建议20
          dataType: this.dataType, // 数据方式，比如分润使用 'reward',财务列表使用'bill'，与服务端数据先对应
          diyKey: this.diykey,
          isLogin: this.isLogin
        }
        console.info('参数', params)
        var response = await apiService.getList(params) //  通过异步方法获取数据
        console.dir('数据', response.data.result) //  调试返回结果，调试完成以后请注释
        let totalSize = response.data.result.totalSize //  获取总页数

        // this.styleType = response.data.result.styleType // 选择何种风格
        if (this.pageIndex < totalSize) {
          this.$refs.mescroll.endSuccess(params, totalSize) // 调用widget xsroll 下拉刷新函数
        }
        this.dataList = this.dataList.concat(response.data.result.apiDataList)
        console.dir('数据', this.dataLis)
        if (this.dataList.length === 0) {
          this.notDataf = false
          this.notDatas = false
        }
        if (this.pageIndex < totalSize) {
          this.pageIndex = this.pageIndex + 1 //  下拉时是自动增加一页
        }
        console.log('totalsize', totalSize, 'this.pageIndex ', this.pageIndex)
      },
      success (src, ele) {
        // console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        // console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }
    }
  }
</script>


<style  lang="less">
  @import '../assets/css/zkui/theme';
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
  .weui-panel:after {
    border: none !important;
  }
  .mescroll-upwarp {
    display: none !important;
  }
  .ZKList-Items {
    .weui-media-box {
      padding: 0.5rem;
    }
    .weui-media-box__hd {
      margin: 10px auto;
      .brand {
        width: 50 * @rem;
        height: 50 * @rem;
        padding-top: 0.1rem;
        border-radius: 50%;
      }
    }

    .weui-media-box__title {
      color: @black;
    }
    .weui-media-box__bd {
      padding-left: 0.1rem;
    }
    .weui-media-box__desc {
      padding-top: 0.3rem;
      font-size: @h6-font-size;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .weui-media-box__title__extra {
      font-size: @h5-font-size;
      font-weight: bold;
      float: right;
    }
  }
</style>
