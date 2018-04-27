<template>
  <section class="zkui-core-user-debt">
    <div class="zkui-head-bg">
      <img :src="topImg" alt="">
    </div>
    <div class="zkui-core-user-head">
      <router-link to="/user/interests" class="interests">
        权益中心
        <m-icon name="arrows-right"></m-icon>
      </router-link>
      <!-- <div class="head-top">
        <m-icon name="zk-setting" class="icon-light" size="2rem" link="/user/info"></m-icon>
        <m-icon name="zk-security" class="icon-light" size="2rem" link="/user/security"></m-icon>
      </div> -->
      <!-- <router-link class="head-info" to="login"> -->
      <div class="head-info">
        <div class="portrait">
          <img :src="userInfo.img" alt="portrait">
        </div>
        <div class="personal-info">
          <div class="name" href="javascript:;">{{userInfo.userName}}
            <div class="level-icon">
              <img src="../../../assets/images/icon/level-1.png" alt="level">
            </div>
            <div class="grade"><img :src="userInfo.gradeIcon" alt="">{{userInfo.gradeName}}</div>
          </div>
          <!-- <p class="info">{{userInfo.gradeName}}</p> -->
          <!-- <a class="info" href="/user/login">{{userInfo.gradeName}}</a> -->
        </div>
      </div>
      <!-- </router-link> -->
    </div>
    <!-- <group class="zkui-user-order-title">
      <cell title="我的订单" link="/order/list" value="查看全部"></cell>
    </group>
    <zk-grid diykey="grid_user_order_nav" class="icon-brand zkui-grid zkui-grid-border__none border-bottom"></zk-grid> -->
    <group class="zkui-user-order-title">
      <cell title="债事订单" link="/user/debt/manage" value="查看全部"></cell>
    </group>
    <div class="debtindex-item">
      <div class="weui-grids icon-brand zkui-grid zkui-grid-border__none border-bottom">
        <router-link to="/user/debt/manage?id=1" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/待审核.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>待审核</span>
          </p>
        </router-link>
        <router-link to="/user/debt/manage?id=2" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/待出方案.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>待出方案</span>
          </p>
        </router-link>
        <!-- <router-link class="weui-grid" style="width: 20%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/待选方案.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>待选方案</span>
          </p>
        </router-link> -->
        <router-link to="/user/debt/manage?id=3" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/待定方案.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>待定方案</span>
          </p>
        </router-link>
        <router-link to="/user/debt/manage?id=4" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/待评价.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>待评价</span>
          </p>
        </router-link>
      </div>
    </div>
    <group class="zkui-user-order-title">
      <cell title="我的订单" link="/order/list" value="查看全部"></cell>
    </group>
    <zk-grid diykey="grid_user_order_nav" class="icon-brand zkui-grid zkui-grid-border__none border-bottom"></zk-grid>
    <div class="debtindex-item">
      <div class="weui-grids icon-metal zkui-grid zkui-grid-border__none mt-2 border">
        <router-link to="/user/recuser" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/事业部门.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>事业部门</span>
          </p>
        </router-link>
        <router-link to="/user/account/index" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/我的钱包.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>我的钱包</span>
          </p>
        </router-link>
        <router-link to="/identity/index" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/实名认证.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>实名认证</span>
          </p>
        </router-link>
        <router-link to="/" class="weui-grid" style="width: 25%;">
          <div class="weui-grid__icon">
            <img src="../../../assets/images/debticon/联系小云.png" alt="">
          </div>
          <p class="weui-grid__label">
            <span>联系小云</span>
          </p>
        </router-link>
      </div>
    </div>
    <group>
      <cell title="系统设置" is-link link="/user/info">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/debticon/系统设置.png">
      </cell>
      <cell title="安全中心" is-link link="/user/security">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/debticon/安全中心.png">
      </cell>
      <!-- <cell title="活动大厅" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/debticon/活动大厅.png">
      </cell> -->
      <!-- <cell title="信用报告" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/debticon/信用报告.png">
      </cell> -->
      <cell title="工单反馈" is-link link="/help/feedback">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/debticon/工单反馈.png">
      </cell>
      <cell title="点我分享" is-link link="/user/qrcode">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/debticon/点我分享.png">
      </cell>
      <cell title="创客注册" is-link link="/user/adduser">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/debticon/创客注册.png">
      </cell>
    </group>
    <div class="quit-login">
      <x-button type="primary" link="/user/logout">退出登陆</x-button>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import apiService from 'src/service/api/diy.api'
  import userService from 'src/service/api/user.api'
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
        userInfo: {
          userName: '',
          gradeName: '登陆后享受更多服务',
          img: '',
          imgData: '',
          topImg: '',
          gradeIcon: ''
        }
      }
    },
    created () {
      this.ceshi()
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async ceshi () {
        var response2 = await apiService.getLink('SingleAd2Config')
        this.imgData = response2.data.result
        this.topImg = this.imgData[0].imageUrl
        console.log(this.topImg)
      },
      async GetData () {
        var reponse = await userService.view(this.data)
        this.userInfo.userName = reponse.data.result.userName
        this.userInfo.gradeName = reponse.data.result.gradeName
        this.userInfo.gradeIcon = reponse.data.result.gradeIcon
        this.userInfo.img = reponse.data.result.avator
      }
    }
  }
