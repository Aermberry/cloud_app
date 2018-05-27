<template>
  <section class="zkui-product-show">
    <show-header :productView="modelView" v-if="asyncFlag"></show-header>
    <show-thumbnail :productView="modelView" v-if="asyncFlag"></show-thumbnail>
    <show-title :productView="modelView" v-if="asyncFlag"></show-title>
    <show-parameter ref="show_parameter" :productView="modelView" v-if="asyncFlag"></show-parameter>
    <show-intro :productView="modelView" v-if="asyncFlag"></show-intro>
    <show-recommend :productView="modelView"></show-recommend>
    <show-bar :productView="modelView" v-if="asyncFlag" v-on:changeSaleState="showSaleModel"></show-bar>
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
  // import { setInterval } from 'timers';

  export default {
    components: {
      Group, ShowThumbnail, ShowTitle, ShowParameter, Box, ShowBar, ShowIntro, ShowRecommend, ShowHeader
    },
    data () {
      return {
        modelView: '', // 商品数据，从服务器上远程获取
        asyncFlag: false, // 异步数据传递判断，如果没有获取完成则不传递数据子组件中
        scroll: ''
      }
    },
    created () {
      this.GetData()
      // this.fetchData()
    },
    mounted () {
    },
    // watch: {
    //   // 监听路由的变化。
    //   '$route': 'fetchData'
    // },
    methods: {
      // 将拼团参数传入到子主键中
      showSaleModel (isGroupBuyAction) {
        this.$refs.show_parameter.$emit('childMethod', isGroupBuyAction) // 监听销售属性事件
      },
      // URL发生变化时操作的事件
      // async  fetchData () {
      //   var a = setTimeout(function () {
      //     this.$router.go(0)
      //   }, 100)
      //   let params = {
      //     id: this.$route.params.id // 获取URL当中的Id参数
      //   }
      //   var response = await apiService.show(params)
      //   var product = response.data.result
      //   if (response.data.status !== 1) {
      //     this.messageWarn(response.data.message)
      //   } else {
      //     this.asyncFlag = true
      //     this.modelView = product
      //     document.title = this.modelView.name
      //   }
      // },
      async GetData () {
        let params = {
          id: this.$route.params.id // 获取URL当中的Id参数
        }
        console.log('this.$route.params.id', this.$route.params.id)
        var response = await apiService.show(params)
        var product = response.data.result
        console.log('response.data.status ', response)
        if (response.data.status !== 1) {
          this.messageWarn(response.data.message)
        } else {
          this.asyncFlag = true
          this.modelView = product
        }
      }
    }
  }
</script>
