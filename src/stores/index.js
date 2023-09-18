import { createStore } from 'vuex';
import {getField, updateField} from 'vuex-map-fields'
import userList from "@/stores/modules/user";

const index = createStore({
    state: {
        isError: false
    },
    getters: {
        getField
    },
    mutations: {
        updateField,
    },
    modules: {
        userList
    }
});

export default index;