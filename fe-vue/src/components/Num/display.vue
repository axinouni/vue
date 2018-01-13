<template>
  <div>
    内容：{{num}}
  </div>
</template>
<script>
export default {
  name: 'display',
  computed: {
    num () {
      return this.$store.state.count
    }
  }
}
</script>

