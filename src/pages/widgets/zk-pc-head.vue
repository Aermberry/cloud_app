<template>

    <!-- 头部 -->
    <div class="zkui-pc_head">
      <div class="zkui-pc-head-top ">
        <div class="auto">
          <ul>
            <li class="gohome">
              <router-link to="">
                <i class="el-icon-edit"></i>
                成恩
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                会员中心
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                会员中心
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                会员中心
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                登陆
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="zkui-pc_head-center">
        <div class="auto">
          <router-link to="" class="head_logo"></router-link>
          <div class="head_search">
            <div class="head_search-top">
              <span class="active">宝贝</span>
            </div>
            <div class="head_search-box">
              <input type="text" class="input-txt">
              <div class="search-btn">
                <i class="el-icon-search"></i>
              </div>
            </div>
            <ul class="head_search-hotword">
              <li>
                <router-link to="">成恩的鞋</router-link>
              </li>
              <li>
                <router-link to="">成恩的鞋</router-link>
              </li>
              <li>
                <router-link to="">成恩的鞋</router-link>
              </li>
            </ul>
          </div>
          <div class="head_img">
            <img src="" alt="">
          </div>
        </div>
      </div>
      <div class="zkui-pc_head-bottom">
        <div class="auto">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!-- <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3">处理中心</el-menu-item>
            <el-menu-item index="4">处理中心</el-menu-item> -->
                        <el-menu-item index="3">首页</el-menu-item>
            <el-menu-item v-for="(item,index) in option" :key="index" :index="index">
              {{item.name}}
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
</template>
<script>
  import { } from 'zkui'
  export default {
    components: {
    },
    mounted () {
    },
    methods: {
    },
    data () {
      return {
      }
    },
    watch: {
    }
  }
</script>
<style lang="less">
  .auto {
    margin: 0 auto;
    width: 1200px;
  }
  .zkui-pc_head {
    .zkui-pc-head-top {
      height: 30px;
      background-color: #f8f8f8;
      line-height: 30px;
      ul {
        height: 30px;
        text-align: right;
        display: flex;
        li {
          text-align: center;
          height: 100%;
          a {
            height: 20px;
            margin-top: 5px;
            line-height: 20px;
            display: block;
            font-size: 13px;
            padding: 0 18px;
            border-right: 1px dotted #ccc;
            color: @tab-text-default-color;
            i {
              font-size: 13px;
            }
          }
          a:hover {
            color: @brand;
          }
        }
        li:last-child {
          a {
            border: none;
          }
        }
        li.gohome {
          flex: 1;
          text-align: left;
          a {
            border: none;
          }
        }
      }
    }
    .zkui-pc_head-center {
      position: relative;
      .auto {
        height: 150px;
        .head_logo {
          float: left;
          width: 204px;
          height: 52px;
          background-size: 100%;
          margin-top: 40px;
        }
        .head_search {
          width: 520px;
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translate(-50%, 0);
          .head_search-top {
            display: flex;
            span {
              display: inline-block;
              text-align: center;
              width: 56px;
              background-color: #f2f2f2;
              line-height: 24px;
              cursor: pointer;
              font-size: 13px;
            }
            span.active {
              background-color: @brand;
              color: #fff;
            }
          }
          .head_search-box {
            height: 30px;
            .input-txt {
              float: left;
              border: 2px solid @brand;
              width: 437px;
              line-height: 30px;
              height: 30px;
              margin: 0;
              padding: 0 0 0 8px;
              font-size: 13px;
              color: @black;
              outline: 0;
            }
            .search-btn {
              float: left;
              width: 70px;
              height: 30px;
              line-height: 30px;
              cursor: pointer;
              font-size: 20px;
              text-align: center;
              background: @brand;
              i {
                font-size: 20px;
                color: @white;
              }
            }
          }
        }
        .head_search-hotword {
          display: flex;
          padding-top: 10px;
          height: 35px;
          li {
            padding-right: 10px;
            a {
              display: block;
              font-size: 13px;
              color: @brand;
            }
          }
        }
        .head_img {
          float: right;
          width: 150px;
          height: 150px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .zkui-pc_head-bottom {
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 10px;
      .auto {
      }
      .el-menu-item {
        font-weight: @font-weight-bold;
        font-size: 16px;
      }
      .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: 2px solid @brand;
        color: @brand;
      }
    }
  }
</style>
