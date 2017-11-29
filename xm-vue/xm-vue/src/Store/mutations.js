export default {
    USER (state, names) {
        state.userName = names;
    },
    OUT (state) {
        state.userName = '未登录';
        console.log(state.userName);
    },
    SETTITLE (state, title) {
        state.headTit = title;
    }
};
