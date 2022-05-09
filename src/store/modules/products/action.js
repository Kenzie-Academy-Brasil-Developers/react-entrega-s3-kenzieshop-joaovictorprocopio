import { ADD_PRODUCT, RMV_PRODUCT } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product: product,
  };
};

export const rmvProduct = (name_product) => {
  return {
    type: RMV_PRODUCT,
    name_product: name_product,
  };
};
