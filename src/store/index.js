import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeItens:[
      {id:1,type:"Calculadora"},
      {id:2,type:"Fone"},
      {id:3,type:"Caneta"},
      {id:4,type:"Livro"},
      {id:5,type:"Teclado"},
      {id:6,type:"Computador"}
    ],
    
    itensList:[
      {id:1, type:"Calculadora", price:200, image:"Imagem1.png"},
      {id:2, type:"Fone", price:300, image:"Imagem5.png"},
      {id:3, type:"Calculadora", price:260, image:"Imagem2.png"},
      {id:4, type:"Calculadora", price:120, image:"Imagem3.png"},
      {id:5, type:"Fone", price:500, image:"Imagem6.png"},
      {id:6, type:"Fone", price:320, image:"Imagem7.png"},
      {id:7, type:"Calculadora", price:110, image:"Imagem4.png"},
    ],
  },
  getters: {
    getTypeList(state){
      return state.typeItens
    },
    getList(state){
      return state.itensList
    },
    getListCalculators(state){
      return state.itensList.filter((item)=> item.type=="Calculadora")
    },
    getListHeadphones(state){
      return state.itensList.filter((item)=> item.type=="Fone")
    },
    getListPens(state){
      return state.itensList.filter((item)=> item.type=="Caneta")
    },
    getListBooks(state){
      return state.itensList.filter((item)=> item.type=="Livro")
    },
    getListKeyboard(state){
      return state.itensList.filter((item)=> item.type=="Teclado")
    },
    getListMachines(state){
      return state.itensList.filter((item)=> item.type=="Computadore")
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
