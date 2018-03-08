<template>
  <div class="zkui-product-show-title">
    <div class="zkui-product-show-title">
      <div class="zkui-product-show-title-left left">
        <ul class=" clear">
          <li class="zkui-product-show-title-price_symbol left">{{productView.displayPrice}}</li>
          <li class="zkui-product-show-title-price_old left">￥{{productView.marketPrice}}</li>
        </ul>
      </div>
      <div class="zkui-product-show-title-right right">
        {{productView.soldCount}}人已购
      </div>
    </div>

    <div class="zkui-product-show-title-content">
      {{productView.name}}
    </div>

    <group gap="-0.46rem 0rem 0rem 0rem">
      <cell>
        <span slot="title">
          <ul class="zkui-product-show-serve-box clear">
            <li>
              <i class="product-icon-dot"></i>24小时发货</li>
            <li>
              <i class="product-icon-dot"></i>7天包退</li>
            <li>
              <i class="product-icon-dot"></i>售后补贴</li>
            <li class="zkui-product-show-serve-item-more ">
              <a class="zkui-product-show-serve-item-more_icon">…</a>
            </li>
          </ul>
        </span>
      </cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell } from 'zkui'
  export default {
    components: {
      Group,
      Cell
    },
    props: ['productView']
  }
</script>

<style lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zkui-product-show-title {
    background: #fff;
    padding: 0.5rem 10px 0 10*@rem;
    .zkui-product-show-title-left {
      .zkui-product-show-title-price_symbol {
        color: @brand;
        height: 1.3rem;
        padding-top: 1*@rem;
        width: 30%;
      }
      .zkui-product-show-title-price_old {
        height: 1.3rem;
        margin-left: 10*@rem;
      }
    }
    .zkui-product-show-title-right {
      margin: 0 0 0 1rem;
    }
  }
  .zkui-product-show-title-content {
    background: #fff;
    padding: 0 10px 0.2rem 10*@rem;
    border-bottom: 1px solid #e5e5e5;
    .sizeColor(@h4-font-size, @gray-600);
  }

  .zkui-product-show-serve-box {
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 1.5rem;
    li {
      color: @gray-600;
      margin-left: 0.5rem;
      line-height: 1.5rem;
    }
    li.zkui-product-show-serve-item-more {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      text-align: right;
      padding-right: 10*@rem;
    }
    .zkui-product-show-serve-item-more_icon {
      display: inline-block;
      font-size: 1rem;
      line-height: 0.5rem;
    }
  }
  .product-icon-dot {
    display: inline-block;
    vertical-align: middle;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 0.15rem;
    background-color: @brand;
    margin-right: 0.2rem;
  }
</style>
