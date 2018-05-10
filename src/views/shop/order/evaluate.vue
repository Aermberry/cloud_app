<template>
  <div class="zkui-evaluate">
    <zk-head>
      <a slot="right" @click="ceshi">发布</a>
    </zk-head>
    <div class="evaluate-describe ">
      <div class="describe-left">
        评价
      </div>
      <div class="describe-center">
        <!-- <rater v-model="a" :max="3" :min="1" active-color="#FF9900"></rater> -->
        <ul class="center-box">
          <li>
            <div class="item " :class="{'active':rateInfo.ReviewType===3}" @click="eItem(3)">
              <m-icon name="zk-evaluate-good"></m-icon>
              好评
            </div>
          </li>
          <li>
            <div class="item " :class="{'active':rateInfo.ReviewType===2}" @click="eItem(2)">
              <m-icon name="zk-evaluate-middle"></m-icon>
              中评
            </div>
          </li>
          <li>
            <div class="item" :class="{'active':rateInfo.ReviewType===1}" @click="eItem(1)">
              <m-icon name="zk-evaluate-bad"></m-icon>
              差评
            </div>
          </li>
        </ul>
      </div>
      <div class="describe-right">

      </div>
    </div>
    <div class="evaluate-content">
      <x-textarea placeholder="宝贝满足你的期待吗？说说你使用的心得，分享给想买的他们把。" v-model="rateInfo.Intro"></x-textarea>
      <zk-upload :fileCount="5" savePath="identity" :size="5*1024" ref="uploadFile">添加照片</zk-upload>
    </div>
    <div class="evaluate-store ">
      <div class="store-title">
        <m-icon name="zk-me"></m-icon>
        <span>店铺评分</span>
      </div>
      <ul class="store-content">
        <li>
          <div class="content-left">描述相符</div>
          <div class="content-right">
            <rater v-model="rateInfo.ProductScore" :max="5" :min="1" active-color="#FF9900"></rater>
          </div>
        </li>
        <li>
          <div class="content-left">物流服务</div>
          <div class="content-right">
            <rater v-model="rateInfo.LogisticsScore" :max="5" :min="1" active-color="#FF9900"></rater>
          </div>
        </li>
        <li>
          <div class="content-left">服务态度</div>
          <div class="content-right">
            <rater v-model="rateInfo.ServiceScore" :max="5" :min="1" active-color="#FF9900"></rater>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { ZkUpload } from 'widgets'
  import { Rater, Group, Cell, Range, XTextarea } from 'zkui'
  import apiUser from 'src/service/api/user.api'
  export default {
    components: {
      Rater,
      Group,
      Cell,
      Range,
      XTextarea,
      ZkUpload
    },
    data () {
      return {
        a: 3,
        rateInfo: {
          ReviewType: 3, // 好评 1-3
          ProductScore: 2, // 商品与实物相符度 1-5
          ServiceScore: 2, // 服务态度  1-5
          LogisticsScore: 2, // 快递评分 1-5
          Intro: '', // 评论详情
          EntityId: '', // 订单ID
          Images: '' // 评论图片
        }
      }
    },
    mounted () {
    },
    methods: {
      eItem (item) {
        this.rateInfo.ReviewType = item
      },
      async ceshi () {
        this.rateInfo.EntityId = this.$route.query.id
        var a = document.getElementsByClassName('inputimg')
        this.rateInfo.Images = a[0].value
        var response = await apiUser.Rate(this.rateInfo)
        if (response.data.status === 1) {
          this.$vux.toast.success(response.data.message)
          this.$router.push({
            name: 'order_show'
          })
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>
<style lang="less">
  .zkui-evaluate {
    .evaluate-describe {
      height: 3rem;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      .describe-left {
        color: @gray-600;
        font-size: @h5-font-size;
      }
      .describe-center {
        flex: 1;
        padding: 0 10px;
        height: 100%;
        // .vux-rater {
        //   .vux-rater-box {
        //     .vux-rater-inner {
        //       span {
        //         font-size: @h3-font-size;
        //       }
        //     }
        //   }
        // }
        .center-box {
          display: flex;
          height: 100%;
          li {
            flex: 1;
            height: 100%;
            .item {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 80%;
              color: @gray-600;
              margin: 0 auto;
              line-height: 3rem;
              vertical-align: top;
              font-size: @h5-font-size;
              svg {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 3px;
              }
            }
            .active {
              color: @brand;
            }
          }
        }
      }
      .describe-right {
        width: 2rem;
      }
    }
    .evaluate-content {
      border-bottom: 1px solid #f0f0f0;
      .weui-uploader__title {
        color: @gray-600;
        font-size: @h6-font-size;
      }
    }
    .evaluate-store {
      .store-title {
        height: 3rem;
        padding-left: 2.5rem;
        line-height: 3rem;
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          color: @gray-600;
        }
      }
      .store-content {
        li {
          height: 3rem;
          line-height: 3rem;
          padding-left: 10px;
          display: flex;
          .content-left {
            color: @gray-600;
            font-size: @h6-font-size;
          }
          .content-right {
            padding-left: 10px;
            .vux-rater {
              .vux-rater-box {
                .vux-rater-inner {
                  span {
                    font-size: @h3-font-size;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
