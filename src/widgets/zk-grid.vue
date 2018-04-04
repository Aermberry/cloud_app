<template>
  <grid :cols="cols">
    <grid-item v-for="(item,index) in grids" :label="item.name" :svg="item.icon" :icon="item.imageUrl" :link="item.url" :key="index"></grid-item>
  </grid>
</template>

<script>
  import { Grid, GridItem } from 'zkui'
  import apiService from 'src/service/api/diy.api'
  export default {
    name: 'zk-grid',
    components: {
      Grid,
      GridItem
    },
    props: {
      cols: {
        type: Number,
        default: 4 // 样式显示方式
      },
      diykey: {
        type: String,
        default: '' // 默认Diy方式
      },
      links: {
        type: Array,
        default: null
      }
    },


    data () {
      return {
        grids: []
      }
    },
    beforeMount () {
      this.GetData()
    },
    methods: {
      async GetData () {
        if (this.diykey === undefined) {
          this.grids = this.links
        } else {
          var repsonse = await apiService.getLink(this.diykey)
          this.grids = repsonse.data.result
        }
      }
    }
  }
</script>
<style   lang="less">
  .weui-grids {
    border-bottom: 8*@rem solid rgba(229, 229, 229, 0.5);
  }
</style>

