<template>
  <section class="zkui-reward-list">

    <zk-head title='财务记录' goBack='我的钱包'></zk-head>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/user.api'
  export default {
    data () {
      return {
        viewModel: ''
      }
    },
    mounted () {
      this.GetData()
      this.Tree()
    },
    methods: {
      async GetData () {
        var reponse = await apiService.QrCode(this.data)
        console.log(reponse.data)
        console.dir(reponse.data)
      },
      async Tree () {
        var reponse = await apiService.Tree(this.data)
        console.dir(reponse.data)
      }
    }
  }
</script>



