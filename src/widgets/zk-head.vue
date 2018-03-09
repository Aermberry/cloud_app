
<template>
  <x-header :left-options="{backText: this.goBack }" class="zk-head-fixed">{{headerTitle}}
    <slot name="right" slot="right"></slot>
  </x-header>
</template>
<script>
  import { XHeader, TransferDom } from 'zkui'
  export default {
    data () {
      return {
        headerTitle: '' // 头部标题
      }
    },
    components: {
      XHeader
    },
    directives: {
      TransferDom
    },
    mounted () {
      this.setTitle()
    },
    methods: {
      // 设置标题
      setTitle () {
        if (this.title === undefined) {
          if (this.$route.meta !== undefined) {
            let routerTitle = this.$route.meta.title
            if (routerTitle !== undefined) {
              this.headerTitle = routerTitle
              // console.info('路由信息', this.$router)
            }
          }
        } else {
          this.headerTitle = this.title
        }
      }
    },
    props: ['title', 'goBack']
  }
</script>
<style>
  .zk-head-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9950;
  }
</style>
