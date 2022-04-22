// import axios from "axios";
// import Api from "../api/api";
import product from "../api/product";

export const GetAllProduct = ({ commit }) => {
  product.getAll().then(response => {
    commit('SET_ALL_PRODUCTS', response.data);
  })
}

export const GetSingleProduct = ({ commit }, prodId ) => {
  product.getSingle(prodId).then(response => {
    commit('SET_SINGLE_PRODUCT', response.data);
  })
}

export const AddProductToCart = ({commit}, {product, quantity}) => {
  commit('ADD_TO_CART', {product, quantity});
}

export const RemoveCart = ({commit}, product) => {
  commit('REMOVE_CART', product)
}

export const RemoveAllCart = ({commit}) => {
  commit('REMOVE_ALL_CART')
}