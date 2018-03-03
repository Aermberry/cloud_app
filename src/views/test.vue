<template>
  <section class="zkui-reward-list">

    <zk-head title='' goBack=''></zk-head>
    <zk-foot></zk-foot>
  </section>
</template>

<script>

  export default {
    components: {

      viewModel: ''
    },
    data () {
      return {
        disabled: false
      }
    },
    mounted () {
      this.GetData()
      this.Tree()
    },
    methods: {
      onButtonClick (type) {
        alert('on button click ' + type)
      },
      handleEvents (type) {
        console.log('event: ', type)
      }
    }
  }
</script>

<style>

</style>


