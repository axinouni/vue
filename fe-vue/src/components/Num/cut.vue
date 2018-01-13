<template>
  <div>
    <button @click="cut">-1</button>
  </div>
</template>
<script>
export default {
  name: 'cut',
  methods: {
    cut () {
      this.$store.dispatch('cut')
    }
  }
}
</script>