<template>
  <section class="zkui-interests">
    <zk-head title='会员权益'></zk-head>
    <div class="interests-top">
      <div class="content">
        <img src="../../../assets/images/debticon/高级平债士.png" alt="">
        <p>你当前是金钻会员</p>
      </div>
    </div>
    <div class="interests-class">
      <ul>
        <li>
          <img src="../../../assets/images/debticon/创客.png" alt="">
        </li>
        <li>
          <img src="../../../assets/images/debticon/平债士图标.png" alt="">
        </li>
        <li>
          <img src="../../../assets/images/debticon/高级平债士.png" alt="">
        </li>
      </ul>
    </div>
    <div class="interests-content">
      <h2 class="big-title">会员权益</h2>
      <p class="little-title">会员内容</p>
      <div class="message">
      </div>
    </div>
    <div class="interests-content">
      <h2 class="big-title">奖励</h2>
      <p class="little-title">会员内容</p>
      <div class="message">
      </div>
    </div>
    <div class="interests-content">
      <h2 class="big-title">推荐级别权利</h2>
      <p class="little-title">会员内容</p>
      <div class="message">
      </div>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import common from 'src/service/api/common.api'
  import { ZkCell, ZkGrid } from 'widgets'
  import { MIcon, Grid, GridItem, Cell, Group, XButton } from 'zkui'
  export default {
    components: {
      ZkCell,
      MIcon,
      Grid,
      Cell,
      Group,
      ZkGrid,
      GridItem,
      XButton
    },
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        var response = await common.GetConfigValue('GradePrivilegesConfig')
        console.log(response)
      }
    }
  }
</script>
<style   lang="less">
  .zkui-interests {
    .interests-top {
      width: 100%;
      height: 180px;
      background: #cdeaff;
      position: relative;
      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12rem;
        min-height: 5rem;
        img {
          width: 100%;
        }
        p {
          text-align: center;
          color: @brand;
          font-size: @h6-font-size;
        }
      }
    }
    .interests-class {
      background: #cdeaff;
      ul {
        display: flex;
        li {
          flex: 1;
          text-align: center;
          img {
            width: 5rem;
          }
        }
      }
    }
    .interests-content {
      border-bottom: 1px solid rgba(229, 229, 229, 0.7);
      .big-title {
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: 1.25rem;
        font-size: @h5-font-size;
      }
      .little-title {
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: 1.25rem;
        font-size: @h6-font-size;
      }
      .message {
        width: 100%;
        min-height: 180px;
      }
    }
  }
</style>
