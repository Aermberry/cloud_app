
<template>
  <div class="yqpimg">
    <div v-for="(item,index) in singImg" :key="index">
      <router-link :to="item.url">
        <img :src="item.imageUrl">
      </router-link>
    </div>
  </div>
</template>
<script>
  import apiService from 'src/service/api/diy.api'
  export default {
    name: 'zk-singlead',
    props: {
      diykey: {
        type: String,
        default: '' // 默认Diy方式
      }
    },
    components: {
    },
    data () {
      return {
        singImg: ''
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var response = await apiService.getLink(this.diykey)
        this.singImg = response.data.result
      }
    }
  }
</script>
<style lang="less">
  .yqpimg {
    width: 100%;
    a {
      width: 100%;
      height: 180px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
