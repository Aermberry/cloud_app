<template>
  <div class="zkui-pc-productshow auto">
    <div class="productshow-top-box">
      <div class="top-box-left">
        <div class="clearfix">
          <div class="goods-info fl">
            <div class="info-box">
              <h1 class="goods-title">
                成恩三个月没洗的袜子
              </h1>
              <div class="goods-prowrap goods-main">
                <div class="clearfix main-box">
                  <dl class="clearfix property-box">
                    <dt class=" property-type">价格</dt>
                    <dd class="property-cont">
                      <span class="price">￥97.10</span>
                    </dd>
                  </dl>
                  <dl class="clearfix property-box">
                    <dt class=" property-type">促销价</dt>
                    <dd class="property-cont property-cont-now">
                      <span class="price">￥68.00</span>
                    </dd>
                    <dd class="property-extra">
                      <span class="mr10">评价：
                        <span class="num">
                          193 </span>
                      </span>
                      <span>累计销量：
                        <span class="num">
                          14823 </span>
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="goods-prowrap goods-im">
                <dl class="clearfix">
                  <dt>客服：</dt>
                  <dd>
                    联系客服
                  </dd>
                </dl>
              </div>
              <div class="goods-prowrap">
                <dl class="clearfix">
                  <dt>颜色</dt>
                  <dd>
                    <el-radio-group v-model="color" size="medium">
                      <el-radio-button label="红色"></el-radio-button>
                      <el-radio-button label="蓝色"></el-radio-button>
                      <el-radio-button label="黄色"></el-radio-button>
                      <el-radio-button label="绿色"></el-radio-button>
                    </el-radio-group>
                  </dd>
                </dl>
              </div>
              <div class="goods-prowrap">
                <dl class="clearfix">
                  <dt>尺寸</dt>
                  <dd>
                    <el-radio-group v-model="size" size="medium">
                      <el-radio-button label="25"></el-radio-button>
                      <el-radio-button label="26"></el-radio-button>
                      <el-radio-button label="27"></el-radio-button>
                      <el-radio-button label="28"></el-radio-button>
                    </el-radio-group>
                  </dd>
                </dl>
              </div>
              <div class="goods-prowrap">
                <dl class="clearfix">
                  <dt>数量</dt>
                  <dd>
                    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                  </dd>
                </dl>
              </div>
              <div class="goods-buy">
                <router-link to="" class="buy-btn buy-now">
                  立即购买
                </router-link>
                <router-link to="" class="buy-btn buy-cart">
                  加入购物车
                </router-link>
              </div>
              <div class="goods-prowrap">
                <dl class="clearfix">
                  <dt>服务承诺</dt>
                  <dd>
                    <ul class="goods-list">
                      <li>
                        <i class="el-icon-edit"></i>
                        退货补运费
                      </li>
                      <li>
                        <i class="el-icon-edit"></i>
                        72小时发货
                      </li>
                      <li>
                        <i class="el-icon-edit"></i>
                        7天无理由退货
                      </li>
                      <li>
                        <i class="el-icon-edit"></i>
                        全国包邮
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div class="goods-prowrap">
                <dl class="clearfix">
                  <dt>服务承诺</dt>
                  <dd>
                    <ul class="goods-pay">
                      <li>
                        <i class="el-icon-edit"></i>
                      </li>
                      <li>
                        <i class="el-icon-edit"></i>
                      </li>
                      <li>
                        <i class="el-icon-edit"></i>
                      </li>
                      <li>
                        <i class="el-icon-edit"></i>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="goods-img fl">
            放大镜
          </div>
        </div>
      </div>
      <div class="top-box-right">
        <div class="goods-recommend">
          <p class="goods-recommend-title">
            <s></s>
            <span>热卖推荐</span>
          </p>
          <div class="list-box">
            <ul>
              <li>
                <router-link to="">
                  <img src="" alt="">
                </router-link>
                <p>￥79.80</p>
              </li>
              <li>
                <router-link to="">
                  <img src="" alt="">
                </router-link>
                <p>￥79.80</p>
              </li>
              <li>
                <router-link to="">
                  <img src="" alt="">
                </router-link>
                <p>￥79.80</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div class="productshow-cneter-box">
      <div class="col-main">
        <div class="tabpanel">
          <div class="tabbar-box">
            <ul class="tabbar-list">
              <li :class="{'active':tabbarList==1}" @click="tabbarFirst()">
                <router-link to="">
                  商品详情
                </router-link>
              </li>
              <li :class="{'active':tabbarList==2}" @click="tabbarSecond()">
                <router-link to="">
                  累计评价
                </router-link>
              </li>
            </ul>
          </div>
          <div class="panel-box">
            <!-- 商品详情 -->
            <div class="particulars" v-if="tabbarList==1">
              <img src="../assets/images/bg/1.jpg" alt="">
            </div>
            <!-- 评论 -->
            <div class="comment " v-if="tabbarList==2">
              <div class="comment-title">
                <h1>买家评价</h1>
              </div>
              <div class="comment-content">
                <h2 class="comment-content-title">
                  全部评论
                </h2>
                <div class="content-item clearfix">
                  <div class="face">
                    <img src="../assets/images/icon/about.png" alt="">
                  </div>
                  <div class="info clearfix">
                    <div class="info-t clearfix">
                      <span class="t-name">杨雨</span>
                      <span class="t-data">2018-3-24</span>
                    </div>
                    <div class="info-w">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore facere neque provident minima! Dolore, repudiandae exercitationem! Dolor maiores quia facilis laudantium totam et quaerat, distinctio suscipit dignissimos, asperiores placeat?
                    </div>
                    <div class="info-b">
                      <ul>
                        <li>颜色：黑色</li>
                        <li>尺寸：S</li>
                      </ul>
                    </div>
                    <div class="info-i">
                      <ul>
                        <!-- <li><img src="../assets/images/icon/addressbook.png" alt=""></li>
                        <li><img src="../assets//images//icon/ball.png" alt=""></li> -->
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="content-item clearfix">
                  <div class="face">
                    <img src="../assets/images/icon/about.png" alt="">
                  </div>
                  <div class="info clearfix">
                    <div class="info-t clearfix">
                      <span class="t-name">杨雨</span>
                      <span class="t-data">2018-3-24</span>
                    </div>
                    <div class="info-w">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore facere neque provident minima! Dolore, repudiandae exercitationem! Dolor maiores quia facilis laudantium totam et quaerat, distinctio suscipit dignissimos, asperiores placeat?
                    </div>
                    <div class="info-b">
                      <ul>
                        <li>颜色：黑色</li>
                        <li>尺寸：S</li>
                      </ul>
                    </div>
                    <div class="info-i">
                      <ul>
                        <!-- <li><img src="../assets/images/icon/addressbook.png" alt=""></li>
                        <li><img src="../assets//images//icon/ball.png" alt=""></li> -->
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="content-item clearfix">
                  <div class="face">
                    <img src="../assets/images/icon/about.png" alt="">
                  </div>
                  <div class="info clearfix">
                    <div class="info-t clearfix">
                      <span class="t-name">杨雨</span>
                      <span class="t-data">2018-3-24</span>
                    </div>
                    <div class="info-w">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore facere neque provident minima! Dolore, repudiandae exercitationem! Dolor maiores quia facilis laudantium totam et quaerat, distinctio suscipit dignissimos, asperiores placeat?
                    </div>
                    <div class="info-b">
                      <ul>
                        <li>颜色：黑色</li>
                        <li>尺寸：S</li>
                      </ul>
                    </div>
                    <div class="info-i">
                      <ul>
                        <!-- <li><img src="../assets/images/icon/addressbook.png" alt=""></li>
                        <li><img src="../assets//images//icon/ball.png" alt=""></li> -->
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sidebar "></div>
      <div class="col-extra ">
        <div class="module-cart">
          <router-link to="">
            <div class="cart-text">
              <i class="el-icon-edit"></i>
              加入购物车
            </div>
          </router-link>
        </div>
        <div class="module-extranav">
          <div class="extranav-list">
            <ul>
              <li class="active">
                <i class="el-icon-caret-right"></i>123</li>
              <li>
                <i class="el-icon-caret-right"></i>456</li>
              <li>
                <i class="el-icon-caret-right"></i>789</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import { } from 'zkui'
  // import { ZkPcFoot } from 'src/pages/widgets/zk-pc-foot'
  // import apiService from 'src/service/api/product.api'
  export default {
    components: {
    },
    mounted () {
    },
    methods: {
      tabbarFirst () {
        this.tabbarList = 1
        console.log(1)
      },
      tabbarSecond () {
        this.tabbarList = 2
        console.log(2)
      }
    },
    data () {
      return {
        color: '蓝色',
        size: '25',
        num1: 1,
        tabbarList: 1
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
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clearfix:after {
    content: '';
    display: table;
    clear: both;
  }
  .zkui-pc-productshow {
    .productshow-top-box {
      background-color: #fff;
      position: relative;
      overflow: hidden;
      margin: 30px 0;
      min-height: 500px;
      .top-box-left {
        position: relative;
        width: 1058px;
        background: #fff;
        z-index: 7;
        overflow: hidden;
        .goods-info {
          width: 100%;
          min-height: 530px;
          .info-box {
            padding: 0 90px 25px 431px;
            overflow: hidden;
            .goods-title {
              font-family: Microsoft YaHei, arial;
              color: #333;
              width: 100%;
              margin-bottom: 15px;
              font-size: 24px;
              line-height: 25px;
              font-weight: bold;
            }
            .goods-im {
              margin-top: 15px;
            }
            .goods-buy {
              padding: 5px 0 20px 60px;
              .buy-btn {
                display: inline-block;
                text-align: center;
                font: 20px Microsoft YaHei;
                color: #fff;
                background: #fff;
                height: 50px;
                line-height: 50px;
                width: 200px;
              }
              .buy-now {
                background: #ef2f23;
                height: 50px;
                line-height: 50px;
              }
              .buy-cart {
                color: #333;
                border: 1px solid #ddd;
              }
            }
          }
          .goods-main {
            border-bottom: 1px solid #f3f3f3;
            border-top: 1px solid #f3f3f3;
            background: @gray-200;
            dl {
              padding-bottom: 0 !important;
            }
            .property-box {
              position: relative;
              .property-type {
                height: 32px;
                line-height: 32px;
              }
              .property-cont {
                font-size: 14px;
                color: #999;
                height: 32px;
                line-height: 32px;
                text-decoration: line-through;
                span {
                  font-size: 14px;
                  color: #999;
                  height: 32px;
                  line-height: 32px;
                }
              }
              .property-cont-now {
                width: 282px;
                height: auto;
                margin-left: -6px;
                .price {
                  color: #ef2f23;
                  font-size: 24px;
                  display: inline-block;
                  vertical-align: middle;
                  font-weight: 700;
                }
              }
              .property-extra {
                position: absolute;
                right: 0;
                bottom: 0;
                line-height: 32px;
                margin-right: 10px;
                color: #999;
                padding-left: 0;
                span {
                  font-size: 12px;
                }
                span.num {
                  color: #333;
                }
                .mr10 {
                  margin-right: 10px !important;
                }
              }
            }
          }
          .goods-list,
          .goods-pay {
            display: flex;
            li {
              margin-right: 15px;
              font-size: 13px;
              i {
                color: @brand;
                font-size: 13px;
              }
            }
          }
        }
        .goods-info .goods-prowrap dl {
          min-height: 20px;
          padding-left: 10px;
          padding-bottom: 15px;
          position: relative;
        }
        .goods-info .goods-prowrap dt {
          color: #999;
          float: left;
          font-size: 12px;
        }
        .goods-info .goods-prowrap dd {
          padding-left: 60px;
          font-size: 13px;
          .el-radio-button--medium .el-radio-button__inner {
            padding: 5px 10px;
          }
          .el-input-number__decrease,
          .el-input-number__increase {
            height: 30px;
            background: transparent;
          }
          .el-input__inner {
            height: 30px;
          }
          .el-input-number__increase,
          .el-input-number__decrease {
            i {
              font-size: 16px;
            }
          }
        }
        .goods-img {
          margin-left: -100%;
          width: 400px;
          min-height: 400px;
          border: 1px solid #e5e5e5;
          overflow: hidden;
        }
      }
      .top-box-right {
        position: absolute;
        left: 100%;
        top: 0;
        z-index: 6;
        overflow: hidden;
        border-left: 1px solid #eee;
        padding-left: 20px;
        margin-left: -140px;
        min-height: 500px;
        width: 140px;
        .goods-recommend {
          width: 100%;
          p.goods-recommend-title {
            color: @tab-text-default-color;
            height: 14px;
            line-height: 14px;
            margin-bottom: 10px;
            width: 100%;
            position: relative;
            text-align: center;
            s {
              position: absolute;
              top: 7px;
              margin-left: -50%;
              width: 100%;
              height: 0;
              border-top: 1px solid #eee;
              text-decoration: none;
            }
            span {
              font-size: 16px;
              color: #999;
              text-align: center;
              width: 6em;
              top: 0;
              left: 50%;
              margin-left: -3em;
              background-color: #fff;
              position: absolute;
            }
          }
          .list-box {
            height: 500px;
            overflow: hidden;
            width: 120px;
            position: relative;
            ul {
              li {
                margin-bottom: 11px;
                a {
                  display: block;
                  width: 120px;
                  height: 120px;
                  overflow: hidden;
                }
                p {
                  font-size: 14px;
                  margin-top: 5px;
                  color: @black;
                  display: block;
                  width: 100%;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
    .productshow-cneter-box {
      position: relative;
      .col-main {
        width: 100%;
        min-height: 300px;
        padding-left: 220px;
        .tabpanel {
          width: 740px;

          min-height: 300px;
          border: 1px solid #e5e5e5;
          .tabbar-box {
            width: 100%;
            height: 58px;
            background: #f6f6f6;
            border-bottom: 1px solid #e5e5e5;
            ul.tabbar-list {
              li {
                float: left;
                width: 149px;
                height: 58px;
                border-right: 1px solid #e5e5e5;
                font-size: 0;
                a {
                  display: block;
                  border-top: 4px solid #f6f6f6;
                  line-height: 54px;
                  font-family: Microsoft YaHei\, arial;
                  font-size: 16px;
                  color: #333;
                  text-align: center;
                }
              }
              li.active a {
                border-top: 4px solid #ef2f23;
                border-bottom: 1px solid #fff;
                background: #fff;
              }
            }
          }
          .panel-box {
            width: 100%;
            padding-bottom: 20px;
            .particulars {
              img {
                width: 100%;
                height: auto;
              }
            }
            .comment {
              overflow: hidden;
              padding-left: 19px;
              padding-right: 19px;
              .comment-title {
                overflow: hidden;
                padding: 40px 0 20px;
                h1 {
                  float: left;
                  line-height: 18px;
                  padding-bottom: 4px;
                  border-bottom: 1px solid #333;
                  color: #333;
                  font-size: 18px;
                  font-weight: @font-weight-bold;
                  font-family: Microsoft YaHei\, arial;
                }
              }
              .comment-content {
                .comment-content-title {
                  padding: 20px 0;
                  color: #333;
                  font-weight: 700;
                  font-size: 12px;
                }
                .content-item {
                  margin-bottom: 30px;
                  padding-left: 40px;
                  position: relative;
                  .face {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40px;
                    height: 40px;
                    img {
                      display: block;
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .info {
                    min-height: 100px;
                    padding-left: 20px;
                    .info-t {
                      margin-bottom: 4px;
                      .t-name {
                        font-size: 14px;
                        color: #333;
                        float: left;
                        margin-right: 5px;
                      }
                      .t-data {
                        color: #999;
                        float: right;
                        font-size: 14px;
                      }
                    }
                    .info-w {
                      word-break: break-all;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                      overflow: hidden;
                      font-size: 14px;
                      color: #666;
                      margin-bottom: 4px;
                      line-height: 18px;
                    }
                    .info-b {
                      ul {
                        display: flex;
                        li {
                          margin-right: 40px;
                          color: @cell-value-color;
                          font-size: 13px;
                        }
                      }
                    }
                    .info-i {
                      margin-top: 7px;
                      ul {
                        display: flex;
                        li {
                          width: 100px;
                          height: auto;
                          margin-right: 10px;
                          padding-bottom: 10px;
                          img {
                            display: block;
                            width: 100%;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .col-sidebar {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        min-height: 300px;
        border: 1px solid #e5e5e5;
      }
      .col-extra {
        position: absolute;
        top: 0;
        right: 0;
        width: 240px;
        min-height: 300px;
        border-top: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        .module-cart {
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #e5e5e5;
          a {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            .cart-text {
              width: 100%;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              text-align: center;
              color: #333;
              font-size: 20px;
              i {
                color: #333;
                font-size: 20px;
              }
            }
          }
        }
        .module-extranav {
          .extranav-list {
            width: 204px;
            margin: 15px 18px 0;
            min-height: 100px;
            ul {
              li {
                height: 30px;
                line-height: 30px;
                margin: 7px 0;
                cursor: pointer;
                color: #666;
                font-size: 14px;
                font-family: Microsoft YaHei\, arial;
                text-align: center;
                i {
                  color: #666;
                  font-size: 14px;
                }
              }
              li.active {
                border-bottom: 3px solid @brand;
                color: @black;
                font-weight: @font-weight-bold;
                i {
                  color: @brand;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
