<template>
  <header class="header">
    {{fam.title}}
    <i class="fa fa-window-maximize"></i>
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
    axios.get('./seaMock').then((res) => {
      this.fam = res.data.header
    })
  },
  name: 'header'
}
</script>
<style scoped>
.header{
    line-height: .35rem;
    background: #F8F8F8;
    color: #000;
    position: relative;
    font-size: .14rem;
}
.fa-window-maximize{
    position: absolute;
    right: 10px;
    top: 10px;
}
</style>
