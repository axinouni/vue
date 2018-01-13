<template>
  <header class="header">
    {{fam}}
  </header>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      fam: []
    }
  },
  mounted () {
    axios.get('./slideMock').then((res) => {
      this.fam = res.data.title
    })
  },
  name: 'header'
}
</script>
<style scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.header{
  line-height: .35rem;
  background: #E02E24;
  text-align: center;
  color: #fff;
  font-size: .16rem;
}
</style>
