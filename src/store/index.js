import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        img: require("@/assets/products/1.jpg"),
        pName: "1223",
        pDescription: "kcn",
        id: 1,
      },
      {
        img: require("@/assets/products/2.jpg"),
        pName: "1223",
        pDescription: "kcn",
        id: 2,
      },
      {
        img: require("@/assets/products/4.jpg"),
        pName: "1223",
        pDescription: "kcn",
        id: 3,
      },
    ],
   
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    delProduct(state, payload) {
      state.products.splice(payload, 1);
    },
    updateProduct(state, payload){

      state.products[payload.index] = payload.product;
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductsLenght(state) {
      return state.products.length;
    },
    getProduct(state){
      return (id) =>{
        return state.products.find(product => product.id == id);
    }
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit("addProduct", product);
    },
    delProduct({ commit }, index) {
      commit("delProduct", index);
    },
    updateProduct({commit, state}, payload)
    {
         let index = state.products.findIndex(product => product.id == payload.id);
         commit('updateProduct', {
           product: payload.product,
           index
         })
    }
  },
  modules: {},
});
