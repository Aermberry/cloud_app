<template>
  <div>
    <group class="zkui-product-show-parameter">
      <div class="weui-cells-top"></div>
      <cell :title="salePropertyTitle" @click.native="showSale = true" is-link :value="selectSku.propertyValueDesc"></cell>
      <cell title="商品参数" @click.native="showParameter = true" is-link class="border-bottom"></cell>
      <cell :title="productView.productExtensions.productCategory.remark" v-if="productView.productExtensions.productCategory.remark===''||productView.productExtensions.productCategory.remark==='undefined'"></cell>
      <div class="weui-cells-bottom"></div>
    </group>

    <div v-transfer-dom>
      <popup v-model="showSale" class="zk-product-showSale" max-height="80%" is-transparent>
        <div class="close" @click=" showSale = false "></div>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;">
          <dl class="sale-info goods-information">
            <dt class="sale-info-img">
              <img :src="productView.thumbnailUrl" />
            </dt>
            <dd class="sale-info-name">{{productView.name}}</dd>
            <dd class="sale-info-price brand">{{selectSku.displayPrice}}
              <span class="metal">￥{{selectSku.marketPrice}}</span>
            </dd>
            <dd class="sale-info-stock metal">库存：{{selectSku.stock}} 货号：{{selectSku.bn}}</dd>
          </dl>
          <div class="sale-info-property goods-select">
            <dl class="border-bottom " v-for="(item, index) in productView.productExtensions.productCategory.salePropertys " :key="index ">
              <dt>{{item.name}}</dt>
              <dd>
                <checker v-model="saleItems[index] " default-item-class="sale-item " @on-change="changSku " selected-item-class="sale-item-selected " disabled-item-class="sale-item-disabled " :radio-required="true ">
                  <checker-item :value="sale " v-for="sale in item.propertyValues " :key="sale.id "> {{sale.valueAlias}} </checker-item>
                </checker>
              </dd>
            </dl>

          </div>
          <group class="zkui-product-show-parameter-amount ">
            <cell title="购买数量 ">
              <inline-x-number style="display:block; " :min="1 " width="50px " v-model="buyCount" :max="selectSku.stock" button-style="round"></inline-x-number>
            </cell>
          </group>
          <div class="base">
            <button-tab>
              <button-tab-item type="warn" @click.native="addToCart ">加入购物车</button-tab-item>
              <button-tab-item type="primary" @click.native="buyProduct ">立即购买</button-tab-item>
            </button-tab>
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="showParameter " class="showParameter " max-height="70%" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem; ">
          <div class="goods-title">商品参数</div>
          <div class="goods-title-pla"></div>
          <group class="goods-item">
            <cell v-for="(item, index) in productView.productExtensions.productCategory.displayPropertys " :key="index " :title="item.name " :value="item.displayValue " v-if="item.isSale==false "></cell>
          </group>
          <div class="base">
            <x-button type="primary " @click.native="showParameter=false" class="goods-title">确定</x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import { Group, Checker, CheckerItem, Divider, GroupTitle, Cell, TransferDom, Popup, XButton, XSwitch, InlineXNumber, ButtonTab, ButtonTabItem } from 'zkui'
  import userService from 'src/service/api/user.api'
  import helper from 'src/service/common/helper'
  export default {
    components: {
      Group, Cell, TransferDom, Popup, XButton, XSwitch, GroupTitle, InlineXNumber, ButtonTab, ButtonTabItem, Checker, CheckerItem, Divider
    },
    directives: {
      TransferDom
    },
    props: ['productView'],
    data () {
      return {
        showParameter: false, // 是否显示商品参数窗口
        showSale: false, // 显示规格选择窗口
        salePropertyTitle: '请选择：',
        selectSku: '', // 选择的商品Sku
        buyCount: 1, // 商品购买数量
        saleItems: [], // 可能存在多个商品规格属性，默认填充四个
        content: '',
        distrue: true
      }
    },
    mounted: function () {
      console.log('show', this.productView)
      this.$nextTick(function () {
        this.$on('childMethod', function () {
          this.showSale = true
        })
      })
      this.init()
      for (var i = 0; i < this.productView.productExtensions.productCategory.salePropertys.length; i++) {
        this.saleItems[i] = this.productView.productExtensions.productCategory.salePropertys[i].propertyValues[0]
      }
      console.log('this.productView.productExtensions.productCategory.salePropertys[i].propertyValues', this.productView.productExtensions.productCategory.salePropertys)
      console.log('saleItems', this.saleItems)
    },
    methods: {
      init () {
        this.productView.productExtensions.productCategory.salePropertys.forEach(element => {
          this.salePropertyTitle = this.salePropertyTitle + element.name + ' '
        })
        this.selectSku = this.productView.productExtensions.productSkus[0] // 根据specSn获取商品的规格
        console.log('selectSku', this.selectSku)
      },
      // 添加到购物车
      async addToCart () {
        helper.checkLogin(true)
        if (this.selectSku.id === undefined) {
          this.$vux.toast.warn('请选择商品规格')
        } else {
          let params = {
            ProductSkuId: this.selectSku.id,
            productId: this.productView.id,
            storeId: this.productView.storeId,
            count: this.buyCount
          }
          var response = await userService.AddCart(params)
          if (response.data.status === 1) {
            this.$vux.toast.success('加入购物车成功')
            this.showSale = false
          }
        }
      },
      // 购买商品
      buyProduct () {
        helper.checkLogin(true)
        if (this.selectSku.id === undefined) {
          this.$vux.toast.warn('请选择商品规格')
        }
        if (this.buyCount < 1) {
          this.$vux.toast.warn('购买数量不能小于1')
        }
        let buyProductInfo = [{
          ProductSkuId: this.selectSku.id,
          Count: this.buyCount,
          ProductId: this.productView.id,
          storeId: this.productView.storeId,
          LoginUserId: this.LoginUser().id
        }]
        this.showSale = false
        this.$router.push({
          name: 'order_buy',
          params: {
            buyInfo: buyProductInfo
          }
        })
      },
      getSku () {
        var specSn = ''
        this.saleItems.forEach(element => {
          specSn += element.id + '|'
        })
        var skus = this.productView.productExtensions.productSkus
        var sku = ''
        for (var i = 0; i < skus.length; i++) {
          if (skus[i].specSn === specSn) {
            sku = skus[i]
          }
        }
        if (sku.id === undefined) {
          // this.$vux.toast.warn('请选择商品规格')
        }
        // console.log(this.productView.productExtensions.productCategory.salePropertys)
        // console.log('skus', this.productView.productExtensions.productSkus)
        // console.log(this.saleItems, specSn, sku)
        // console.log('saleItems', this.saleItems)
        console.log('saleItems', this.saleItems)
        return sku
      },
      // 获取Sku ，用户选择不同的sku
      changSku () {
        this.selectSku = this.getSku() // 根据specSn获取商品的规格
      }
    }
  }
