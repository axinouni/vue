<template>
  <div id="search">
    <div class="wrapbox">
        <i class="fa fa-search"></i>
        <input type="text" name="" id="">
    </div>
    <mt-index-list>
        <mt-index-section v-for="(i, k) in fam" :key="k" :index="i.name">
            <mt-cell v-for="(item, k) in i.city" :title="item.name" :key="k">
            </mt-cell>
        </mt-index-section>
    </mt-index-list>
      <!-- <router-link to='/user/profile'>跳转二级</router-link> -->
  </div>
</template>
<script>
import Vue from 'vue'
import '../../assets/css/style.css'
import { IndexList, IndexSection } from 'mint-ui'
import axios from 'axios'
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
export default {
  data () {
    return {
      fam: []
    }
  },
  methods: {
    fn () {
      console.log(1)
    }
  },
  mounted () {
    axios.get('./slideMock').then((res) => {
      this.fam = res.data.province
      console.log(res.data)
    })
  },
  name: 'search'
}
</script>
<style>
.mint-indexlist-content{
    text-align: left;
    width: 100%;
    margin-top: 16px;
}
.mint-indexlist-nav{
    margin-top: 16px;
}
.mint-indexsection-index{
    background: red;
    color: #fff;
    font-size: .14rem;
}
.mint-cell-text{
    font-size: .14rem;
}
.wrapbox{
    width: 80%;
    height: 30px;
    margin: 5px auto;
    position: relative;
}
.fa-search{
    position: absolute;
    right: 0;
    top: 13px;
}
input{
    width: 80%;
    height: 30px;
    margin: 5px auto;
    position: relative;
}
</style>
