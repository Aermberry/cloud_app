<template>

  <div class="zk-class-tab">

  </div>

</template>



<script>
  import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'zkui'
  export default {
    components: {
    },
    data () {
      return {
        GroupTitle,
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        XButton
      }
    },
    methods: {
    }
  }
</script>

<style>
  .zk-class-tab {
    width: 100%;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: auto;
  }
  .zk-class-tab-left {
    width: 75px;
    display: block !important;
  }
  .zk-class-tab-right {
    -ms-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
</style>

