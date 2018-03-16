<template>
  <section class="zkui-order-cart">
    <zk-head title='购物车' class="zkui-order-cart-head"></zk-head>
    <!-- <checker v-model="demo6" type="checkbox" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">qwe, asd,zxc}</checker-item>
    </checker> -->
    <checker default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected" v-model="demo6">
      <checker-item v-for="i in [1]" :key="i" :value="i" type="default" @on-item-click="ceshi()"></checker-item>

    </checker>
  </section>
</template>

<script>
  import { Checker, CheckerItem, Divider, Group, Cell, Popup, TransferDom } from 'zkui'
  export default {
    data () {
      return {
        items1: [{
          key: '1',
          value: 'A'
        }, {
          key: '2',
          value: 'B'
        }, {
          key: '3',
          value: 'C'
        }],
        demo1: '',
        demo1Required: '',
        demo11: null,
        demo12: { key: '2', value: 'B' },
        demo21: null,
        demo22: [{ key: '2', value: 'B' }],
        demo23: null,
        demo1Checkbox: [2, 1],
        demo1CheckboxMax: ['2', '3'],
        demo2: '2',
        demo3: '',
        demo4: this.$t('花跟叶'),
        showPopup: false,
        demo5: 1,
        demo6: [1]
      }
    },
    directives: {
      TransferDom
    },
    components: {
      Checker,
      CheckerItem,
      Divider,
      Group,
      Cell,
      Popup
    },
    mounted () {
      this.GetData()
    },
    methods: {
      ceshi () {
        console.log(this.demo6)
      },
      GetData () {

      }
    }
  }
</script>
<style>

</style>

