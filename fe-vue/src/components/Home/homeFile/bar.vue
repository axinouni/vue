<template>
  <div class="bar">
    <div class="oricon" v-for="(v, k) in fam" :key="k">
      <router-link :to="`/Details/${v.vid}`">
        <img :src='v.img' alt="">
      </router-link>
      <div class="text">{{v.conts}}</div><p><strong>{{v.pri}}</strong> {{v.pCon}}<span>{{v.go}}</span></p>
    </div>
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
      this.fam = res.data.oricons
    })
  },
  name: 'bar'
}
</script>
<style>
.oricon {
  margin-top: 5px;
  background: #fff;
  padding: 5px 0;
}
.oricon img {
  width: 100%;
  height: 1.55rem;
} 
.oricon .text {
  box-sizing: border-box;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.oricon p {
  box-sizing: border-box;
  padding: 0 5px;
  line-height: .3rem;
  margin-top: 5px;
  text-align: left;
}  
.oricon p strong {
  color: #E02E24;
  font-size: .14rem;
  float: left;
  margin-right: 5px;
} 
.oricon p span {
  float: right;
  background: #E02E24;
  color: #fff;
  border-radius: 8px;
  padding: 0 10px;
}
</style>
