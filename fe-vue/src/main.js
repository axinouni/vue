import Vue from 'vue'
import App from './App'
import VueSwiper from 'vue-awesome-swiper'
import router from './router'
import mint from 'mint-ui'
import store from './Store'
import mock from './mock'

mock.bootstrap()// mock 数据
Vue.use(mint) // 挂载mint-ui
Vue.config.productionTip = false
Vue.use(VueSwiper) // 使用轮播

Vue.config.barseUrl = ''
if (process.env.NODE_ENV === 'production') {
  Vue.config.baseUrl = 'http://www.baidu.com'
}

// store.commit('ADD')
// store.dispatch('add')
// console.log(store.state.count)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  // mounted () {
  //   console.log(this)
  // },
  components: { App }
})
