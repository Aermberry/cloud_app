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
  .zkui-product-show {
    padding-bottom: 2rem;
    .zkui-product-show-swiper {
      width: 100%;
      height: auto;
    }
    .zkui-product-show-title {
      background: #fff;
      padding: 0.5rem 10px 0 10*@rem;
      .zkui-product-show-title-left {
        .zkui-product-show-title-price_symbol {
          color: $brand;
          height: 1.3rem;
          padding-top: 10*@rem;
        }
        .zkui-product-show-title-price_now {
          @include sizeColor(1rem, $brand);
        }
        .zkui-product-show-title-price_old {
          margin-left: 5*@rem;
          text-decoration: line-through;
          @include sizeColor($H4Size, $metal);
        }
      }
      .zkui-product-show-title-right {
        margin-top: 0.2rem;
      }
    }
    .zkui-product-show-title-content {
      background: #fff;
      padding: 0 10px 0.2rem 10*@rem;
      border-bottom: 1px solid #e5e5e5;
      @include sizeColor($H1Size, $sc);
    }
    .zkui-product-show-serve-box {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      height: 1.5rem;
      li {
        color: $sc;
        margin-left: 0.5rem;
        line-height: 1.5rem;
      }
      li.zkui-product-show-serve-item-more {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: right;
        padding-right: 10*@rem;
      }
      .zkui-product-show-serve-item-more_icon {
        display: inline-block;
        font-size: 1rem;
        line-height: 0.5rem;
      }
    }
    .zkui-product-show-parameter {
      div {
        @include sizeColor($H2Size, $sc);
      }
      div.weui-cell__ft:after {
        border-color: $sc;
      }
    }
    .zkui-product-show-size {
      height: 2rem;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      background: #fff;
      padding: 0 10*@rem;
      border-bottom: 1px solid #e5e5e5;
      .zkui-product-show-parameter-left {
        height: 100%;
        line-height: 2rem;
        @include sizeColor($H1Size, $sc);
      }
      .zkui-product-show-parameter-right {
        text-align: right;
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 100%;
        line-height: 2rem;
        font-weight: bold;
        @include sizeColor($H1Size, $sc);
      }
    }
    .zkui-product-show-size {
      margin-top: 0.5rem;
    }
    .zkui-product-show-parameter-pop_up {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9999;
      padding-bottom: 0.5rem;
      width: 100%;
      min-height: 70vh;
      background: #fff;
      border-top: 1px solid #e5e5e5;
      .zkui-product-show-parameter-pop_up-box {
        height: 70vh;
        position: relative;
        padding-bottom: 2rem;
      }
      .zkui-product-show-parameter-pop_up-box > h2 {
        text-align: center;
        @include sizeColor($H2Size, $sc);
        @include widthHeight(100%, 2rem);
        line-height: 2rem;
        border-bottom: 1px solid #e5e5e5;
      }
      .zkui-product-show-parameter-pop_up-list {
        margin-top: 0.5rem;
        background: #fff;
        padding: 0 10*@rem;
        .zkui-product-show-parameter-pop_up-list-left {
          float: left;
          @include widthHeight(20%, 2rem);
          line-height: 2rem;
          text-align: left;
          font-size: $H3Size;
          padding: 5*@rem;
        }
        .zkui-product-show-parameter-pop_up-list-right {
          float: left;
          @include widthHeight(75%, 2rem);
          line-height: 2rem;
          text-align: left;
          padding: 5*@rem;
          @include sizeColor($H3Size, $sc);
        }
      }
      .zkui-product-show-parameter-pop_up-list > li {
        border: 1px solid #e5e5e5;
      }
      .zkui-product-show-parameter-pop_up-close {
        position: absolute;
        top: 10*@rem;
        right: 10*@rem;
      }
      .zkui-product-show-parameter-pop_up-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2rem;
      }
      .zkui-product-show-parameter-pop_up-bottom > button {
        width: 100%;
        height: 100%;
        font-size: 0.708rem;
        color: #fff;
        background: #e60144;
      }
    }
    .zkui-product-show-size-pop_up {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9999;
      width: 100%;
      min-height: 70vh;
      background: #fff;
      padding: 0.5rem;
      border-top: 1px solid #e5e5e5;
      .zkui-product-show-size-pop_up-box {
        position: relative;
        height: 70vh;
        padding-bottom: 2rem;
      }
      .zkui-product-show-size-pop_up-product {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 4rem;
        .zkui-product-show-size-pop_up-product-left > img {
          width: 4rem;
          height: 4rem;
        }
        .zkui-product-show-size-pop_up-product-right {
          -ms-flex: 1;
          -moz-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          padding-top: 1rem;
          padding-left: 10*@rem;
        }
        .zkui-product-show-size-pop_up-product-right > p {
          @include sizeColor($H2Size, $sc);
        }
        .zkui-product-show-size-pop_up-product-right > h2 {
          @include sizeColor($H2Size, #e60144);
        }
      }
      .zkui-product-show-size-pop_up-color,
      .zkui-product-show-size-pop_up-yard {
        margin-top: 0.5rem;
        border-bottom: 1px solid #e5e5e5;
      }
      .zkui-product-show-size-pop_up-color > h2,
      .zkui-product-show-size-pop_up-yard > h2 {
        @include sizeColor($H2Size, $sc);
      }
      .zkui-product-show-size-pop_up-color > ul,
      .zkui-product-show-size-pop_up-yard > ul {
        margin-top: 10*@rem;
      }
      .zkui-product-show-size-pop_up-color > ul > li,
      .zkui-product-show-size-pop_up-yard > ul > li {
        float: left;
        background: #e5e5e5;
        padding: 5px 8*@rem;
        margin-right: 10*@rem;
        margin-bottom: 10*@rem;
        border-radius: 10*@rem;
        @include sizeColor($H4Size, $sc);
      }
      .zkui-product-show-size-pop_up-color > ul > li.active,
      .zkui-product-show-size-pop_up-yard > ul > li.active {
        background: #e60144;
        color: #fff;
      }
      .zkui-product-show-size-pop_up-quantity {
        height: 2rem;
        border-bottom: 1px solid #e5e5e5;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
      }
      .zkui-product-show-size-pop_up-quantity-title {
        @include sizeColor($H2Size, $sc);
        height: 100%;
        line-height: 2rem;
      }
      .zkui-product-show-size-pop_up-quantity-control {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: right;
        line-height: 2rem;
      }
      .zkui-product-show-size-pop_up-quantity-control > button {
        @include widthHeight(1rem, 1rem);
        background: #e5e5e5;
      }
      .zkui-product-show-size-pop_up-quantity-button {
        position: absolute;
        bottom: 0;
        left: 0;
        @include widthHeight(100%, 2rem);
      }
      .zkui-product-show-size-pop_up-quantity-button > button {
        @include widthHeight(100%, 100%);
        @include sizeColor($H2Size, #fff);
        background: #e60144;
      }
      .zkui-product-show-size-pop_up-close {
        position: absolute;
        top: 10*@rem;
        right: 10*@rem;
      }
    }
    .zkui-product-show-store {
      background: #fff;
      margin-top: 0.5rem;
      .zkui-product-show-store-title {
        padding: 10px 10*@rem;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        .zkui-product-show-store-title-img {
          @include widthHeight(2rem, 2rem);
        }
        .zkui-product-show-store-title-content {
          margin-left: 10*@rem;
          height: 2rem;
          line-height: 2rem;
          @include sizeColor($H2Size, $sc);
        }
        .zkui-product-show-store-title-into {
          text-align: right;
          -ms-flex: 1;
          -moz-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          height: 2rem;
          padding-right: 10*@rem;
          .zkui-product-show-store-title-into_text {
            display: inline-block;
            height: 1.2rem;
            position: relative;
            padding: 5px 5*@rem;
            background: #e60044;
            @include sizeColor($H4Size, #fff);
          }
          .zkui-product-show-store-title-into_text:before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            right: -0.6rem;
            top: 0;
            border-top: 0.6rem solid transparent;
            border-bottom: 0.6rem solid transparent;
            border-left: 0.6rem solid #e60044;
          }
        }
      }
      .zkui-product-show-store-evaluate {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
      }
      .zkui-product-show-store-evaluate > li {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: $H4Size;
      }
      .zkui-product-show-store-introduce {
        overflow-x: auto;
        white-space: nowrap;
      }
      .zkui-product-show-store-introduce > li {
        display: inline-block;
        padding: 0 10px 10px 10*@rem;
        width: 5.5rem;
      }
      .zkui-product-show-store-introduce > li > img {
        width: 5.5rem;
        height: 5.5rem;
      }
      .zkui-product-show-store-introduce > li > div {
        text-align: center;
        @include sizeColor($H2Size, #e60044);
      }
      .zkui-product-show-store-introduce > li > div > span {
        padding-left: 5*@rem;
        text-decoration: line-through;
        @include sizeColor($H4Size, #979797);
      }
    }
    .zkui-product-show-images {
      font-size: 0 !important;
      img {
        width: 100%;
      }
    }
    .zkui-product-show-bottom {
      width: 100%;
      height: 2rem;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      .zkui-product-show-bottom-left {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 100%;
        text-align: center;
      }
      .zkui-product-show-bottom-left > li {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding: 5*@rem;
        background: #fff;
        height: 100%;
      }
      .zkui-product-show-bottom-left > li > a {
        display: block;
      }
      .zkui-product-show-bottom-left > li div {
        margin: 0 auto;
        @include widthHeight(1rem, 1rem);
      }
      .zkui-product-show-bottom-left > li p {
        font-size: $SmallSize;
      }
    }
    .zkui-product-show-bottom > ul {
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      width: 100%;
      height: 100%;
    }
    .zkui-product-show-bottom-left-box {
      -ms-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
    }
    .zkui-product-show-bottom-right,
    .zkui-product-show-bottom-center {
      @include widthHeight(27%, 100%);
      text-align: center;
      line-height: 2rem;
    }
    .zkui-product-show-bottom-right > a,
    .zkui-product-show-bottom-center > a {
      @include sizeColor($H3Size, #fff);
    }
    .zkui-product-show-bottom-center {
      background: #ff888e;
    }
    .zkui-product-show-bottom-right {
      background: #e60144;
    }
    .zkui-product-show-rolltop {
      opacity: 0;
      transition: all 0.5s linear;
      background: #fff;
      @include widthHeight(100%, 2.2rem);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      @include zk-border-bottom;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      .zkui-product-show-rolltop-left {
        width: 20%;
        padding-left: 10*@rem;
        font-weight: bold;
        padding-top: 1rem;
        height: 2rem;
        @include sizeColor($H1Size, $sc);
        .zkui-product-show-rolltop-left-icon {
          width: 0.5rem;
          height: 0.5rem;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
      .zkui-product-show-rolltop-center {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
      }
      .zkui-product-show-rolltop-center > ul {
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        line-height: 2.2rem;
      }
      .zkui-product-show-rolltop-center > ul > li {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
      }
      .zkui-product-show-rolltop-center > ul > li > span {
        @include sizeColor($H3Size, $sc);
        padding: 5px 0;
      }
      .zkui-product-show-rolltop-center > ul > li.active > span {
        @include sizeColor($H3Size, #e60144);
        border-bottom: 1px solid #e60144;
      }
      .zkui-product-show-rolltop-right {
        width: 20%;
        line-height: 2.2rem;
      }
    }
    .zkui-product-show-rolltop_icon {
      @include widthHeight(100%, 2.2rem);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      line-height: 2.2rem;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      div {
        line-height: 2.2rem;
        .icon {
          margin-top: 0.3rem;
          svg {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
          }
          @include widthHeight(1rem, 1rem);
        }
      }
      div:nth-child(2) {
        -ms-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
      }
      .zkui-product-show-rolltop_icon-left {
        padding-left: 10*@rem;
      }
      .zkui-product-show-rolltop_icon-right {
        text-align: right;
        ul {
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          height: 100%;
          li {
            -ms-flex: 1;
            -moz-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            padding-right: 0.5rem;
            height: 100%;
            position: relative;
            .icon {
              display: block;
              border-radius: 50%;
              @include widthHeight(1rem, 1rem);
              svg {
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
              }
            }
            .zkui-product-show-rolltop_icon-more {
              position: absolute;
              top: 1.6rem;
              right: 5*@rem;
              width: 2.5rem;
              border: 1px solid rgba(255, 255, 255, 0.7);
              a {
                @include widthHeight(100%, 1.3rem);
                display: block;
                border: 1px solid rgba(255, 255, 255, 0.7);
                line-height: 1.3rem;
                text-align: center;
                background: rgba(0, 0, 0, 0.7);
                color: $white;
              }
            }
          }
        }
      }
    }
    .zkui-product-show-recommend {
      background: $white;
      p {
        padding: 0 10*@rem;
        @include widthHeight(100%, 2rem);
        line-height: 2rem;
        @include sizeColor($H2Size, $sc);
        border-bottom: 1px solid rgba(229, 229, 229, 0.4);
      }
    }
    .isnone {
      opacity: 1;
    }
    .zkui-product-show-Btitle {
      @include widthHeight(100%, 1.5rem);
      font-size: $H4Size;
      text-align: center;
      line-height: 1.5rem;
      b {
        display: inline-block;
        @include widthHeight(0.6rem, 0.6rem);
      }
    }
    .zkui-product-show-evaluate {
      a {
        display: block;
        background: $white;
        .zkui-product-show-evaluate-sum {
          .zkui-product-show-evaluate-sumTitle {
            label {
              @include sizeColor($H2Size, $sc);
            }
            div.weui-cell__ft:after {
              border-color: $sc;
            }
          }
          ul {
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            li {
              -ms-flex: 1;
              -moz-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              font-size: $NomarlSize;
            }
            li:last-child {
              text-align: right;
              @include sizeColor($H1Size, $sc);
              font-weight: bold;
            }
          }
        }
        .zkui-product-show-evaluate-user {
          padding: 0 10px 10px 10*@rem;
          .zkui-product-show-evaluate-user-msg {
            @include widthHeight(100%, 2rem);
            line-height: 2rem;
            ul {
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              li {
                margin-right: 5*@rem;
                height: 2rem;
                @include sizeColor($H4Size, $sc);
                img {
                  border-radius: 50%;
                  @include widthHeight(2rem, 2rem);
                }
              }
            }
          }
          .zkui-product-show-evaluate-content {
            @include sizeColor($H3Size, $sc);
            margin-top: 10*@rem;
          }
          .zkui-product-show-evaluate-img {
            margin-top: 10*@rem;
            ul {
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              li {
                @include widthHeight(3rem, 3rem);
                margin-right: 5*@rem;
                img {
                  @include widthHeight(3rem, 3rem);
                }
              }
            }
          }
        }
      }
    } //过度动画
    .bounce-enter-active {
      animation: bounce-in 0.4s;
    }
    .bounce-leave-active {
      animation: bounce-in 0.4s reverse;
    }
    @keyframes bounce-in {
      0% {
        opacity: 0;
        transform: translateY(70vh);
      }
      100% {
        opacity: 1;
        transform: translateY(0vh);
      }
    }
  }
</style>
