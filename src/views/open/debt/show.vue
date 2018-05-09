<template>
  <section class="zkui-user-debt-show">

    <zk-head title='债事详情' goBack='我的债事'></zk-head>
    <div class="weui-cells">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事金额</label>
            <em class="weui-form-preview__value zkui-reward-show-price brand">{{modelView.plan.amount}} </em>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人姓名</label>
            <span class="weui-form-preview__value">{{modelView.plan.debteeName}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人联系电话</label>
            <span class="weui-form-preview__value">{{modelView.plan.debteePhone}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债务人身份证号码</label>
            <span class="weui-form-preview__value">{{modelView.plan.debteeId}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事过程（描述）</label>
            <span class="weui-form-preview__value">{{modelView.plan.applyReason}}</span>
          </div>
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">债事状态（描述）</label>
            <span class="weui-form-preview__value">{{modelView.planStatus}}</span>
          </div>
          <!-- <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">申请的商品Id</label>
            <span class="weui-form-preview__value">{{modelView.plan.applyProductIds}}</span>
          </div> -->
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">是否付款</label>
            <span class="weui-form-preview__value">{{this.isPay }}</span>
          </div>
          <!-- <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">借条附件上传</label>
            <span class="weui-form-preview__value">{{modelView.plan.attachment}}</span>
          </div> -->
          <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">时间</label>
            <span class="weui-form-preview__value">{{modelView.plan.createTime}}</span>
          </div>
          <!-- <div class="weui-form-preview__item">
            <label class="weui-form-preview__label">备注</label>
            <span class="weui-form-preview__value">{{modelView.plan.remark}}</span>
          </div> -->
        </div>
      </div>
    </div>

    <div class="zkui-order-list-box" v-for="(item,index) in modelView.debtSolutions" :key="index">
      <div class="zkui-order-list-content">
        <div class="zkui-order-list-box-item">
          <div class="box-title" v-if="!item.isDefault">
            <div class="weui-cells vux-no-group-title">
              <div class="weui-cell">
                <div class="weui-cell__hd">
                </div>
                <div class="vux-cell-bd vux-cell-primary">
                  <p>
                    <label class="vux-label">方案{{index+1}}</label>
                  </p>
                  <span class="vux-label-desc"></span>
                </div>
                <div class="weui-cell__ft"> 待付款
                </div>
              </div>
            </div>
          </div>
          <div class="zkui-order-list-product" v-for="(i,n) in item.debtProducts" :key="n" v-if="!item.isDefault">
            <ul class="flex product-title">
              <li class="img-title">
                资产包
              </li>
              <li class="flex_one ">
                资产简介
              </li>
            </ul>
            <ul class="flex product-content">
              <li class="left-img">
                <img :src="i.thumbnailUrl" alt="">
              </li>
              <li class="flex_one center-content">
                <p>
                  {{i.name}}{{i.debtProductSkus[0].skuValues}}
                </p>
              </li>
            </ul>
            <ul class="flex product-fee_title ">
              <li>市场价值 </li>
              <li>兑现债务</li>
              <li>服务费</li>
            </ul>
            <ul class="flex product-fee">
              <li>{{i.debtProductSkus[0].marketPrice}} </li>
              <li>{{i.debtProductSkus[0].maxPayPrice}}</li>
              <li>{{i.debtProductSkus[0].serviceFee}}</li>
            </ul>
          </div>
          <div class="list-aggregate">
            <div class="weui-cells vux-no-group-title">
              <div class="weui-cell">
                <div class="weui-cell__hd">
                </div>
                <div class="vux-cell-bd vux-cell-primary">
                  <p>
                  </p>
                  <span class="vux-label-desc"></span>
                </div>
                <div class="weui-cell__ft">
                  总市场价值：
                  <span class="num">{{item.marketPrice}}</span> 总兑现债务:
                  <span class="num">{{item.debtAmount}}</span>
                  <br> 总服务费：
                  <span class="num">{{item.cnyAmount }}</span>云债金转换：
                  <span class="num">{{item.totalAmount}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="weui-panel weui-panel_access" v-for="(item,index) in modelView.debtSolutions" :key="index">
      <div class="weui-panel__hd">方案{{index+1}}</div>
      <div class="weui-panel__bd" >
        <div class="weui-media-box weui-media-box_text" v-if="!item.isDefault">
          <h4 class="weui-media-box__title">资产包</h4>
          <div class="property-img">
            <img :src="i.thumbnailUrl" alt="">
          </div>
          <h4 class="weui-media-box__title">资产简介</h4>
          <p class="weui-media-box__desc">{{i.name}}{{i.debtProductSkus[0].skuValues}}</p>
          <h4 class="weui-media-box__title">市场价值</h4>
          <p class="weui-media-box__desc">{{i.debtProductSkus[0].marketPrice}}</p>
          <h4 class="weui-media-box__title">兑现债务</h4>
          <p class="weui-media-box__desc">{{i.debtProductSkus[0].maxPayPrice}}</p>
          <h4 class="weui-media-box__title">服务费</h4>
          <p class="weui-media-box__desc">{{i.debtProductSkus[0].serviceFee}}</p>
        </div>
      </div>
      <div class="weui-panel__ft">
        <a href="http://vux.li" class="weui-cell weui-cell_access weui-cell_link">
          <div class="weui-cell__bd">
            总市场价值:{{item.marketPrice}} <br>总兑现债务：{{item.debtAmount}} <br>总服务费：{{item.cnyAmount }}<br>云债金转换：{{item.totalAmount}}
          </div>
        </a>
      </div>
    </div> -->
    <div class="select-scheme">
      <group title="最终方案选择">
        <radio :options="radio001" @on-change="change"></radio>
      </group>
      <group>
        <x-input title="电子签名" is-type="china-name" v-model="screenName"></x-input>
        <x-input title="日期" v-model="time"></x-input>
      </group>
      <box gap="3rem 1rem">
        <x-button type="primary" @click.native="sumbit">
          确认方案提交
        </x-button>
      </box>
    </div>
    <div></div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/debt.api'
  import { XTable, LoadMore, Checker, CheckerItem, Radio, Group, XInput, XButton, Box, Cell } from 'zkui'
  export default {
    components: {
      XTable,
      LoadMore,
      Checker,
      CheckerItem,
      Radio,
      Group,
      XInput,
      XButton,
      Box,
      Cell
    },
    data () {
      return {
        modelView: '',
        radio001: [],
        subscript: '',
        screenName: '',
        time: '',
        isPay: ''
      }
    },
    mounted () {
      this.GetData()
      var myDate = new Date()
      this.time = myDate.toLocaleDateString()
    },
    methods: {
      change (value, label) {
        // console.log('change:', value, label)
        this.subscript = value
      },
      async sumbit () {
        // console.log(this.modelView)
        // console.log(this.modelView.debtSolutions[this.radio001.indexOf(this.subscript)].id)
        let parameter = {
          AdminPlanId: this.modelView.debtSolutions[this.radio001.indexOf(this.subscript)].id,
          Signature: this.screenName
        }
        var message = await apiService.Solution(parameter)
        // console.log(message)
        if (message.data.result === true) {
          this.$vux.toast.success('提交成功')
        }
      },
      async GetData () {
        let params = {
          EntityId: this.$route.params.id // 获取URL当中的Id参数
        }
        var response = await apiService.show(params)
        this.modelView = response.data.result
        for (var i = 0; i < this.modelView.debtSolutions.length; i++) {
          if (this.modelView.debtSolutions[i].isDefault === true) {
            this.radio001[i] = '方案' + (i + 1) + ' 将债条转化为云债金分解平债'
          } else {
            this.radio001[i] = '方案' + (i + 1)
          }
        }
        if (this.modelView.plan.isPay === true) {
          this.isPay = '是'
        } else {
          this.isPay = '否'
        }
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-debt-show {
    .flex {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .flex_one {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .zkui-order-list-box {
      width: 100%;
      .zkui-order-list-content {
        overflow-y: auto;
        padding-bottom: 10*@rem;
        .zkui-order-list-box-item {
          border-bottom: 8px solid rgba(229, 229, 229, 0.5);
          .box-title {
            .weui-cells {
              margin-top: 0;
              .weui-cell {
                .vux-cell-bd {
                  .vux-label {
                    color: @brand;
                    font-weight: @font-weight-bold;
                  }
                }
                .weui-cell__ft {
                  color: @gray-500;
                }
              }
            }
          }
          .product-option {
            padding-right: 10*@rem;
            .weui-cells:after {
              content: none;
            }
            .weui-cells {
              .weui-cell {
                padding: 0.5rem 0;
                .weui-cell__ft {
                  .weui-btn + .weui-btn {
                    margin-top: 0;
                  }
                  .weui-btn {
                    width: 6rem;
                    height: 2rem;
                    padding: 0;
                    line-height: 2rem;
                    border-radius: 15px;
                  }
                }
              }
            }
          }
          .zkui-order-list-product {
            width: 100%;
            background: @gray-100;
            margin-bottom: 1rem;
            ul.product-title {
              border-top: 1px solid #e5e5e5;
              border-left: 1px solid #e5e5e5;
              border-right: 1px solid #e5e5e5;
              height: 2rem;
              padding: 0 0.5rem;
              .img-title {
                width: 4.5rem;
                text-align: center;
                border-right: 1px solid #e5e5e5;
              }
              li {
                color: @brand;
                height: 100%;
                line-height: 2rem;
              }
            }
            ul.product-content {
              padding: 0 0.5rem;
              height: 5.5rem;
              border: 1px solid #e5e5e5;
              .left-img {
                width: 4.5rem;
                border-right: 1px solid #e5e5e5;
                a {
                  display: block;
                  width: 4.5rem;
                  height: 4.5rem;
                }
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .center-content {
                padding: 0 0.5rem;
                p {
                  font-size: @h6-font-size;
                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                  font-family: Helvetica;
                  color: @cell-value-color;
                }
                span {
                  font-size: @h6-font-size;
                  color: @gray-600;
                }
              }
            }
            ul.product-fee_title {
              border-left: 1px solid #e5e5e5;
              li {
                flex: 1;
                color: @brand;
                border-right: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                text-align: center;
              }
            }
            ul.product-fee {
              li {
                flex: 1;
                text-align: center;
                color: @cell-value-color;
                border-right: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
              }
            }
            .left-price {
              min-width: 4.5rem;
              height: 6.5rem;
              ul {
                padding: 0;
                li {
                  width: 100%;
                  text-align: right;
                  font-family: Helvetica;
                  font-weight: @font-weight-normal;
                }
                li.price_now {
                  color: @brand;
                  font-size: @h4-font-size;
                  font-weight: @font-weight-bold;
                }
                li.price_old {
                  color: @gray-500;
                  text-decoration: line-through;
                }
                li.price_count {
                  color: @gray-500;
                  font-size: @h5-font-size;
                }
              }
            }
          }
          .list-aggregate {
            .weui-cells {
              margin-top: 0;
            }
            span.num {
              color: @brand;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
    .vux-cell-primary {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    .select-scheme {
      background: @white;
      margin-top: 0.83333333rem;
      border-top: 1px solid #e5e5e5;
      padding-bottom: 3rem;
      .weui-cell {
        padding: 0.43333333rem 1.25rem;
      }
      .weui-cell__hd {
        width: 6rem;
      }
      .weui-btn {
        height: 3rem;
      }
    }
    .td-img {
      width: 5rem;
      img {
        width: 100%;
      }
    }
    .td-brief {
      width: 7rem;
    }
    .weui-loadmore {
      margin-top: 2.4em;
      margin-bottom: 0;
    }
    .weui-media-box__title {
      margin-bottom: 0;
      font-size: @h5-font-size;
    }
    .weui-media-box__desc {
      margin-bottom: 0.66666667rem;
    }
    .weui-panel__hd {
      color: @brand;
      font-weight: @font-weight-bold;
    }
    .weui-panel {
      border: 1px solid #e5e5e5;
    }
    .weui-media-box {
      padding: 0.8rem 1.2rem 0 1.2rem;
      border-bottom: 1px solid #e5e5e5;
    }
    .property-img {
      width: 4rem;
      height: 4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
