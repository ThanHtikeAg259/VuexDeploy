import product from "../../../api/product";

export const GetAllProduct = ({ commit }) => {
  product.getAll().then(response => {
    // console.log("data:",response)
    commit('SET_ALL_PRODUCTS', response.data);
  })
}

export const GetSingleProduct = ({ commit }, prodId ) => {
  product.getSingle(prodId).then(response => {
    commit('SET_SINGLE_PRODUCT', response.data);
  })
}