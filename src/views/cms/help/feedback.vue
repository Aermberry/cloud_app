<template>
  <section class="zkui-user-apply">
    <!-- 头部 -->
    <zk-head title='意见反馈' goBack='返回'></zk-head>
    <div>
      <group gap="0.51rem 0rem" id="form">
        <x-textarea title="问题描述" class="zk-border-bottom"></x-textarea>
        <x-upload :fileCount="5" :savePath="savePath" :size="5*1024" ref="savePath">相关资料</x-upload>
        <x-input title="您的手机号" required type="number" is-type="currency" class="zk-border-bottom border-bottom"></x-input>
        <box gap="2rem">
          <x-button @click.native="apiPost" type="primary" action-type="button">提交</x-button>
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
