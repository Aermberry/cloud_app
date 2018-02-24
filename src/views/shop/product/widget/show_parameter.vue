<template>
  <div>
    <group class="zkui-product-show-parameter">
      <cell title="商品参数"  @click.native="show7" is-link ></cell>
      <cell title="商品参数" @click.native="showParameter = true" is-link></cell>
    </group>
    <div v-transfer-dom>
      <popup v-model="showParameter" class="showParameter" height="270*@rem" is-transparent>
        <div style="width: 100%;background-color:#fff;height:250*@rem;margin:0 auto;border-radius:5*@rem;padding-top:10px;">
        <group title="商品参数">
            <cell  v-for="(item, index) in productView.productPropertys"  :key="index"
             :title="item.propertyName" :value="item.valueName" v-if="item.isSale == false"></cell>
        </group>
         <div style="padding:10px">
          <x-button type="primary" @click.native="showParameter = false">关闭</x-button>
         </div>
        </div>
      </popup>
    </div>

  </div>
</template>
<script>
  import { Group, GroupTitle, Cell, TransferDom, Popup, XButton, XSwitch } from 'zkui'

  export default {
    components: {
     Group, Cell, TransferDom, Popup, XButton, XSwitch, GroupTitle
    },
     directives: {
    TransferDom
  },
    props: ['productView'],
  data () {
    return {
      showParameter: false
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
