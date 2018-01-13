<template>
  <div class="panic">
    <ul>
      <li v-for="(v, k) in fam" :key="k">
        <!-- <h3>{{v.title}}</h3>
        <time>{{v.dis}}</time>
        <div class="img"></div> -->
      </li>
    </ul>
  </div>
</template>
<script scoped>
import axios from 'axios'
export default {
  data () {
    return {
      fam: []
    }
  },
  mounted () {
    axios.get('./seaMock').then((res) => {
      this.fam = res.data.panic
    })
  },
  name: 'panic'
}
</script>
<style scoped>
.panic{
  width: 100%;
}
.panic ul{
  display: flex;
  background: #fff;
}
.panic ul li{
  flex: 1;
  text-align: center;
}
h3{
  line-height: .5rem;
  font-size: .18rem;
}
/* .img{
  width: 80%;
  height: .8rem;
  background: url(../../../assets/img/img01.png) no-repeat center;
  background-size: contain;
  margin: 0 auto;
} */

</style>
