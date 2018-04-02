<template>
  <div class="zkui-pc-orderbuy">
    <div class="zkui-pc_orderbuy-head">
      <div class="zkui-pc-head-top ">
        <div class="auto">
          <ul>
            <li class="gohome">
              <router-link to="">
                <i class="el-icon-edit"></i>
                美丽说首页
              </router-link>
            </li>
            <li>
              <router-link to="">
                <el-dropdown>
                  <el-button type="primary">
                    刘成恩
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                我的订单
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-edit"></i>
                帮助中心
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="zkui-pc-head-center">
        <div class="auto ">
          <router-link to="">
            <img src="../assets/images/bg/1.jpg" alt="">
          </router-link>
          <div class="center-steps">
            <el-steps :active="active" finish-status="success">
              <el-step title="购物车"></el-step>
              <el-step title="确认订单"></el-step>
              <el-step title="支付"></el-step>
              <el-step title="完成"></el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-box auto">
      <div class="cart_page_wrap">
        <div class="cart_page_box-title">
          <ul class="flex">
            <li class="cart_c_input">1</li>
            <li class="flex-one">商品</li>
            <li class="cart_c_product_message">商品信息</li>
            <li class="cart_c_price">单价(元)</li>
            <li class="cart_c_num">数量</li>
            <li class="cart_c_price">小计(元)</li>
            <li class="cart_c_price">操作</li>
          </ul>
        </div>
        <div class="cart-store cart-store-name">
          <div class="cart_page_box">
            <ul class="flex">
              <li class="cart_c_input">全选</li>
              <li class="flex-one ">
                <p class="one-name">店铺名称</p>
              </li>
            </ul>
          </div>
          <div class="cart_page_box cart-store-message">
            <ul class="flex">
              <li class="cart_c_input">1</li>
              <li class="flex-one cart_c_one">
                <router-link to="" class="one-img">
                  <img src="" alt="">
                </router-link>
                <router-link to="" class="one-title">
                  春秋新款韩版学生长袖恶魔笑脸夹克两面穿bf宽松棒球服外套女
                </router-link>
              </li>
              <li class="cart_c_product_message">
                <p>颜色:黑色</p>
                <p>尺码:S</p>
              </li>
              <li class="cart_c_price">
                <p class="prict-old">112.0</p>
                <p class="prict-now">79.00</p>
              </li>
              <li class="cart_c_num">
                <p>12</p>
              </li>
              <li class="cart_c_price">
                <h2> 79.00</h2>
              </li>
              <li class="cart_c_price">
                <el-button type="danger" round>删除</el-button>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="cart_paybar">
        <router-link to="" class="paybar-btn fr">
          去付款
          <i class="el-icon-arrow-right"></i>
        </router-link>
        <div class="total-price fr">
          79.00
        </div>
        <div class="paybar-info fr">
          共有
          <span>0</span> 款商品，总计：
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    mounted () {
    },
    methods: {
    },
    data () {
      return {
        active: 1
      }
    }
  }
</script>
<style lang="less" >
  body {
    background: #f4f4f4;
  }
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
  .flex {
    display: flex;
  }
  .flex-one {
    flex: 1;
  }
  .clearfix:after {
    content: '';
    display: table;
    clear: both;
  }
  .zkui-pc-orderbuy {
    .el-input {
      display: block;
    }
    .zkui-pc_orderbuy-head {
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
              font-size: 12px;
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
      .zkui-pc-head-center {
        width: 100%;
        height: 72px;
        border-bottom: 1px solid #ddd;
        div.auto {
          position: relative;
          a {
            display: block;
            width: 225px;
            height: 72px;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .center-steps {
            position: absolute;
            height: 100%;
            width: 500px;
            top: 0;
            right: 0;
            padding-top: 10px;
            .el-step__icon {
              display: block;
            }
            .el-step__icon-inner {
              display: block;
              font-size: 13px;
              line-height: 1.5;
            }
            .el-step__head.is-success {
              color: @brand;
              border-color: @brand;
            }
            .el-step__title.is-success {
              color: @brand;
            }
          }
        }
      }
      .el-dropdown {
        vertical-align: top;
        span {
          font-size: 13px;
          color: #666;
        }
      }
      .el-button--primary:focus,
      .el-button--primary:hover {
        background: transparent;
        border-color: transparent;
      }
      .el-button--primary:focus,
      .el-button--primary:hover span {
        color: @brand;
      }
      .el-button {
        padding: 0;
        background: transparent;
        border-color: transparent;
      }
      .el-dropdown + .el-dropdown {
        margin-left: 15px;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
    .cart-box {
      padding-top: 30px;
      .cart_page_wrap {
        background: #fff;
        padding: 20px 26px;
        .cart_page_box,
        .cart_page_box-title {
          border-bottom: 1px solid #efefef;
          height: 50px;
          ul {
            height: 100%;
            li {
              height: 100%;
              text-align: center;
              font-size: 14px;
            }
            .cart-store-name {
              text-align: left;
            }
          }
        }
        .cart_page_box-title {
          ul {
            li {
              line-height: 50px;
            }
          }
        }
        .cart_page_box-title,
        .cart-store-name {
          ul {
            li {
              p.one-name {
                text-align: left;
                font-size: 14px;
                line-height: 50px;
              }
            }
          }
        }
        .cart-store-message {
          height: 110px;
          ul {
            li {
              padding-top: 15px;
            }
            li.cart_c_one {
              position: relative;
              .one-img {
                position: absolute;
                display: block;
                top: 15px;
                left: 0;
                width: 80px;
                height: 80px;
                border: 1px solid #e5e5e5;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .one-title {
                display: block;
                margin-left: 90px;
                font-size: 14px;
                color: @black;
              }
            }
            .cart_c_product_message {
              p {
                font-size: 12px;
                color: @black;
                margin-bottom: 5px;
              }
            }
            .cart_c_price {
              .prict-old {
                font-size: 14px;
                color: @gray-700;
                text-decoration: line-through;
              }
              .prict-now {
                font-size: 14px;
                color: @black;
                font-weight: @font-weight-bold;
              }
              h2 {
                color: @brand;
                font-size: 18px;
              }
              .el-button {
                span {
                  font-size: 14px;
                }
              }
            }
            .cart_c_num {
              p {
                font-size: 14px;
                color: @black;
              }
            }
          }
        }
        .cart_c_input {
          width: 70px;
        }
        .cart_c_product_message {
          width: 140px;
        }
        .cart_c_num {
          width: 135px;
        }
        .cart_c_price {
          width: 100px;
        }
      }
      .cart_paybar {
        position: relative;
        height: 50px;
        background: #fff;
        border-top: 1px solid #ddd;
        line-height: 50px;
        clear: both;
        .paybar-btn {
          display: block;
          height: 50px;
          width: 152px;
          line-height: 50px;
          text-align: center;
          font-size: 18px;
          color: @white;
          background: @warning;
        }
        .paybar-btn:hover {
          background: @gray-600;
        }
        .total-price {
          font-size: 18px;
          color: @brand;
          height: 50px;
          line-height: 50px;
          font-weight: @font-weight-bold;
          padding-right: 15px;
        }
        .paybar-info {
          font-size: 12px;
          height: 50px;
          line-height: 50px;
          span {
            font-size: 12px;
            color: @brand;
          }
        }
      }
    }
  }
</style>
