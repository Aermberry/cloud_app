<template>
  <div class="zkui-product-show-bottom">
    <ul>
      <li class="zkui-product-show-bottom-left-box">
        <ul class="zkui-product-show-bottom-left">
          <li>
            <router-link to="/default">
              <div>
                <div class="icon">
                  <m-icon name="zk-index" class="metal"></m-icon>
                </div>
              </div>
              <p>首页</p>
            </router-link>
          </li>
          <li>
            <a href="#">
              <div>
                <div class="icon">
                  <m-icon name="zk-Star" class="metal"></m-icon>
                </div>
              </div>
              <p>收藏</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div class="icon">
                  <m-icon name="zk-shopping" class="metal"></m-icon>
                </div>
              </div>
              <p>购物车</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="zkui-product-show-bottom-center">
        <a href="#">
          加入购物车
        </a>
      </li>
      <li class="zkui-product-show-bottom-right">
        <a href="#">
          立即购买
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { MIcon } from 'zkui'
  export default {
  components: {
  MIcon
  },
  methods: {

  }
  }
</script>

<style lang="less">
 @import '../../../../assets/css/zkui/theme';
    @import '../../../../assets/css/zkui/mixin';
   .zkui-product-show-bottom {
      width: 100%;
      height: 2rem;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      .zkui-product-show-bottom-left {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 100%;
        text-align: center;
      }
      .zkui-product-show-bottom-left > li {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding: 5*@rem;
        background: #fff;
        height: 100%;
      }
      .zkui-product-show-bottom-left > li > a {
        display: block;
      }
      .zkui-product-show-bottom-left > li div {
        margin: 0 auto;
        .widthHeight(1rem, 1rem);
      }
      .zkui-product-show-bottom-left > li p {
        font-size:@font-size-sm;
      }
    }
    .zkui-product-show-bottom > ul {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      width: 100%;
      height: 100%;
    }
    .zkui-product-show-bottom-left-box {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .zkui-product-show-bottom-right,
    .zkui-product-show-bottom-center {
      .widthHeight(27%, 100%);
      text-align: center;
      line-height: 2rem;
    }
    .zkui-product-show-bottom-right > a,
    .zkui-product-show-bottom-center > a {
      .sizeColor(@h3-font-size, #fff);
    }
    .zkui-product-show-bottom-center {
      background: #ff888e;
    }
    .zkui-product-show-bottom-right {
      background: @brand;
    }
</style>
