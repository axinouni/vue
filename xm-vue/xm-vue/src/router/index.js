import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '../components/User/Login';
import Home from '../components/Home/Home';

import order from '@/components/Order/dingdan/order';
import goodslist from '@/components/Order/shangpin/goodslist';
import typelist from '@/components/Order/shangpin/typelist';
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页'
            },
            children: [
                {
                    name: 'order',
                    path: 'order',
                    meta: {
                        title: '订单管理'
                    },
                    component: order
                },
                {
                    name: 'goodslist',
                    path: 'goodslist',
                    meta: {
                        title: '商品管理'
                    },
                    component: goodslist
                },
                {
                    name: 'typelist',
                    path: 'typelist',
                    meta: {
                        title: '商品管理'
                    },
                    component: typelist
                }
            ]
        }
    ]
});
router.afterEach((to, from) => {
    setTimeout(() => {
        (to.meta) && (this.a.app.$store.dispatch('setTitle', to.meta.title));
    }, 0);
});
export default router;
