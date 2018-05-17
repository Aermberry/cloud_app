<template>
  <section class="zkui-order-list">

  </section>
</template>

<script>
  export default {
    data () {
      return {
        data: 'https://open.weixin.qq.com/connect/oauth2/authorize?wx3845717402bcb006&redirect_uri=http://yiqipingou.com/default&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect'
      }
    },
    created () {
    },
    mounted () {
      this.ceshi()
    },
    methods: {
      ceshi () {
        var querys = 'https://open.weixin.qq.com/connect/oauth2/authorize?wx3845717402bcb006&redirect_uri=http://yiqipingou.com/default&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect'
        var num = querys.indexOf('?')
        var str = querys.substr(num + 1)
        var arr = str.split('&')
        console.log('querys')
        console.log(querys)
        console.log('num')
        console.log(num)
        console.log('str')
        console.log(str)
        console.log('arr')
        console.log(arr)

        for (var i = 0; i < arr.length; i++) {
          // let num2 = arr[i].indexOf('=')
          console.log(arr[i].indexOf('='))
          console.log(arr[i])
          // if (num > 0) {
          //   if (arr[i].substring(0, num) === name) {
          //     var code = arr[i].substr(num + 1)
          //     return code
          //   }
          // }
        }
      }
    }
  }
</script>
