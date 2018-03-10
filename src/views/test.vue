<template>
  <section>
    <zk-head></zk-head>
    <checker v-model="demo6" default-item-class="check-icon-item" type="checkbox" selected-item-class="check-icon-item-selected">
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i" type="default">{{[i - 1]}}</checker-item>
    </checker>

  </section>
</template>
<script>
  import { Checker, CheckerItem } from 'zkui'
  export default {
    data () {
      return {
        demo6: [2, 3]
      }
    },
    components: {
      Checker,
      CheckerItem
    },
    mounted () {
      // this.storeProductCheck()
    },
    methods: {
      // 店铺商品选择事件
      storeProductCheck (item, id) {
        console.info(item, id)
      }
    }
  }
</script>

