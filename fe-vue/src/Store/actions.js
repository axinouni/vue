export default {
  add ({commit}, num) {
    commit('ADD', num)
  },
  cut ({commit}) {
    commit('CUT')
  }
}