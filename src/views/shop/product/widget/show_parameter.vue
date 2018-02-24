<template>
  <div>
    <group class="zkui-product-show-parameter">
     <cell title="请选择：颜色、尺码" @click.native="showSale = true" is-link value="白色 XL"></cell>
      <cell title="商品参数" @click.native="showParameter = true" is-link class="border-bottom"></cell>
    </group>

    <div v-transfer-dom>
      <popup v-model="showSale" class="showSale" height="270*@rem" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;padding-top:10px;">
        <group title="商品参数">
            <cell  v-for="(item, index) in productView.productPropertys"  :key="index"
             :title="item.propertyName" :value="item.valueName" v-if="item.isSale == false"></cell>
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
            <cell  v-for="(item, index) in productView.productPropertys"  :key="index"
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
   props: ['productView', 'showSaleState'],
  data () {
    return {
      showParameter: false,
      showSale: false
    }
  },
   mounted () {
      this.showSaleModel()
    },
    watch: {
       showSaleModeld () {
       console.dir(this.showSaleState)
       this.showSale = this.showSaleState
     }
    },
   methods: {
     showSaleModel () {
       console.dir(this.showSaleState)
       if (this.showSaleState !== undefined) {
          this.showSale = this.showSaleState
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
</style>
