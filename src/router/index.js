import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import BookHomeView from "../views/BookHomeView.vue";
import CalculatorHomeView from "../views/CalculatorHomeView.vue";
import HeadPhoneHomeView from "../views/HeadPhoneHomeView.vue";
import KeyboardHomeView from "../views/KeyboardHomeView.vue";
import MachineHomeView from "../views/MachineHomeView.vue";
import PenHomeView from "../views/PenHomeView.vue";
import HelpHomeView from "../views/HelpHomeView.vue";
import ProductRegisterView from "../views/ProductRegisterView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
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
  {
    path: "/home/books",
    name: "books",
    component: BookHomeView,
  },
  {
    path: "/home/calculators",
    name: "calculators",
    component: CalculatorHomeView,
  },
  {
    path: "/home/headphones",
    name: "headphones",
    component: HeadPhoneHomeView,
  },
  {
    path: "/home/keyboards",
    name: "keyboards",
    component: KeyboardHomeView,
  },
  {
    path: "/home/machines",
    name: "machines",
    component: MachineHomeView,
  },
  {
    path: "/home/pens",
    name: "pens",
    component: PenHomeView,
  },
  {
    path: "/home/help",
    name: "help",
    component: HelpHomeView,
  },
  {
    path: "/product/register",
    name: "registerProduct",
    component: ProductRegisterView,
    meta: { requiresAuth: true },
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
      next("/home");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
