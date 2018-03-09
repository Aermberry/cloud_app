<template>
  <section class="zkui-user-address-edit">
    <zk-head title='添加地址' goBack='收货地址'></zk-head>
    <group>
      <x-input title="收件人姓名" required type="text" v-model="addressInput.name"></x-input>
      <x-input title="手机号码" required type="text" mask="999 9999 9999" v-model="addressInput.mobile" :max="13" is-type="mobile" class="border-bottom"></x-input>
      <popup-picker title="选择区域" :data="addressData" :columns="3" show-name v-model="addressValue" ref="addressRef"></popup-picker>
      <x-textarea :max="40" placeholder="输入详细地址" title="详细地址" :rows="2" v-model="addressInput.address"></x-textarea>
      <x-switch title="设置为默认地址" v-model="addressInput.isDefault" class="border-bottom"></x-switch>
      <box gap="2rem 0.6rem">
        <x-button type="primary" @click.native="save" action-type="button"> 保存</x-button>
      </box>
    </group>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import store from 'src/store/index'
  import { Group, Box, XButton, Cell, Picker, Divider, XSwitch, XTextarea, PopupPicker, XInput } from 'zkui'
  import { ZkAddress } from 'widgets/address'
  import address from 'src/service/common/address'

  export default {
    components: {
      Group,
      XInput,
      Box,
      XButton,
      Cell,
      PopupPicker,
      Picker,
      Divider,
      XSwitch,
      XTextarea,
      ZkAddress
    },
    mounted () {
      this.addressData = address.addressData
      if (this.addressInput.name === undefined) {
        this.addressInput.name = store.state.userStore.loginUser.name
      }
      if (this.addressInput.mobile === undefined) {
        this.addressInput.mobile = store.state.userStore.loginUser.mobile
      }
    },
    methods: {
      async save () {
        this.addressInput.province = this.addressValue[0]
        this.addressInput.city = this.addressValue[1]
        this.addressInput.country = this.addressValue[2]
        this.addressInput.mobile = this.addressInput.mobile.replace(/\s+/g, '')
        this.addressInput.loginUserId = store.state.userStore.loginUser.id

        console.info('address', this.addressInput)
        var response = await userService.AddAddress(this.addressInput)
        if (response.data.status === 1) {
          this.$vux.toast.success('添加成功')
          this.$router.push({
            name: 'address_index'
          })
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      },
      onChange () {
        alert('23232323')
      }
    },
    data () {
      return {
        addressInput: {},
        addressValue: [],
        addressData: [] // 地址列表
      }
    }
  }
</script>
