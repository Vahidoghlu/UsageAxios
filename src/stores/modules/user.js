import { getField, updateField } from "vuex-map-fields";
import axios from "axios";

const state = {
    users: [],
    userDetail: {},
};

const getters = {
    getField,
};

const mutations = {
    updateField,
    setUsers: (state, users) => {
        state.users = users;
    },
    setUserDetail: (state, userDetail) => {
        state.userDetail = userDetail;
    },
};

const actions = {
    async getUsers({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
        commit('setUsers', response.data);
    },
    async getUserDetails({ commit }, payload) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${payload}`);
            commit('setUserDetail', response.data);
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
