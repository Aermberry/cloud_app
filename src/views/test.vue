<template>
  <div>

  </div>
</template>



<script>

  import apiService from 'src/service/api/apistore.api'
  export default {
    mounted: function () {
      var response = apiService.miniProgramLogin()
      console.dir(response)
    }
  }
</script>

