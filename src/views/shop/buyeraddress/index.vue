<template>
  <section class="zkui-user-buyeraddress-index">
<<<<<<< HEAD
    <zk-head title='收货地址' goBack='会员中心'></zk-head>
    <div style="margin-top:20*@rem;">
      <form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
    </div>
=======

    <zk-head title='收货地址' goBack='会员中心'></zk-head>

>>>>>>> 20bd2e3b00b8fb6a468336953ad392d78983e2f4
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  import { FormPreview } from 'zkui'
  export default {
    components: {
      FormPreview
    },
    data () {
      return {
<<<<<<< HEAD
        list: [{
          label: '商品',
          value: '电动打蛋机'
        },
        {
          label: '标题标题',
          value: '名字名字名字'
        },
        {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }],
        buttons1: [{
          style: 'default',
          text: '辅助操作'
        },
        {
          style: 'primary',
          text: 'tiaozhuan'
        }]
=======

>>>>>>> 20bd2e3b00b8fb6a468336953ad392d78983e2f4
      }
    }
  }
</script>
