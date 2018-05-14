<template>
  <section class="zkui-point">
    <!-- <zk-head goBack='商品详情'></zk-head> -->
    <div class="point-top">
      <div class="top-goback" @click="goBack()">
        <m-icon name="zk-return"></m-icon>
      </div>
      <div class="top-left">
        <router-link to="/mill/point">
          资产包云商城
        </router-link>
      </div>
      <div class="top-right" :class="{'text-top':true}">
        <router-link to="/mill/point1">
          新零售云商城
        </router-link>
      </div>
    </div>
    <div class="point-tab">
      <ul>
        <li>
          <router-link to="/product/list?Keyword=数码家电">数码家电</router-link>
        </li>
        <li>
          <router-link to="/product/list?Keyword=鞋服箱包 ">鞋服箱包 </router-link>
        </li>
        <li>
          <router-link to="/product/list?Keyword= 家居家纺"> 家居家纺</router-link>
        </li>
        <li>
          <router-link to="/product/list?Keyword=美妆饰品">美妆饰品 </router-link>
        </li>
        <li>
          <router-link to="/product/list?Keyword=粮油速食">粮油速食</router-link>
        </li>
        <li>
          <router-link to="/product/list?Keyword=母婴用品">母婴用品 </router-link>
        </li>
        <li>
          <router-link to="/product/list?Keyword= 其他 "> 其他 </router-link>
        </li>
      </ul>
    </div>
    <zk-swiper diykey="Swiper2Config" height="210px"></zk-swiper>
    <zk-grid diykey="Grid2Config" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle point-item "></zk-grid>
    <div class="point-title">
      <span class="title-text">
        特卖
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagsId='13733'></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        火爆单品
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagsId='13734'></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        小云推荐
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagsId='13735'></zk-product-item>
    </div>
    <!-- <zk-foot></zk-foot> -->
    <div class="point-foot">
      <div class="placeholder"></div>
      <div class="zkfoot footer">
        <ul class="clear">
          <router-link to="/default" tag="li" class="footer_li">
            <section class="li_svg">
              <m-icon name="debt-cloud" :class="$route.path.indexOf('default') !== -1 ? 'brand' : 'metal' "></m-icon>
            </section>
            <section class="li_text" :class="$route.path.indexOf('default') !== -1 ? 'brand' : 'metal' ">首页</section>
          </router-link>
          <router-link to="/product/class" tag="li" class="footer_li">
            <section class="li_svg">
              <m-icon name="debt-classify " :class="$route.path.indexOf('product') !== -1 ? 'brand' : 'metal' "></m-icon>
            </section>
            <section class="li_text" :class="$route.path.indexOf('product') !== -1 ? 'brand' : 'metal' ">分类</section>

          </router-link>
          <router-link to="/order/cart" tag="li" class="footer_li">
            <section class="li_svg">
              <m-icon name="debt-cart" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' "></m-icon>
            </section>
            <section class="li_text" :class="$route.path.indexOf('order') !== -1 ? 'brand' : 'metal' ">购物车</section>
          </router-link>
          <router-link to="/user/index" tag="li" class="footer_li">
            <section class="li_svg">
              <m-icon name="debt-me" :class="$route.path.indexOf('user') !== -1 ? 'brand' : 'metal' "></m-icon>
            </section>
            <section class="li_text" :class="$route.path.indexOf('user') !== -1 ? 'brand' : 'metal' ">我的</section>
          </router-link>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import apiService from 'src/service/api/product.api'
  import { ZkSwiper, ZkGrid, ZkProductItem } from 'widgets'
  import { Tab, TabItem } from 'zkui'
  export default {
    directives: {

    },
    components: {
      Tab,
      TabItem,
      ZkSwiper,
      ZkGrid,
      ZkProductItem
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        var response = await apiService.class()
        console.log(response)
        this.data = response.data.result
      }

    },
    data () {
      return {
        data: ''
      }
    }
  }
</script>

<style   lang="less">
  .zkui-point {
    .point-foot {
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
    .vux-tab .vux-tab-item {
      font-size: 0.8rem;
    }
    .point-top {
      height: 2.91666667rem;
      display: flex;
      background: @brand;
      position: relative;
      .top-goback {
        position: absolute;
        height: 100%;
        width: 2.5rem;
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .top-left,
      .top-right {
        flex: 1;
        text-align: center;
        height: 100%;
        line-height: 2.91666667rem;
        a {
          color: @black;
        }
      }
      .text-top {
        a {
          color: @white;
        }
      }
    }
    .point-title {
      border-bottom: 1px solid rgba(229, 229, 229, 0.5);
      height: 3rem;
      .title-text {
        margin-left: 2rem;
        margin-top: 0.5rem;
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        background: @brand;
        color: @white;
        border-radius: 10px;
        padding: 0 10px;
      }
    }
    .point-content-box {
      width: 100%;
      min-height: 180px;
    }
    .point-tab {
      width: 100%;
      height: 3.3rem;
      overflow: hidden;
      border-bottom: 1px solid rgba(229, 229, 229, 0.7);
      ul {
        width: 100%;
        height: 3.66666667rem;
        display: flex;
        overflow: auto;

        li {
          height: 3.66666667rem;
          text-align: center;
          a {
            display: block;
            min-width: 4rem;
            margin: 0 0.5rem;
            line-height: 3.66666667rem;
            color: @black;
            font-size: @h6-font-size;
          }
        }
      }
    }
  }
</style>

