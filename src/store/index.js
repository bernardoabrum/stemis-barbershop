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
    user: undefined,
    isAuthenticated: false,
    activeStep: 0,
    schedulingInfo: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },

    logout(state) {
      state.user = undefined;
      state.isAuthenticated = false;
    },
    setSchedulingInfo(state, payload) {
      state.schedulingInfo = {
        ...state.schedulingInfo,
        ...payload,
      };
    },
    clearSchedulingInfo(state) {
      state.schedulingInfo = {};
    },
    setActiveStep(state, step) {
      state.activeStep = step;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    user(state) {
      return state.user;
    },
    schedulingInfo(state) {
      return state.schedulingInfo;
    },
    activeStep(state) {
      return state.activeStep;
    },
  },
  plugins: [persistStatePlugin],
});
