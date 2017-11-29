<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import './assets/css/common.css';
import './assets/css/reset.css';
export default {
    name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app{
  font-size: .12rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  top:0;
}
</style>
