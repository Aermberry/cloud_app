<template>
  <div>

    <x-switch title="default" @on-change="onChange"></x-switch>

  </div>
</template>

<script>
  import { Toast, XSwitch } from 'zkui'
  export default {
    components: {
      Toast,
      XSwitch
    },
    methods: {
      onChange (val) {
        this.$vux.toast.text('hello', 'min')
      }
    }
  }
</script>
