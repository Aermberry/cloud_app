<template>
  <div>
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
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3">处理中心</el-menu-item>
            <el-menu-item index="4">处理中心</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="zkui-pc-slideshow ">
      <div class="auto">
        <div class="block">
          <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- item -->
    <div class="zkui-pc-itembox">
      <div class="auto">
        <div class="item-title">
          <span>买买买</span>
          <h3>热卖推荐</h3>
        </div>
        <div class="item-content">
          <div class="auto">
            <div class="item-content-details " v-for="item  in 50" :key="item">
              <router-link to="" class="details-img">
                <img src="" alt="">
              </router-link>
              <div class="details-part">
                <p>￥169.00</p>
                <div class="details-collect">
                  <i class="el-icon-edit"></i>147</div>
              </div>
              <router-link to="" class="details-title">
                <i class="el-icon-edit"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minima totam amet eligendi, quasi voluptates esse ut soluta cumque labore. Delectus ducimus pariatur corrupti necessitatibus aut assumenda fuga optio voluptatum?
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="zkui-pc_foot">
      <div class="auto">
        <div class="foot-top">
          <div class="foot-top-left">
            <el-row>
              <el-col :span="6">
                <div>
                  <h4 class="foot-top-left-title">
                    买家帮助
                  </h4>
                  <ul class="foot-top-left-content">
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="6">
                <div>
                  <h4 class="foot-top-left-title">
                    买家帮助
                  </h4>
                  <ul class="foot-top-left-content">
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="6">
                <div>
                  <h4 class="foot-top-left-title">
                    买家帮助
                  </h4>
                  <ul class="foot-top-left-content">
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="6">
                <div>
                  <h4 class="foot-top-left-title">
                    买家帮助
                  </h4>
                  <ul class="foot-top-left-content">
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        新手指南
                      </router-link>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="foot-top-right">
            <el-row>
              <el-col :span="12">
                <div>
                  <h4>刘成恩</h4>
                  <img src="" alt="">
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <h4>刘成恩</h4>
                  <img src="" alt="">
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="foot-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam magnam fugit at officiis dolor dolorum facilis veritatis quod quam! Modi commodi rem dolor incidunt aliquid itaque cumque veritatis libero.
        </div>
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
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    data () {
      return {
        activeIndex: '1'
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
  .zkui-pc-slideshow {
    height: 400px;
    margin-bottom: 40px;
    .auto {
      height: 400px;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
  }
  .zkui-pc-itembox:after {
    content: '';
    display: block;
    clear: both;
  }
  .zkui-pc-itembox {
    margin-bottom: 40px;
    .item-title {
      margin-bottom: 10px;
      span {
        float: right;
        margin-top: 5px;
        font-size: 13px;
      }
      h3 {
        font-size: 20px;
        font-weight: @font-weight-bold;
        color: @brand;
      }
    }
    .item-content {
      width: 224px;
      .item-content-details {
        float: left;
        width: 224px;
        margin-right: 16px;
        margin-bottom: 16px;
        .details-img {
          display: block;
          width: 100%;
          height: 340px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .details-part {
          margin-top: 5px;
          height: 30px;
          line-height: 30px;
          position: relative;
          p {
            font-size: 16px;
            color: @brand;
            margin-right: 2px;
            font-family: Helvetica;
          }
          .details-collect {
            position: absolute;
            top: 2px;
            right: 5px;
            line-height: 14px;
            font-size: 14px;
            margin-top: 6px;
            margin-left: 3px;
            color: #999;
            i {
              font-size: 14px;
            }
          }
        }
        .details-title {
          display: block;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 5px;
          color: @tab-text-default-color;
          i {
            font-size: 14px;
          }
        }
      }
    }
  }
  .zkui-pc_foot {
    margin-top: 15px;
    padding-top: 30px;
    min-height: 150px;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    font-size: 12px;
    color: #666;
    .foot-top {
      display: flex;
      .foot-top-left {
        width: 70%;
        .foot-top-left-title {
          font-size: 18px;
          font-weight: @font-weight-bold;
          margin-bottom: 10px;
        }
        .foot-top-left-content {
          li {
            margin-bottom: 10px;
            a {
              display: block;
              font-size: 14px;
              color: @tab-text-default-color;
            }
            a:hover {
              color: @brand;
            }
          }
        }
      }
      .foot-top-right {
        width: 40%;
        h4 {
          font-size: 18px;
          font-weight: @font-weight-bold;
          margin-bottom: 10px;
          text-align: center;
        }
        img {
          display: block;
          width: 150px;
          height: 150px;
          margin: 0 auto;
        }
      }
    }
    .foot-bottom {
      border-top: 1px solid #e6e6e6;
      line-height: 22px;
      padding: 12px 192px;
      text-align: center;
      font-size: 13px;
    }
  }
</style>