</script>

<style   lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zkui-product-show-parameter {
    .vux-label {
      font-weight: @font-weight-normal;
    }
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells-top {
      background-color: #efefef;
      margin-bottom: -2*@rem;
      border: 1px solid white;
    }
    .weui-cells-bottom {
      height: 5*@rem;
      background-color: #efefef;
      // border: 1px solid white;
    }
    .weui-cells__title {
      text-align: center;
    }
    .weui-cells__content {
      min-height: 240*@rem;
    }
    .weui-cell__ft {
      font-weight: @font-weight-normal;
    }
  }

  .zk-product-showSale {
    .sale-info:after {
      content: none;
      display: block;
      clear: both;
    }
    .sale-info {
      min-height: 8rem;
      dd {
        float: right;
        width: 65%;
        margin-right: 15*@rem;
        padding-top: 2*@rem;
        font-weight: @font-weight-normal;
      }
      dd.sale-info-name {
        color: @black;
        font-family: Helvetica;
        font-size: @h5-font-size;
      }
      .sale-info-price {
        font-weight: bold;
        font-size: @h4-font-size;
        span {
          text-decoration: line-through;
          font-weight: 100;
          color: @gray-600;
          font-family: Helvetica;
          font-weight: @font-weight-normal;
        }
      }
      .sale-info-stock {
        color: @gray-600;
      }
      .sale-info-close {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border: 1px solid #5f646e;
        display: inline-block;
        position: absolute;
        right: 5px;
        top: 4px;
        padding: 0.32rem;
      }
      .sale-info-close::after {
        content: '\2716'; //特殊字符或形状，一个勾
        color: #5f646e;
        font-size: 12px;
        position: absolute;
        right: 5px;
        padding-top: 0.4rem;
      }
      dt {
        float: left;
        width: 6.5rem;
        height: 6.5rem;
        margin-left: 1rem;
        img {
          border-radius: 0.2rem;
          width: 90%;
          height: 90%;
        }
      }
    }

    .sale-info-property {
      height: 12rem;
      overflow-y: auto;
      width: 100%;
      dl:after {
        bottom: none;
        top: 0;
      }
      dl {
        width: 100%;
        min-height: 5rem;
        overflow-y: auto;
        dt {
          width: 100%;
          height: 28*@rem;
          padding: 8*@rem 0 0 1.25rem;
          font-weight: bold;
        }
        dd:after {
          content: '';
          display: block;
          visibility: hidden;
          width: 0;
          height: 0;
          clear: both;
        }
        dd {
          width: 100%;
          .vux-checker-box {
            float: left;
            margin-left: 8*@rem;
          }
          .sale-item {
            background-color: #ddd;
            color: #222;
            padding: 4*@rem 8*@rem;
            margin: 0 5*@rem 5*@rem 0;
            border-radius: 4*@rem;
            font-weight: @font-weight-normal;
            font-size: @h6-font-size;
          }
          .sale-item-selected {
            background-color: @brand;
            color: #fff;
          }
          .sale-item-disabled {
            color: #999;
          }
        }
      }
    }
  }
  .zkui-product-show-parameter-amount:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 0.08333333rem;
    border-bottom: 1px solid #c7c7c7;
    color: #c7c7c7;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .zkui-product-show-parameter-amount {
    position: relative;
    height: 3.3rem;
    .vux-label {
      font-weight: @font-weight-bold;
    }
    .vux-number-input {
      font-weight: @font-weight-normal;
    }
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells:before {
      border-top: 0;
    }
    .vux-number-input {
      font-size: @h4-font-size;
    }
  }

  .goods-title {
    position: fixed;
    width: 100%;
    overflow-y: auto;
    height: 40*@rem;
    line-height: 40*@rem;
    text-align: center;
    z-index: 5;
    background-color: white;
    border-bottom: 1px solid #e5e5e5;
    color: @black;
    font-size: @h4-font-size;
  }
  .goods-title-pla {
    height: 40*@rem;
  }
  .goods-item {
    padding-bottom: 20*@rem;
    height: 16.5rem;
    overflow-y: auto;
    .weui-cells {
      margin-top: 0;
    }
  }
  .goods-information {
    padding-top: 1rem;
    justify-content: center;
    padding-right: 1.25rem;
    color: #999999;
    min-height: 40px;
    z-index: 5;
    background-color: white;
    position: relative;
  }
  .goods-information:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0.08333333rem;
    border-bottom: 1px solid #c7c7c7;
    color: #c7c7c7;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .base {
    width: 100%;
    height: auto;
    overflow-y: auto;
    min-height: 40px;
    z-index: 5;
    background-color: white;
    button {
      border-radius: 0;
    }
  }
  .weui-cell__ft {
    font-weight: @font-weight-normal;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 25px;
    height: 25px;
    background: @brand;
    border-radius: 25px;
    // box-shadow: 2px 2px 5px 0px @black;
    cursor: pointer;
    z-index: 9999;
  }

  .close:hover {
    background: red;
  }
  .close:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 5px;
    background: white;
    transform: rotate(45deg);
    top: 10px;
    left: 5px;
  }
  .close:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 5px;
    background: white;
    transform: rotate(-45deg);
    top: 10px;
    left: 5px;
  }
  .base {
    .vux-button-tab-item-first {
      background: @actionsheet-label-warn-color !important;
      color: @white !important;
    }
    .vux-button-tab-item-last {
      color: @white !important;
      background: @brand!important;
    }
  }
</style>
