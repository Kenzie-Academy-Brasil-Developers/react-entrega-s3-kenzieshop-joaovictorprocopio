import { ADD_IN_CART, RMV_IN_CART } from "./actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IN_CART:
      const { product } = action;
      return [...state, product];

    case RMV_IN_CART:
      const { id_product } = action;
      return (state = state.filter((item) => {
        return item.id !== id_product;
      }));

    default:
      return state;
  }
};

export default cartReducer;
