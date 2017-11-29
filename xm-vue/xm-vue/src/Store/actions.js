export default {
    user ({commit}, names) {
        commit('USER', names);
        console.log(names);
    },
    out ({commit}) {
        commit('OUT');
    },
    setTitle ({commit}, title) {
        commit('SETTITLE', title);
        console.log(title);
    }
};
