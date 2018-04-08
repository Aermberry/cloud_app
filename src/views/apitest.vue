<template>
  <section>
    <zk-head title="Api接口测试"></zk-head>
    <zk-foot></zk-foot>
  </section>
</template>
<script>

  import apiService from 'src/service/api/user.api'
  export default {
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        // let user = {
        //   Remark: '2018年2月28日 备注',
        //   Birthday: '',
        //   Address: '地址',
        //   Avator: 'http://www.xxx.com/j.jpg',
        //   NickName: '昵称',
        //   Sex: '1'
        // }
        // var response = await apiService.miniProgramLogin(user)
        // console.dir(response)
        // if (response.data.status === 1) {
        //   this.$vux.toast.success('请求成功')
        // } else {
        //   this.$vux.toast.warn(response.data.message)
        // }
        let style = {
          DataType: 'topline'
        }
        var response = await apiService.topline(style)
        console.log(response)
      }
    }
  }
</script>

