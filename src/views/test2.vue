<template>
  <div>
    <el-upload class="avatar-uploader" :action="actionUrl" :show-file-list="false " :on-success="handleAvatarSuccess " :before-upload="beforeAvatarUpload ">
      <img v-if="imageUrl " :src="imageUrl " class="avatar ">
      <i v-else class="el-icon-plus avatar-uploader-icon "></i>
    </el-upload>
    <div @click="ceshi">123</div>
  </div>
</template>

<script>
  import { baseUrl } from 'src/service/config/env'
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
      this.data()
    },
    methods: {
      data () {
        this.actionUrl = baseUrl + '/api//common/upload'
      },
      ceshi () {
      },
      handleAvatarSuccess (res, file) {
        console.log(res, file)
        this.imageUrl = URL.createObjectURL(file.raw)
        this.imageName = res.result.saveFileName
        console.log('imageName', this.imageName)
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
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


