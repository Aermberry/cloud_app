<template>
  <section class="zkui-user-info">
    <zk-head title='账户信息' goBack='会员中心' v-if="showinfoTitle"></zk-head>
    <div v-if="showinfoBox ">
      <group>
        <div class="info-portrait " @click="ceshi( 'portrait') ">
          <div class="portrait-left ">
            头像
          </div>
          <div class="portrait-right ">
            <img :src="userInfo.avator " alt=" ">
          </div>
        </div>
        <cell title="名字 " :value="userInfo.name " is-link @click.native="ceshi('name') "></cell>
        <cell title="性别 " :value="userInfo.sex" is-link @click.native="ceshi('gender') "></cell>
        <cell title="电话 " :value="userInfo.mobile "></cell>
        <cell title="邮箱 " :value="userInfo.email "></cell>
        <cell title="等级 " :value="userInfo.gender "></cell>
        <cell title="推荐人 " value="value "></cell>
      </group>
      <group>
        <cell title="我的地址 " link="/user/address/index "></cell>
      </group>
      <group>
        <cell title="我的二维码 " link="/user/qrcode "></cell>
        <cell title="我的钱包 " link="/user/account/index "></cell>
      </group>
    </div>
    <!-- 修改头像 -->
    <div class="show-portrait " v-if="!portrait ">
      <x-header :right-options="{showMore: true}" :left-options="{showBack: false}" @on-click-more=" showMenus=true ">
        {{infoTitle}}
        <div class="showback" @click="showback()">
        </div>
      </x-header>
      <img :src="userInfo.avator " alt=" ">
    </div>
    <!-- 修改姓名 -->
    <div class="set-name" v-if="updateName">
      <x-header :right-options="{showMore:false }" :left-options="{showBack: false}" @on-click-more=" showMenus=true ">
        {{infoTitle}}
        <div class="showback" @click="showback()">
        </div>
        <div class="accomplish" @click="accomplish('name')">
          完成
        </div>
      </x-header>
      <group>
        <x-input is-type="china-name" v-model="uName"></x-input>
      </group>
    </div>
    <!-- 修改性别 -->
    <div class="set-gender" v-if="updateGender">
      <x-header :right-options="{showMore:false }" :left-options="{showBack: false}" @on-click-more=" showMenus=true ">
        {{infoTitle}}
        <div class="showback" @click="showback()">
        </div>
        <div class="accomplish" @click="accomplish('gender')">
          完成
        </div>
      </x-header>
      <group>
        <radio :options="radio001" @on-change="change"></radio>
      </group>
    </div>
    <!-- 修改电话 -->
    <!-- <div class="set-phone" v-if="updateMobile">
      <x-header :right-options="{showMore:false }" :left-options="{showBack: false}" @on-click-more=" showMenus=true ">
        {{infoTitle}}
        <div class="showback" @click="showback()">
        </div>
        <div class="accomplish" @click="accomplish('phone')">
          完成
        </div>
      </x-header>
      <group>
        <x-input keyboard="number" is-type="china-mobile" v-model="uMobile"></x-input>
      </group>
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus " v-model="showMenus " show-cancel></actionsheet>
    </div> -->
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import { ZkCell } from 'src/widgets/'
  import { MIcon, Group, Cell, XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, XInput, Radio } from 'zkui'
  export default {
    directives: {
      TransferDom
    },
    components: {
      ZkCell,
      MIcon,
      Group,
      Cell,
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem,
      XInput,
      Radio
    },
    //  https://segmentfault.com/q/1010000012824355 参考这个实现方式，更为优雅
    data () {
      return {
        radio001: ['男', '女'],
        viewModel: '',
        userInfo: {
          avator: '',
          name: '',
          gender: '',
          class: '',
          referrer: '',
          mobile: '',
          email: '',
          sex: ''
        },
        infoTitle: '', // 修改的头部标题
        showinfoTitle: true,
        showinfoBox: true, // 个人信息内容盒子
        portrait: true, // 修改头像
        updateName: false, // 修改名字
        updateMobile: false, // 修改电话
        updateGender: false, // 修改电话
        uName: '',
        uMobile: '',
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      showback () {
        this.showinfoBox = true
        this.showinfoTitle = true
        this.portrait = true
        this.updateName = false
      },
      change (value, label) {
        console.log('change:', value, label)
      },
      ceshi (type) {
        if (type === 'portrait') {
          this.showinfoBox = false
          this.showinfoTitle = false
          this.portrait = false
          this.infoTitle = '个人头像'
        }
        if (type === 'name') {
          this.showinfoBox = false
          this.showinfoTitle = false
          this.updateName = true
          this.infoTitle = '设置姓名'
          this.uName = this.userInfo.name
        }
        if (type === 'gender') {
          this.showinfoBox = false
          this.showinfoTitle = false
          this.updateGender = true
          this.infoTitle = '设置性别'
          this.uName = this.userInfo.name
        }
        // if (type === 'phone') {
        //   this.showinfoBox = false
        //   this.showinfoTitle = false
        //   this.updateMobile = true
        //   this.infoTitle = '设置电话'
        //   this.uMobile = this.userInfo.mobile
        // }
      },
      async accomplish (type) {
        if (type === 'name') {
          let userDetail = {
            nickName: this.uName
          }
          var response = await userService.update(userDetail)
          console.log(response)
          if (response.data.status === 1) {
            this.userInfo.name = this.uName
            this.showinfoBox = true
            this.showinfoTitle = true
            this.updateName = false
          }
        }
        if (type === 'gender') {
          this.showinfoBox = true
          this.showinfoTitle = true
          this.updateGender = false
        }
        // if (type === 'phone') {
        //   let userDetail = {
        //     nickName: this.uMobile
        //   }
        //   console.log(this.uMobile)
        //   var moblieM = await userService.update(userDetail)
        //   console.log(moblieM)
        //   if (moblieM.data.status === 1) {
        //     this.userInfo.mobile = this.uMobile
        //     this.showinfoBox = true
        //     this.showinfoTitle = true
        //     this.updateMobile = false
        //   }
        // }
      },
      async GetData () {
        var reponse = await userService.view(this.data)
        console.log(reponse)
        this.viewModel = reponse.data.result
        this.userInfo.avator = this.viewModel.avator
        this.userInfo.name = this.viewModel.name
        this.userInfo.gender = this.viewModel.gradeName
        this.userInfo.mobile = this.viewModel.mobile
        this.userInfo.email = this.viewModel.email
        if (this.viewModel.sex === 1) {
          this.userInfo.sex = '男'
        } else if (this.viewModel.sex === 2) {
          this.userInfo.sex = '女'
        }
      }
    }
  }
</script>
<style   lang="less">
  .zkui-user-info {
    // .weui-cell__hd {
    //   img {
    //     width: 4rem;
    //     height: 4rem;
    //   }
    // }
    // .weui-cell__bd {
    //   .self-nickname {
    //     font-size: @h4-font-size;
    //     font-weight: normal;
    //     padding-left: 1rem;
    //   }
    //   .self-wxid {
    //     padding-left: 1rem;
    //   }
    // }
    .info-portrait {
      padding: 0.83333333rem 1.25rem;
      display: flex;
      .portrait-left {
        flex: 1;
        height: 3rem;
        line-height: 3rem;
      }
      .portrait-right {
        width: 3.5rem;
        height: 3rem;
        padding-right: 0.5rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .portrait-right:after {
        content: ' ';
        display: inline-block;
        height: 0.5rem;
        width: 0.5rem;
        border-width: 0.16666667rem 0.16666667rem 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -0.16666667rem;
        position: absolute;
        top: 50%;
        margin-top: -0.33333333rem;
        right: 0.16666667rem;
      }
    }
    .show-portrait {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .vux-header {
      position: relative;
      .showback {
        position: absolute;
        top: 0.58333333rem;
        left: 0.83333333rem;
        width: 2rem;
        height: 2rem;
      }
      .showback::before {
        content: '';
        position: absolute;
        width: 0.75rem;
        height: 0.75rem;
        border: 1px solid #fff;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(315deg) translateY(-50%);
        transform: rotate(315deg) translateY(-50%);
        top: 0.66666667rem;
        left: 0.58333333rem;
      }
      .accomplish {
        position: absolute;
        top: 50%;
        right: 0.83333333rem;
        transform: translateY(-50%);
      }
    }
  }
</style>
