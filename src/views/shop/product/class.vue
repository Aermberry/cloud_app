<template>
  <section class="zkui-shop-product-class">

    <zk-head :title='title' :goBack='goBack'></zk-head>

    <router-link to="/product/search">
      <search placeholder="搜索您想要的商品" cancel-text="取消" :auto-fixed="false"></search>
    </router-link>

    <div class="zk-class-tab">
      <tab :line-width=2 active-color='#fc378c' v-model="index" class="zk-class-tab-left">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false" class="zk-class-tab-right">
        <swiper-item v-for="(items, indexs) in listDatas" :key="indexs">
          <grid :cols="3">
            <h1>{{items.name}}</h1>
            <grid-item v-for="(item,index) in items.childClass" :key="index">
              <img :src="item.icon">
              <p>{{item.name}}</p>
            </grid-item>
          </grid>

        </swiper-item>
      </swiper>
    </div>

  </section>
</template>



<script>
  /* eslint-disable */
  import $ from 'jquery'
  import apiService from 'src/service/api/product.api'
  import { Search, Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, Grid, GridItem, GroupTitle, MIcon } from 'zkui'
  export default {
    components: {
      Search,
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      Grid,
      GridItem,
      GroupTitle,
      MIcon
    },
    data () {
      return {
        listDatas: [],
        flag: 0,
        title: '商品分类',
        goBack: '',
        list2: [],
        demo2: '服装',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
    mounted () {
      this.getData()
      var leftBottom = document.getElementsByClassName('vux-tab-ink-bar');
      console.log(leftBottom)
      console.log(leftBottom.style.display = 'none')
    },
    methods: {
      async  getData () {
        let response = await apiService.class()
        this.listDatas = response.data.result
        console.dir(this.listDatas) // 通过这个来查看数据结构
        for (var i = 0; i < this.listDatas.length; i++) {
          this.list2.push(this.listDatas[i].name)
        }
      },
      menu () {

      },
      switchTabItem (index) {
        console.log('on-before-index-change', index)
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 1000)
      },
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
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
  })

</script>
<style lang="less">
  .zkui-shop-product-class {
    height: 100vh;
  }
  .zk-class-tab {
    width: 100%;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: auto;
  }
  .zk-class-tab-left .vux-tab-item {
    height: 3.2143rem !important;
  }
  .zk-class-tab-left {
    width: 5.3571rem;
    height: 82vh !important;
    display: block !important;
    overflow-y: auto;
  }
  .zk-class-tab-left::-webkit-scrollbar {
    display: none;
  }
  .zk-class-tab-right {
    -ms-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }

  .weui-grids::after,
  .weui-grids::before {
    content: none;
  }
  .weui-grid::after,
  .weui-grid::before {
    content: none;
  }
  .weui-grids > .weui-grid {
    text-align: center;
    padding: 0.7143rem 0.7143rem;
  }
  .weui-grids > .weui-grid > img {
    display: block;
    width: 4.2857rem;
    height: 4.2857rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
  }
  .weui-grids > .weui-grid > p {
    font-size: 1.1429rem;
    margin: 0.3571rem;
    color: black;
  }
  .weui-grids > h1 {
    padding: 0 0.7143rem;
    line-height: 3.66666667rem;
    height: 3.2143rem;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid #e5e5e5;
  }
  .vux-swiper {
    height: 82vh !important;
  }
</style>
