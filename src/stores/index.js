import { createStore } from 'vuex';
import { getField, updateField } from 'vuex-map-fields';
import userList from "@/stores/modules/user";

export default createStore({
    state: {
        isError: false
    },
    getters: {
        getField
    },
    mutations: {
        updateField
    },
    modules: {
        userList
    }
});
