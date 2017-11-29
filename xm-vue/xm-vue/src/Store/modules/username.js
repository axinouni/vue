const state = {
    userName: '未登陆'
};
const actions = {
    user ({commit}, names) {
        commit('USER', names);
        console.log(names);
    },
    out ({commit}) {
        commit('OUT');
    }
};
const mutations = {
    USER (state, names) {
        state.userName = names;
    },
    OUT (state) {
        state.userName = '未登录';
        console.log(state.userName);
    }
};
export default {
    state,
    actions,
    mutations
};
