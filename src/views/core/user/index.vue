<template>
  <section class="zkui-core-user">
    <div class="zkui-head-bg">
      <img :src="topImg" alt="">
    </div>
    <div class="zkui-core-user-head">
      <div class="head-top">
        <m-icon name="zk-setting" class="icon-light" size="2rem" link="/user/info"></m-icon>
        <m-icon name="zk-security" class="icon-light" size="2rem" link="/user/security"></m-icon>
      </div>
      <router-link class="head-info" to="login">
        <div class="portrait">
          <img :src="userInfo.img" alt="portrait">
        </div>
        <div class="personal-info">
          <div class="name" href="javascript:;">{{userInfo.userName}}
            <div class="level-icon">
              <img src="../../../assets/images/icon/level-1.png" alt="level">
            </div>
          </div>
          <a class="info" href="/user/login">{{userInfo.gradeName}}</a>
        </div>
      </router-link>
    </div>

    <group class="zkui-user-order-title">
      <cell title="我的订单" link="/order/list" value="查看全部"></cell>
    </group>
    <zk-grid diykey="grid_user_order_nav" class="icon-brand zkui-grid zkui-grid-border__none border-bottom"></zk-grid>

    <zk-grid diykey="grid_user_index_nav" class="icon-metal zkui-grid zkui-grid-border__none mt-2 border"></zk-grid>

    <zk-cell diykey="cell_user_index" class="mb-2"></zk-cell>
    <zk-foot></zk-foot>
  </section>
</template>
<script>
  import apiService from 'src/service/api/diy.api'
  import userService from 'src/service/api/user.api'
  import { ZkCell, ZkGrid } from 'widgets'
  import { MIcon, Grid, GridItem, Cell, Group } from 'zkui'
  export default {
    components: {
      ZkCell,
      MIcon,
      Grid,
      Cell,
      Group,
      ZkGrid,
      GridItem,
      data: ''
    },
    data () {
      return {
        userInfo: {
          userName: '',
          gradeName: '登陆后享受更多服务',
          img: '',
          imgData: '',
          topImg: ''
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
      },
      async GetData () {
        var reponse = await userService.view(this.data)
        console.log(reponse)
        this.userInfo.userName = reponse.data.result.userName
        this.userInfo.gradeName = reponse.data.result.gradeName
        this.userInfo.img = reponse.data.result.avator
      }
    }
  }
</script>
<style scoped  lang="less">
  @import '../../../assets/css/zkui/theme';
  .zkui-core-user {
    background: #f8f8f8;
    img {
      width: 100%;
      height: 100%;
    }
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
        height: 45*@rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        .portrait {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          border: 0.1rem solid #fff;
          margin: 0 0.5rem;
          overflow: hidden;
          background: #f8f8f8;
        }
        .personal-info {
          .name {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            color: #fff;
            .level-icon {
              width: 0.5rem;
              height: 0.5rem;
              margin-left: 0.3rem;
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

    .zkui-user-order-title {
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
  }
</style>
