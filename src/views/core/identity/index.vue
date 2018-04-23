<template>
  <section class="zkui-user-identity-index">

    <zk-head title='实名认证' goBack='会员中心'></zk-head>

    <div class="weui-cells weui-cells_form">

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">认证身份类型</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1" v-model="identity.IdentityType">
            <option selected="" value="1">个人</option>
            <option value="2">公司</option>
          </select>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">证件类型</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1" v-model="identity.IdentityCardType">
            <option selected="" value="1">身份证</option>
            <option value="2">护照</option>
            <option value="3">港澳通行证</option>
            <option value="4">营业执照</option>
          </select>
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">证件号码</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入证件号码" v-model="identity.IdentityCardNo">
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">真实姓名</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入真实姓名" v-model="identity.RealName">
        </div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">性别</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select1" v-model="identity.Sex">
            <option selected="" value="1">男</option>
            <option value="2">女</option>
          </select>
        </div>
      </div>

      <zk-upload :fileCount="1" :savePath="savePath" :size="5*1024" ref="uploadFile">证件正面照</zk-upload>
      <zk-upload :fileCount="1" :savePath="savePath" :size="5*1024" ref="uploadFile">证件反面照</zk-upload>
      <zk-upload :fileCount="1" :savePath="savePath" :size="5*1024" ref="uploadFile">个人手持证件正面照</zk-upload>
    </div>
    <div class="weui-btn-area btn-name">
      <a class="weui-btn weui-btn_primary" @click="apipost" href="javascript:" id="showTooltips">确定</a>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkUpload } from 'widgets'
  import apiUser from 'src/service/api/user.api'
  import { XInput, Group, XButton, Cell, XTextarea, Checker, CheckerItem, Box } from 'zkui'
  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      XTextarea,
      Checker,
      CheckerItem,
      Box,
      ZkUpload
    },
    data () {
      return {
        identity: {
          savePath: '/open/debt',
          IdentityType: 1,
          IdentityCardType: 1,
          IdentityCardName: 'gggg',
          IdentityCardNo: '',
          IdentityImagefrontUrl: '123456.45646',
          IdentityImageAntiUrl: '123456789',
          IdentitySmallimageUrl: 'ggg145416',
          CheckState: 1,
          RealName: '',
          Sex: 1
        }
      }
    },
    mounted () {
      this.ceshi()
    },
    methods: {
      async ceshi () {
        let par = {
        }
        var repsonses = await apiUser.Identitys(par)
        console.log('测试', repsonses)
      }
      // async apipost () {
      //   var a = document.getElementsByClassName('inputimg')
      //   console.log(a[0].value)
      //   console.log(a[1].value)
      //   console.log(a[2].value)
      //   let par = {
      //     IdentityType: this.identity.IdentityType,
      //     IdentityCardType: this.identity.IdentityCardType,
      //     IdentityCardName: this.identity.IdentityCardName,
      //     IdentityCardNo: this.identity.IdentityCardNo,
      //     IdentityImagefrontUrl: a[0].value,
      //     IdentityImageAntiUrl: a[1].value,
      //     IdentitySmallimageUrl: a[2].value,
      //     CheckState: this.identity.CheckState,
      //     RealName: this.identity.RealName,
      //     Sex: this.identity.Sex
      //   }
      //   console.dir(par)
      //   var repsonse = await apiUser.Identity(par)
      //   console.dir(repsonse)
      //   if (repsonse.data.status === 1) {
      //     this.messageSuccess('实名认证提交成功，等待审核')
      //   } else {
      //     this.$vux.toast.warn(repsonse.data.message)
      //   }
      // }
    }
  }
</script>
<style   lang="less">
  .zkui-user-identity-index {
    font-size: 12px;
    .btn-name {
      a {
        background: @brand;
        height: 3rem;
        line-height: 3rem;
      }
    }
  }
</style>

