<template>
  <div>
  <div class="zkui-product-show-title clear" >
    <div class="zkui-product-show-title-left left">
      <ul class=" clear">
<li class="zkui-product-show-title-price_symbol left">￥</li>
<li class="zkui-product-show-title-price_now left" >{{intro[0]}} </li>
<li class="zkui-product-show-title-price_old left">￥{{intro[1]}}</li>
      </ul>
    </div>
    <div class="zkui-product-show-title-right right">
     {{intro[2]}}人已购
    </div>
  </div>

  <div class="zkui-product-show-title-content">
   {{intro[3]}}
  </div>

    <group gap="-0.46rem 0rem 0rem 0rem">
      <cell>
<span slot="title" >
  <ul class="zkui-product-show-serve-box clear">
    <li class="" >24小时发货</li>
    <li class="">7天包退</li>
    <li class="" >售后补贴</li>
    <li class="zkui-product-show-serve-item-more " >
      <a class="zkui-product-show-serve-item-more_icon">…</a>
    </li>
      </ul>
</span>
      </cell>
    </group>

  </div>
</template>

<style>

</style>

<script>
  import {Group,MCell} from 'zkui'
  export default {
    components: {
      Group,
      MCell
    },
    props: ['intro']
  }
</script>