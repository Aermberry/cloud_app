<template>
  <div>
    <group>
      <x-button v-model="show7">pay</x-button>
    </group>
    <div v-transfer-dom>
      <popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <group>
            <cell title="Product" value="Donate"></cell>
            <cell title="Total" value="$10.24"></cell>
          </group>
          <div style="padding:20px 15px;">
            <x-button type="primary">Pay</x-button>
            <x-button @click.native="show7 = false">Cancel</x-button>
          </div>
        </div>
      </popup>
    </div>

  </div>
</template>

<script>
  import { Popup, Group, Cell, XButton } from 'zkui'
  export default {
    components: {
      Popup,
      Group,
      Cell,
      XButton
    },
    data () {
      return {
        show7: false
      }
    }
  }
</script>
