<template>
  <section class="zkui-user-tree">

    <zk-head title='组织架构图' goBack='会员中心'></zk-head>
    <!-- <div style='display:flex flex:3'>
      <div style='flex:1'>
        <div v-if='Plist.length>0'>
          <vue-ztree :list.sync='Plist' :func='nodeClick' :is-open='false'></vue-ztree>
        </div>
      </div>

    </div> -->
    <zk-foot></zk-foot>
  </section>
</template>

<script>
  // import apiService from 'src/service/api/user.api'
  // import vueZtree from 'src/widgets/zk-tree'
  // export default {
  //   data () {
  //     return {
  //       msg: 'Hello Vue-Ztree-2.0!',
  //       Datalist: '',
  //       Plist: [],
  //       ztreeDataSource: [],
  //       dataList: [],
  //       treeDeepCopy: [],
  //       parentNodeModel: [],
  //       nodeModel: null
  //     }
  //   },
  //   methods: {
  //     async GetData () {
  //       var res = await apiService.Tree()
  //       console.log(res.data.result)
  //       this.Datalist = res.data.result
  //       this.Datalist.forEach(element => {
  //         var parent = {}
  //         parent['id'] = element.id
  //         parent['parentId'] = element.pId
  //         parent['name'] = element.name
  //         this.Plist.push(parent)
  //       })
  //       console.log(this.Plist)
  //     },
  //     navigateClick: function (index, item) {
  //       var recurFunc = (data, list) => {
  //         data.forEach((i) => {
  //           if (i.id === item.id) {
  //             i.clickNode = true
  //             this.nodeModel = i
  //             this.parentNodeModel = data
  //           } else {
  //             i.clickNode = false
  //           }
  //           if (i.children) {
  //             recurFunc(i.children, i)
  //           }
  //         })
  //       }
  //       recurFunc(this.treeDeepCopy, this.treeDeepCopy)
  //       var self = this
  //       for (var i = 0; i < self.dataList.length; i++) {
  //         if (index === i) {
  //           self.dataList[i].clickNode = true
  //         } else {
  //           self.dataList[i].clickNode = false
  //         }
  //       }
  //       self.dataList.splice(index + 1, self.dataList.length - (index + 1))
  //       this.ztreeDataSource = this.treeDeepCopy
  //     },
  //     findById: function (data, parentId) {
  //       var vm = this

  //       for (var i = 0; i < data.length; i++) {
  //         if (parentId === data[i].id) {
  //           console.log(data[i])
  //           vm.dataList.push(data[i])
  //           vm.findById(vm.ztreeDataSource, data[i].parentId)
  //           return data[i]
  //         }
  //         if (data[i].hasOwnProperty('children')) {
  //           vm.findById(data[i].children, parentId)
  //         }
  //       }
  //     },
  //     nodeClick: function (m, parent, trees) {
  //       this.treeDeepCopy = trees
  //       this.nodeModel = m
  //       this.parentNodeModel = parent
  //       this.dataList = []
  //       this.findById(this.ztreeDataSource, m.parentId)
  //       this.dataList = this.dataList.reverse()
  //       this.dataList.push(m)
  //     },
  //     contextmenuClick: function (m) {
  //       console.log(m)
  //       console.log(event.target)
  //       console.log('触发了自定义的contextmenuClick事件 ')
  //       alert('触发了自定义 ')
  //     }
  //   },
  //   components: {
  //     vueZtree
  //   },
  //   mounted () {
  //     this.GetData()
  //   }
  // }
</script>

