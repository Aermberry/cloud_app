<template>
  <section class="zkui-user-account-bankcard-add">
    <zk-head :title="bankTitle"></zk-head>
    <group>
      <x-input title="持卡人姓名" required type="text" v-model="backMessage.BankName"></x-input>
      <popup-picker title="银行类型" :data="bankList" :columns="1" v-model="bType"></popup-picker>
      <x-input title="银行卡号" required type="text" :min="19" :max="19" v-model="backMessage.BankNumber"></x-input>
      <x-textarea title="开户行地址" :max="20" v-model="backMessage.BankAddress"></x-textarea>
      <box gap="2rem 0.6rem">
        <x-button type="primary" action-type="button" @click.native="add()"> 保存</x-button>
      </box>
    </group>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/account.api'
  import { Group, Box, XButton, Cell, Picker, Divider, XSwitch, XTextarea, PopupPicker, XInput } from 'zkui'
  export default {
    components: {
      Group, Box, XButton, Cell, Picker, Divider, XSwitch, XTextarea, PopupPicker, XInput
    },
    data () {
      return {
        bType: [],
        dataList: '',
        operation: '添加', // 记录操作类型
        bankTitle: '添加银行卡',
        bankList: [[]],
        backMessage: {
          UserId: this.LoginUser().id,
          BankType: '', // 银行类型
          BankName: '', // 持卡人姓名
          BankNumber: '', //  银行卡号
          // BankNo: '', // 开户行行号
          BankAddress: '' //  开户行地址
        }
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async add () {
        this.backMessage.BankType = this.bType[0]
        if (this.operation === '添加') {
          console.log(typeof (this.backMessage.BankType))

          var add = await apiUser.bankCardAdd(this.backMessage)
          console.log(add)
          if (add.data.status === 1) {
            this.$vux.toast.success(add.data.message)
            this.$router.push({
              name: 'account_mybankcard'
            })
          } else {
            this.$vux.toast.warn(add.data.message)
          }
        }
        if (this.operation === '编辑') {
          let params = {
            UserId: this.LoginUser().id,
            id: this.$route.params.id,
            BankType: this.backMessage.BankType,
            BankName: this.backMessage.BankName,
            BankNumber: this.backMessage.BankNumber,
            BankAddress: this.backMessage.BankAddress
          }
          var update = await apiUser.bankCardUpdate(params)
          console.log('update', update)
          if (update.data.status === 1) {
            this.$vux.toast.success(update.data.message)
            this.$router.push({
              name: 'account_mybankcard'
            })
          } else {
            this.$vux.toast.warn(update.data.message)
          }
        }
      },
      async getData () {
        console.log(this.$route.params)
        if (this.$route.params.operation === '编辑') {
          this.bankTitle = '编辑银行卡'
          this.operation = this.$route.params.operation
          let params = {
            id: this.$route.params.id
          }
          var Single = await apiUser.bankCardSingle(params)
          if (Single.data.status === 1) {
            this.backMessage.BankName = Single.data.result.bankName
            this.backMessage.BankNumber = Single.data.result.bankNumber
            this.backMessage.BankAddress = Single.data.result.bankAddress
            this.backMessage.BankType = (Single.data.result.bankType).toString()
            this.bType[0] = this.backMessage.BankType
            console.log('this.bType', this.bType)
            console.log('this.backMessage.BankType', this.backMessage.BankType)
          } else {
            this.$vux.toast.warn(Single.data.message)
          }
        } else {
          this.operation = this.$route.params.operation
        }
        var bankList = await apiUser.bankCardType()
        this.bankList = bankList.data.result
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-account-bankcard-add {
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
  }
</style>

