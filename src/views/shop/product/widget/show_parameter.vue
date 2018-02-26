<template>
  <div>
    <group class="zkui-product-show-parameter">
     <cell :title="salePropertyTitle" @click.native="showSale = true" is-link value="白色 XL"></cell>
      <cell title="商品参数" @click.native="showParameter = true" is-link class="border-bottom"></cell>
    </group>

    <div v-transfer-dom>
      <popup v-model="showSale" class="zk-product-showSale" height="270*@rem" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;padding-top:10px;">
          <dl class="sale-info">
             <dt class="sale-info-img">
               <img :src="productView.thumbnailUrl" />
             </dt>
             <dd class="sale-info-name">{{productView.name}}</dd>
             <dd class="sale-info-price brand">{{productView.displayPrice}}
               <span class="metal">￥{{productView.marketPrice}}</span>
             </dd>
             <dd class="sale-info-stock metal">库存：{{skuStock}}</dd>
          </dl>
          <div class="sale-info-property">
          <dl class="border-bottom" v-for="(item, index) in productView.productPropertys.salePropertys" :key="index">
             <dt>{{item.name}}</dt>
             <dd>
               <ul>
                 <li class="active" v-for="sale in item.propertys" :key="sale.id">
                   <span onclick="buyInfos(this)" :propertyId="sale.propertyGuid" :valueId="sale.propertyValueGuid">{{sale.valueName}}</span>
                </li>
               </ul>
             </dd>
          </dl>
          </div>
        <group>
          <cell title="购买数量"><inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number></cell>
        </group>
         <div style="padding:10px">
         <button-tab>
          <button-tab-item type="default" @click.native="onfilter">加入购物车</button-tab-item>
          <button-tab-item type="primary"  @click.native="showSale = false">立即购买</button-tab-item>
        </button-tab>
         </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="showParameter" class="showParameter" height="270*@rem" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;padding-top:10px;">
        <group title="商品参数">
            <cell  v-for="(item, index) in productView.productPropertys.parameterPropertys"  :key="index"
             :title="item.propertyName" :value="item.valueName" v-if="item.isSale == false"></cell>
        </group>
         <div style="padding:10px">
          <x-button type="primary" @click.native="showParameter = false">完成</x-button>
         </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import { Group, GroupTitle, Cell, TransferDom, Popup, XButton, XSwitch, InlineXNumber, ButtonTab, ButtonTabItem } from 'zkui'

  export default {
    components: {
     Group, Cell, TransferDom, Popup, XButton, XSwitch, GroupTitle, InlineXNumber, ButtonTab, ButtonTabItem
    },
     directives: {
    TransferDom
  },
   props: ['productView'],
  data () {
    return {
      showParameter: false,
      showSale: false,
      skuStock: 10, // sku库存
      salePropertyTitle: '请选择：'
    }
  },
  mounted: function () {
      this.$nextTick(function () {
        this.$on('childMethod', function () {
          this.showSale = true
        })
      })
      this.init()
  },
  methods: {
    init () {
      for (var i = 0; i < this.productView.productPropertys.salePropertys.length; i++) {
         var saleName = this.productView.productPropertys.salePropertys[i].name
         this.salePropertyTitle = this.salePropertyTitle + saleName + ' '
       }
    }
  }
  }
</script>

<style lang="less">
  @import '../../../../assets/css/zkui/theme';
    @import '../../../../assets/css/zkui/mixin';
.zkui-product-show-parameter{
  .weui-cells__title{
    text-algin:center;
  }
  .weui-cells__content{
    min-heigth:240*@rem;
  }
}

.zk-product-showSale{
  .sale-info{
    height:80*@rem;
    dd{
      float:right;
      width:75%;
    }
 .sale-info-price{
    font-weight:border;
        span{
          text-decoration:line-through;
          font-weight:100;
        }
      }
    dt{
      float:left;
      width:25%;
       img{
        border-radius:0.2rem;
        width:90%;
        height:90%;
      }
    }
  }

  .sale-info-property{
    height:120*@rem;
dl{
  width:100%;
   height:60*@rem;
  dt{
    width:100%;
    height:20*@rem;
    font-weight:border;
  }
  dd{
      width:100%;
ul li.active {
    border: 1px solid @brand;
    background-color:@brand;
    color:@light;
}
ul li {
    height: 24px;
    border: 1px solid @metal;
    float: left;
    margin: 0 6px 6px 0;
    overflow: hidden;
    font-family: arial;
    border-radius:0.5rem;
}
  }

}

  }
}


</style>
