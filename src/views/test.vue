<template>
  <section class="zkui-reward-list">

    <zk-head title='z' goBack='�ҵ�Ǯ��'></zk-head>
    <group>
      <x-input title="收件人" type="text" placeholder="请输入联系人" v-model="recipients"></x-input>
      <x-input title="联系电话" type="text" placeholder="请输入联系电话" v-model="relationPhone" :max="13" is-type="china-mobile" mask="999 9999 9999"></x-input>
      <x-input title="邮政编码" type="text" placeholder="请输入邮政编码" v-model="postalCode" :max="6" is-type="china-mobile"></x-input>
    </group>
    <popup-picker title="选择地址" :data="list3" :columns="3" v-model="value3" ref="picker3"></popup-picker>
    <cell title="你选择的地址" :value="$refs.picker3&&$refs.picker3.getNameValues()"></cell>
    <group>
      <x-textarea :max="200" placeholder="详细地址" autosize v-model="detailedAddress"></x-textarea>
      <x-switch title="是否默认" :value-map="['否', '是']" v-model="stringValue"></x-switch>
      <cell title="" :value="stringValue"></cell>
    </group>
    <div class="reward-list-buttom">
      <x-button type="primary" @click.native="GetData()">保存</x-button>
      <x-button>取消</x-button>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import userService from 'src/service/api/user.api'
  import { FormPreview, PopupPicker } from 'vux'
  import { Group, XInput, Box, XButton, Cell, Picker, Divider, XSwitch, XTextarea } from 'zkui'
  export default {
    components: {
      FormPreview,
      Group,
      XInput,
      Box,
      XButton,
      Cell,
      PopupPicker,
      Picker,
      Divider,
      XSwitch,
      XTextarea
    },
    mounted () {

    },
    methods: {
      async GetData () {
        this.province = this.value3[0]
        this.city = this.value3[1]
        this.district = this.value3[2]
        let par = {
          IsDefault: this.stringValue,
          Mobile: this.relationPhone,
          ZipCode: this.postalCode,
          Address: this.detailedAddress,
          Name: this.recipients,
          Province: this.province,
          City: this.city,
          Country: this.district

        }
        var response = await userService.AddAddress(par)
        if (response.data.result === 1) {
          this.$vux.toast.success('添加成功')
        } else {
          this.$vux.toast.warn('添加失败')
        }
      },

      ceshi () {
        console.log(this.value3)
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
        qwe: '',
        value3: [],
        recipients: '',
        relationPhone: '',
        detailedAddress: '',
        stringValue: '否',
        postalCode: '',
        province: '',
        city: '',
        district: '',
        list: [{
          label: '商品',
          value: '电动打蛋机',
          title: '付款金额'
        }, {
          label: '标题标题',
          value: '名字名字名字'
        }, {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }],
        buttons1: [{
          style: 'default',
          text: '辅助操作'
        }, {
          style: 'primary',
          text: '跳转到首页',
          link: '/'
        }],
        showPopupPicker: false,
        formatDemoValue: ['01', '12'],
        format: function (value, name) {
          return `${value[0]}:${value[1]}`
        }
      }
    }
  }

</script>

<style lang="less">
  .reward-list-buttom {
    padding: 3rem 1rem;
    button {
      padding: 0.8rem 0;
      font-size: @h4-font-size;
    }
  }
  .weui-switch:before,
  .weui-switch-cp__box:before {
    height: 2.66666667rem !important;
  }
  .weui-switch:after,
  .weui-switch-cp__box:after {
    height: 2.66666667rem !important;
    width: 2.66666667rem !important;
  }
  .weui-cells:after {
    content: none !important;
  }
</style>






