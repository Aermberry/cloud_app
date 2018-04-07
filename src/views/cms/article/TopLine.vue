<template>
  <section class="zkui-reward-list">

    <zk-head title='头条' goBack='首页'></zk-head>
    <zk-list :styleType=2 dataType='topline' diyKey='list_topline' :isLogin="false"></zk-list>
    <!-- <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">图文组合列表</div>
      <div class="weui-panel__bd">
        <a href="#!/component/cell" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd"><img src="http://placeholder.qiniudn.com/60x60/3cc51f/ffffff" alt="" class="weui-media-box__thumb"></div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">标题一</h4>
            <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
          </div>
        </a>
      </div>
    </div> -->
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import { ZkList } from 'widgets'
  export default {
    components: {
      ZkList
    }
  }
</script>
