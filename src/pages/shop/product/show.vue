<template>
  <div class="zkui-pc-productshow contain">
    <header class="productshow-top-box">
      <div class="nav">
        <div class="wrap contain">
          <a href="#" class="l-logo ">
            <span class="el-icon-goods"></span>
            <span>匠芯首页</span>
          </a>
          <ul>
            <li>
              <a href="#" class="login">
                登陆
              </a>
            </li>
            <li>
              <a href="#">
                <span class="el-icon-tickets"></span>
                <span>我的订单</span>
              </a>
            </li>
            <li>
              <a href="#" class="el-icon-edit">
                <el-dropdown :hide-on-click="false">
                  <span class="el-dropdown-link">购物车
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="el-dropdown-item">消费者服务</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </a>
            </li>
            <li>
              <a href="#">
                <el-dropdown :hide-on-click="false">
                  <span class="el-dropdown-link">客户服务
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="el-dropdown-item">消费者服务</el-dropdown-item>
                    <el-dropdown-item class="el-dropdown-item">商家服务</el-dropdown-item>
                    <el-dropdown-item class="el-dropdown-item">规则中心</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="el-icon-loading"></span>
                <el-dropdown :hide-on-click="false">
                  <span class="el-dropdown-link">商家后台
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="el-dropdown-item">管理后台</el-dropdown-item>
                    <el-dropdown-item class="el-dropdown-item">商家社区</el-dropdown-item>
                    <el-dropdown-item class="el-dropdown-item">商家培训</el-dropdown-item>
                    <el-dropdown-item divided class="el-dropdown-item">市场入驻</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="zkui-shop-info-product-search">
        <div class="shop-info-box contain">
          <div class="user-info-box">
            <a href="#" class="avater">
              <img src="../../../assets/images/icon/me.png" alt="" class="face">
            </a>
            <div class="name-score-wrap m_l10">
              <div class="name-wrap">
                <a href="#" title="哈哈笑" class="name">哈哈笑</a>
              </div>
              <div class="score-wrap">
                <p class="star"></p>
                <p class="descript">
                  <span class="cat">
                    描述
                    <b class="m_r10">4.84</b>
                  </span>
                  <span class="cat">
                    质量
                    <b class="m_r10">4.85</b>
                  </span>
                  <span class="cat">
                    服务
                    <b>4.90</b>
                  </span>
                </p>
              </div>
            </div>
            <div class="J-shop-user-info-detail">
              <div class="info-box">
                <div class="box">
                  <li>
                    <span>所在地区：</span>广东省广州市</li>
                  <li>
                    <span>商品数：</span>371</li>
                  <li>
                    <span>收藏数：</span>15439</li>
                  <li>
                    <span>销售量：</span>82018</li>
                  <li>
                    <span>创建时间日期:</span>
                    2015年08月17日
                  </li>
                  <li>
                    <span>店铺保证金：</span>已缴纳</li>
                  <li class="detail_img"><img src="../../../assets/images/bg/1.jpg" alt=""></li>
                  <li class="detail_go_a">
                    <a href="#" class="detail_go">查看详情</a>
                  </li>
                </div>
              </div>
              <div class="info-box">
                <div class="Bbox">
                  <div class="box">
                    <li>动态评分</li>
                    <li>描述相符：
                      <span>4.78</span>
                    </li>
                    <li>
                      质量满意：
                      <span>4.79</span>
                    </li>
                    <li>
                      服务周到：
                      <span>4.85</span>
                    </li>
                  </div>
                  <div class="box">
                    <li>比同行平均</li>
                    <li>
                      <span>高</span>
                      1.84%</li>
                    <li>
                      <span>高</span>
                      1.98%</li>
                    <li>
                      <span>高</span>
                      3.27%</li>
                  </div>
                </div>
                <div class="Bbox">
                  <div class="box">
                    <li>本店</li>
                    <li>
                      平均发货时间：
                      <span>0.77</span>
                      天</li>
                    <li>
                      退货率：
                      <span>8.53%</span>
                      天</li>
                    <li>
                      有效投诉：
                      <span>0.00%</span>
                      天</li>
                  </div>
                  <div class="box">
                    <li>行业</li>
                    <li>1.11天</li>
                    <li>5.54%</li>
                    <li>0.03%</li>
                  </div>
                </div>
              </div>
            </div>
            <div class="shop-header-action">
              <a href="javscript:void(0)" class="el-icon-circle-plus-outline">收藏店铺</a>
              <a href="javscript:void(0)" class="el-icon-phone-outline">
                私聊</a>
            </div>
          </div>
          <div class="shop-search">
            <div class="top_nav_search">
              <form class="search_inner_box" action="#">
                <input type="text" class="ts_txt" placeholder="连衣裙">
                <input type="submit" value="搜全站" class="ts_btn">
              </form>
              <input type="text" value="搜本店" class="searchInShop m_l10">
            </div>
          </div>
        </div>
      </div>
    </header>

    <body>

    </body>
    <footer>

    </footer>

  </div>
