<template>
  <div>
    <group class="zkui-product-show-parameter">
      <cell :title="salePropertyTitle" @click.native="showSale = true" is-link :value="salePropertyValue"></cell>
      <cell title="商品参数" @click.native="showParameter = true" is-link class="border-bottom"></cell>
    </group>

    <div v-transfer-dom>
      <popup v-model="showSale" class="zk-product-showSale" height="270*@rem" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;padding-top:25px;">
          <dl class="sale-info">
            <dt class="sale-info-img">
              <img :src="productView.thumbnailUrl" />
            </dt>
            <dd class="sale-info-name">{{productView.name}}</dd>
            <dd class="sale-info-price brand">{{productView.displayPrice}}
              <span class="metal">￥{{productView.marketPrice}}</span>
            </dd>
            <dd class="sale-info-stock metal">库存：{{skuStock}}</dd>
            <a class="sale-info-close" href=""></a>
          </dl>
          <div class="sale-info-property">
            <dl class="border-bottom" v-for="(item, index) in productView.productExtensions.productCategory.salePropertys" :key="index">
              <dt v-if="index === 0">{{item.name}}</dt>
              <dd v-if="index === 0">
                <checker v-model="saleItem0" default-item-class="sale-item" @on-change="setsalePropertyValue" selected-item-class="sale-item-selected" disabled-item-class="sale-item-disabled" :radio-required="true">
                  <checker-item :value="sale" v-for="sale in item.propertyValues" :key="sale.id" @on-item-click="buyInfoItem"> {{sale.valueAlias}} </checker-item>
                </checker>
              </dd>
              <dt v-if="index === 1">{{item.name}}</dt>
              <dd v-if="index === 1">
                <checker v-model="saleItem1" default-item-class="sale-item" @on-change="setsalePropertyValue" selected-item-class="sale-item-selected" disabled-item-class="sale-item-disabled" :radio-required="true">
                  <checker-item :value="sale" v-for="sale in item.propertyValues" :key="sale.id" @on-item-click="buyInfoItem"> {{sale.valueAlias}} </checker-item>
                </checker>
              </dd>
              <dt v-if="index === 2">{{item.name}}</dt>
              <dd v-if="index === 2">
                <checker v-model="saleItem2" default-item-class="sale-item" selected-item-class="sale-item-selected" disabled-item-class="sale-item-disabled" :radio-required="true">
                  <checker-item :value="sale" v-for="sale in item.propertyValues" :key="sale.id" @on-item-click="buyInfoItem"> {{sale.valueAlias}} </checker-item>
                </checker>
              </dd>
              <dt v-if="index === 3">{{item.name}}</dt>
              <dd v-if="index === 3">
                <checker v-model="saleItem3" default-item-class="sale-item" selected-item-class="sale-item-selected" disabled-item-class="sale-item-disabled" :radio-required="true">
                  <checker-item :value="sale" v-for="sale in item.propertyValues" :key="sale.id" @on-item-click="buyInfoItem"> {{sale.valueAlias}} </checker-item>
                </checker>
              </dd>
            </dl>
          </div>
          <group class="zkui-product-show-parameter-amount">
            <cell title="购买数量">
              <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
            </cell>
          </group>
          <div style="padding:10px">
            <button-tab>
              <button-tab-item type="default" @click.native="onfilter">加入购物车</button-tab-item>
              <button-tab-item type="primary" @click.native="buyProduct">立即购买</button-tab-item>
            </button-tab>
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="showParameter" class="showParameter" height="270*@rem" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;padding-top:10px;">
          <group title="商品参数">
            <cell v-for="(item, index) in productView.productExtensions.productCategory.displayPropertys" :key="index" :title="item.name" :value="item.displayValue" v-if="item.isSale == false"></cell>
          </group>
          <div style="padding:10px">
            <x-button type="primary" @click.native="showParameter = false">完成</x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import { Group, Checker, CheckerItem, Divider, GroupTitle, Cell, TransferDom, Popup, XButton, XSwitch, InlineXNumber, ButtonTab, ButtonTabItem } from 'zkui'

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
        showParameter: false,
        showSale: false,
        skuStock: 10, // sku库存
        salePropertyTitle: '请选择：',
        salePropertyValue: '',
        saleItem0: { key: '2' }, // 可能存在多个商品规格属性，默认填充四个
        saleItem1: [1], // 可能存在多个商品规格属性
        saleItem2: '', // 可能存在多个商品规格属性
        saleItem3: '' // 可能存在多个商品规格属性
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$on('childMethod', function () {
          this.showSale = true
        })
      })
      this.init()
    },
    methods: {
      init () {
        for (var i = 0; i < this.productView.productExtensions.productCategory.salePropertys.length; i++) {
          var saleName = this.productView.productExtensions.productCategory.salePropertys[i].name
          this.salePropertyTitle = this.salePropertyTitle + saleName + ' '
        }
      },
      //
      buyInfoItem (value, disabled) {

      },
      // 购买商品
      buyProduct () {
        this.getSku()
        this.showSale = false
      },
      getSku () {
        var specSn = ''
        console.dir(this.productView.productExtensions.productCategory.salePropertys.length)
        for (var i = 0; i < this.productView.productExtensions.productCategory.salePropertys.length; i++) {
          if (i === 0) {
            specSn = this.saleItem0.propertyId + '|'
            if (i === 1) {
              specSn = this.saleItem0.propertyId + this.saleItem1.propertyId + '|'
              console.info('属性值', this.saleItem1.propertyId)
            }
            if (i === 2) {
              specSn = this.saleItem0.propertyId + this.saleItem1.propertyId + '|' + this.saleItem2.propertyId + '|'
              if (i === 3) {
                specSn = this.saleItem0.propertyId + this.saleItem1.propertyId + '|' + this.saleItem2.propertyId + '|' + this.saleItem3.propertyId + '|'
              }
            }
          }
        }
        console.dir(specSn)
        return specSn
      },

      // 设置规格标题
      setsalePropertyValue () {
        if (this.saleItem0.valueAlias !== undefined) {
          this.salePropertyValue = this.saleItem0.valueAlias
          if (this.saleItem1.valueAlias !== undefined) {
            this.salePropertyValue = this.saleItem0.valueAlias + ' ' + this.saleItem1.valueAlias
            if (this.saleItem2.valueAlias !== undefined) {
              this.salePropertyValue = this.saleItem0.valueAlias + ' ' + this.saleItem1.valueAlias + ' ' + this.saleItem2.valueAlias
            }
          }
        }
      }
    }
  }
