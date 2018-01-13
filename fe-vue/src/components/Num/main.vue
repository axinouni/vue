<template>
  <div>
    <add />
    <cut />
    <display />
  </div>
</template>
<script>
import add from './add'
import cut from './cut'
import display from './display'
export default {
  name: 'main',
  components: {
    add,
    cut,
    display
  }
}
</script>


