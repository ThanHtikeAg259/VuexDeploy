import Api from "./api";

export default {
  getAll(){
    return Api.get('products');
  },

  getSingle(prodId){
    return Api.get(`products/${prodId}`)
  }
}