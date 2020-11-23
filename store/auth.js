import * as types from './mutation-types';
import API from '@/plugins/api';

/**
 * Initial state
 */
export const state = () => ({
    user: JSON.parse(localStorage.getItem('user'))
});

/**
 * Mutations
 */
export const mutations = {
    [types.SET_USER](state, user) {
        state.user = user;

        localStorage.setItem('user', JSON.stringify(user));
    },

    [types.LOGOUT](state) {
        state.user = null;

        localStorage.removeItem('user');
    },

    [types.FETCH_USER_FAILURE](state) {
        state.user = null;
    }
};

/**
 * Actions
 */
export const actions = {
    setUser({ commit }, payload) {
        commit(types.SET_USER, payload);
    },

    async fetchUser({ commit }) {
        try {
            const { data } = await API.users.me();

            commit(types.SET_USER, data);
        } catch (e) {
            commit(types.FETCH_USER_FAILURE);
        }
    },

    async login({ commit }, credentials) {
        const user = await API.auth.login(credentials);

        commit(types.SET_USER, user);
    },

    async logout({ commit }) {
        await API.auth.logout();

        commit(types.LOGOUT);
    },

    async register(_, credentials) {
        await API.auth.register(credentials);
    },

    async confirmEmail({ commit }, token) {
        const user = await API.auth.confirmEmail(token);

        commit(types.SET_USER, user);
    },

    async forgotPassword(_, email) {
        await API.auth.forgotPassword(email);
    },

    async checkPasswordReset(_, token) {
        await API.auth.checkPasswordReset(token);
    },

    async resetPassword({ commit }, { token, formData }) {
        const user = await API.auth.resetPassword(token, formData);

        commit(types.SET_USER, user);
    }
};

/**
 * Getters
 */
export const getters = {
    user: state => state.user,
    checkUser: state => state.user !== null
};
