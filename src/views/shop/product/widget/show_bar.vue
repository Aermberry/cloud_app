<template>
  <section class="zkui-product-show-bar">
    <tabbar>
      <tabbar-item link="/default" class="bar-home">
        <m-icon slot="icon" name="zk-home" class="metal"></m-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item class="bar-star" @click.native="acctionProductFavorite">
        <m-icon slot="icon" name="zk-favorites" :class="hasFavorite === false ? 'metal' : 'brand' "></m-icon>
        <span slot="label" :class="hasFavorite === false ? 'metal' : 'brand' ">收藏</span>
      </tabbar-item>
      <tabbar-item link="/order/cart" class="bar-cart">
        <m-icon slot="icon" name="zk-cart" class="metal"></m-icon>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item class="bar-cart" target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=1139936790&version=1&src_type=web&web_src=lvlingseeds.com" v-if="showService">
        <m-icon slot="icon" name="zk-service " class="metal"></m-icon>
        <span slot="label">客服</span>
      </tabbar-item>
      <tabbar-item>
        <x-button slot="customer" type="warn" @click.native="showSaleProperty">加入购物车</x-button>
      </tabbar-item>
      <tabbar-item>
        <x-button slot="customer" type="primary" @click.native="showSaleProperty">立即购买</x-button>
      </tabbar-item>
    </tabbar>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import helper from 'src/service/common/helper'
  import { Tabbar, TabbarItem, Group, Cell, MIcon, XButton } from 'zkui'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      MIcon,
      XButton
    },
    props: ['productView'],
    data () {
      return {
        hasFavorite: false, // 商品是否收藏
        loginUser: null, // 当前登录用户
        showService: true
      }
    },
    mounted () {
      this.addFootprint()
      this.getFavorite()
      this.loginUser = this.LoginUser()
      if (window.location.host.indexOf('yiqipingou') !== -1) {
        this.showService = true
      } else {
        this.showService = false
      }
    },
    methods: {
      addFootprint () { // 添加足迹
        let params = {
          entityId: this.productView.id, // 获取商品ID
          type: 'footPrint' // 操作类型为足迹，与后台对应
        }
        var t
        clearTimeout(t)
        t = setTimeout(function () {
          userService.addAction(params)
        }, 2000) // 延迟2s处理
      },
      async getFavorite () { // 获取收藏夹
        let params = {
          entityId: this.productView.id, // 获取商品ID
          type: 'productFavorite' // 操作类型为足迹，与后台对应
        }
        var response = await userService.getAction(params)
        if (response.data.status === 1) {
          this.hasFavorite = true
        }
      },
      async acctionProductFavorite () { // 收藏商品
        helper.checkLogin(true) // 检查用户是否登录
        let params = {
          entityId: this.productView.id, // 获取商品ID
          type: 'productFavorite' // 操作类型为收藏商品，与后台对应
        }
        if (this.hasFavorite === false) {
          var response = await userService.addAction(params)
          if (response.data.status === 1) {
            console.log(response.data)
            this.hasFavorite = true
            this.$vux.toast.success('收藏成功')
          } else {
            this.$vux.toast.warn('您已收藏该商品')
          }
        } else {
          response = await userService.removeAction(params)
          if (response.data.status === 1) {
            this.hasFavorite = false
            this.$vux.toast.success('移除成功')
          } else {
            this.$vux.toast.warn('您未收藏该商品')
          }
        }
      },
      showSaleProperty () {
        this.$emit('changeSaleState', 'true')
      }
    }
  }
</script>

<style   lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';

  .zkui-product-show-bar {
    .vux-header {
      position: fixed;
      width: 100%;
      z-index: 999;
    }
    .weui-tabbar {
      position: fixed;
      z-index: 500;
      bottom: 0;
      width: 100%;
      // height: 3.33333333rem;
      height: 3.5rem;
      .bar-home {
        width: 15%;
      }
      .weui-tabbar__label {
        text-align: center;
        color: #999999;
        line-height: 0;
      }
      .weui-tabbar__icon {
        display: inline-block;
        width: 2.25rem;
        height: 2.2rem;
      }
      .weui-btn {
        width: 8rem;
        height: 3.5rem;
        white-space: nowrap;
        border-radius: 0px;
      }
      .weui-btn:after {
        content: ' ';
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0;
      }
      .bar-home,
      .bar-star {
        width: 15%;
        border-right: 1px solid #e5e5e5;
      }
      .bar-home,
      .bar-star,
      .bar-cart {
        .weui-tabbar__label {
          span {
            font-size: 0.7rem;
            color: @metal;
          }
        }
      }
    }
  }
</style>
