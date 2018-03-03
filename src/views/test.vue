<template>

  <div class="zk-class-tab">
    <swipeout>

      <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">456</swipeout-button>
        </div>
        <div slot="content" class="demo-content border-top">
          789
        </div>
      </swipeout-item>

    </swipeout>
  </div>

</template>



<script>
  import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'zkui'
  export default {
    components: {
      GroupTitle,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      XButton
    },
    data () {
      return {
        disabled: false
      }
    },
    methods: {
      onButtonClick (type) {
        alert('on button click ' + type)
      },
      handleEvents (type) {
        console.log('event: ', type)
      }
    }
  }
</script>

<style>

</style>

