import Vue from "vue";
import Router from "vue-router";

import Home from "../views/home/Home.vue";
import Authenticate from "../views/authenticate/Authenticate.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/authenticate",
  },
  {
    path: "/authenticate",
    name: "Authenticate",
    component: Authenticate,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
