import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const persistStatePlugin = (store) => {
  const persistedState = localStorage.getItem("vuex");
  if (persistedState) {
    store.replaceState(JSON.parse(persistedState));
  }

  store.subscribe((mutation, state) => {
    localStorage.setItem("vuex", JSON.stringify(state));
  });
};

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

    logout(state) {
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
  plugins: [persistStatePlugin],
});
