<template>
  <section class="zkui-product-show">
    <!--主图-->

    <group class="zkui-product-show-parameter">

      <!-- <product-parameter :title="parameterTitle" :data="parameterList" v-model="parameterValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :cancelText="cancelText" :confirmText="confirmText" :showValue="showValue"></product-parameter>
      <product-size :title="sizeTitle" :data="sizeList" v-model="parameterValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :cancelText="cancelText" :confirmText="confirmText"></product-size> -->
    </group>

  </section>
</template>

<script>
  import $ from 'jquery'
  import apiService from 'src/service/api/product.api'
  import thumbnail from './widget/show_thumbnail'
  // import intro from './widget/show_intro'
  // import intro from './widget/show_intro"
  // import bar from './widget/show_bar"
  // import ProductItem from 'src/components/base/zk-product-Item.vue'

  import { Group } from 'zkui'
  // import VGroup from '../../../widgets/m-group/index.vue"
  // import {MProductparameter,MProductsize} from '../../../widgets'
  export default {
    data () {
      return {
        modelView: '', // 商品数据，从服务器上远程获取
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
        headerClassify: false,
        thumbnail
      }
    },
    methods: {
      onClick () {
        this.showValue = true
      },
      async GetData () {
        let params = {
          id: this.$route.params.id // 获取URL当中的Id参数
        }
        this.imgid = this.$route.params.id
        var response = await apiService.show(params)
        var product = response.data.result
        this.modelView = product
        this.thumbnails = product.productThums
        this.intro.push(product.price, product.marketPrice, product.soldCount, product.name)
        for (var i = 0; i < product.productPropertys.length; i++) {
          if (product.productPropertys[i].isSale === true) {
            this.size.push(product.productPropertys[i].valueName)
          }
          if (product.productPropertys[i].isSale === false) {
            this.parameter.push(product.productPropertys[i].valueName)
          }
        }
        this.sizeList.push(this.size)
        this.parameterList.push(this.parameter)
      }
    },
    mounted () {
      this.GetData()
    },
    components: {
      Group
    }
  }
  $(function () {
    var rollHeader = $('.zkui-product-show-rolltop-center>ul>li')
    rollHeader.click(function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
  })
</script>
