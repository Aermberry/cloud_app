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
                  <dt>尺寸</dt>
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
            </div>
          </div>
        </div>
      </div>
      <div>

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

    },
    data () {
      return {
        color: '蓝色',
        size: '25',
        num1: 1
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
      min-height: 680px;
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
      }
    }
  }
</style>
