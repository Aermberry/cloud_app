<template>
<section class="zkui-product-show-bar">
   <tabbar>
      <tabbar-item link="/default" class="bar-home">
        <m-icon slot="icon" name="zk-home" class="metal"></m-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item class="bar-star" @click.native="acctionProductFavorite">
        <m-icon slot="icon" name="zk-Star" class="metal"></m-icon>
        <span slot="label">收藏</span>
      </tabbar-item>
      <tabbar-item>
      <x-button slot="customer" type="default" @click.native="showSaleProperty">加入购物车</x-button>
      </tabbar-item>
      <tabbar-item >
         <x-button slot="customer" type="primary"  @click.native="showSaleProperty">立即购买</x-button>
      </tabbar-item>
    </tabbar>
</section>
</template>

<script>
import userService from 'src/service/api/user.api'
import store from 'src/store/index'
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
      loginUser: null // 当前登录用户
    }
  },
  mounted () {
      this.addFootprint()
      this.loginUser = store.state.userStore.loginUser
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
       getFavorite () { // 获取收藏夹
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
      async acctionProductFavorite () { // 收藏商品
      if (this.loginUser === null) {
        this.$vux.toast.warn('请先登录')
      }
       let params = {
          entityId: this.productView.id, // 获取商品ID
          type: 'productFavorite' // 操作类型为收藏商品，与后台对应
        }
        var response = await userService.addAction(params)
        console.info(response)
        if (response.data.status === 1) {
           this.$vux.toast.success('收藏成功')
        } else {
           this.$vux.toast.warn('您已收藏该商品')
        }
      },
      showSaleProperty () {
       this.$emit('changeSaleState', 'true')
      }
    }
}
</script>

<style lang="less">
 @import '../../../../assets/css/zkui/theme';
@import '../../../../assets/css/zkui/mixin';
.zkui-product-show-bar {
  .weui-tabbar{
    position: fixed;
    z-index: 500;
    bottom: 0;
    width: 100%;
    // height: 3.33333333rem;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid rgba(229, 229, 229, 0.4);
    .bar-home{
      width:15%;
    }
  }
}
</style>
