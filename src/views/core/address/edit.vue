<template>
  <section class="zkui-user-address-edit">
    <zk-head title='添加地址' goBack='收货地址'></zk-head>
    <group>
      <x-input title="收件人姓名" required type="text" v-model="addressInput.name"></x-input>
      <x-input title="手机号码" required type="text" mask="999 9999 9999" v-model="addressInput.mobile" :max="13" is-type="mobile" class="border-bottom"></x-input>
      <zk-address v-model="addressValue" ref="picker3"></zk-address>
      <x-textarea :max="100" placeholder="输入详细地址" title="详细地址" :rows="2" v-model="addressInput.address" :show-counter="false"></x-textarea>
      <x-switch title="设置为默认地址" v-model="addressInput.isDefault" class="border-bottom"></x-switch>
      <box gap="2rem 0.6rem">
        <x-button type="primary" @click.native="save" action-type="button"> 保存</x-button>
      </box>
    </group>
  </section>
</template>

<script>
  /* eslint-disable */
  import userService from 'src/service/api/user.api'
  import { Group, Box, XButton, Cell, Picker, Divider, XSwitch, XTextarea, PopupPicker, XInput } from 'zkui'
  import { ZkAddress } from 'widgets/address'

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
    },
    methods: {
      async save () {
        console.log(addressInput)
        this.addressInput.province = this.addressValue[0]
        this.addressInput.city = this.addressValue[1]
        this.addressInput.country = this.addressValue[2]

        var response = await userService.AddAddress(addressInput)
        if (response.data.status === 1) {
          this.$vux.toast.success('添加成功')
          this.$router.push({
            name: 'address_index'
          })
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      },
      onClick (newVal, oldVal) {
        console.log(newVal, oldVal)
        this.$vux.loading.show({
          text: 'in processing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.value2 = newVal
        }, 1000)
      }
    },
    data () {
      return {
        addressInput: {
          isDefault: '',
          mobile: '',
          zipCode: '',
          moblie: '',
          address: '',
          name: '',
          province: '',
          city: '',
          country: ''
        },
        addressValue: ''
      }
    }
  }
</script>
