<template>
  <div id="sea">
      <Headers />
      <Panic />
      <!-- <router-link to='/user/profile'>跳转二级</router-link> -->
  </div>
</template>
<script>
import Headers from './seafile/header'
import Panic from './seafile/panic'
export default {
  components: {
    Headers,
    Panic
  },
  name: 'sea'
}
</script>
<style scoped>
/* #sea{
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
} */

</style>
