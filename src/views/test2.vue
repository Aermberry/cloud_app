<template>
  <div>

  </div>
</template>

<script>
  import apiService from 'src/service/api/product.api'
  import { } from 'zkui'
  export default {
    components: {
    },
    data () {
      return {
        imageUrl: '',
        actionUrl: '',
        imageName: ''
      }
    },
    created () {
    },
    mounted () {
      this.ceshi()
    },
    methods: {
      async ceshi () {
        let params = {
          PageSize: 20,
          PageIndex: 1
        }
        let response = await apiService.groupBuylist(params)
        console.log('response', response)
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


