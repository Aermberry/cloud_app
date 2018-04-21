<template>
  <section class="zkui-user-apply">

    <zk-head title='意见反馈' goBack='返回'></zk-head>
    <div>
      <group gap="0.51rem 0rem" id="form">
        <x-textarea title="问题描述" class="zk-border-bottom" v-model="feedback.Description"></x-textarea>
        <zk-upload :fileCount="5" :savePath="savePath" :size="5*1024" ref="uploadFile" v-model="feedback.Attachment">相关资料</zk-upload>
        <box gap="2rem">
          <x-button @click.native="apiPost()" type="primary" action-type="button">提交</x-button>
        </box>
      </group>
    </div>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import { ZkUpload } from 'widgets'
  import apiService from 'src/service/api/workOrder.api'
  import { Group, XInput, Box, XTextarea, GroupTitle, XButton } from 'zkui'
  export default {
    components: {
      Group, XInput, Box, XTextarea, XButton, GroupTitle, ZkUpload
    },
    data () {
      return {
        feedback: {
          Description: '',
          Attachment: ''
        }
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async apiPost () {
        var a = document.getElementsByClassName('inputimg')
        this.feedback.Attachment = a[0].value
        var repsonse = await apiService.feedBackApply(this.feedback)
        console.dir(repsonse)
        if (repsonse.data.status === 1) {
          this.$vux.toast.success(repsonse.data.message)
        } else {
          this.$vux.toast.warn(repsonse.data.message)
        }
      },
      async GetData () {
        var response = await apiService.feedback()
        console.dir(response)
      }
    }
  }
</script>
