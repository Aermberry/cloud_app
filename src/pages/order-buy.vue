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
                    更多菜单
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
    <div class="zkui-pc_orderbuy-content">
      <div class="content-box auto">
        <div class="buy-message">
          <h2 class="buy-title">选择收货地址</h2>
          <ul class="cart_address_ctrl">
            <li>
              <router-link to="">
                <i class="el-icon-menu"></i>管理收货地址
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-circle-plus-outline"></i>新增地址
              </router-link>
            </li>
          </ul>
          <div class="address_pop">
            <ul>
              <li>
                <div class="pop-left">收件人姓名：
                  <span>*</span>
                </div>
                <div class="pop-right">
                  <div class="pop-right-left">
                    <el-input v-model="userName" placeholder="请输入姓名"></el-input>
                  </div>
                  <div class="pop-right-right">
                    <span>请填写正确的姓名</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="pop-left">手机号：
                  <span>*</span>
                </div>
                <div class="pop-right">
                  <div class="pop-right-left">
                    <el-input v-model="userName" placeholder="请输入手机号"></el-input>
                  </div>
                  <div class="pop-right-right">
                    <span>请填写正确的手机号</span>
                  </div>
                </div>
              </li>
              <li class="address-textarea">
                <div class="pop-left">选择区域：
                  <span>*</span>
                </div>
                <div class="pop-right">
                  <div class="pop-right-left">
                    <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2" maxlength="100" minlength="5">
                    </el-input>
                  </div>
                  <div class="pop-right-right">
                    <span class="pla-address">请填写街道地址，最少5个字，最多不能超过100个字</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="pop-left">设置为默认：
                  <span>*</span>
                </div>
                <div class="pop-right">
                  <div class="pop-right-left">
                    <el-switch v-model="value2" active-color="#0090ff" inactive-color="#ced4da">
                    </el-switch>
                  </div>
                </div>
              </li>
              <li>
                <div class="pop-left">
                </div>
                <div class="pop-right">
                  <div class="pop-right-left">
                    <el-button type="primary" plain>保存</el-button>
                    <el-button type="primary" plain>取消</el-button>
                  </div>
                  <div class="pop-right-right">

                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h2 class="buy-title">确认商品信息</h2>
          <div class="affirm-message">
            <div class="affirm-message-title">
              <ul>
                <li>商品</li>
                <li style="width:140px">商品信息</li>
                <li style="width:80px">单价(元)</li>
                <li style="width:80px" class="title-num">数量</li>
                <li style="width:180px">优惠</li>
                <li style="width:80px">小计(元)</li>
              </ul>
            </div>
            <div class="affirm-message-content">
              <ul>
                <li class="product-data">
                  <router-link to="" class="product-img">
                    <img src="../assets/images/bg/1.jpg" alt="">
                  </router-link>
                  <router-link to="" class="product-title">
                    2017春夏高腰大码裤子女宽松九分气质阔腿裤休闲韩版直筒裤
                  </router-link>
                </li>
                <li style="width:140px">
                  <p>颜色：黑色</p>
                  <p>尺码：S</p>
                </li>
                <li style="width:80px">
                  <p>42.72</p>
                </li>
                <li style="width:80px" class="content-num">
                  <p>1</p>
                </li>
                <li style="width:180px">
                  <p>
                    无
                  </p>
                </li>
                <li style="width:80px">
                  <p>
                    42.72元
                  </p>
                </li>
              </ul>
            </div>
            <div class="affirm-message-remark">
              <p>备注：</p>
              <el-input v-model="userName" placeholder="补充填写其他信息"></el-input>
            </div>
            <div class="affirm-message-price">
              <span>合计：</span>
              29.90
            </div>
          </div>
        </div>
        <div class="buy-payment">
          <router-link to="" class="cart-back">
            <i class="el-icon-arrow-left"></i>返回购物车</router-link>
          <router-link to="" class="payment-button fr">确认并付款</router-link>
          <span class="payment-price fr">￥29.90</span>
          <div class="payment-info fr">
            共有
            <span>1</span>
            件商品，总计：
          </div>
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
        active: 2,
        value2: true
      }
    }
  }
