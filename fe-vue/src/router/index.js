import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import User from '../components/User/User'
import Sea from '../components/Sea/Sea'
import Search from '../components/Search/Search'
import Myself from '../components/Myself/Myself'
import Details from '../components/Home/Details'
import Main from '../components/Num/main' // 计数器 store
// import Profile from '../components/User/profile'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'User',
      path: '/User',
      component: User
    },
    {
      name: 'Sea',
      path: '/Sea',
      component: Sea
    },
    {
      name: 'Search',
      path: '/Search',
      component: Search
    },
    {
      name: 'Myself',
      path: '/Myself',
      component: Myself
    },
    {
      name: 'Details',
      path: '/Details/:vid',
      component: Details
    },
    {
      name: 'Main',
      path: '/main',
      component: Main
    }
  ]
})