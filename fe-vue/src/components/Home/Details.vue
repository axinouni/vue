<template>
  <div id="list">
      详情页
      {{$route.params.vid}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      fam: []
    }
  },
  name: 'Details'
}
</script>
<style scoped>

</style>
