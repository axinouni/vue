<template>
  <div id="myself">
    <my-header />
    <my-navbar />
    <my-navlist />
    <my-list />
      <!-- <router-link to='/user/profile'>跳转二级</router-link> -->
  </div>
</template>
<script>
import myHeader from './myselfFile/header.vue'
import myNavbar from './myselfFile/navbar.vue'
import myNavlist from './myselfFile/navlist.vue'
import myList from './myselfFile/list.vue'
export default {
  components: {
    myHeader,
    myNavbar,
    myNavlist,
    myList
  },
  name: 'myself'
}
</script>
<style scoped>
#myself{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
