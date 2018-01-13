<template>
    <div id="storList" class="storList">
        <ul class="header">
            <router-link v-for='(v, k) in navList' :key='k' :to="v.url">
                <li>{{v.tex}}</li>
            </router-link>
        </ul>
        <div id="box">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
 import fetchJsonp from 'fetch-Jsonp';
 export default {
    name: 'storList',
    data () {
        return {
            navList:[
                {
                    "tex":"附近的店",
                    "url": '/'               
                },
                {
                    "tex":"所有门店",
                    "url": '/allShop'               
                }
            ]
        };
    }
};          
</script>

<style>
::-webkit-scrollbar{
    display: none;
}
.storList{
    display: flex;
    flex-direction: column;
}
.header{
    display: flex;
    height: 60px;
    line-height: 60px;
}
.header a{
    flex: 1;
    text-align: center;
}
#box{
    flex: 1;
    overflow-y: scroll;
}
</style>
