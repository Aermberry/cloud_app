<template>
  <section class="zkui-user-tree">
    <zk-head title='组织架构图' goBack='会员中心'></zk-head>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  import apiService from 'src/service/api/user.api'
  export default {
    data () {
      return {
        Datalist: '',
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      async GetData () {
        var res = await apiService.Tree()
        this.Datalist = res.data.result
        console.log(this.Datalist)
      },
      handleNodeClick (data) {
        console.log(data)
      }
    },
    components: {
    },
    mounted () {
      this.GetData()
    }
  }
</script>
<style lang="less">
  .zkui-user-tree {
    .el-tree {
      width: 100%;
      height: 90vh;
      padding: 1rem 1rem 3.33333333rem 1rem;
      overflow-y: auto;
    }
  }
</style>


