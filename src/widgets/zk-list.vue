<template>
  <section class="ZKList-Items weui-panel weui-panel_access" v-if="styleType === 1">
    <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll">
      <div class="weui-panel__bd">
        <a :href="item.url" class="weui-media-box weui-media-box_appmsg" v-for="item in dataList" :key="item.id">
          <div class="weui-media-box__hd">
            <x-img :src="item.image" ></x-img>
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title zkui-user-account-finacebill-fontcolor">{{item.title}}
              <span class="weui-media-box__title__extra zkui-user-account-finacebill-fontcolor brand">{{item.extra}}</span>
            </h4>
            <p class="weui-media-box__desc">{{item.intro}}</p>
          </div>
        </a>
      </div>
    </x-scroll>
  </section>
</template>


<script>
  import { XScroll, XImg } from 'zkui'
  import apiService from 'src/service/api/diy.api'
  export default {
    name: 'zk-list',
    components: {
      XScroll,
      XImg
    },
    props: {
      styleType: {
        type: Number,
        default: 1 // 样式显示方式
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
        pageIndex: 1 //  从第一页开始加载
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
        var response = await apiService.getList() //  通过异步方法获取数据
      //  console.dir(response) //  调试返回结果，调试完成以后请注释
        let totalSize = response.data.result.totalSize //  获取总页数
        this.styleType = response.data.result.styleType // 选择何种风格
        this.$refs.mescroll.endSuccess(params, totalSize) // 调用widget xsroll 下拉刷新函数
        this.dataList = this.dataList.concat(response.data.result.apiDataList)
        if (this.pageIndex < totalSize) {
          this.pageIndex = this.pageIndex + 1 //  下拉时是自动增加一页
        }
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


<style scoped  lang="less">
  @import '../assets/css/zkui/theme';
  .weui-media-box__hd {
    width: 45px !important;
    height: 45px !important;
    margin: 10px auto;
    .brand {
      width: 50*@rem;
      height: 50*@rem;
      padding-top: 0.1rem;
      border-radius: 50%;
    }
  }
  .weui-media-box__title__extra {
    float: right;
  }
  .weui-media-box__bd {
    padding-left: 0.1rem;
  }
  .weui-media-box__desc {
    padding-top: 0.3rem;
    font-size: @h6-font-size;
  }
  .weui-media-box__title__extra {
    font-size: @h4-font-size;
    font-weight: bold;
  }
</style>
