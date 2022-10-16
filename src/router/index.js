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


Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
