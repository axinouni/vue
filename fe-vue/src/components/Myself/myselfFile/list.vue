<template>
  <div class="list">
      <ul>
          <li v-for="(v, k) in fam" :key="k">
              <i :class='v.icon'></i>
              {{v.txt}}
              <span>{{v.icons}}</span>
          </li>
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
    axios.get('./myselfMock').then((res) => {
      this.fam = res.data.list
    })
  },
  name: 'list'
}
</script>
<style scoped>
.list{
    background: #fff;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 10px;
}
.list ul li{
    line-height: .4rem;
    text-align: left;
}
.list ul li span{
    float: right;
}
</style>

