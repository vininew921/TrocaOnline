import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { guest: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
