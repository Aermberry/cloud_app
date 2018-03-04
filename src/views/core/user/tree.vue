<template>
  <section class="zkui-user-tree">

    <zk-head title='组织架构图' goBack='会员中心'></zk-head>

    <zk-foot></zk-foot>
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
        var respone = await userService.Tree()
        console.log(respone)
      }
    }
  }
</script>
