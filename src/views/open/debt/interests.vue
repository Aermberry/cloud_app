<template>
  <section class="zkui-interests">
    <zk-head title='会员权益'></zk-head>
    <div class="interests-top">
      <div class="content" v-if="showV===1">
        <img src="../../../assets/images/debticon/创客.png" alt="">
        <p>你当前是创客会员</p>
      </div>
      <div class="content" v-if="showV===2">
        <img src="../../../assets/images/debticon/平债士图标.png" alt="">
        <p>你当前是平债士会员</p>
      </div>
      <div class="content" v-if="showV===3">
        <img src="../../../assets/images/debticon/高级平债士.png" alt="">
        <p>你当前是高级平债士会员</p>
      </div>
    </div>
    <div class="interests-class">
      <ul>
        <li @click="clickShow(1)">
          <img src="../../../assets/images/debticon/创客.png" alt="">
        </li>
        <li @click="clickShow(2)">
          <img src="../../../assets/images/debticon/平债士图标.png" alt="">
        </li>
        <li @click="clickShow(3)">
          <img src="../../../assets/images/debticon/高级平债士.png" alt="">
        </li>
      </ul>
    </div>
    <div class="interests-box" v-if="showV===1">
      <div class="interests-content">
        <h2 class="big-title">会员权益</h2>
        <div class="message">
          <ul>
            <li>1.免费注册.</li>
            <li>2.赠送云债金400元</li>
            <li>3.云债金抵现率约30%，不可提现</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">分享资格</h2>
        <div class="message">
          <ul>
            <li>1.分享会员。</li>
            <li>2.奖励云债金100元</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">解债资格</h2>
        <div class="message">
          <ul>
            <li>1.帮朋友解债</li>
            <li>2.解债业绩津贴5%</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="interests-box" v-if="showV===2">
      <div class="interests-content">
        <h2 class="big-title">会员权益</h2>
        <div class="message">
          <ul>
            <li>1.1.平债士专区累计消费满999元</li>
            <li>2.获等价资产包套餐五选一</li>
            <li>3.赠送平债士市场分享资格</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">分享资格</h2>
        <div class="message">
          <ul>
            <li>1.分享会员、平债士、高级平债士</li>
            <li>2.直接部门创业津贴7%</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">解债资格</h2>
        <div class="message">
          <ul>
            <li>1.帮朋友解债</li>
            <li>2.直接部门解债业绩津贴7%</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">管理津贴资格</h2>
        <div class="message">
          <ul>
            <li>1、直接管理部门创业津贴和解债业绩津贴加总的37%
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="interests-box" v-if="showV===3">
      <div class="interests-content">
        <h2 class="big-title">会员权益</h2>
        <div class="message">
          <ul>
            <li>1.在高级平债士专区累计消费满2999元</li>
            <li>2.获等价资产包套餐五选一</li>
            <li>3.赠送高级平债士市场分享资格</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">分享资格</h2>
        <div class="message">
          <ul>
            <li>1.分享会员、平债士、高级平债士</li>
            <li>2.直接部门创业津贴17%</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">解债资格</h2>
        <div class="message">
          <ul>
            <li>1.帮朋友解债</li>
            <li>2.直部门解债业绩津贴17%</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">管理津贴资格</h2>
        <div class="message">
          <ul>
            <li>1.直接管理部门创业津贴和解债业绩津贴加总的37%</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">引荐资格</h2>
        <div class="message">
          <ul>
            <li>1.优质供应商进驻2%</li>
            <li>2.合伙人引荐10～20%</li>
          </ul>
        </div>
      </div>
      <div class="interests-content">
        <h2 class="big-title">晋升资格</h2>
        <div class="message">
          <ul>
            <li>1.晋升经理的资格</li>
            <li>2.加盟合伙人的资格</li>
            <li>3.直通大区总裁的资格</li>
          </ul>
        </div>
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
        showV: 1
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
      },
      clickShow (value) {
        this.showV = value
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
        padding: 1.25rem;
        ul {
          li {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
</style>
