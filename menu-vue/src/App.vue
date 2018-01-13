<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app'
};
</script>
<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/common.css');
#app{
    position: absolute;
    width: 100%;
    bottom: 0;
    top: 0;
    font-size: .14rem;
    display: flex;
    flex-direction: column;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
body{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
</style>
