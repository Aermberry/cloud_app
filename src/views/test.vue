<template>
  <section class="zkui-user-buyeraddress-index">
    <zk-head title='测试'></zk-head>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  export default {
    directives: {

    },
    components: {

    },
    mounted () {
      this.single()
    },
    methods: {
      async single () {
        var address = await apiUser.SingleAddress(this.data)
        console.log(address, 9999)
      }

    },
    data () {
      return {
        data: ''

      }
    }
  }
</script>

<style lang="less">

</style>