</script>

<style lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zkui-product-show-parameter {
    .weui-cells__title {
      text-align: center;
    }
    .weui-cells__content {
      min-height: 240*@rem;
    }
  }

  .zk-product-showSale {
    .sale-info {
      height: 100*@rem;
      dd {
        float: right;
        width: 65%;
        margin-right: 15*@rem;
        padding-top: 2*@rem;
      }
      .sale-info-price {
        font-weight: border;
        span {
          text-decoration: line-through;
          font-weight: 100;
        }
      }
      .sale-info-close {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid #5f646e;
        display: inline-block;
        position: absolute;
        right: 5px;
        top: 4px;
      }
      .sale-info-close::after {
        content: '\2716'; //特殊字符或形状，一个勾
        color: #5f646e;
        font-size: 12px;
        position: absolute;
        right: 5px;
        top: 1px;
      }
      dt {
        float: left;
        width: 25%;
        margin-left: 1rem;
        img {
          border-radius: 0.2rem;
          width: 90%;
          height: 90%;
        }
      }
    }

    .sale-info-property {
      min-height: 160*@rem;
      dl {
        width: 100%;
        min-height: 100*@rem;
        dt {
          width: 100%;
          height: 20*@rem;
          margin: 8*@rem 0 0 8*@rem;
          font-weight: border;
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
            margin: 5*@rem 5*@rem 5*@rem 5*@rem;
            border-radius: 4*@rem;
            line-height: 18*@rem;
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
  .zkui-product-show-parameter-amount {
    .weui-cells {
      margin-top: 0;
    }
    .weui-cells:before {
      border-top: 0;
    }
    .vux-number-round .vux-number-selector-sub svg {
      position: relative;
      top: -0.3rem;
      right: 0.05rem;
    }
    .vux-number-round .vux-number-selector-plus {
      border: 1px solid @actionsheet-label-disabled-color;
      svg {
        position: relative;
        top: -0.2rem;
        right: 2*@rem;
        fill: @actionsheet-label-disabled-color;
      }
    }
  }
</style>
