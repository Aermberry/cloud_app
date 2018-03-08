<template>
  <section class="zkuiceshi">
    <div>
      <agree>阅读并同意
        <a href="javascript:void(0);">《相关条款》</a>
      </agree>
      <agree v-model="valueTrue">阅读并同意
        <a href="javascript:void(0);">《相关条款》</a>
      </agree>
    </div>
  </section>
</template>

<script>
  import { Agree } from 'zkui'
  export default {
    directives: {

    },
    components: {
      Agree
    },
    mounted () {

    },
    methods: {

    },
    data () {
      return {
        valueTrue: true
      }
    }
  }
</script>

<style lang="less">

</style>

