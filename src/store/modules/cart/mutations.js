// import state from "./state";

export const ADD_TO_CART = (state, {product, quantity}) => {

  let productInCart = state.cart.find(item => {
    return item.product.id === product.id
  });

  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  if (quantity !== "") {
    state.cart.push({
      product, quantity
    })
  }
}

export const REMOVE_CART = (state, product) => {

  let removalItem = state.cart.find(item => {
    return item.product.id === product.id
  });
  state.cart.splice(state.cart.indexOf(removalItem), 1);
}

export const REMOVE_ALL_CART = (state) => {
  state.cart.splice(0, state.cart.length);
}