import {getField, updateField} from "vuex-map-fields";
import axios from "axios";

const state = {
    users: [],
    userDetail: {},
};

const getters = {
    getField
};

const mutations = {
    updateField,
    setUsers(state, payload) {
        state.users = payload;
    },
    setUserDetail(state, payload){
        state.userDetail= payload
    }
};

const actions = {
    getUsers({commit}) {
       return axios.get("https://jsonplaceholder.typicode.com/users/")
            // .then(response => {
            //     commit('setUsers', response.data);
            // })
    },
    getUserDetails({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.get(`https://jsonplaceholder.typicode.com/users/${payload}`)
                .then(response => {
                    let responseData = response.data
                    commit('setUserDetail', responseData)
                    resolve()
                })
                .catch((err) => {
                    reject()
                   return  e => console.log(e)
                })
        })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
