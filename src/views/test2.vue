<template>
  <div>
    <zk-timedown @time-end="message = '下班了'" :endTime='endTime'></zk-timedown>
    <p>{{message}}</p>
  </div>
</template>
<script>
  import { ZkTimedown } from 'widgets'
  export default {
    components: {
      ZkTimedown
    },
    data () {
      return {
        message: '正在倒计时',
        endTime: '2018-05-25 18:00:00'
      }
    },
    mounted () {

    },
    // props: {
    //   endTime: {
    //     type: String
    //   }
    // },
    methods: {
    }
  }
</script>
