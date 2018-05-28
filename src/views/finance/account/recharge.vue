<template>
  <section class="zkui-user-account-recharge">

    <zk-head title='充值'></zk-head>
    <div class="mode-payment">
      <ul>
        <li :class="{'active':isonLine}" @click="isonLine=true">
          线上支付
        </li>
        <li :class="{'active':!isonLine}" @click="isonLine=false">
          线下支付
        </li>
      </ul>
    </div>
    <group v-if="isonLine">
      <popup-picker title="账户类型" :data="rechargeTypeList" show-name :columns="1" v-model="rechargeTypeValue"></popup-picker>
      <x-input title="充值金额" type="text" pattern="[0-9]*" required v-model="onLine.amount"></x-input>
      <x-input title="备注" type="text" required v-model="onLine.remark"></x-input>
      <box gap="2rem 0.6rem">
        <x-button type="primary" action-type="button" @click.native="onLineSumbit()"> 充值</x-button>
      </box>
    </group>
    <group v-if="!isonLine">
      <popup-picker title="账户类型" :data="rechargeTypeList" show-name :columns="1" v-model="rechargeTypeValue"></popup-picker>
      <x-input title="充值金额" type="text" pattern="[0-9]*" required v-model="offOnLine.amount"></x-input>
      <popup-picker title="银行类型" :data="bankCardType" show-name :columns="1" v-model="bankCardTypeValue"></popup-picker>
      <x-input title="银行卡号" type="text" pattern="[0-9]*" :max="19" :min="19" required v-model="offOnLine.bankNumber"></x-input>
      <x-input title="持卡人姓名" type="text" required v-model="offOnLine.bankName"></x-input>
      <x-input title="备注" type="text" required v-model="offOnLine.remark"></x-input>
      <box gap="2rem 0.6rem">
        <x-button type="primary" action-type="button" @click.native="OffOnLineSumbit()"> 充值</x-button>
      </box>
    </group>
    <zk-pay ref="show_pay"></zk-pay>
    <!-- <zk-foot></zk-foot> -->
  </section>
</template>

<script>
  // import apiUser from 'src/service/api/user.api'
  import { PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge } from 'zkui'
  import apiUser from 'src/service/api/account.api'
  import common from 'src/service/api/common.api'
  import { ZkPay } from 'widgets'
  export default {
    components: {
      PopupPicker, Group, Cell, Picker, XButton, XInput, Box, Badge, ZkPay
    },
    data () {
      return {
        isonLine: true,
        onLine: { // 线上
          moneyTypeId: '',
          amount: '',
          remark: ''
        },
        rechargeTypeList: [], // 可选的充值账户
        rechargeTypeValue: [],
        bankCardType: [], // 可选银行卡类型
        bankCardTypeValue: [],
        offOnLine: { // 线下
          moneyTypeId: '',
          amount: '',
          bankType: '',
          bankNumber: '',
          bankName: '',
          remark: ''
        }
      }
    },
    mounted () {
      this.GetDate()
    },
    methods: {
      async onLineSumbit () {
        this.onLine.moneyTypeId = this.rechargeTypeValue[0]
        console.log('this.onLine', this.onLine)
        var AddOnline = await apiUser.AddOnline(this.onLine)
        if (AddOnline.data.status === 1) {
          this.$refs.show_pay.$emit('payMethod', AddOnline.data.result.id, AddOnline.data.result.amount, 'order', 1) // 唤起支付窗口
        } else {
          this.$vux.toast.warn(AddOnline.data.message)
        }
        console.log('AddOnline', AddOnline)
      },
      async OffOnLineSumbit () {
        this.offOnLine.moneyTypeId = this.rechargeTypeValue[0]
        this.offOnLine.bankType = this.bankCardTypeValue[0]
        console.log('AddOffOnline', this.offOnLine)
        var AddOffOnline = await apiUser.AddOffOnline(this.offOnLine)
        console.log('AddOffOnline', AddOffOnline)
        if (AddOffOnline.data.status === 1) {
          var Message = await common.GetConfigValue('RechargeConfig')
          console.log('Message', Message)
          this.messageSuccess('请在7个工作日内打款到此账户' + Message.data.result.receivablesBankInto)
        } else {
          this.$vux.toast.warn(Message.data.message)
        }
      },
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
        // 获取银行卡类型
        var bankCardType = await apiUser.bankCardType()
        console.log('bankCardType', bankCardType)
        this.bankCardType = bankCardType.data.result
      }
    }
  }
</script>
<style lang="less">
  .zkui-user-account-recharge {
    .weui-label {
      width: 8rem !important;
    }
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
    .mode-payment {
      ul {
        display: flex;
        li {
          flex: 1;
          height: 3rem;
          text-align: center;
          line-height: 3rem;
          font-weight: bold;
        }
        li.active {
          border-bottom: 2px solid @brand;
        }
      }
    }
  }
</style>

