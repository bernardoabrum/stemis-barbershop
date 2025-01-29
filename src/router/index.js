import Vue from "vue";
import Router from "vue-router";

import Home from "../views/home/Home.vue";
import Authenticate from "../views/authenticate/Authenticate.vue";
import store from "@/store";

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

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.name === "Home" && !isAuthenticated) {
    next("/authenticate");
  } else {
    next();
  }
  if (to.name === "Authenticate" && isAuthenticated) {
    next("/home");
  } else {
    next();
  }
});

export default router;
