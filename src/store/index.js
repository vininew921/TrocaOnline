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
    filteredItensList: [],
    filtering: false,
  },
  getters: {
    getTypeList(state) {
      return state.typeItens;
    },
    getList(state, getters) {
      return getters.getCurrentList;
    },
    getCurrentList(state) {
      return state.filtering ? state.filteredItensList : state.itensList;
    },
    getListCalculators(state, getters) {
      return getters.getCurrentList.filter(
        (item) => item.category.name == "Calculadora"
      );
    },
    getListHeadphones(state, getters) {
      return getters.getCurrentList.filter(
        (item) => item.category.name == "Fone"
      );
    },
    getListPens(state, getters) {
      return getters.getCurrentList.filter(
        (item) => item.category.name == "Caneta"
      );
    },
    getListBooks(state, getters) {
      return getters.getCurrentList.filter(
        (item) => item.category.name == "Livro"
      );
    },
    getListKeyboard(state, getters) {
      return getters.getCurrentList.filter(
        (item) => item.category.name == "Teclado"
      );
    },
    getListMachines(state, getters) {
      return getters.getCurrentList.filter(
        (item) => item.category.name == "Computador"
      );
    },
  },
  mutations: {
    setProducts(state, receiveProducts) {
      state.itensList = receiveProducts;
    },
    filterProducts(state, searchString) {
      if (searchString && searchString != "") {
        state.filtering = true;
        state.filteredItensList = state.itensList.filter(
          (item) =>
            item.category.name.toLowerCase().includes(searchString) ||
            item.description.toLowerCase().includes(searchString)
        );
      } else {
        state.filtering = false;
      }
    },
  },
  actions: {
    ReceiveProducts({ commit }) {
      axios.get("/products/search").then((res) => {
        const receiveProducts = res.data;
        commit("setProducts", receiveProducts);
      });
    },
    FilterProducts({ commit }, searchString) {
      commit("filterProducts", searchString);
    },
  },
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