</script>
<style lang="less" >
  body {
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
    .zkui-pc_orderbuy-content {
      .content-box {
        padding-top: 30px;
        .buy-message {
          background: @white;
          padding: 0 20px;
          min-height: 300px;
          .buy-title {
            font-weight: @font-weight-bold;
            font-size: 14px;
            color: #333;
            height: 46px;
            line-height: 46px;
          }
          .cart_address_ctrl {
            padding: 12px 0;
            display: flex;
            li {
              margin-right: 20px;
              a {
                display: block;
                color: #666;
                font-size: 12px;

                i {
                  color: #666;
                  font-size: 12px;
                  margin-right: 2px;
                }
              }
            }
          }
          .address_pop {
            padding: 20px 20px 20px 0;
            ul {
              li {
                height: 38px;
                display: flex;
                div.pop-left {
                  width: 90px;
                  font-size: 12px;
                  text-align: right;
                  line-height: 38px;
                  height: 38px;
                  padding-right: 10px;
                  position: relative;
                  span {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    font-size: 18px;
                    height: 38px;
                    color: @brand;
                  }
                }
                div.pop-right {
                  flex: 1;
                  height: 38px;
                  padding-left: 5px;
                  line-height: 38px;
                  vertical-align: middle;
                  box-sizing: border-box;
                  padding-left: 5px;
                  font-size: 12px;
                  display: flex;
                  .pop-right-left {
                    position: relative;
                    input {
                      width: 150px;
                      height: 25px;
                      font-size: 12px;
                    }
                    .el-input {
                      width: 150px;
                    }
                    .el-switch {
                      position: absolute;
                      top: 50%;
                      transform: translateY(-50%);
                    }
                    .el-button {
                      height: 100%;
                      margin-right: 10px;
                      span {
                        font-size: 18px;
                      }
                    }
                  }
                  .pop-right-right {
                    padding-left: 20px;
                    flex: 1;
                    span {
                      display: block;
                      font-size: 12px;
                      color: @actionsheet-label-warn-color;
                    }
                    .pla-address {
                      color: #ced4da;
                    }
                  }
                }
              }
              .address-textarea {
                height: 76px;
                min-height: 76px;
                div.pop-right {
                  height: 76px;
                  min-height: 76px;
                  display: block;
                  .pop-right-left {
                    textarea {
                      font-size: 12px;
                      width: 930px;
                      min-height: 50px !important;
                    }
                  }
                }
              }
            }
          }
          .affirm-message {
            .affirm-message-title {
              border-bottom: 1px solid #efefef;
              border-top: 1px solid #efefef;
              ul {
                display: flex;
                li {
                  padding: 17px 0;
                  font-size: 12px;
                  color: @black;
                  font-weight: @font-weight-bold;
                  text-align: left;
                }
                li:first-child {
                  flex: 1;
                  text-align: center;
                }
                li:nth-child(2) {
                  text-align: left;
                }
                li.title-num {
                  text-align: center;
                }
              }
            }
            .affirm-message-content {
              min-height: 110px;
              background: #f8f8f8;
              ul {
                display: flex;

                li {
                  font-size: 12px;
                  color: @black;
                  padding-top: 20px;
                  p {
                    font-size: 12px;
                  }
                }
                li:first-child {
                  flex: 1;
                }
                li:nth-child(3) {
                  p {
                    font-weight: @font-weight-bold;
                    font-size: 12px;
                  }
                }
                li:last-child {
                  p {
                    font-size: 14px;
                    font-weight: @font-weight-bold;
                  }
                }
                li.content-num {
                  p {
                    text-align: center;
                  }
                }
                li.product-data {
                  position: relative;
                  height: 110px;
                  .product-img {
                    position: absolute;
                    top: 50%;
                    left: 15px;
                    transform: translateY(-50%);
                    display: block;
                    width: 80px;
                    height: 80px;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .product-title {
                    display: block;
                    margin-left: 120px;
                    font-size: 12px;
                    color: @black;
                    width: 400px;
                    font-weight: @font-weight-bold;
                  }
                  .product-title:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
            .affirm-message-remark {
              background: #f8f8f8;
              border-bottom: 1px solid #efefef;
              border-top: 1px solid #efefef;
              height: 70px;
              line-height: 70px;
              padding-left: 10px;
              display: flex;
              p {
                font-size: 12px;
                height: 70px;
                line-height: 70px;
              }
              .el-input {
                width: 350px;
                height: 25px;
                input {
                  height: 25px;
                }
              }
            }
            .affirm-message-price {
              padding: 0 10px;
              height: 60px;
              line-height: 60px;
              background: #f8f8f8;
              color: @brand;
              text-align: right;
              font-size: 18px;
              font-weight: @font-weight-bold;
              span {
                font-size: 18px;
                color: @gray-500;
              }
            }
          }
        }
        .buy-payment {
          position: relative;
          height: 50px;
          background: #fff;
          border-top: 1px solid #ddd;
          line-height: 50px;
          clear: both;
          .cart-back {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            font-size: 12px;
            color: #666;
            i {
              font-size: 12px;
            }
          }
          .cart-back:hover {
            color: @brand;
            i {
              color: @brand;
            }
          }
          .payment-button {
            display: block;
            width: 172px;
            height: 51px;
            margin-top: -1px;
            background: #ffa701;
            font-size: 18px;
            color: #fff;
            text-align: center;
          }
          .payment-price {
            display: block;
            padding: 0 12px 0 8px;
            font-size: 26px;
            font-weight: @font-weight-bold;
            color: @brand;
          }
          .payment-info {
            font-size: 12px;
            span {
              color: @brand;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
