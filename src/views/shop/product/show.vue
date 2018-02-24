<template>
  <section class="zkui-product-show">
    <show-header ></show-header>
    <show-thumbnail :productView="modelView" v-if="asyncFlag" ></show-thumbnail>
    <show-title :productView="modelView"  v-if="asyncFlag"></show-title>
    <show-parameter :productView="modelView" v-if="asyncFlag" v-on:showState="changeState"></show-parameter>
    <!-- <show-intro :productView="modelView" v-if="asyncFlag"></show-intro> -->




<show-recommend :productView="modelView"></show-recommend>
  <show-bar></show-bar>
  </section>
</template>

<script>
  import apiService from 'src/service/api/product.api'
   import ShowHeader from './widget/show_header' // 头部
  import ShowThumbnail from './widget/show_thumbnail' // 商品轮播图、商品主图等
  import ShowTitle from './widget/show_title' // 价格 名称 已售数量等
  import ShowParameter from './widget/show_parameter' // 商品参数以及规则
  import ShowIntro from './widget/show_intro' // 商品详情
  import ShowRecommend from './widget/show_recommend' // 推荐商品
  import ShowBar from './widget/show_bar' // 底部操作按钮 立即购买 加入购物车等

  import { Group, Box } from 'zkui'

  export default {
    components: {
      Group, ShowThumbnail, ShowTitle, ShowParameter, Box, ShowBar, ShowIntro, ShowRecommend, ShowHeader
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
      showSale () {
        console.dir('listenTochildEvent')
        this.$emit('listenTochildEvent', 'true')
      },
      changeState (data) {
        console.dir('dddddddddddddddddddddddddddd')
        alert(data)
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
