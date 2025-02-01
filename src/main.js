import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import VueTheMask from "vue-the-mask";
import router from "./router/index";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Vuetify)
Vue.use(VueTheMask)
;
const vuetify = new Vuetify();

new Vue({
  router,
  vuetify,
  store,
  icons: {
    iconfont: "mdi",
  },
  render: (h) => h(App),
}).$mount("#app");
