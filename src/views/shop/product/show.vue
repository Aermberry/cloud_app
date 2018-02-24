<template>
  <section class="zkui-product-show">
    <show-thumbnail :productView="modelView" v-if="asyncFlag"></show-thumbnail>
    <show-title :productView="modelView"  v-if="asyncFlag"></show-title>
    <show-parameter :productView="modelView" v-if="asyncFlag"></show-parameter>
    <show-intro :productView="modelView" v-if="asyncFlag"></show-intro>



    <!--底部-->
    <!--<show-bar></show-bar>-->
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
              <a href="javascript:">
                <div>
                  <div class="icon">
                    <m-icon name="zk-Star" class="metal"></m-icon>
                  </div>
                </div>
                <p>收藏</p>
              </a>
            </li>
            <li>
              <router-link to="/order/cart">
                <div>
                  <div class="icon">
                    <m-icon name="zk-shopping" class="metal"></m-icon>
                  </div>
                </div>
                <p>购物车</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="zkui-product-show-bottom-center">
          <a href="#">
            加入购物车
          </a>
        </li>
        <li class="zkui-product-show-bottom-right">
          <a href="javascript:" @click="onClick">
            立即购买
          </a>
        </li>
      </ul>
    </div>
    <!--滚动头部-->
    <div :class="{'zkui-product-show-rolltop':istrue,'isnone':isNone}">
      <div class="zkui-product-show-rolltop-left">
        <div class="zkui-product-show-rolltop-left-icon">
        </div>
      </div>
      <div class="zkui-product-show-rolltop-center">
        <ul>
          <li class="active">
            <span>商品</span>
          </li>
          <li>
            <span>详情</span>
          </li>
          <li>
            <span>推荐</span>
          </li>
        </ul>
      </div>
      <div class="zkui-product-show-rolltop-right">

      </div>
    </div>
    <div class="zkui-product-show-rolltop_icon">
      <div class="zkui-product-show-rolltop_icon-left">
        <div class="icon">
          <m-icon name="zk-goback" class="metal"></m-icon>
        </div>
      </div>
      <div></div>
      <div class="zkui-product-show-rolltop_icon-right">
        <ul>
          <li>
            <router-link to="/order/cart" class="icon">
              <m-icon name="zk-shopping" class="metal"></m-icon>
            </router-link>
          </li>
          <li>
            <div class="icon icon-classify" @click="headerClassify=!headerClassify">
              <m-icon name="zk-classify" class="metal"></m-icon>
            </div>
            <div class="zkui-product-show-rolltop_icon-more" v-if="headerClassify">
              <router-link to="/default">
                首页
              </router-link>
              <router-link to="/default">
                首页
              </router-link>
              <router-link to="/default">
                首页
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>


<show-recommend :productView="modelView"></show-recommend>
  </section>
</template>

<script>
  import apiService from 'src/service/api/product.api'
  import ShowThumbnail from './widget/show_thumbnail'
  import ShowTitle from './widget/show_title'
  import ShowParameter from './widget/show_parameter'
  import ShowBar from './widget/show_bar'
  import ShowIntro from './widget/show_intro'
  import ShowRecommend from './widget/show_recommend'

  import { Group, Box } from 'zkui'

  export default {
    components: {
      Group, ShowThumbnail, ShowTitle, ShowParameter, Box, ShowBar, ShowIntro, ShowRecommend
    },
    data () {
      return {
        modelView: '', // 商品数据，从服务器上远程获取
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        sizeShow: false,
        parameterShow: false,
        showValue: false,
        istrue: true,
        isNone: false,
        headerClassify: false
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      onClick () {
        this.showValue = true
      },
      async GetData () {
        let params = {
          id: this.$route.params.id // 获取URL当中的Id参数
        }
        var response = await apiService.show(params)
        var product = response.data.result
        this.asyncFlag = true
        this.modelView = product
        console.dir(product)


        // this.intro.push(product.price, product.marketPrice, product.soldCount, product.name)
        // for (var i = 0; i < product.productPropertys.length; i++) {
        //   if (product.productPropertys[i].isSale === true) {
        //     this.size.push(product.productPropertys[i].valueName)
        //   }
        //   if (product.productPropertys[i].isSale === false) {
        //     this.parameter.push(product.productPropertys[i].valueName)
        //   }
        // }
        // this.sizeList.push(this.size)
        // this.parameterList.push(this.parameter)
      }
    }
  }

</script>
<style lang="less">
  @import './widget/product_show';
</style>
