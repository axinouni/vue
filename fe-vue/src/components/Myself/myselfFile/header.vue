<template>
  <div class="header">
    <dl>
        <dt>
            <img src="../../../assets/img/con1.png" alt="">
        </dt>
        <dd>
            <h3>{{fam.name}}</h3>
            <p>{{fam.bind}}</p>
            <span class="fa-right">{{fam.icon}}</span>
        </dd>
    </dl>
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
      this.fam = res.data.header
    })
  },
  name: 'header'
}
</script>
<style scoped>
.header{
    background: url(../../../assets/img/bg1.png) left;
    background-size: contain;
    padding: 20px 0;
}
.header dl{
    display: flex;
}
.header dl dd{
    flex: 1;
    text-align: left;
    margin-left: 10px;
}
.header dl dt img{
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    float: left;
    margin-left: 10px;
}
.header dl dd{
    position: relative;
}
.header dl dd p{
    font-size: .12rem;
}
.fa-right{
    position: absolute;
    right: 10px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: .16rem;
}
h3{
    font-size: .16rem;
    line-height: .4rem;
}
</style>
