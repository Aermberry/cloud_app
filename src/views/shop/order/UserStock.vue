<template>
  <section class="zkui-order-UserStock">
    <zk-head title='我的库存'></zk-head>
    <div class="order-UserStock-box">
      <div class="UserStock-box-tiem">
        <div class="item-img"></div>
        <div class="item-message">
          <router-link to="" class="message-title">
            体验商品
          </router-link>
          <p class="specification ">规格:</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { } from 'zkui'
  export default {
    data () {
      return {
      }
    },
    components: {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style  lang="less">
  .zkui-order-UserStock {
    .order-UserStock-box {
      .UserStock-box-tiem {
        margin-top: 0.5rem;
        border: 1px solid rgba(229, 229, 229, 0.7);
        display: flex;
        height: 5rem;
        padding: 0.5rem 0.5rem 0 0.5rem;
        .item-img {
          width: 4rem;
          height: 4rem;
          margin-right: 0.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .message-title {
          color: @black;
          flex: 1;
          display: block;
          font-weight: @font-weight-bold;
          margin-bottom: 0.5rem;
        }
        .specification {
          color: @gray-600;
          padding-left: 0.5rem;
          font-size: @h6-font-size;
        }
      }
    }
  }
</style>

