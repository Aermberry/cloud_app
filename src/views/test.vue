<template>
  <div>
    <input type="text" v-model="buySkuCount[0][0]">
  </div>
</template>
<script>
  import { } from 'zkui'
  import orderService from 'src/service/api/order.api'
  export default {
    components: {

    },
    mounted () {
      this.GetData()
      console.log(this.buySkuCount)
    },
    methods: {
      async GetData () {
        let par = {
          id: 1
        }
        var showData = await orderService.show(par)
        this.data = showData.data.result
        console.log(this.data)
      }
    },
    data () {
      return {
        qwe: 200,
        bet: {
          pokerState: 53,
          pokerHistory: 'local'
        },
        buySkuCount: [[1, 2, 3], [4, 5, 6]]
      }
    },
    watch: {
      qwe: function (n, o) {
        console.log(n, o)
      },
      buySkuCount: {
        handler (newValue, oldValue) {
          console.log(newValue, oldValue)
        },
        deep: true
      }
    }
  }
</script>
<style >

</style>
