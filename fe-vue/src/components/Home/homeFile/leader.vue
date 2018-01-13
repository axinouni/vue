<template>
  <div class="leader">
    <ul>
      <li v-for="(v, k) in fam" :key="k"><svg class="icon f18" aria-hidden="true"><use :xlink:href='v.icon' :keys='k'></use></svg><span>{{v.cont}}</span></li>
    </ul>
  </div>
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
      this.fam = res.data.leaders
    })
  },
  name: 'leader'
}
</script>
<style>
.leader {
  background: #fff;
} 
.leader ul {
  display: flex;
  flex-wrap: wrap;
} 
.leader ul li {
  width: 20%;
  text-align: center;
} 
.leader ul li svg {
  margin-top: 5px;
}
.leader ul li span {
  display: block;
  line-height: .3rem;
}
</style>
