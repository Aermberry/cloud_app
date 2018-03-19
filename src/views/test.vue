<template>
  <div>
    <button @click="pop(qwe)">这是一个按钮</button>
    <div id="cover">
      登陆成功
    </div>
  </div>
</template>
<script>
  import { } from 'zkui'
  export default {
    components: {

    },
    methods: {
      pop (qwe) {
        var cover = document.getElementById('cover')
        cover.style.opacity = '1'
        var t
        clearTimeout(t)
        t = setTimeout(function () {
          cover.style.opacity = '0'
        }, 1000)
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style >
  #cover {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 4rem;
    width: 8rem;
    border-radius: 10px;
    line-height: 4rem;
    text-align: center;
    color: white;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    z-index: 1000;
    transition: all linear 0.5s;
  }
</style>
