import Vue from 'vue';
import VueRouter from 'vue-router';
import storList from '../components/shopList/storList';// 合集
import allShop from '../components/shopList/shop/allShop';// 全部美食
import nearShop from '../components/shopList/shop/nearShop';// 附近美食
import menu from '../components/menu/menu';
Vue.use(VueRouter);
const liu = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'storList',
            component: storList,
            children: [
                {
                    path: '/',
                    name: 'nearShop',
                    component: nearShop
                },
                {
                    path: '/allShop',
                    name: 'allShop',
                    component: allShop
                }
            ]
        },
        {
            path: '/menu',
            name: 'menu',
            component: menu
        }
    ]
})
export default liu;
