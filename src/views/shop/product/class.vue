<template>
  <section class="zkui-shop-product-class">
    <!-- 头部 -->
    <zk-head :title='title' :goBack='goBack'></zk-head>

    <div class="zkui-shop-product-class-search">
      <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
          <router-link to="/product/search">
            <search placeholder="搜索您想要的商品"></search>
          </router-link>
        </form>
      </div>
    </div>
    <div class="zkui-shop-product-class-box">
      <div class="zkui-shop-product-class-left">
        <div>
          <ul class="clear">
            <li v-for="(item,index) in listDatas" :key="item.id" :class="{'active':flag==index,'zkui-shop-product-class-left_li':true}" @click="light(index)">{{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="zkui-shop-product-class-right">
        <div class="zkui-shop-product-class-item" v-for="item in listDatas" :key="item.id">
          <h3 ref="menutitle" class="zkui-shop-product-class-item_title">{{item.name}}</h3>
          <ul class="clear">
            <li v-for="child in item.childClass" :key="child.id">
              <router-link :to="'/product/list/'+child.id">
                <img :src="child.icon" alt="">
                <p>{{child.name}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <zk-foot></zk-foot>
  </section>
</template>



<script>
  /* eslint-disable */
  import $ from 'jquery'
  import apiService from 'src/service/api/product.api'
  import { Search } from 'zkui'
  export default {
    components: {
      Search
    },
    data () {
      return {
        listDatas: [],
        flag: 0,
        title: '商品分类',
        goBack: ''
      }
    },
    mounted () {
      this.getData()
      // 滚动监听
      window.addEventListener('scroll', this.menu)
    },
    methods: {
      async  getData () {
        let response = await apiService.class()
        this.listDatas = response.data.result
        //       console.dir(this.listDatas) // 通过这个来查看数据结构
      },
      // 左边栏切换active
      light: function (index) {
        this.flag = index
        //右边栏的标题
        var itemTitle = document.getElementsByClassName('zkui-shop-product-class-item_title')
        var headerHeight = $('.zk-head').height() + $('.zkui-shop-product-class-search').height()
        $('html , body').animate({ scrollTop: itemTitle[index].offsetTop - headerHeight }, 1000)
        //
      },
      // 滚动事件
      menu () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var itemTitle = document.getElementsByClassName('zkui-shop-product-class-item_title')
        var leftLi = document.getElementsByClassName('zkui-shop-product-class-left_li')
        var headerHeight = $('.zk-head').height() + $('.zkui-shop-product-class-search').height()
        for (var i = 0; i < itemTitle.length; i++) {
          if (scrollTop >= itemTitle[i].offsetTop - headerHeight - 10) {
            for (var j = 0; j < leftLi[i].parentNode.childNodes.length; j++) {
              (leftLi[i].parentNode.childNodes)[j].classList.remove('active')
            }
            leftLi[i].classList.add('active')

          }
        }

      }

    }
  }


  $(function () {
    //  搜索框js
    var $searchBar = $('#searchBar')
    var $searchResult = $('#searchResult')
    var $searchText = $('#searchText')
    var $searchInput = $('#searchInput')
    var $searchClear = $('#searchClear')
    var $searchCancel = $('#searchCancel')

    function hideSearchResult () {
      $searchResult.hide()
      $searchInput.val('')
    }

    function cancelSearch () {
      hideSearchResult()
      $searchBar.removeClass('weui-search-bar_focusing')
      $searchText.show()
    }

    $searchText.on('click', function () {
      $searchBar.addClass('weui-search-bar_focusing')
      $searchInput.focus()
    })
    $searchInput
      .on('blur', function () {
        if (!this.value.length) cancelSearch()
      })
      .on('input', function () {
        if (this.value.length) {
          $searchResult.show()
        } else {
          $searchResult.hide()
        }
      })
    $searchClear.on('click', function () {
      hideSearchResult()
      $searchInput.focus()
    })
    $searchCancel.on('click', function () {
      cancelSearch()
      $searchInput.blur()
    })


    //    设置图片正方形
    $('img').height($('img').width())

    var headerHeight = $('.zk-head').height() + $('.zkui-shop-product-class-search').height()
    var footerHeight = $('.zkui-foot').height()
    //    动态设置高度
    $('.zkui-shop-product-class-left >div').height($(window).height() - headerHeight - footerHeight)
    $('.zkui-shop-product-class-left >div>ul').height($(window).height() - headerHeight - footerHeight)
    $('.zkui-shop-product-class-left ul').css('top', headerHeight)

  })

</script>
<style lang="less">
  // @import 'zkui/src/styles/zkui.less';
  // //全局变量CSS，颜色，大小，边框，尺寸，尽量使用变量库里头的变量，请悉知所有变量
  // .zkui-shop-product-class {
  //   .zkui-shop-product-class-search {
  //     height: 44*@rem;
  //     .weui-search-bar {
  //       position: fixed;
  //       width: 100%;
  //       top: 2.06933rem;
  //       left: 0;
  //       height: 44*@rem;
  //       background-color: #f6f6f6;
  //       .weui-search-bar__box .icon-search {
  //         position: absolute;
  //         left: 10*@rem;
  //         top: 0;
  //         line-height: 28*@rem;
  //       }
  //     }
  //     .icon-search {
  //       .widthheight(20px,20px);
  //       vertical-align: middle;
  //       float: left;
  //       padding-top: 0.2rem;
  //       padding-left: 0.3rem;
  //     }
  //     .word {
  //       float: left;
  //       padding-left: 0.3rem;
  //       padding-top: 0.1rem;
  //     }
  //   }
  //   .zkui-shop-product-class-box {
  //     display: -moz-box;
  //     display: -ms-flexbox;
  //     display: -webkit-box;
  //     display: -webkit-flex;
  //     display: flex;
  //     background-color: #efeff4;
  //     .zkui-shop-product-class-left {
  //       width: 3.5rem;
  //       overflow: hidden;
  //       div {
  //         width: 3.5rem;
  //         overflow: hidden;
  //         height: 70vh;
  //         position: fixed;
  //         left: 0;
  //       }
  //       ul {
  //         width: 4.5rem;
  //         height: 70vh;
  //         overflow-y: auto;
  //         li {
  //           float: left;
  //           .widthheight(3.5rem,2rem);

  //           // @include zk-border-bottom;
  //           // .sizeColor($,$sc);
  //           line-height: 2rem;
  //           cursor: pointer;
  //           text-align: center;
  //           overflow: hidden;
  //           background: #f6f6f6;
  //         }
  //         li.active {
  //           //background: $white;
  //           color: @brand;
  //         }
  //       }
  //     }
  //     .zkui-shop-product-class-right {
  //       -ms-flex: 1;
  //       -moz-box-flex: 1;
  //       -webkit-flex: 1;
  //       flex: 1;
  //       //background: $white;
  //       h3 {
  //         // @include widthHeight(100%,2rem);
  //         line-height: 2rem;
  //         // color: $sc;
  //         font-weight: bold;
  //         padding-left: 10*@rem;
  //         // @include zk-border-bottom;
  //         // @include zk-border-top;
  //       }
  //       ul {
  //         li {
  //           float: left;
  //           width: 33%;
  //           padding: 0.5rem;
  //           text-align: center;
  //           img {
  //             display: block;
  //             //  @include widthHeight(2.65rem,2.65rem);
  //             margin: 0 auto;
  //             border-radius: 50%;
  //           }
  //           p {
  //             margin-top: 0.3rem;
  //             //  @include sizeColor($H4Size,$sc);
  //             text-align: center;
  //             word-break: break-all;
  //             text-overflow: ellipsis;
  //             display: -webkit-box;
  //             -webkit-box-orient: vertical;
  //             -webkit-line-clamp: 1;
  //             overflow: hidden;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
</style>
