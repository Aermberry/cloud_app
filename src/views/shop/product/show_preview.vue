<template>

</template>

<script>
  /* eslint-disable */

  import apiService from 'src/service/api/product.api'
  export default {
    directives: {
    },
    components: {
    },
    methods: {
      show (index) {
        this.$refs.previewer.show(index)
      },
      async GetData () {
        let params = {
          id: this.$route.params.id // 获取URL当中的Id参数
        }
        console.log(this.$route.params.id)
        var response = await apiService.show(params)
        var product = response.data.result
        for (var i = 0; i < product.productThums.length; i++) {
          this.img.push(product.productThums[i].thumbnailUrl)
        }
        console.log(this.img)
        // console.log(this.thumbnails.length)
        // console.log(this.thumbnails[0].thumbnailUrl)



      }
    },
    mounted () {
      this.GetData()
      console.log(this.list)
    },
    data () {
      return {
        img: [],
        list: [{
          src: 'https://ooo.0o0.ooo/2017/05/17/591c271ab71b1.jpg'
        },
        {
          src: 'https://ooo.0o0.ooo/2017/05/17/591c271acea7c.jpg'
        },
        {
          src: 'https://ooo.0o0.ooo/2017/06/15/59425a592b949.jpeg'
        }],
        options: {
          getThumbBoundsFn (index) {
            //  find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            //  get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            //  optionally get horizontal scroll
            //  get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            //  w = width
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
            //  Good guide on how to get element coordinates:
            //  http://javascript.info/tutorial/coordinates
          }
        }
      }
    }
  }
</script>
