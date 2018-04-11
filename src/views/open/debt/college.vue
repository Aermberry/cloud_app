<template>
  <section class="zkui-user-college">
    <zk-head title='云债通债事生态学院'></zk-head>
    <div class="banner">

    </div>
    <zk-grid diykey="grid_index" :cols="3" class="zkui-grid-border__none border-bottom grid-icon-middle "></zk-grid>
    <div class="viedo-title">
      <div class="title-icon">
      </div>
      债权重组解析
    </div>
    <div class="video">
      <video src=""></video>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkGrid } from 'widgets'
  import { MIcon } from 'zkui'
  export default {
    components: {
      ZkGrid,
      MIcon
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .zkui-user-college {
    .banner {
      height: 180*@rem;
      width: 100%;
      background: #e4393c;
    }
    .viedo-title {
      height: 2.5rem;
      padding-left: 4rem;
      width: 100%;
      line-height: 2.5rem;
      font-weight: @font-weight-bold;
      font-size: @h5-font-size;
      position: relative;
      .title-icon {
        width: 1.5rem;
        height: 1.5rem;
        background: @warning;
        position: absolute;
        top: 40%;
        left: 0.5rem;
        transform: rotate(45deg) translateY(-50%);
      }
    }
    .video {
      width: 100%;
      height: 180*@rem;
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

