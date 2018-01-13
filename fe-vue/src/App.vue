<template>
  <div id="app" class="wrapper">
    <!-- <Headers /> -->
    <div class="content">
      <router-view></router-view>
    </div>
    <Footers />
  </div>
</template>
<script>
import './assets/fonts/iconfont.js'
import Footers from './components/common/footer.vue'
// import Headers from './components/common/header.vue'
export default {
  name: 'app',
  components: {
    // Headers,
    Footers
  }
}
</script>
<style>
@import "./assets/css/reset.css";
@import "./assets/css/common.css";
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/swiper.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.wrapper{
  font-size: .12rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background: #F2F2F2;
}
::-webkit-scrollbar{
  display: none;
}
.content {
    flex: 1;
    overflow-y: scroll;
}
</style>
