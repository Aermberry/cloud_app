<template>
  <section class="zkui-product-show">
    <show-thumbnail :productView="modelView" ></show-thumbnail>
    <show-intro :productView="modelView" ></show-intro>
    <group class="zkui-product-show-parameter">

      <!-- <product-parameter :title="parameterTitle" :data="parameterList" v-model="parameterValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :cancelText="cancelText" :confirmText="confirmText" :showValue="showValue"></product-parameter>
      <product-size :title="sizeTitle" :data="sizeList" v-model="parameterValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :cancelText="cancelText" :confirmText="confirmText"></product-size> -->
    </group>

  </section>
</template>

<script>
  import $ from 'jquery'
  import apiService from 'src/service/api/product.api'
  import ShowThumbnail from './widget/show_thumbnail'
  import ShowIntro from './widget/show_intro'
  import ShowCss from './widget/show_css'
  // import bar from './widget/show_bar"
  // import ProductItem from 'src/components/base/zk-product-Item.vue'

  import { Group } from 'zkui'
  // import VGroup from '../../../widgets/m-group/index.vue"
  // import {MProductparameter,MProductsize} from '../../../widgets'
  export default {
    components: {
      Group, ShowThumbnail, ShowIntro, ShowCss
    },
    data () {
      return {
        modelView: '', // 商品数据，从服务器上远程获取
        previewerList: [],
        istrue: true,
        isNone: false,
        sizeShow: false,
        parameterShow: false,
        parameter: [],
        sizeList: [],
        parameterList: [],
        sizeValue: [''],
        parameterValue: [''],
        sizeTitle: '商品参数',
        parameterTitle: '请选择:颜色、尺码',
        evaluateTitle: '买家评论 199 | 销量 1531',
        cancelText: '取消',
        confirmText: '完成',
        DatasList: [],
        styleType: '',
        showValue: false,
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
  $(function () {
    var rollHeader = $('.zkui-product-show-rolltop-center>ul>li')
    rollHeader.click(function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
  })
</script>
