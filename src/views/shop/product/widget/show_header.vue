
<template>
  <section class="zkui-show-header">
    <x-header :left-options="{backText: '' }">
      <div class="overwrite-title-demo-bak" slot="overwrite-title">
        <button-tab>
          <button-tab-item :class="{ 'vux-button-group-current':product}" @click.native="button0Click()">
            <p>商品</p>
          </button-tab-item>
          <button-tab-item :class="{ 'vux-button-group-current':particulars}" @click.native="button1Click()">
            <p>详情</p>
          </button-tab-item>
          <button-tab-item :class="{ 'vux-button-group-current':recommend}" @click.native="button2Click()">
            <p>推荐</p>
          </button-tab-item>
          <!-- <button-tab-item>商品</button-tab-item>
          <button-tab-item>详情</button-tab-item>
          <button-tab-item>推荐</button-tab-item> -->
        </button-tab>
      </div>
    </x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </section>
</template>
<script>
  import { XHeader, TransferDom, ButtonTab, ButtonTabItem, Actionsheet } from 'zkui'
  export default {
    components: {
      XHeader, ButtonTab, ButtonTabItem, Actionsheet
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false,
        product: true,
        particulars: false,
        recommend: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      button0Click () {
        window.scrollTo(0, 0)
        this.particulars = true
        this.product = false
        this.recommend = false
      },
      button1Click () {
        var particulars = document.getElementsByClassName('zkui-product-particulars')[0].offsetTop
        window.scrollTo(0, particulars)
        this.particulars = false
        this.product = true
        this.recommend = false
      },
      button2Click () {
        var recommend = document.getElementsByClassName('zk-product-recommend')[0].offsetTop
        window.scrollTo(0, recommend)
        this.particulars = false
        this.product = false
        this.recommend = true
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var buttonTop = document.getElementsByClassName('vux-button-tab-item')
        var particulars = document.getElementsByClassName('zkui-product-particulars')[0].offsetTop
        var recommend = document.getElementsByClassName('zk-product-recommend')[0].offsetTop
        if (scrollTop >= 0) {
          this.particulars = false
          this.product = true
          this.recommend = false
        } else {
          buttonTop[0].classList.remove('vux-button-group-current')
        }
        if (scrollTop >= particulars && scrollTop <= recommend) {
          this.particulars = true
          this.product = false
          this.recommend = false
        } else {
          buttonTop[1].classList.remove('vux-button-group-current')
        }
        if (scrollTop >= recommend) {
          this.particulars = false
          this.product = false
          this.recommend = true
        } else {
          buttonTop[2].classList.remove('vux-button-group-current')
        }
      }
    }
  }
</script>
<style   lang="less">
  @import '../../../../assets/css/zkui/theme';
  @import '../../../../assets/css/zkui/mixin';
  .zkui-show-header {
    .zk-head-fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9950;
    }
    .vux-button-tab-item {
      font-weight: @font-weight-normal;
    }
    .overwrite-title-demo-bak {
      margin-top: 0.15rem;
    }
    .vux-header {
      background-color: @white;
      .vux-header-left {
        .left-arrow::before {
          border: 2px solid @gray-600;
          border-width: 2px 0 0 2px;
        }
      }
      .vux-header-title-area {
        .vux-button-tab-item {
          p {
            width: 3rem;
            margin: 0 auto;
          }
        }
        .vux-button-group-current {
          color: @brand;
          background: @white;
          p {
            height: 100%;
            border-bottom: 2px solid @brand;
          }
        }
        .vux-button-group > a.vux-button-tab-item {
          border-radius: 0;
        }
        .vux-button-group > a.vux-button-tab-item::after {
          content: none;
        }
      }
    }
  }
</style>
