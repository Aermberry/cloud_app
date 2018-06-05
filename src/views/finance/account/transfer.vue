<template>
  <section class="zkui-user-account-transfer">

    <zk-head title='转账' goBack='我的钱包'></zk-head>
    <popup-picker title="转账类型" :data="transferConfis" show-name :columns="1" v-model="transferConfisValue"></popup-picker>
    <x-input title="对方用户 " type="text" required v-model="transferMessage.OtherUserName"></x-input>
    <x-input title="转出金额 " type="text" pattern="[0-9]*" required v-model="transferMessage.Amount"></x-input>
    <x-input title="支付密码 " type="password" v-model="transferMessage.PayPassword"></x-input>
    <x-input title="备注 " type="text" v-model="transferMessage.UserRemark"></x-input>
    <box gap="2rem 0.6rem">
      <x-button type="primary" action-type="button" @click.native="sumbitTransfer()"> 确定转账</x-button>
    </box>
    <zk-foot></zk-foot>
  </section>
</template>


<script>
  import apiUser from 'src/service/api/account.api'
  import { PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge } from 'zkui'
  export default {
    components: {
      PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge
    },
    data () {
      return {
        transfer: [],
        transferConfis: [],
        transferConfisValue: [],
        transferMessage: {
          OtherUserName: '', // 对方用户
          TransferId: '', // 转出类型
          Amount: '', // 转账金额
          UserRemark: '', // 备注
          PayPassword: '', // 支付密码
          UserId: '' // 登入用户Id
        }
      }
    },
    mounted () {
      this.GetTransfer()
    },
    methods: {
      async GetTransfer () {
        var response = await apiUser.GetTransferConfis()
        console.log('response', response)
        for (var i in response.data.result) {
          let arr = {
            'name': response.data.result[i],
            'value': i
          }
          this.transferConfis.push(arr)
        }
      },
      async sumbitTransfer () {
        this.transferMessage.UserId = this.LoginUser().id
        this.transferMessage.TransferId = this.transferConfisValue[0]
        console.log('transferMessage', this.transferMessage)
        var sumbitMessage = await apiUser.TransferAdd(this.transferMessage)
        if (sumbitMessage.data.status === 1) {
          this.messageSuccess('转账成功')
        } else {
          this.$vux.toast.warn(sumbitMessage.data.message)
        }
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-account-transfer {
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
  }
</style>

