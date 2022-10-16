import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
//import axios from 'axios';

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

    itensList: [
      {id:1, type:"Calculadora", value:200, image:"Imagem1.png"},
      {id:2, type:"Fone", value:300, image:"Imagem5.png"},
      {id:3, type:"Calculadora", value:260, image:"Imagem2.png"},
      {id:4, type:"Calculadora", value:120, image:"Imagem3.png"},
      {id:5, type:"Fone", value:500, image:"Imagem6.png"},
      {id:6, type:"Fone", value:320, image:"Imagem7.png"},
      {id:7, type:"Calculadora", value:110, image:"Imagem4.png"},
    ],
  },
  getters: {
    getTypeList(state) {
      return state.typeItens;
    },
    getList(state) {
      return state.itensList;
    },
    getListCalculators(state) {
      return state.itensList.filter((item) => item.type == "Calculadora");
    },
    getListHeadphones(state) {
      return state.itensList.filter((item) => item.type == "Fone");
    },
    getListPens(state) {
      return state.itensList.filter((item) => item.type == "Caneta");
    },
    getListBooks(state) {
      return state.itensList.filter((item) => item.type == "Livro");
    },
    getListKeyboard(state) {
      return state.itensList.filter((item) => item.type == "Teclado");
    },
    getListMachines(state) {
      return state.itensList.filter((item) => item.type == "Computadore");
    },
  },
  mutations: {
    /*setProducts(state,receiveProducts){
      state.itensList=receiveProducts
    }*/
  },
  actions: {
    /*receiveProducts({commit}){
      axios.get('https://troca-online-api-test.herokuapp.com/products/search').then(res=>{
        const receiveProducts=res.data
        commit('setProducts',receiveProducts)})
    }*/
  },
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
