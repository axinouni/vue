<template>
    <div class="navlist">
        <ul>
            <li v-for="(v, k) in fam" :key="k">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="v.icon"></use>
                </svg>
                <span>{{v.txt}}</span>
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
      this.fam = res.data.navlist
    })
  },
  name: 'navlist'
}
</script>
<style scoped>
.navlist{
    background: #fff;
}
.navlist ul{
    display: flex;
}
.navlist ul li{
    flex: 1;
    text-align: center;
}
.icon{
    margin-top: 15px;
    font-size: .2rem;
}
.navlist ul li span{
    display: block;
    line-height: .4rem;
}

</style>
