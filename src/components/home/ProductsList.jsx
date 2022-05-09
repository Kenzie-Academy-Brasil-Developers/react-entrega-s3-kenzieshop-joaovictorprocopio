import ProductCard from "./ProductCard";
import { addInCart } from "../../store/modules/cart/action";

import { useSelector, useDispatch } from "react-redux";

function ProductsList({}) {
  const products = useSelector((state) => state.products);
  const productsCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddCart = (productProvi) => {
    const bool =
      productsCart && productsCart.some((item) => item === productProvi);

    if (bool === false || productsCart.length <= 0) {
      dispatch(addInCart(productProvi));
    }
  };
  const onclick = (e) => {
    const productProvi = products.filter((item) => {
      return item.id === e.target.id;
    });

    handleAddCart(productProvi[0]);
  };

  return (
    <ul className="list">
      {products &&
        products.map((item) => {
          return (
            <ProductCard
              imgLink={item.image}
              alt={item.name}
              title={item.name}
              price={item.price}
              handleCart={onclick}
              idBtn={item.id}
              key={item.id}
            />
          );
        })}
    </ul>
  );
}

export default ProductsList;
