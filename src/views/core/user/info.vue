<template>
  <section class="zkui-user-info">
    <zk-head title='账户信息' goBack='会员中心'></zk-head>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import { ZkCell } from 'src/widgets/'
  import { MIcon, Group } from 'zkui'
  export default {
    components: {
      ZkCell,
      MIcon,
      Group
    },
    //  https://segmentfault.com/q/1010000012824355 参考这个实现方式，更为优雅
    data () {
      return {
        links: [
          {
            color: 'metal',
            link: [
              {
                name: '名字',
                url: '/user/recuser',
                icon: 'zk-name'
              },
              {
                name: '我的二维码',
                url: '/user/tree',
                icon: 'zk-qrcode'
              },
              {
                name: '我的地址',
                url: '/order/list',
                icon: 'zk-address'
              },
              {
                name: '性别',
                url: '/user/address/index',
                icon: 'zk-sex'
              },
              {
                name: '地区',
                url: '/user/favorite/index',
                icon: 'zk-region'
              }
            ]
          }
        ],
        userInfo: {
          img: '',
          name: '',
          info: ''
        }
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        var reponse = await userService.view(this.data)
        console.log(reponse)
        this.userInfo.name = reponse.data.result.name
        this.userInfo.info = reponse.data.result.gradeName
        this.userInfo.img = reponse.data.result.avator
      }
    }
  }
</script>
<style scoped  lang="less">
  .zkui-user-info {
    .weui-cell__hd {
      img {
        width: 4rem;
        height: 4rem;
      }
    }
    .weui-cell__bd {
      .self-nickname {
        font-size: @h4-font-size;
        font-weight: normal;
        padding-left: 1rem;
      }
      .self-wxid {
        padding-left: 1rem;
      }
    }
  }
</style>
