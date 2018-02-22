
<template>
  <section class="zkui-foot">
    <div class="placeholder"></div>
    <div class="zkfoot footer">
      <ul class="clear">
        <router-link to="/default" tag="li" class="footer_li">
          <section class="li_svg">
            <m-icon name="zk-home" :class="$route.path.indexOf('default') !== -1 ? 'brand' : 'metal' "></m-icon>
          </section>
          <section class="li_text" :class="$route.path.indexOf('default') !== -1 ? 'brand' : 'metal' ">首页</section>
        </router-link>
        <router-link to="/product/class" tag="li" class="footer_li">
          <section class="li_svg">
            <m-icon name="zk-classification" :class="$route.path.indexOf('product') !== -1 ? 'brand' : 'metal' "></m-icon>
          </section>
          <section class="li_text" :class="$route.path.indexOf('product') !== -1 ? 'brand' : 'metal' ">分类</section>

        </router-link>
        <router-link to="/order/cart" tag="li" class="footer_li">
          <section class="li_svg">
            <m-icon name="zk-cart" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' "></m-icon>
          </section>
          <section class="li_text" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' ">购物车</section>
        </router-link>
        <router-link to="/user/index" tag="li" class="footer_li">
          <section class="li_svg">
            <m-icon name="zk-me" :class="$route.path.indexOf('user') !== -1 ? 'brand' : 'metal' "></m-icon>
          </section>
          <section class="li_text" :class="$route.path.indexOf('user') !== -1 ? 'brand' : 'metal' ">我的</section>
        </router-link>
      </ul>
    </div>
  </section>
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
  @import '../assets/css/zkui/theme';
  .zkui-foot {
    .placeholder {
      width: 100%;
      height: 40*@rem;
    }
    .footer {
      position: fixed;
      z-index: 999;
      bottom: 0;
      width: 100%;
      height: 40*@rem;
      background: rgba(255, 255, 255, 0.9);
      border-top: 1px solid rgba(229, 229, 229, 0.4);
      ul {
        width: 100%;
        height: 40*@rem;
        box-sizing: border-box;
        .footer_li {
          float: left;
          width: 25%;
          height: 40*@rem;
          text-align: center;
          position: relative;
          .li_svg {
            padding-top: 0.6*@rem;
          }
          .li_text {
            text-align: center;
            margin-top: 0.4*@rem;
          }
        }
      }
    }
  }
</style>
