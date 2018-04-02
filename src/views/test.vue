<template>
  <div class="qwe">
    <input type="text" v-model="a">
    <input type="text" v-model="b[0][0]">
  </div>
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
