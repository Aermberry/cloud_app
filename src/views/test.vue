<template>
  <section>
    <zk-head></zk-head>

  </section>
</template>
<script>
  import userService from 'src/service/api/user.api'
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var reponse = await userService.GetCart()
        console.log(reponse)
      }
    }
  }
</script>
