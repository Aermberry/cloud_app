<template>
  <section>
    <div class="zk-not-data">
      <m-icon name="zk-notdata"></m-icon>
      <p>暂无数据</p>
    </div>
  </section>
</template>

<script>
  import { MIcon } from 'zkui'
  export default {
    name: 'zk-nodata',
    components: {
      MIcon
    }
  }
</script>

<style  lang="less" >
  .zk-not-data {
    margin: 0 auto;
    padding-top: 150*@rem;
    text-align: center;
    svg {
      width: 50*@rem;
      height: 50*@rem;
    }
    p {
      font-size: @h4-font-size;
    }
  }
</style>