</template>
<script>

</script>
/*  element组件无法修改时，另写一个样式 */
<style lang="less">
  .el-dropdown-menu {
    .el-dropdown-item {
      color: lighten(@metal, 10%);
      font-size: 12px;
    }
  }
</style>


<style lang="less" scoped>
  // Public style
  .f_left {
    float: left;
  }

  .f_right {
    float: right;
  }
  .m_l10 {
    margin-left: 10px;
  }

  .m_r10 {
    margin-right: 10px;
  }

  .m_t10 {
    margin-top: 10px;
  }

  .m_b10 {
    margin-bottom: 10px;
  }

  .contain {
    margin: 0 auto;
  }

  // Private style

  .zkui-pc-productshow {
    max-width: 100%;
    min-width: 800px;
    .nav {
      position: relative;
      z-index: 100;
      height: auto;
      width: 100%;
      border-bottom: 1px solid lighten(@gray-600, 40%);
      box-shadow: 0 0 60px 10px lighten(@gray-600, 48%);
    }
    header {
      background-color: #f2f2f2;
      .wrap {
        // background-color: yellowgreen;
        position: relative;
        height: 30px;
        max-width: 90%;
        min-width: 60%;
        .l-logo {
          text-align: center;
          line-height: 30px;
          height: 30px;
          width: 100px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          span {
            font-size: 12px;
          }
          span:first-child {
            line-height: 30px;
            flex-basis: 26px;
          }

        }
        ul {
          position: absolute;
          right: 10px;
          top: 0;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          width: auto;

          li {
            height: 100%;
            a {
              border-right: 1px solid #eeeeee;
              padding: 0 20px;
              line-height: 9px;
              height: auto;
              display: block;
              font-size: 12px;
              margin-top: 10px;
              span {
                font-size: 12px !important;
              }

              .el-dropdown-link {
                cursor: pointer;
                color: #586c94;
                .el-icon-arrow-down {
                  font-size: 12px;
                }
              }
            }

            .login {
            padding-right: 10px;
            border-right: 1px solid #ccc;
          }
            a:last-child {
              border: none;
            }
          }
        }
      }
    }

    .zkui-shop-info-product-search {
      padding-top: 16px;
      background-color: #ffffff;
      padding-left: 30px;
      height: auto;
      .shop-info-box {
        // background-color: red;
        height: 83px;
        max-width: 90%;
        min-width: 60%;
        width: percentage(1);
        display: flex;
        justify-content: space-around;
        flex-flow: row nowrap;
        line-height: 83px;

        .user-info-box {
          width: 50%;
          display: flex;
          padding-right: 30px;
          .avater {
            display: block;
            height: 100%;
            .face {
              align: bottom;
              background-color: #000000;
              border: 1px solid #e0e0e0;
              box-shadow: 0 0 2px 3px #ababab inset;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: block;
              vertical-align: bottom;
            }
          }
          .name-score-wrap {
            height: percentage(1);
            .name-wrap {
              display: flex;
              width: 100%;
              height: 20px;
              line-height: 20px;
              overflow: hidden;
              // background-color: #ff0000;
              .name {
                height: 100%;
                display: block;
                font-size: 12px;
                font-weight: bolder;
              }
            }

            .score-wrap {
              .star {
              }
              .descript {
                height: 63px;
                display: flex;
                .cat {
                  width: 58px;
                  height: 14px;
                  font-size: 12px;
                  // background-color: #804000;
                  b {
                    font-size: 12px;
                    color: @danger;
                  }
                }
              }
            }
          }
          position: relative;
          .J-shop-user-info-detail {
            // display: none;
            visibility: hidden;
            padding-top: 10px;
            background: lighten(@brand, 50%);
            width: 505px;
            height: 259px;
            position: absolute;
            // opacity: 0.5;
            top: 83px;
            left: 0;
            display: flex;
            .info-box {
              display: flex;
              width: 240px;
              overflow: hidden;
              min-height: 250px;
              flex-flow: row nowrap;
              justify-content: flex-start;
              .box {
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                height: 100%;
                padding-left: 10px;
                li {
                  width: 202px;
                  height: 26px;
                  line-height: 12px;
                  font-size: 12px;
                  span {
                    text-align: right;
                    font-size: 12px;
                    color: #999;
                  }
                }

                .detail_img {
                  height: auto;
                  img {
                    border: 1px solid @light;
                    width: 206px;
                    height: 46px;
                  }
                }

                .detail_go_a {
                  height: auto;
                  width: 100%;
                  .detail_go {
                    line-height: 26px;
                    text-align: center;
                    margin: 0 auto;
                    margin-top: 10px;
                    display: block;
                    width: 100px;
                    height: 26px;
                    line-height: 26px;
                    font-size: 12px;
                    background-color: #fff;
                    border: 1px solid lighten(@metal, 55%);
                    border-radius: 10%;
                  }
                }
              }

              .Bbox {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                .box {
                  width: 150px;
                  li:first-child {
                    color: #999;
                  }
                  span {
                    color: @brand;
                  }
                }
                div:last-child {
                  li {
                    margin-bottom: -2px;
                  }
                  span {
                    text-align: center;
                    line-height: 18px;
                    width: 18px;
                    height: 18px;
                    display: inline-block;
                    color: #ffffff;
                    background-color: @brand;
                  }
                }
              }
            }
            .info-box:first-child {
              border-right: 1px solid #c0c0c0;
            }

            .info-box:last-child {
              padding-left: 10px;
              flex-flow: column nowrap;
              .Bbox:first-child {
                margin-bottom: 20px;
              }

              div:last-child {
                div:last-child {
                  li {
                    margin-bottom: 0;
                  }
                }
              }
            }
          }

          &:hover .J-shop-user-info-detail {
            visibility: visible;
            // background-color: fade(@danger, 2%);
            background-image: radial-gradient(
              circle farthest-corner at 50%,
              #fafad2,
              transparent,
              #ffffff
            );
          }

          .shop-header-action {
            display: flex;
            width: 192px;
            height: 100%;
            flex-flow: row nowrap;
            justify-content: flex-end;
            a {
              width: 73px;
              margin-top: 15px;
              height: 22px;
              padding: 5px;
              background-color: #fff;
              font-size: 12px;
              display: inline-block;
              border: 1px solid #dddddd;
            }
            a:last-of-type {
              width: 52px;
              margin-left: 10px;
              position: relative;
            }
            a:last-of-type::after {
              content: '';
              position: absolute;
              top: -11;
              background-color: green;
              right: -36px;

              height: 40px;
              border-right: 2px solid lighten(@gray-200, 1%);
            }
          }
        }

        .shop-search {
          width: 50%;
          .top_nav_search {
            margin-top: 6px;
            height: auto;
            display: flex;
            // background: #80ffff;
            flex-flow: row nowrap;
            justify-content: flex-end;
            .search_inner_box {
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              height: 34px;
              background-color: #80ff80;
              border: 1px solid #ff0080;
              border-radius: 0 3px 3px 0;
              .ts_txt {
                width: 305px;
                height: 34px;
                padding: 6px 0 6px 10px;
                border-radius: 0;
                background-color: #fff;
                overflow: hidden;
                color: #999999;
                line-height: 34px;
                border: 1px solid #cccccc;
                box-shadow: 0 1px 10px 1px #cccccc inset;
              }
              .ts_btn {
                cursor: pointer;
                border-radius: 0px;
                width: 100px;
                font-size: 16px;
              }
            }
            input {
              line-hight: 34px;
              height: 34px;
              font-size: 12px;
              color: #ffffff;
              border-radius: 3px;
              background-color: @danger;
            }

            .searchInShop {
              font-size: 16px;
              cursor: pointer;
              height: 36px;
              line-height: 36px;
              background-color: @danger;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>


