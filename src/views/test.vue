<template>
  <section class="test">
    <zk-head title='测试页面' class="zkui-order-cart-head"></zk-head>
  </section>
</template>
<script>
  export default {
    components: {
    },
    mounted () {
    },
    methods: {
    },
    watch: {
      a (val, oldVal) {
        console.log('a: ' + val, oldVal)
      },
      b: {
        handler (val, oldVal) {
          console.log(val, oldVal)
        },
        deep: true
      }
    },
    data () {
      return {
        a: 1,
        b: [[0, 3], [1]]
      }
    }
  }
</script>



