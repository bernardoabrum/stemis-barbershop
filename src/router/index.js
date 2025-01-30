import Vue from "vue";
import Router from "vue-router";

import Scheduling from "../views/scheduling/Scheduling.vue";
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
    path: "/scheduling",
    name: "Scheduling",
    component: Scheduling,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = store.getters;

  if (to.name === "Scheduling" && !isAuthenticated) {
    next("/authenticate");
  } else {
    next();
  }
  if (to.name === "Authenticate" && isAuthenticated) {
    next("/scheduling");
  } else {
    next();
  }
});

export default router;
