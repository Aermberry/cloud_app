<template>
  <section>
    <zk-head crossover="true" search="true">
      <section slot="searchpart">
        <section class="searchpart">
          <div class="searchpart_svg">
            <svg fill="#fff">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
            </svg>
          </div>
          <div class="searchpart_input">
            <input type="text" :placeholder="reminder" />
          </div>
        </section>
      </section>
    </zk-head>
    <section class="search">
      <h1>搜索指定内容</h1>
      <ul class="clear">
        <li v-for="item in searchlist" :key="item" @click="changeValue(item.title)">{{item.title}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
  import { searchList } from 'src/service/api.js'
  export default {
    data () {
      return {
        reminder: '搜索', //
        searchlist: []		//搜索字段数据
      }
    },
    created () {

    },
    mounted () {
      searchList().then(res => {
        this.searchlist = res;
      })
    },
    computed: {

    },
    methods: {
      changeValue (title) {
        this.reminder = "搜索" + title
      }
    }
  }
</script>
<style lang="less" scoped>
  @import 'src/assets/style/sass/public';
  .searchpart {
    @include widthHeight(12rem,1.2rem);
    border-bottom: 1px solid #45c01a;
    @include justify(flex-start);
    align-items: center;
    .searchpart_svg {
      @include widthHeight(0.8rem,0.8rem);
      margin-right: 0.4693333333rem;
      svg {
        @include widthHeight(100%,100%);
      }
    }
    .searchpart_input {
      input {
        display: block;
        width: 10rem;
        line-height: 1rem;
        background: none;
        @include sizeColor(0.615rem,#fff);
      }
    }
  }
  .search {
    padding-top: 4.5rem;
    h1 {
      width: 100%;
      text-align: center;
      @include sizeColor(0.6rem,#b1b1b1);
      padding-bottom: 2.1333333333rem;
    }
    ul {
      width: 12.8rem;
      margin: 0 auto;
      box-sizing: border-box;
      li {
        float: left;
        width: 33.33%;
        border-right: 1px solid #dadada;
        text-align: center;
        @include sizeColor(0.6rem,#45c01a);
        margin-bottom: 2.24rem;
      }
      li:nth-of-type(3n + 3) {
        border-right: 0;
      }
    }
  }
</style>
