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
        let user = {
          Remark: '备注',
          Birthday: '生日',
          Address: '地址',
          Avator: 'http://www.xxx.com/j.jpg',
          NickName: '昵称',
          Sex: '1'
        }
        var response = await apiService.update(user)
        console.dir(response)
        if (response.data.status === 1) {
          this.$vux.toast.success('请求成功')
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>

