import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from './router/index';
import auth from './store/auth'

Vue.config.productionTip = false;

Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({
  router,
  vuetify,
  auth,
  render: (h) => h(App),
}).$mount("#app");
