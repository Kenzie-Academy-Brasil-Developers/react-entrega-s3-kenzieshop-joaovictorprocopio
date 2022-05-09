import { ADD_PRODUCT, RMV_PRODUCT } from "./actionTypes";

const initialState = [
  {
    name: "Xiaomi Smartphone Redmi 9A 32GB 2GB RAM Dual Chip - Cinza",
    price: "849,90",
    image:
      "https://m.media-amazon.com/images/I/81oPj2JzHDL._AC_UL480_QL65_.jpg",
    id: "001",
  },
  {
    name: "Apple iPhone 11 (128 GB) Branco",
    price: "3.849,06",
    image:
      "https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_UL480_QL65_.jpg",
    id: "002",
  },
  {
    name: "Celular Xiaomi Poco X3 GT Preto 8/256 Versão Global",
    price: "2.299,90",
    image:
      "https://m.media-amazon.com/images/I/51TK5un6TnL._AC_UL480_QL65_.jpg",
    id: "003",
  },
  {
    name: "Smartphone Samsung Galaxy M52 5g, 128gb, 6gb Ram, Bateria De 5000mah, Tela 6.7",
    price: "1.999,90",
    image:
      "https://m.media-amazon.com/images/I/41BAO4reczL._AC_UL480_QL65_.jpg",
    id: "004",
  },
];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];

    case RMV_PRODUCT:
      const { name_product } = action;
      return (state = state.filter((item) => {
        return item.name !== name_product;
      }));

    default:
      return state;
  }
};

export default productReducer;
