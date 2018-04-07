<template>
  <section class="zkui-user-address-edit">
    <zk-head :title="addressTitle">
      <!-- <a slot="right" href="/user/address/index">管理</a> -->
    </zk-head>
    <group>
      <x-input title="收件人姓名" required type="text" v-model="addressInput.name"></x-input>
      <x-input title="手机号码" required type="text" mask="999 9999 9999" v-model="addressInput.mobile" :max="13" is-type="mobile"></x-input>
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
      this.GetData()
      console.info('路由', this.$route)
    },
    created () {
      if (this.$route.params.id !== undefined) {
        this.addressTitle = '编辑地址'
      }
    },
    methods: {
      async GetData () {
        this.addressData = address.addressData
        var id = this.$route.params.id
        console.log(this.$route.params.type)
        if (id !== undefined) {
          // 编辑地址，重新赋值
          let parament = {
            id: id
          }
          var response = await userService.SingleAddress(parament)
          console.log(response)
          if (response.data.status === 1) {
            this.addressInput = response.data.result
            this.addressValue = [this.addressInput.province.toString(), this.addressInput.city.toString(), this.addressInput.country.toString()]
            console.info('点击地址时数组', this.addressValue)
          } else {
            this.$vux.toast.warn(response.data.message)
          }
        } else {
          this.addressData = address.addressData
          if (this.addressInput.name === undefined) {
            this.addressInput.name = this.LoginUser().name
          }
          if (this.addressInput.mobile === undefined) {
            this.addressInput.mobile = this.LoginUser().mobile
          }
        }
      },
      async save () {
        console.info('区域Id数', this.addressValue)
        this.addressInput.province = this.addressValue[0]
        this.addressInput.city = this.addressValue[1]
        this.addressInput.country = this.addressValue[2]
        this.addressInput.mobile = this.addressInput.mobile.replace(/\s+/g, '')
        this.addressInput.loginUserId = this.LoginUser().id
        console.info('address', this.addressInput)
        var id = this.$route.params.id
        if (id !== undefined) {
          var response = await userService.UpdateAddress(this.addressInput)
          if (response.data.status === 1) {
            console.log('修改成功')
            this.$vux.toast.success('修改成功')
            this.$router.push({
              name: 'address_index'
            })
          } else {
            this.$vux.toast.warn(response.data.message)
          }
        } else {
          var responses = await userService.AddAddress(this.addressInput)
          console.log(response)
          if (responses.data.status === 1) {
            this.$vux.toast.success('添加成功')
            this.$router.push({
              name: 'address_index'
            })
          } else {
            this.$vux.toast.warn(responses.data.message)
          }
        }
      }
    },
    data () {
      return {
        addressTitle: '添加地址', // 标题
        addressInput: {},
        addressValue: [],
        addressData: [] // 地址列表
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-address-edit {
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
  }
</style>

