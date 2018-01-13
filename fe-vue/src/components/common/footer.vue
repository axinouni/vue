<template>
<footer class="footer">
  <ul>
    <li v-for='(v, k) in fam' :key="k" :class="{bg:flag == k}" @click="fn(k)">
      <router-link :to="v.url">
        <i :class="v.cls"></i>
        <span>{{v.con}}</span>
      </router-link>
    </li>
  </ul>
</footer>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      fam: [],
      flag: 0
    }
  },
  methods: {
    fn (k) {
      this.flag = k
    }
  },
  mounted () {
    axios.get('./slideMock').then((res) => {
      this.fam = res.data.footers
    })
  },
  name: 'footer'
}
</script>
<style>
.footer {
  height: .4rem;
  background: #F9F9F9;
  border-top: 1px solid #E0E0E0;
}
.footer ul {
  display: flex;
}
.footer ul li {
  flex: 1;
  text-align: center;
}
.footer ul li i {
  margin-top: 5px;
}  
.footer ul li span {
  display: block;
  line-height: .2rem;
}
.footer ul .bg {
  color: #E02E24;
}
</style>
