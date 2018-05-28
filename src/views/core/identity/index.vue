<template>
  <section class="zkui-user-identity-index">

    <zk-head title='实名认证' goBack='会员中心'></zk-head>
    <cell :title="isdefeated" v-if="identityStatus===4"></cell>
    <div v-if='identityStatus===1 || identityStatus===4|| identityStatus===0'>
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
            <input class="weui-input" type="text" placeholder="请输入真实姓名" v-model="identity.RealName">
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

        <zk-upload :fileCount="1" savePath="identity" :size="5*1024" ref="uploadFile">证件正面照</zk-upload>
        <zk-upload :fileCount="1" savePath="identity" :size="5*1024" ref="uploadFile">证件反面照</zk-upload>
        <zk-upload :fileCount="1" savePath="identity" :size="5*1024" ref="uploadFile">个人手持证件正面照</zk-upload>
      </div>
      <div class="weui-btn-area btn-name">
        <a class="weui-btn weui-btn_primary" @click="apipost" href="javascript:" id="showTooltips">确定</a>
      </div>
      <zk-foot></zk-foot>
    </div>
    <div class="page msg_success js_show" v-if='identityStatus===2'>
      <div class="weui-msg">
        <div class="weui-msg__icon-area">
          <i class="weui-icon-success weui-icon_msg"></i>
        </div>
        <div class="weui-msg__text-area">
          <h2 class="weui-msg__title">您的申请已提交</h2>
          <p class="weui-msg__desc">您的申请已提交，请等待审核 </p>
        </div>
        <div class="weui-msg__opr-area">
          <p class="weui-btn-area">
            <a href="javascript:history.back();" class="weui-btn weui-btn_primary" v-if="type==='success'">后退</a>
            <a href="/default" class="weui-btn weui-btn_default">返回首页</a>
          </p>
        </div>
      </div>
    </div>
    <div class="page msg_success js_show" v-if='identityStatus===3'>
      <div class="weui-msg">
        <div class="weui-msg__icon-area">
          <i class="weui-icon-success weui-icon_msg"></i>
        </div>
        <div class="weui-msg__text-area">
          <h2 class="weui-msg__title">您已实名认证</h2>
          <p class="weui-msg__desc">恭喜您，您已完成实名认证 </p>
        </div>
        <div class="weui-msg__opr-area">
          <p class="weui-btn-area">
            <a href="javascript:history.back();" class="weui-btn weui-btn_primary" v-if="type==='success'">后退</a>
            <a href="/default" class="weui-btn weui-btn_default">返回首页</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { ZkUpload } from 'widgets'
  import apiUser from 'src/service/api/user.api'
  import { XInput, Group, XButton, Cell, XTextarea, Checker, CheckerItem, Box } from 'zkui'
  // import { watchFile } from 'fs';
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
          IdentityCardName: '',
          IdentityCardNo: '',
          IdentityImagefrontUrl: '',
          IdentityImageAntiUrl: '',
          IdentitySmallimageUrl: '',
          CheckState: 1,
          RealName: '',
          Sex: 1
        },
        identityStatus: 0, // 实名认证状态
        isdefeated: ''
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData () {
        let para = {
          LoginUserId: this.LoginUser().userId
        }
        var repsonse = await apiUser.getIdentity(para)
        console.log('resssss', repsonse)
        if (repsonse.data.status === 1) {
          this.identityStatus = repsonse.data.result.identityStatus
        } else {
          this.$vux.toast.warn(repsonse.data.message)
        }
        if (this.identityStatus === 4) {
          this.isdefeated = repsonse.data.result.checkRemark
        }
      },
      async apipost () {
        var a = document.getElementsByClassName('inputimg')

        let par = {
          IdentityType: this.identity.IdentityType,
          IdentityCardType: this.identity.IdentityCardType,
          IdentityCardName: this.identity.IdentityCardName,
          IdentityCardNo: this.identity.IdentityCardNo,
          IdentityImagefrontUrl: a[0].value,
          IdentityImageAntiUrl: a[1].value,
          IdentitySmallimageUrl: a[2].value,
          IdentityStatus: 2,
          RealName: this.identity.RealName,
          userId: this.LoginUser().id,
          Sex: this.identity.Sex
        }
        console.info(par)
        var repsonse = await apiUser.Identity(par)
        if (repsonse.data.status === 1) {
          this.getData()
          this.messageSuccess('实名认证提交成功，等待审核')
        } else {
          this.$vux.toast.warn(repsonse.data.message)
        }
      }
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

