import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    typeItens: [
      { id: 1, type: "Calculadora" },
      { id: 2, type: "Fone" },
      { id: 3, type: "Caneta" },
      { id: 4, type: "Livro" },
      { id: 5, type: "Teclado" },
      { id: 6, type: "Computador" },
    ],

    itensList: [],
  },
  getters: {
    getTypeList(state) {
      return state.typeItens;
    },
    getList(state) {
      return state.itensList;
    },
    getListCalculators(state) {
      return state.itensList.filter(
        (item) => item.category.name == "Calculadora"
      );
    },
    getListHeadphones(state) {
      return state.itensList.filter((item) => item.category.name == "Fone");
    },
    getListPens(state) {
      return state.itensList.filter((item) => item.category.name == "Caneta");
    },
    getListBooks(state) {
      return state.itensList.filter((item) => item.category.name == "Livro");
    },
    getListKeyboard(state) {
      return state.itensList.filter((item) => item.category.name == "Teclado");
    },
    getListMachines(state) {
      return state.itensList.filter(
        (item) => item.category.name == "Computador"
      );
    },
  },
  mutations: {
    setProducts(state, receiveProducts) {
      state.itensList = receiveProducts;
    },
  },
  actions: {
    ReceiveProducts({ commit }) {
      axios.get("/products/search").then((res) => {
        const receiveProducts = res.data;
        commit("setProducts", receiveProducts);
      });
    },
  },
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
