// import axios from "axios";
// import Api from "../api/api";

export const AddProductToCart = ({commit, dispatch}, {product, quantity}) => {
  commit('ADD_TO_CART', {product, quantity});

  dispatch('addNoti', {
    type: 'sucess',
    message: 'Added Successfully.'
  }, {root: true})
}

export const RemoveCart = ({commit}, product) => {
  commit('REMOVE_CART', product)
}

export const RemoveAllCart = ({commit}) => {
  commit('REMOVE_ALL_CART')
}