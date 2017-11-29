const state = {
    headTit: '未登录'
};
const actions = {
    setTitle ({commit}, title) {
        commit('SETTITLE', title);
    }
};
const mutations = {
    SETTITLE (state, title) {
        state.headTit = title;
    }
};
export default {
    state,
    actions,
    mutations
};
