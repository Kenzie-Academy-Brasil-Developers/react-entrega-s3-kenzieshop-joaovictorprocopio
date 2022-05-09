import { ADD_IN_CART, RMV_IN_CART } from "./actionTypes";

export const addInCart = (product) => {
  return {
    type: ADD_IN_CART,
    product: product,
  };
};

export const rmvInCart = (id_product) => {
  return {
    type: RMV_IN_CART,
    id_product: id_product,
  };
};
