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
        <!-- <cell title="性别 " :value="userInfo.sex" is-link @click.native="ceshi('sex') "></cell> -->
        <cell title="电话 " :value="userInfo.mobile "></cell>
        <cell title="邮箱 " :value="userInfo.email " is-link @click.native="ceshi('email') "></cell>
        <cell title="等级 " :value="userInfo.gradeName "></cell>
        <cell title="推荐人 " :value="userInfo.parentUserName  "></cell>
        <cell title="门店名" :value="userInfo.serviceCenterName"></cell>
        <cell title="是否认证通过" :value="userInfo.isIdentity "></cell>
        <cell title="会员是否是门店" :value=" userInfo.isServiceCenter"></cell>
      </group>
      <!-- <group>
        <cell title="我的地址 " @click.native="ceshi('address') " is-link></cell>
      </group> -->
      <group>
        <cell title="我的二维码 " link="/user/qrcode"></cell>
        <cell title="我的钱包 " link="/user/account/index"></cell>
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
    <!-- 修改邮箱 -->
    <div class="set-gender" v-if="updateEmail">
      <x-header :right-options="{showMore:false }" :left-options="{showBack: false}" @on-click-more=" showMenus=true ">
        {{infoTitle}}
        <div class="showback" @click="showback()">
        </div>
        <div class="accomplish" @click="accomplish('email')">
          完成
        </div>
      </x-header>
      <group>
        <x-input is-type="email" v-model="uEmail"></x-input>
      </group>
    </div>
    <!-- 修改性别 -->
    <div class="set-gender" v-if="updateGender">
      <x-header :right-options="{showMore:false }" :left-options="{showBack: false}" @on-click-more=" showMenus=true ">
        {{infoTitle}}
        <div class="showback" @click="showback()">
        </div>
        <div class="accomplish" @click="accomplish('sex')">
          完成
        </div>
      </x-header>
      <group>
        <radio :options="radio001" @on-change="change"></radio>
      </group>
    </div>
    <!-- 修改地址 -->
    <div class="set-gender" v-if="updateAddress">
      <x-header :right-options="{showMore:false }" :left-options="{showBack: false}" @on-click-more=" showMenus=true " v-if="!addressBox">
        {{infoTitle}}
        <div class="showback" @click="showback()">
        </div>
        <div class="accomplish" @click="accomplish('address')">
          完成
        </div>
      </x-header>
      <group v-if="!addressBox">
        <div class="weui-panel weui-panel_access" @click="aBox()">
          <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_text">
              <cell :title="userInfo.name " is-link style="margin-bottom:.2rem; padding:0"></cell>
              <p class="weui-media-box__desc">{{userInfo.regionName}}</p>
              <p class="weui-media-box__desc">{{userInfo.address}}</p>
            </div>
          </div>
        </div>
      </group>
      <x-header :right-options="{showMore:false }" :left-options="{showBack: false}" @on-click-more=" showMenus=true " v-if="addressBox">
        设置地址
        <div class="showback" @click="showback('addressBox')">
        </div>
        <div class="accomplish" @click="accomplish('addressBox')">
          完成
        </div>
      </x-header>
      <group v-if="addressBox">
        <popup-picker title="选择区域" :data="addressData" :columns="3" show-name v-model="addressValue" ref="addressRef" :on-hide="hide()"></popup-picker>
        <x-textarea :max="40" placeholder="输入详细地址" title="详细地址" :rows="2" v-model="addressInput"></x-textarea>
      </group>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import { ZkCell, ZkAddress } from 'src/widgets/'
  import address from 'src/service/common/address'
  import { MIcon, Group, Cell, XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, XInput, Radio, PopupPicker, XTextarea } from 'zkui'
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
      Radio,
      ZkAddress,
      PopupPicker,
      XTextarea
    },
    //  https://segmentfault.com/q/1010000012824355 参考这个实现方式，更为优雅
    data () {
      return {
        radio001: ['男', '女'],
        viewModel: '',
        addressData: [], // 地址数据
        addressValue: [], // 选择的地址
        addressInput: '', // 填写的详细地址
        userInfo: {
          address: '',
          avator: '',
          name: '',
          gradeName: '',
          class: '',
          referrer: '',
          mobile: '',
          email: '',
          sex: '',
          regionName: '',
          parentUserName: '',
          serviceCenterName: '',
          isIdentity: '',
          isServiceCenter: ''
        },
        infoTitle: '', // 修改的头部标题
        showinfoTitle: true,
        showinfoBox: true, // 个人信息内容盒子
        portrait: true, // 修改头像
        updateName: false, // 修改名字
        updateMobile: false, // 修改电话
        updateGender: false, // 修改性别
        updateAddress: false, // 修改地址
        updateEmail: false, // 修改邮箱
        addressBox: false, // 修改地址里的盒子
        addressString: '',
        uName: '',
        uMobile: '',
        uGender: '',
        uEmail: '',
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
      showback (type) {
        if (type === 'addressBox') {
          this.addressBox = false
        } else {
          this.showinfoBox = true
          this.showinfoTitle = true
          this.portrait = true
          this.updateName = false
          this.updateGender = false
          this.updateAddress = false
          this.addressBox = false
        }
      },
      change (value, label) {
        // console.log('change:', value, label)
        if (value === '男') {
          this.uGender = 1
        } else if (value === '女') {
          this.uGender = 2
        }
      },
      ceshi (type) {
        if (type === 'portrait') {
          this.showinfoBox = false // 个人信息盒子
          this.showinfoTitle = false // 个人信息头部
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
        if (type === 'sex') {
          this.showinfoBox = false
          this.showinfoTitle = false
          this.updateGender = true
          this.infoTitle = '设置性别'
        }
        if (type === 'address') {
          this.showinfoBox = false
          this.showinfoTitle = false
          this.updateAddress = true
          this.infoTitle = '我的地址'
        }
        if (type === 'email') {
          this.showinfoBox = false
          this.showinfoTitle = false
          this.updateEmail = true
          this.infoTitle = '设置邮箱'
          this.uEmail = this.userInfo.email
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
            NickName: this.uName
          }
          console.log('name', this.uName)
          var nameResponse = await userService.update(userDetail)
          console.log(nameResponse)
          if (nameResponse.data.status === 1) {
            this.userInfo.name = this.uName
            this.showinfoBox = true
            this.showinfoTitle = true
            this.updateName = false
            this.$vux.tosst.success('修改成功')
          }
        }
        if (type === 'email') {
          let userDetail = {
            NickName: this.uName
          }
          console.log('name', this.uName)
          var response = await userService.update(userDetail)
          console.log(response)
          if (response.data.status === 1) {
            this.userInfo.name = this.uName
            this.showinfoBox = true
            this.showinfoTitle = true
            this.updateName = false
          }
        }
        if (type === 'sex') {
          var sex
          if (this.uGender === 1) {
            sex = {
              Man: this.uGender
            }
          } else {
            sex = {
              WoMan: this.uGender
            }
          }
          console.log('sex', this.uGender)
          var sexMessage = await userService.update(sex)
          console.log(sexMessage)
          if (sexMessage.data.status === 1) {
            this.showinfoBox = true
            this.showinfoTitle = true
            this.updateGender = false
            if (this.uGender === 1) {
              this.userInfo.sex = '男'
            } else if (this.uGender === 2) {
              this.userInfo.sex = '女'
            }
          }
        }
        if (type === 'address') {
          this.showinfoBox = true
          this.showinfoTitle = true
          this.updateAddress = false
        }
        if (type === 'addressBox') {
          let parameter = {
            Address: this.addressInput,
            RegionId: this.addressString

          }
          var addressBoxMessage = await userService.update(parameter)
          console.log(addressBoxMessage)
          if (addressBoxMessage.data.status === 1) {
            this.userInfo.address = this.addressInput
            this.addressBox = false
          }
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
      aBox () {
        this.addressInput = this.userInfo.address
        this.addressBox = true
      },
      hide () {
        // this.addressString = this.addressValue[0] + ',' + this.addressValue[1] + ',' + this.addressValue[2]
        this.addressString = this.addressValue[2]
      },
      async GetData () {
        this.addressData = address.addressData
        var reponse = await userService.view(this.data)
        console.log(reponse)
        this.viewModel = reponse.data.result
        this.userInfo.address = this.viewModel.address
        this.userInfo.avator = this.viewModel.avator
        this.userInfo.name = this.viewModel.name
        this.userInfo.gradeName = this.viewModel.gradeName
        this.userInfo.mobile = this.viewModel.mobile
        this.userInfo.email = this.viewModel.email
        this.userInfo.regionName = this.viewModel.regionName
        this.userInfo.parentUserName = this.viewModel.parentUserName
        this.userInfo.serviceCenterName = this.viewModel.serviceCenterName
        if (this.viewModel.isIdentity === true) {
          this.userInfo.isIdentity = '是'
        } else {
          this.userInfo.isIdentity = '否'
        }
        if (this.viewModel.isServiceCenter === true) {
          this.userInfo.isServiceCenter = '是'
        } else {
          this.userInfo.isServiceCenter = '否'
        }
        console.log(this.viewModel.sex)
        if (this.viewModel.sex === '0') {
          this.userInfo.sex = '男'
        } else if (this.viewModel.sex === '1') {
          this.userInfo.sex = '女'
        }
        console.log(this.viewModel.sex, this.userInfo.sex)
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
