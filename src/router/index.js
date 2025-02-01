import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

import Home from "../views/home/Home.vue";
import Authenticate from "../views/authenticate/Authenticate.vue";
import MySchedulings from "../views/my-schedulings/MySchedulings.vue";
import Scheduling from "../views/scheduling/Scheduling.vue";

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
  {
    path: "/scheduling",
    name: "Scheduling",
    component: Scheduling,
  },
  {
    path: "/my-schedulings",
    name: "MySchedulings",
    component: MySchedulings,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = store.getters;

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
