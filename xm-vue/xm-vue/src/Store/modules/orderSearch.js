import axios from 'axios';
const state = {
    data: [],
    total: 0,
    conditions: {
        pageNum: 10,
        pageIndex: 1,
        status: 3
    },
    dialogs: {
        istrue: false
    }
};
const actions = {
    orderSearch ({commit}, obj) {
        axios.post('/orderList', Object.assign(state.conditions, obj)).then((res) => {
            console.log(res.data);
            commit('SETDATA', res.data.orderData);
            commit('SETTOTAL', res.data.total);
        });
    },
    searchState ({commit}, obj) {
        commit('SEARCHSTATE', obj);
    },
    setedittype ({commit}, data) {
        console.log(data);
        commit('SETEDITTYPE', data);
    }
};
const mutations = {
    SETDATA (state, data) {
        state.data = data;
    },
    SETTOTAL (state, total) {
        state.total = total;
    },
    SEARCHSTATE (state, obj) {
        Object.assign(state.conditions, obj);
    },
    SETEDITTYPE (state, data) {
        // state.editType = data.type;
        // state.istrue = data.istrues;
        state.dialogs = data;
    }
};
export default {
    state,
    actions,
    mutations
};
