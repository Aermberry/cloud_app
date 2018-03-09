
<template>
  <x-header :left-options="{backText: this.goBack }" class="zk-head-fixed">{{this.title}}
    <slot name="right" slot="right"></slot>
  </x-header>
</template>
<script>
  import { XHeader, TransferDom } from 'zkui'
  export default {
    data () {
      return {
      }
    },
    components: {
      XHeader
    },
    directives: {
      TransferDom
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
