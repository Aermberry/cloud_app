<template>
  <div>
    <group class="zkui-product-show-parameter">
      <div class="weui-cells-top"></div>
      <cell :title="salePropertyTitle" @click.native="showSale = true" is-link :value="selectSku.propertyValueDesc"></cell>
      <cell title="商品参数" @click.native="showParameter = true" is-link class="border-bottom"></cell>
      <div class="weui-cells-bottom"></div>
    </group>

    <div v-transfer-dom>
      <popup v-model="showSale" class="zk-product-showSale" max-height="70%" is-transparent>
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
            <x-button type="default" class="sale-info-close" @click.native=" showSale = false "></x-button>
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
            <group class="zkui-product-show-parameter-amount ">
              <cell title="购买数量 ">
                <inline-x-number style="display:block; " :min="1 " width="50px " v-model="buyCount" :max="selectSku.stock" button-style="round"></inline-x-number>
              </cell>
            </group>
          </div>

          <div class="base">
            <button-tab>
              <button-tab-item type="default " @click.native="addToCart ">加入购物车</button-tab-item>
              <button-tab-item type="primary " @click.native="buyProduct ">立即购买</button-tab-item>
            </button-tab>
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="showParameter " class="showParameter " max-height="70%" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem; ">
          <div class="goods-title">商品参数</div>
          <group class="goods-item">
            <cell v-for="(item, index) in productView.productExtensions.productCategory.displayPropertys " :key="index " :title="item.name " :value="item.displayValue " v-if="item.isSale==false "></cell>
          </group>
          <div class="base">
            <x-button type="primary " @click.native="showParameter=false" class="goods-title"></x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import { Group, Checker, CheckerItem, Divider, GroupTitle, Cell, TransferDom, Popup, XButton, XSwitch, InlineXNumber, ButtonTab, ButtonTabItem } from 'zkui'
  import userService from 'src/service/api/user.api'
  import store from 'src/store/index'
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
        saleItems: [] // 可能存在多个商品规格属性，默认填充四个
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
        this.productView.productExtensions.productCategory.salePropertys.forEach(element => {
          this.salePropertyTitle = this.salePropertyTitle + element.name + ' '
        })
        this.selectSku = this.productView.productExtensions.productSkus[0] // 根据specSn获取商品的规格
      },
      // 添加到购物车
      async addToCart () {
        if (this.selectSku.id === undefined) {
          this.$vux.toast.warn('请选择商品规格')
        } else {
          let params = {
            ProductSkuId: this.selectSku.id,
            productId: this.productView.id,
            Count: this.buyCount
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
          LoginUserId: store.state.userStore.loginUser.id
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
          this.$vux.toast.warn('请选择商品规格')
        }
        return sku
      },
      // 获取Sku ，用户选择不同的sku
      changSku () {
        this.selectSku = this.getSku() // 根据specSn获取商品的规格
      }
    }
  }
</script>

<style lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zkui-product-show-parameter {
    .weui-cell {
      padding: 1rem 1.5rem 1rem 1.5rem;
    }
    .weui-cells-top {
      height: 8px;
      background-color: #efefef;
      margin-bottom: -2*@rem;
      border: 1px solid white;
    }
    .weui-cells-bottom {
      height: 8px;
      background-color: #efefef;
      margin-top: -2*@rem;
      border: 1px solid white;
    }
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
      min-height: 200*@rem;
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
  .goods-title {
    display: flex;
    padding-top: 0.5rem;
    justify-content: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    color: #999999;
    font-size: 1rem;
    position: fixed;
    width: 100%;
    height: auto;
    overflow-y: auto;
    min-height: 40px;
    z-index: 5;
    background-color: white;
    border-bottom: 1px solid #e5e5e5;
  }
  .goods-item {
    padding-top: 1.8rem;
    margin-bottom: 2.9rem;
  }
  .goods-information {
    padding-top: 1rem;
    justify-content: center;
    padding-right: 1.25rem;
    color: #999999;
    position: fixed;
    min-height: 40px;
    z-index: 5;
    background-color: white;
  }
  .goods-select {
    padding-top: 5.8rem;
    margin-bottom: 2.9rem;
  }
  .base {
    margin-top: 8rem;
    position: fixed;
    width: 100%;
    height: auto;
    overflow-y: auto;
    min-height: 40px;
    z-index: 5;
    background-color: white;
    bottom: 0px;
  }
</style>
