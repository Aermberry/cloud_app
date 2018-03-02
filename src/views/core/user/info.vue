<template>
  <section class="zkui-user-info">


    <div class="zkui-user-info-app-content">
      <div id="self">
        <div class="weui-tab__content" style="display: block;">
          <div class="weui-cells">
            <a href="" class="weui-cell weui-cell_access">
              <div class="weui-cell__hd">
                <img src="../../../../src/assets/images/icon/man.png" alt="" class="self-header">
              </div>
              <div class="weui-cell__bd">
                <h4 class="self-nickname">xxx</h4>
                <p class="self-wxid">微信号: xxx</p>
              </div>
              <div class="weui-cell__ft">
                <m-icon name="zk-qrcode1" class="metal"></m-icon>
              </div>
            </a>
          </div>

          <zk-cell :links="links" class="zkui-core-user-weui-list"></zk-cell>

        </div>
      </div>
    </div>

    <zk-head title='账户信息' goBack='会员中心'></zk-head>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkCell } from 'src/widgets/'
  import { MIcon } from 'zkui'
  export default {
    components: {
      ZkCell,
      MIcon
    },
    //  https://segmentfault.com/q/1010000012824355 参考这个实现方式，更为优雅
    data () {
      return {

        userInfo: {
          name: '马上登录',
          info: '登陆后享受更多服务'
        },
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
                icon: 'zk-buyeraddress'
              },
              {
                name: '性别',
                url: '/user/buyeraddress/index',
                icon: 'zk-sex'
              },
              {
                name: '地区',
                url: '/user/favorite/index',
                icon: 'zk-region'
              }
            ]
          }

        ]
      }
    }
  }


</script>
<style lang="less">

</style>
