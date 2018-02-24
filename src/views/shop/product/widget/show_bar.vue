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

</style>
