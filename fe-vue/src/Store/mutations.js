export default {
  ADD (state, num) {
    state.count += num
  },
  CUT (state) {
    state.count--
    if (state.count <= 0) {
      state.count = 0
    }
  }
}