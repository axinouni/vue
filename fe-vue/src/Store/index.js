import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex) // 挂载Vuex
const state = {
  count: 0
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})