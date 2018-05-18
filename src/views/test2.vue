<template>
  <section class="ZKProductItem">
    <div class="point-tab222">
      <ul>
        <li>
          <router-link to="">
            限时秒杀
          </router-link>
        </li>
        <li>
          <router-link to="">
            进口美妆
          </router-link>
        </li>
        <li>
          <router-link to="">
            母婴用品
          </router-link>
        </li>
        <li>
          <router-link to="">
            休闲零食
          </router-link>
        </li>
        <li>
          <router-link to="">
            洗涤用品
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ceshi">
      <ul>
        <li>
          <h1>1</h1>
        </li>
        <li>
          <h1>2</h1>
        </li>
        <li>
          <h1>3</h1>
        </li>
        <li>
          <h1>4</h1>
        </li>
      </ul>
    </div>
    <div class="zkui-product-item__1 " ref="itemBNoxs" style="width:100%">
      <ul class="item-box">
        <li v-for="(item,index) in dataList" :key="index">
          <dl>
            <dt>
              <router-link to="">
                <x-img :src="item.thumbnailUrl" :alt="item.thumbnailUrl"></x-img>
              </router-link>
            </dt>
            <dd class="itemTitle">
              <router-link to="">
                {{item.name}}
              </router-link>
            </dd>
            <dd class="itemPrice">
              <div>
                ￥{{item.displayPrice}}
                <span v-if="item.marketPrice!==0">￥{{item.marketPrice}}</span>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import { XImg } from 'zkui'
  import apiService from 'src/service/api/product.api'
  export default {
    components: {
      XImg
    },
    data () {
      return {
        dataList: ''
      }
    },
    created () {

    },
    mounted () {
      this.ceshi()
    },
    methods: {
      async ceshi () {
        // this.$refs.itemBNoxs.style.width = document.body.clientWidth + 'px'
        // console.log(this.$refs.itemBNoxs.style)
        var response = await apiService.list()
        console.log(response)
        this.dataList = response.data.result.productItems
      }
    }
  }
</script>

<style lang="less">

  .zkui-product-item__1 {
    background: #ffffff;
    overflow: hidden;
    ul::after {
      content: '';
      display: block;
      clear: both;
    }
    ul {
      display: flex;
      padding-bottom: 10 * @rem;
      overflow: auto;
    }
    li {
      display: block;
      float: left;
      // height: 20rem;
      margin: 2% 0 0 2%;
      padding-bottom: 0.3rem;
      border-radius: 2 * @rem;
      border: 1px solid rgba(229, 229, 229, 0.4);

      dl {
        width: 12rem;
        a {
          display: block;
          img {
            width: 100%;
            display: block;
          }
        }

        .itemTitle {
          a {
            display: block;
            margin: 0.3rem 0.3rem 0.1rem 0.3rem;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            color: @black;
            font-size: 14px;
            height: 40px;
          }
        }
        .itemPrice {
          padding-left: 0.3rem;
          height: 3rem;
          div {
            display: flex;
            color: @brand;
            height: 2.5rem;
            margin-left: -0.2rem;
            font-size: @h6-font-size;
            flex-wrap: wrap;
            span {
              padding-left: 5px;
              text-decoration: line-through;
              color: @gray-600;
              font-size: @h6-font-size;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              font-weight: normal;
            }
          }
        }
      }
    }
    li.yqp-item {
      dl {
        .itemPrice {
          height: auto;
          div {
            height: 1.5rem;
            font-size: @h5-font-size;
          }
        }
      }
    }
  }
</style>

