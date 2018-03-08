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

<<<<<<< HEAD
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
=======
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

>>>>>>> 3ff9a368060065eb836fdc80308367a86d13ea92
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
<<<<<<< HEAD
        width: 30%;
      }
      .zkui-product-show-title-price_old {
        height: 1.3rem;
        margin-left: 10*@rem;
      }
    }
    .zkui-product-show-title-right {
      margin: 0 0 0 1rem;
=======
      }
      .zkui-product-show-title-price_old {
        padding-left: 5*@rem;
        text-decoration: line-through;
      }
    }
    .zkui-product-show-title-right {
      margin-top: 0.2rem;
      padding-left: 85*@rem;
>>>>>>> 3ff9a368060065eb836fdc80308367a86d13ea92
    }
  }
  .zkui-product-show-title-content {
    background: #fff;
<<<<<<< HEAD
    padding: 0 10px 0.2rem 10*@rem;
=======
    padding: 0.5rem 10*@rem 1rem 10*@rem;
>>>>>>> 3ff9a368060065eb836fdc80308367a86d13ea92
    border-bottom: 1px solid #e5e5e5;
    .sizeColor(@h4-font-size, @gray-600);
  }

  .zkui-product-show-serve-box {
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
<<<<<<< HEAD
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
=======
    height: 0.9rem;
    li {
      color: @gray-600;
      margin-left: 0.5rem;
      line-height: 2.9rem;
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
>>>>>>> 3ff9a368060065eb836fdc80308367a86d13ea92
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
