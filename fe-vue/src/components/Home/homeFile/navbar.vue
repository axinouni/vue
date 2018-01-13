<template>
  <div class="navbar">
    <ul>
      <li v-for="(v, k) in fam" :key="k">{{v}}</li>
    </ul>
  </div>
</template>
<script>
// import { slideMock } from '../../mock/index.js'
// console.log(slideMock.navbars)
import axios from 'axios'
export default {
  data () {
    return {
      // navbars: slideMock.navbars
      fam: []
    }
  },
  mounted () {
    axios.get('./slideMock').then((res) => {
      this.fam = res.data.navbars
      console.log(res.data.navbars)
    })
  },
  name: 'navbar'
}
</script>
<style>
.navbar {
  line-height: .3rem;
} 
.navbar ul {
  display: flex;
  overflow-x: scroll;
}
.navbar ul li {
  float: left;
  width: 15%;
  flex-shrink: 0;
  text-align: center;
}  
</style>
