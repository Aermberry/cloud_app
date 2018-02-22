<template>
  <section class="zkui-user-apply">
    <!-- 头部 -->
    <zk-head title='债事报备' goBack='首页'></zk-head>
    <div>
      <group gap="0.51rem 0rem" id="form">
        <x-input title="债务人姓名" required :min="2" :max="12" v-model="apply.name"></x-input>
        <x-input title="债务人手机号" required placeholder="请输入债务人的手机号" mask="999 9999 9999" v-model="apply.mobile" :max="13" is-type="mobile"></x-input>
        <x-input title="债务人身份证号" required :max="18" is-type="idcard"></x-input>
      </group>
      <group>
        <group-title slot="title">I'm a title
          <span style="float:right;">right</span>
        </group-title>
        <box gap="0.2rem 0.2rem">
          <x-input title="债事金额" required type="number" is-type="currency" class="zk-border-bottom"></x-input>
          <x-textarea title="债事过程" class="zk-border-bottom"></x-textarea>
          <x-upload :fileCount="20" :savePath="savePath" :size="5*1024" ref="savePath">相关资料</x-upload>
          <x-button @click.native="apiPost" type="primary" action-type="button">下一步</x-button>
        </box>
      </group>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import  apiService from 'src/service/api/debt.api'
  import { Group, XInput, Box, XTextarea, XUpload, GroupTitle, XButton } from 'zkui'
  export default {
    components: {
      Group, XInput, Box, XTextarea, XButton, XUpload, GroupTitle
    },
    data () {
      return {
        savePath: '/open/debt',
        files: [],
        step2: 0,
        apply: {
          name: '',
          mobile: '',
          IDCard: '',
          DebtProcess: '',
          Attachment: '',
          Amount: ''
        }
      }
    },
    methods: {
      nextStep () {
        console.dir(this.$ref)
      },
      async apiPost () {
        //  var repsonse = await apiService.apply(this.apply)
        //  console.dir(repsonse)
      }
    }
  }
</script>
