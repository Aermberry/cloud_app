<template>
  <section class="zkui-user-security">

    <zk-head title='安全设置' goBack='会员中心'></zk-head>
    <zk-cell :links="links"></zk-cell>
    <zk-foot></zk-foot>
  </section>
</template>

<script>

  import { ZkCell } from 'widgets'
  export default {
    components: {
      ZkCell
    },
    data () {
      return {

        links: [
          {
            color: 'metal',
            links: [
              {
                name: '密码修改',
                url: '/user/password',
                icon: 'zk-password'
              },
              {
                name: '安全密码修改',
                url: '/user/safepassword',
                icon: 'zk-safepassword'
              }
            ]
          }
        ]
      }
    }
  }
</script>
