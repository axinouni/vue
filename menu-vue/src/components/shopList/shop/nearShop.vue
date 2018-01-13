<template>
    <div class="nearShop">
        <router-link v-for='(item, index) in datas' :key="index" :to='{path: "/menu", query:item}'>
            <dl>
                <dt>
                    <h3>{{item.name}}</h3>
                </dt>
                <dd>
                    <p class='address'>{{item.address}}</p>
                    <p class='tel'>{{item.telephone}}</p>
                </dd>
            </dl>
        </router-link>
    </div>
</template>
<script>
import fetchJsonp from 'fetch-jsonp';
export default {
    name: 'nearShop',
    data () {
        return {
            changeidx:0,
            datas: []
        }
    },
    methods:{
        idx:function(index){
            this.changeidx = index;
            fetch('/getSite').then((res) => {
                res.json().then(datas => {
                    console.log(datas.content.point);
                    fetchJsonp(`http://api.map.baidu.com/place/v2/search?query=美食&region=北京&output=json&ak=LlDxGjNTIoCBhjjGIKEovdzPsSVl6eFX`).then((res) => {
                        res.json().then(data => {
                            this.datas = data.results;
                            console.log(this.datas);
                        })
                    })
                })
            })
        }
    },
    mounted () {
        this.idx();
    }
};
</script>
<style>
.nearShop{
    width: 100%;
}
.nearShop dl{
    text-align: center;
}
</style>

