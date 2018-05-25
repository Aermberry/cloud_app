<template>
  <div>
    <div class="share-box">
      <div class="share-title">
        <ul>
          <li class="title-left">
            <m-icon name="zk-classification"></m-icon>
          </li>
          <li class="title-center">
            <p>待分享，还差5人，剩余23:57:06</p>
          </li>
        </ul>
      </div>
      <div class="share-content">
        <div class="content-left">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="content-right">
          <x-button type="primary" action-type="button">邀请好友</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, XButton } from 'zkui'
  export default {
    components: {
      Group,
      XButton
    },
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="less">
  .share-box {
    .share-title {
      height: 3rem;
      line-height: 3rem;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        .title-left {
          width: 4rem;
          position: relative;
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .title-center {
          flex: 1;
        }
      }
    }
    .share-content {
      padding-left: 3rem;
      display: flex;
      .content-left {
        flex: 1;
      }
      .content-right {
        padding: 0 1rem;
      }
    }
  }
</style>

