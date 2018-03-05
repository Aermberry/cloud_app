<template>
  <div class="box">
    <checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
      <!-- <checker-item value="1">1</checker-item>
      <checker-item value="2">2</checker-item>
      <checker-item value="3">3</checker-item> -->
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i" @click.native="chengen(i)">￥{{i*300}}</checker-item>
    </checker>
    <br>
    <span>当前值: {{demo2}}</span>
    <br>
    <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i" @click.native="chengen(i)">￥{{i*300}}</checker-item>
  </div>
</template>

<script>
  import { Checker, CheckerItem, Divider, Group, Cell, Popup, TransferDom } from 'zkui'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Checker,
      CheckerItem,
      Divider,
      Group,
      Cell,
      Popup
    },
    data () {
      return {
        demo2: '2',
        qwe: ''
      }
    },
    mounted () {

    },
    methods: {
      chengen (a) {
        console.log(a)
      },
      onItemClick (value, disabled) {
        console.log(value, disabled)
        if (!this.disabled) {
          this.showPopup = false
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .box {
    padding: 0 15*@rem;
  }
  .demo2-item {
    width: 40*@rem;
    height: 40*@rem;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    line-height: 40*@rem;
    text-align: center;
  }
  .demo2-item-selected {
    border-color: green;
  }
  .box {
    padding: 0 15*@rem;
  }
  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15*@rem;
  }
  .demo1-item-selected {
    border: 1px solid green;
  }
  .demo2-item {
    width: 40*@rem;
    height: 40*@rem;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    line-height: 40*@rem;
    text-align: center;
  }
  .demo2-item-selected {
    border-color: green;
  }
  .demo3-item {
    padding: 5px 5*@rem;
    font-size: 0;
  }
  .demo3-item-selected {
    outline: 1px solid #8b8aee;
  }
  .demo4-item {
    background-color: #ddd;
    color: #222;

    padding: 5px 10*@rem;
    margin-right: 10*@rem;
    line-height: 18*@rem;
    border-radius: 15*@rem;
  }
  .demo4-item-selected {
    background-color: #ff3b3b;
    color: #fff;
  }
  .demo4-item-disabled {
    color: #999;
  }
  .demo5-item {
    width: 100*@rem;
    height: 26*@rem;
    line-height: 26*@rem;
    text-align: center;
    border-radius: 3*@rem;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6*@rem;
  }
  .demo5-item-selected {
    border-color: #ff4a00;
  }
</style>
