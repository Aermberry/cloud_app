<template>
  <section class="zkui-user-apply">

    <zk-head title='意见反馈' goBack='返回'></zk-head>
    <div>
      <group gap="0.51rem 0rem" id="form">
        <x-textarea title="问题描述" class="zk-border-bottom" v-model="feedback.Description"></x-textarea>
        <x-upload :fileCount="5" :savePath="savePath" :size="5*1024" ref="savePath" v-model="feedback.Attachment">相关资料</x-upload>
        <box gap="2rem">
          <x-button @click.native="apiPost()" type="primary" action-type="button">提交</x-button>
        </box>
      </group>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/workOrder.api'
  import { Group, XInput, Box, XTextarea, XUpload, GroupTitle, XButton } from 'zkui'
  export default {
    components: {
      Group, XInput, Box, XTextarea, XButton, XUpload, GroupTitle
    },
    data () {
      return {
        feedback: {
          Description: 'ff',
          Attachment: 'ff'
        }
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async apiPost () {
        var repsonse = await apiService.feedBackApply(this.feedback)
        console.dir(repsonse)
      },
      async GetData () {
        var response = await apiService.feedback()
        console.dir(response)
      }
    }
  }
</script>
