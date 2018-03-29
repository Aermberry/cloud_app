<template>
  <div>
    <div class="wqe" @click="clikcsss"></div>
    <agree>阅读并同意
      <a href="javascript:void(0);">《相关条款》</a>
    </agree>
    <agree v-model="valueTrue">阅读并同意
      <a href="javascript:void(0);">《相关条款》</a>
    </agree>
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </div>
</template>
<script>
  import { Agree } from 'zkui'
  import helper from 'src/service/common/helper'
  export default {
    data () {
      return {
        valueTrue: true,
        checked: true
      }
    },
    components: {
      Agree
    },
    methods: {
      clikcsss () {
        helper.checkLogin(true)
      }
    }
  }
</script>
<style>
  .wqe {
    width: 200px;
    height: 200px;
    background: #000;
  }
</style>

