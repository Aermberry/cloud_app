<template>
  <section class="zkui-point">
    <!-- <zk-head goBack='商品详情'></zk-head> -->
    <div class="point-top">
      <div class="top-goback" @click="goBack()">
        <m-icon name="zk-return"></m-icon>
      </div>
      <div class="top-left" :class="{'text-top':true}">
        <router-link to="/mill/point">
          资产包云商城
        </router-link>
      </div>
      <div class="top-right">
        <router-link to="/mill/point1">
          新零售云商城
        </router-link>
      </div>
    </div>
    <div class="point-tab">
      <ul>
        <li>
          <router-link to="product/list?Keyword=汽车">汽车</router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword=房产 ">房产 </router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword= 艺术品"> 艺术品</router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword=原材料">原材料 </router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword=半成品">半成品</router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword=成品">成品 </router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword= 矿产"> 矿产 </router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword= 机器设备"> 机器设备 </router-link>
        </li>
        <li>
          <router-link to="product/list?Keyword= 其他 "> 其他 </router-link>
        </li>
      </ul>
    </div>
    <zk-swiper diykey="Swiper1Config" height="210px"></zk-swiper>
    <zk-grid diykey="Grid1Config" :cols="4" class="zkui-grid-border__none border-bottom grid-icon-middle point-item"></zk-grid>
    <div class="point-title">
      <span class="title-text">
        首推平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagIds='13728' diykey=''></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        热门平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagIds='13729'></zk-product-item>
    </div>
    <div class="point-title">
      <span class="title-text">
        私人订制平债资产包
      </span>
    </div>
    <div class="point-content-box">
      <zk-product-item :pageSize=2 classIds='' tagIds='13730'></zk-product-item>
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
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, MIcon } from 'zkui'
  export default {
    directives: {

    },
    components: {
      Tab,
      TabItem,
      ZkSwiper,
      ZkGrid,
      ZkProductItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      MIcon
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      goBack () {
        this.$router ? this.$router.back() : window.history.back()
      },
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
    .vux-tab .vux-tab-item a {
      font-size: 0.8rem;
      color: @black;
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
    .point-item {
      .weui-grid__label > span {
        font-size: 0.8rem;
      }
      .weui-grid {
        padding: 0.66666667rem 0;
      }
    }
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
  }
</style>

