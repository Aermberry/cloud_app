<template>
  <section class="zkui-user-account-withdraw">

    <zk-head title="提现"></zk-head>
    <group>
      <popup-picker title="银行卡" :data="bankcard" show-name :columns="1" v-model="bankcardValue" @on-change="onChange"></popup-picker>
      <popup-picker title="提现账户" :data="accountBox" show-name :columns="1" v-model="accountBoxValue" @on-change="onChange"></popup-picker>
      <x-input title="提现金额" type="text" required v-model="withdraw.amount"></x-input>
      <x-input title="支付密码" type="password" :min="6" :max="6" required v-model="withdraw.payPassword"></x-input>
      <x-input title="提现留言" type="text" v-model="withdraw.userRemark"></x-input>

      <cell :title="hintText.withdRawIntro"></cell>
      <box gap="2rem 0.6rem">
        <x-button type="primary" action-type="button" @click.native="sumbit"> 提交</x-button>
      </box>
    </group>

    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import common from 'src/service/api/common.api'
  import { PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge } from 'zkui'
  import apiAccount from 'src/service/api/account.api'
  export default {
    components: {
      PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge
    },
    data () {
      return {
        hintText: '',
        bankCardList: '',
        date: '',
        list1: [[]], // 银行卡类型
        showPopupPicker: false,
        banknId: [], // 银行卡id
        bankname: [], // 银行卡名称
        bankcard: [], // 银行卡类型
        bankcardValue: [],
        accountId: [], // 提现账户id
        accountname: [], // 提现账户名称
        accountBox: [], // 提现账户类型
        accountBoxValue: [],
        withdraw: {
          userId: this.LoginUser().id,
          bankCardId: '', // 提现银行卡
          moneyTypeId: '', // 提现账户类型
          amount: 0, // 提现金额
          payPassword: '', // 支付密码
          userRemark: '' // 用户留言
        }
      }
    },
    mounted () {
      this.GetWhidraw()
    },
    methods: {
      async GetWhidraw () {
        // 提现账户
        var GetAccountType = await apiAccount.GetAccountType()
        for (var a in GetAccountType.data.result) {
          this.accountId.push(a)
          this.accountname.push(GetAccountType.data.result[a])
        }
        for (var q = 0; q < this.accountId.length; q++) {
          let arr = {
            'name': this.accountname[q],
            'value': this.accountId[q]
          }
          this.accountBox.push(arr)
        }
        var cartlist = await apiAccount.bankCardList()
        for (var i = 0; i < cartlist.data.result.length; i++) {
          var bankItem = cartlist.data.result[i]
          var bankItemName = '***' + bankItem.bankNumber
          this.bankname.push(bankItem.bankTypeName + bankItemName.slice(3))
          this.banknId.push(bankItem.id)
        }
        for (var b = 0; b < this.bankname.length; b++) {
          let arr = {
            'name': this.bankname[b],
            'value': this.banknId[b]
          }
          this.bankcard.push(arr)
        }
        if (this.bankcard.length === 0) {
          this.$vux.toast.warn('请先添加银行卡')
          this.$router.push({
            name: 'account_addbankcard'
          })
        }
        // 提示文字
        var hintText = await common.GetConfigValue('WithdRawConfig')
        this.hintText = hintText.data.result
      },
      async sumbit () {
        this.withdraw.bankCardId = this.bankcardValue[0]
        this.withdraw.moneyTypeId = this.accountBoxValue[0]
        console.log(this.withdraw)
        var sumbit = await apiAccount.WithDrawAdd(this.withdraw)
        console.log(sumbit)
        if (sumbit.data.status === 1) {
          this.messageSuccess('提现申请成功')
        } else {
          this.$vux.toast.warn(sumbit.data.message)
        }
      },
      onChange (val) {
        console.log('val change', val)
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-account-withdraw {
    .weui-label {
      width: 8rem !important;
    }
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
  }
</style>

