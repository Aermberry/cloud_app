<template>
  <section class="zkui-product-show">
    <!--主图-->
    <show-thumbnail :thumbnails="thumbnails" :id="imgid"></show-thumbnail>

    <show-intro :intro="intro"></show-intro>

    <group class="zkui-product-show-parameter">

      <product-parameter :title="parameterTitle" :data="parameterList" v-model="parameterValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :cancelText="cancelText" :confirmText="confirmText" :showValue="showValue"></product-parameter>
      <product-size :title="sizeTitle" :data="sizeList" v-model="parameterValue" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :cancelText="cancelText" :confirmText="confirmText"></product-size>
    </group>

    <!--评价-->
    <div class="zkui-product-show-Btitle floor ">
      <b>
        <div class="icon">
          <m-icon name="zk-evaluate" class="metal"></m-icon>
        </div>
      </b>评价
    </div>
    <div class="zkui-product-show-evaluate ">
      <a href="javascript:">
        <div class="zkui-product-show-evaluate-sum">
          <cell class="zkui-product-show-evaluate-sumTitle" title=" 买家评论 199 | 销量 1531" is-link></cell>
        </div>
        <div class="zkui-product-show-evaluate-user">
          <div class="zkui-product-show-evaluate-user-msg">
            <ul>
              <li><img src="../../../../static/images/swiper/04.jpg" alt=""></li>
              <li>L**a</li>
            </ul>
          </div>
          <h4 class="zkui-product-show-evaluate-content">
            买了几百箱
          </h4>
          <h5>今天 14:11 净含量:2000g 口味:混合口味</h5>
          <div class="zkui-product-show-evaluate-img">
            <ul>
              <li>
                <img src="../../../../static/images/swiper/04.jpg" />
              </li>
              <li>
                <img src="../../../../static/images/swiper/03.jpg" />
              </li>
              <li>
                <img src="../../../../static/images/swiper/02.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
    <div class="zkui-product-show-store ">
      <div class="zkui-product-show-store-title ">
        <div class="zkui-product-show-store-title-img ">
          <img src="" alt="">
        </div>
        <div class="zkui-product-show-store-title-content ">
          特卖店
        </div>
        <div class="zkui-product-show-store-title-into">
          <span class="zkui-product-show-store-title-into_text">进入店铺</span>
        </div>
      </div>
      <div>
        <ul class="zkui-product-show-store-evaluate ">
          <li>描述相符4.8</li>
          <li>服务态度4.8</li>
          <li>发货速度5.0</li>
        </ul>
        <ul class="zkui-product-show-store-introduce clear">
          <li>
            <img src="../../../../static/images/swiper/03.jpg" alt="">
            <div>￥22.00
              <span>123</span>
            </div>
          </li>
          <li>
            <img src="../../../../static/images/swiper/03.jpg" alt="">
            <div>￥22.00
              <span>123</span>
            </div>
          </li>
          <li>
            <img src="../../../../static/images/swiper/03.jpg" alt="">
            <div>￥22.00
              <span>123</span>
            </div>
          </li>
          <li>
            <img src="../../../../static/images/swiper/03.jpg" alt="">
            <div>￥22.00
              <span>123</span>
            </div>
          </li>
          <li>
            <img src="../../../../static/images/swiper/03.jpg" alt="">
            <div>￥22.00
              <span>123</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--商品详情-->
    <div class="zkui-product-show-Btitle floor ">
      <b>
        <div class="icon">
          <m-icon name="zk-particulars" class="metal"></m-icon>
        </div>
      </b>商品详情
    </div>
    <div class="zkui-product-show-images">
      <div v-html='modelView.detail.mobileIntro'></div>
    </div>

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
            <span>评价</span>
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

    <!--推荐-->
    <div class="zkui-product-show-Btitle floor ">
      <b>
        <div class="icon">
          <m-icon name="zk-recommend" class="metal"></m-icon>
        </div>
      </b>推荐
    </div>
    <div class="zkui-product-show-recommend">
      <p>热卖推荐</p>
      <z-product-item :dataList="DatasList" :styleType="styleType"></z-product-item>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery'
  import thumbnail from './widget/show_thumbnail'
  import intro from './widget/show_intro'
  // import intro from './widget/show_intro"
  // import bar from './widget/show_bar"
  import ProductItem from 'src/components/base/zk-product-Item.vue'
  import apiService from 'src/service/api/product.api'
  import { Group } from 'zkui'
  // import VGroup from '../../../widgets/m-group/index.vue"
  // import {MProductparameter,MProductsize} from '../../../widgets'
  export default {

    data () {
      return {
        modelView: '',// 商品数据，从服务器上远程获取
        msg: '',
        istrue: true,
        isNone: false,
        sizeShow: false,
        parameterShow: false,
        thumbnails: [],
        intro: [],
        size: [],
        parameter: [],
        imagesScroll: '',
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
        imgid: ''
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
        // console.log(this.thumbnails.length)
        // console.log(this.thumbnails[0].thumbnailUrl)
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
      },
      async  getData () {
        let response = await apiService.list()
        this.DatasList = response.data.result.productItems
        this.styleType = response.data.result.styleType
      },
      menu () {
        var Btitle = $('.zkui-product-show-rolltop-center li')
        var floor = document.getElementsByClassName('floor')
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var firstTitle = document.getElementsByClassName('zkui-product-show-title')[0].offsetTop
        for (var i = 0; i < floor.length; i++) {
          if (scrollTop >= floor[i].offsetTop) {
            Btitle.eq(i).addClass('active').siblings().removeClass('active')
          }
        }
        this.showValue = false
        if (scrollTop > firstTitle - 100) {
          this.isNone = true
        } else {
          this.isNone = false
        }
      },
      onChange (val) {
        console.log('val change', val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      }
    },
    mounted () {
      this.getData()
      window.addEventListener('scroll', this.menu)
      this.GetData()
    },
    components: {
      //       VGroup,
      //       MProductparameter,
      //       MProductsize,
      //       MIcon,
      Group,
      'show-thumbnail': thumbnail,
      'show-intro': intro,
      //       'show-bar':bar,
      'z-product-item': ProductItem
    }
  }
  $(function () {
    var rollHeader = $('.zkui-product-show-rolltop-center>ul>li')
    rollHeader.click(function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
  })
</script>



<style lang="less">

</style>
