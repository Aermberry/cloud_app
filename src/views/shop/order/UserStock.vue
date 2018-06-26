<template>
  <section class="zkui-order-UserStock">
    <zk-head title='我的库存'></zk-head>
    <div class="order-UserStock-box">
      <div class="UserStock-box-tiem" v-for="(item,index) in data" :key="index">
        <router-link class="item-img" :to="'/product/show/'+item.productId">
          <img :src="item.thumbnailUrl" alt="">
        </router-link>
        <div class="item-message">
          <router-link :to="'/product/show/'+item.productId" class="message-title">
            {{item.name}}
          </router-link>
          <div class="specification-box">
            规格:
            <span class="specification " v-for="(t,i) in item.skuStocks" :key="i">{{t.propertyValueDesc}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { } from 'zkui'
  import erpService from 'src/service/api/erp.api'
  export default {
    data () {
      return {
        data: []
      }
    },
    components: {
    },
    mounted () {
      this.Getdata()
    },
    methods: {
      async Getdata () {
        let par = {
          UserId: this.LoginUser().id
        }
        console.log('this.LoginUser().id', this.LoginUser().id)
        var response = await erpService.userStock(par)
        if (response.data.status === 1) {
          this.data = response.data.result
        }
        console.log('response', response)
      }
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
        min-height: 5rem;
        padding: 0.5rem 0.5rem 0 0.5rem;
        .item-img {
          display: block;
          width: 4rem;
          height: 4rem;
          margin-right: 0.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-message {
          flex: 1;
        }
        .message-title {
          color: @black;
          flex: 1;
          display: block;
          font-weight: @font-weight-bold;
          margin-bottom: 0.5rem;
          font-size: @h5-font-size;
        }
        .specification-box {
          color: @gray-600;
          padding-bottom: 5px;
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

