<template>
  <section>
    <div v-for="(list,index) in cells" :key="index" class="list">
      <group>
        <cell v-for="(item,index) in list.links" :key="index" :title="item.name" :link="item.url" :svg="item.icon"></cell>
      </group>
    </div>
  </section>
</template>

<script>
  import { MIcon, Group, Cell } from 'zkui'
  import apiService from 'src/service/api/diy.api'
  export default {
    name: 'zk-cell',
    components: {
      MIcon,
      Group,
      Cell
    },
    props: ['links', 'diykey'],
    data () {
      return {
        cells: []
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      async GetData () {
        if (this.diykey === undefined) {
          this.cells = this.links
        } else {
          var repsonse = await apiService.getLink(this.diykey)
          this.cells = repsonse.data.result
        }
      }
    }
  }
</script>

