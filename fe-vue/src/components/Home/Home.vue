<template>
  <div>
    <Headers />
    <div class="content" id="Home">
      <Navbars />
      <Banners />
      <Leaders />
      <Bars />
    </div>
  </div>
</template>
<script>
import Navbars from './homeFile/navbar.vue'
import Headers from './homeFile/header.vue'
import Banners from './homeFile/banner.vue'
import Leaders from './homeFile/leader.vue'
import Bars from './homeFile/bar.vue'
export default {
  name: 'Home',
  components: {
    Headers,
    Navbars,
    Banners,
    Leaders,
    Bars
  }
}
</script>
<style scoped>
.content {
    flex: 1;
    overflow-y: scroll;
    margin-top: .35rem;
}
.header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 123;
}
</style>
