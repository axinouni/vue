<template>
    <div class="home">
        <div class="Nav-left">
            <h5>We Mall</h5>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#304059"
                text-color="#fff"
                v-for="(v, k) in fam"
                :key="k"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <span>{{v.menuName}}</span>
                    </template>
                    <el-menu-item-group  v-for="(value, key) in v.childMenu" :key="key">
                        <router-link :to='value.route.path'>
                            <el-menu-item index="1-1">{{value.menuName}}</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class="Nav-top">
            <h1>{{headTit}}</h1>
            <div class="right">
                <span id="name">{{store}}</span>
                <router-link to="/login">
                    <span class="exist" @click='out'>退出</span>
                </router-link>
            </div>
        </div>
        <div class="Nav-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Home',
    data () {
        return {
            fam: '',
            store: ''
        };
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        },
        out () {
            // this.$store.dispatch('out');
            localStorage.setItem('username', '未登录');
            this.$router.push('/home');
        }
    },
    mounted () {
        this.$http.get('../../../static/data/data.json').then((res) => {
            this.fam = res.data;
        });
        this.store = localStorage.getItem('username');
    },
    computed: {
        ...mapState({names: state => state.Names.userName}),
        ...mapState({
            headTit: state => state.Title.headTit
        })
    }
};
</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.Nav-left{
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    background: #304059;
}
h1{
    line-height: .8rem;
    font-size: .18rem;
    color: #fff;
    text-align: left;
    padding-left: 10px;
}
h5{
    color: #B1BDD3;
    line-height: 0;
    font-size: .2rem;
    text-align: center;
}
.el-menu-item-group__title{
    padding: 0;
}
.Nav-top{
    position: absolute;
    top: 0;
    left: 240px;
    width: 100%;
    height: 80px;
    background: #0177E1;
}
.Nav-content{
    position: absolute;
    left: 240px;
    top: 80px;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
}
.right{
    position: absolute;
    right: 2.5rem;
    top: 0;
    height: 100%;
    line-height: 80px;
    color: #fff;
}
.name{
    margin-right: .1rem;
}
.name,.exist{
    cursor: pointer;
}
.exist{
    color: #fff;
    margin-left: 10px;
}
.el-menu-item{
    font-size: .12rem;
}
</style>