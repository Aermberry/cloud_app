<template>
  <section class="zkui-user-account-recharge">

    <zk-head title='充值' goBack='我的钱包'></zk-head>
    <group>
      <popup-picker title="选择充值账户类型" :data="rechargeTypeList" show-name :columns="1" v-model="rechargeTypeValue" @on-change="onChange"></popup-picker>
      <popup-picker title="选择银行卡" :data="bankCardList" show-name :columns="1" v-model="bankCardValue" @on-change="onChange"></popup-picker>
      <x-input title="申请提现金额" type="text" required v-model="message.amount"></x-input>
      <box gap="2rem 0.6rem">
        <x-button type="primary" action-type="button" @click.native="sumbitR"> 提交</x-button>
      </box>
    </group>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge } from 'zkui'
  import apiUser from 'src/service/api/account.api'
  export default {
    components: {
      PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge
    },
    data () {
      return {
        rechargeTypeList: [], // 充值账户类型
        rechargeTypeValue: [],
        bankCardmessage: '', // 用户添加的银行卡数据
        bankCardList: [], // 银行卡类型
        bankCardValue: [],
        message: {
          rechargeType: '',
          amount: '',
          bankType: '',
          bankNumber: ''
        }
      }
    },
    mounted () {
      this.GetDate()
    },
    methods: {
      async GetDate () {
        // 获取账户类型
        var AccountType = await apiUser.AccountType()
        console.log('AccountType', AccountType)
        for (var i in AccountType.data.result) {
          let arr = {
            'name': AccountType.data.result[i],
            'value': i
          }
          this.rechargeTypeList.push(arr)
        }
        // 获取用户银行卡
        var response = await apiUser.bankCardList()
        this.bankCardmessage = response.data.result
        console.log('bankCardmessage', this.bankCardmessage)
        for (var a = 0; a < this.bankCardmessage.length; a++) {
          let arr = {
            'name': this.bankCardmessage[a].bankTypeName,
            'value': a
          }
          this.bankCardList.push(arr)
        }
        console.log('this.bankCardList', this.bankCardList)
      },
      async sumbitR () {
        this.message.rechargeType = this.rechargeTypeValue[0]
        this.message.bankNumber = this.bankCardmessage[this.bankCardValue[0]].bankNumber
        this.message.bankType = this.bankCardmessage[this.bankCardValue[0]].bankType
        console.log('this.bankCardList[bankCardValue[0]].value', this.bankCardList[this.bankCardValue[0]].value, this.bankCardList[this.bankCardValue[0]].name)
        console.log('message', this.message)
      },
      onChange (val) {
        console.log('val change', val)
      }
    }
  }
</script>
<style lang="less">
  .weui-label {
    width: 8rem !important;
  }
  .weui-btn {
    height: 3rem;
    font-size: @h4-font-size;
  }
</style>

