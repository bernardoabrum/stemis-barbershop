import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

import Home from "../views/home/Home.vue";
import Authenticate from "../views/authenticate/Authenticate.vue";
import Scheduling from "../views/scheduling/Scheduling.vue";
import UserSchedulings from "../views/user-schedulings/UserSchedulings.vue";
import BarberSchedulings from "../views/barber-schedulings/BarberSchedulings.vue";
import ServicesList from "../views/services-list/ServicesList.vue";
import Error from "../views/error/Error.vue";

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
    path: "/user-schedulings",
    name: "UserSchedulings",
    component: UserSchedulings,
  },
  {
    path: "/barber-schedulings",
    name: "BarberSchedulings",
    component: BarberSchedulings,
  },
  {
    path: "/services-list",
    name: "ServicesList",
    component: ServicesList,
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
  },
  {
    path: "*",
    redirect: "/error",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = store.getters;

  if (!isAuthenticated && to.name !== "Authenticate") {
    next("/authenticate");
  } else if (isAuthenticated && to.name === "Authenticate") {
    next("/home");
  } else {
    next();
  }
});
export default router;
