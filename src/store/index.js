import { createStore, combineReducers } from "redux";

import cartReducer from "./modules/cart/reducer";
import productReducer from "./modules/products/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(reducers);

export default store;
