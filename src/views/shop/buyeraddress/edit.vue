<template>
  <section class="zkui-user-buyeraddress-edit">

    <zk-head title='地址编辑' goBack='收货地址'></zk-head>
    <div>
      <group id="form">
        <x-input title="收货人" required :min="2" :max="12" v-model="debtApiInput.name"></x-input>
        <x-input title="联系电话" required placeholder="请输入债务人的手机号" mask="999 9999 9999" v-model="debtApiInput.mobile" :max="13" is-type="mobile"></x-input>
      </group>
      <group>
        <zk-address></zk-address>
        <x-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      </group>
      <group>
        <x-button type="primary">确定</x-button>
        <x-button type="warn">取消</x-button>
      </group>
    </div>

  </section>
</template>

<script>
  import apiService from 'src/service/api/debt.api'
  import { ZkAddress } from 'widgets'
  import { Group, XInput, Box, XTextarea, XUpload, GroupTitle, XButton, XAddress } from 'zkui'
  export default {
    components: {
      Group, XInput, Box, XTextarea, XButton, XUpload, GroupTitle, XAddress, ZkAddress
    },
    data () {
      return {
        debtApiInput: {
          name: 'ddd',
          mobile: '13865466956'
        }
      }
    },
    methods: {
      async apiPost () {
        var response = await apiService.apply(this.debtApiInput)
        if (response.data.status === 1) {
          this.messageSuccess('申请成功')
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>
