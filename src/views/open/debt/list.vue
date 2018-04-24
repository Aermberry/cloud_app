<template>
  <section class="zkui-user-debt-list">
    <zk-head title='平债计划'></zk-head>
    <!-- <zk-list :styleType=1 dataType='debt' diyKey='list_user_reward' :isLogin='true'></zk-list> -->

    <section class="ZKList-Items weui-panel weui-panel_access">
      <!-- <x-scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll" id="index_scroll" > -->
      <div class="weui-panel__bd" v-if="notDataf">
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
      <!-- </x-scroll> -->
      <div class="zk-not-data" v-if="!notDataf">
        <m-icon name="zk-notdata"></m-icon>
        <p>暂无数据</p>
      </div>
    </section>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import apiService from 'src/service/api/debt.api'
  import { XScroll, XImg, MIcon } from 'zkui'
  import { ZkNotdata, ZkList } from 'widgets'
  export default {
    components: {
      ZkList,
      ZkNotdata,
      XScroll,
      XImg,
      MIcon
    },
    data () {
      return {
        notDataf: true,
        dataList: ''
      }
    },
    mounted () {
      this.data()
    },
    methods: {
      async data () {
        let par = {
          dataType: 'debt'
        }
        var response = await apiService.list(par)
        console.log(response)
        // this.dataList = response.data.result.apiDataList
        // if (this.dataList.length === 0) {
        //   this.notDataf = false
        //   this.notDatas = false
        // }
      }
    }
  }
</script>
<style lang="less">
  .zk-not-data {
    margin: 0 auto;
    padding-top: 150*@rem;
    text-align: center;
    svg {
      width: 50*@rem;
      height: 50*@rem;
    }
    p {
      font-size: @h4-font-size;
    }
  }
</style>

