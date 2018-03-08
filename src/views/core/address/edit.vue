<template>
  <section class="zkui-user-address-edit">
    <zk-head title='添加地址' goBack='收货地址'></zk-head>
    <group>
      <x-input title="收件人姓名" required type="text" v-model="recipients"></x-input>
      <x-input title="手机号码" required type="text" mask="999 9999 9999" v-model="relationPhone" :max="13" is-type="mobile" class="border-bottom" ></x-input>
      <zk-address ></zk-address>
      <x-textarea :max="100" placeholder="输入详细地址" title="详细地址" :rows="2" v-model="detailedAddress" :show-counter="false"></x-textarea>
      <x-switch title="设置为默认地址" v-model="stringValue" class="border-bottom"></x-switch>
      <box gap="2rem 0.6rem">
        <x-button type="primary" @click.native="GetData()" action-type="button"> 保存</x-button>
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
      async GetData () {
        this.province = this.value3[0]
        this.city = this.value3[1]
        this.district = this.value3[2]
        let addressInput = {
          isDefault: this.stringValue,
          mobile: this.relationPhone,
          zipCode: this.postalCode,
          tel: '',
          address: this.detailedAddress,
          name: this.recipients,
          province: this.province,
          city: this.city,
          country: this.district
        }
        console.log(addressInput)
        var response = await userService.AddAddress(addressInput)
        if (response.data.status === 1) {
          this.$vux.toast.success('添加成功')
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
        value3: [],
        recipients: '',
        relationPhone: '',
        detailedAddress: '',
        stringValue: 'false',
        postalCode: '',
        province: '',
        city: '',
        district: '',
        showPopupPicker: false,
        formatDemoValue: ['01', '12'],
        format: function (value, name) {
          return `${value[0]}:${value[1]}`
        }
      }
    }
  }

</script>
