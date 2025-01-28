import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },

    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    user(state) {
      return state.user;
    },
  },
});
