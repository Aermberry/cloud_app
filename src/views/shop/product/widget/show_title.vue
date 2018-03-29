<template>
  <div class="zkui-product-show-title">
    <div class="zkui-product-show-title">
      <div class="zkui-product-show-title-left left">
        <span class="zkui-product-show-title-price_symbol left">{{productView.displayPrice}}</span>
        <span class="zkui-product-show-title-price_old left">￥{{productView.marketPrice}}</span>
        <span class="zkui-product-show-title-right right">
          {{productView.soldCount}}人已购
        </span>
      </div>

    </div>

    <div class="zkui-product-show-title-content">
      {{productView.name}}
    </div>

    <group gap="0rem 0rem 0rem 0rem">

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

<style scoped  lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zkui-product-show-title {
    background: #fff;
    padding: 0.5rem 10px 0 10*@rem;
    .zkui-product-show-title-left {
      .zkui-product-show-title-price_symbol {
        color: @brand;
        font-size: @h3-font-size;
        padding-top: 1*@rem;
        font-weight: @font-weight-normal;
      }
      .zkui-product-show-title-price_old {
        padding-left: 5*@rem;
        text-decoration: line-through;
        font-weight: @font-weight-normal;
        color: @gray-600;
      }
    }
    .zkui-product-show-title-right {
      margin-top: 0.2rem;
      padding-left: 85*@rem;
      font-weight: @font-weight-normal;
      color: @gray-600;
    }
  }
  .zkui-product-show-title-content {
    background: #fff;
    padding: 0 10px 0.2rem 10*@rem;
    border-bottom: 1px solid #e5e5e5;
    font-weight: @font-weight-normal;
    font-weight: 400;
    font-family: Helvetica;
    .sizeColor(@h5-font-size, @black);
  }

  .zkui-product-show-serve-box {
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 0.9rem;
    li {
      color: @gray-600;
      margin-left: 0.5rem;
      line-height: 2.9rem;
      font-weight: @font-weight-normal;
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