</script>
<style   lang="less">
  @import '../../../assets/css/zkui/theme';
  .zkui-core-user-debt {
    background: #f8f8f8;
    .zkui-head-bg {
      width: 100%;
      height: 85*@rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 95;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .zkui-core-user-head {
      // background: @brand;
      position: relative;
      height: 85*@rem;
      z-index: 99;
      .interests {
        display: block;
        position: absolute;
        bottom: 1rem;
        right: 0;
        height: 1.5rem;
        width: 5.5rem;
        background: @brand;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        line-height: 1.5rem;
        padding-left: 5px;
        color: @white;
        font-size: @h6-font-size;
        svg {
          width: 1rem;
          height: 1rem;
          position: absolute;
          right: 5px;
          top: 0.25rem;
        }
      }
      .head-top {
        width: 100%;
        height: 30*@rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        svg {
          float: left;
          margin-right: 0.5rem;
          width: 1.5rem;
        }
      }
      .head-info {
        width: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        .portrait {
          width: 80*@rem;
          height: 80*@rem;
          border-radius: 50%;
          border: 0.1rem solid #fff;
          margin: 0 0.5rem;
          overflow: hidden;
          background: #f8f8f8;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .personal-info {
          .name {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            color: #fff;
            font-size: @h4-font-size;
            .level-icon {
              width: 0.5rem;
              height: 0.5rem;
              margin-left: 0.3rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .grade {
              font-size: @h5-font-size;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              img {
                width: 1.5rem;
                height: 1.5rem;
              }
            }
          }
          .info {
            color: #fff;
            position: relative;
            &:after {
              // content: ' ';
              // display: inline-block;
              // height: 0.4286rem;
              // width: 0.4286rem;
              // border-width: 2px 2px 0 0;
              // border-color: #fff;
              // border-style: solid;
              // transform: rotate(45deg);
              // position: absolute;
              // top: 50%;
              // margin-top: -4*@rem;
              // right: -0.5rem;
            }
          }
        }
      }
    }
    .debtindex-item {
      .weui-grid__label {
        span {
          font-size: 0.8rem;
        }
      }
    }
    .zkui-user-order-title {
      .weui-cell__ft {
        background: @brand;
        border-radius: 10px;
        padding: 1px 17px;
        color: @white;
      }
      .weui-cells {
        margin-top: 0rem;
        &:before {
          border-top: none;
        }
        .weui-cell {
          padding: 5*@rem 10*@rem;
        }
      }
    }
    .quit-login {
      padding: 3rem 1rem;
      button {
        height: 3rem;
      }
    }
  }
</style>
