import CartCard from "./CartCard";

import { rmvInCart } from "../../store/modules/cart/action";

import { useSelector, useDispatch } from "react-redux";

function Cart({}) {
  const productsCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    dispatch(rmvInCart(e.target.id));
  };
  const orders = productsCart.length;
  const totalPrice = productsCart.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace(".", "").replace(",", "."));
  }, 0);

  return (
    <section className="cart">
      <ul className="cart-list">
        {productsCart.length > 0 ? (
          <div>
            <span>Produtos</span>
            <span>Preços</span>
          </div>
        ) : (
          <p>Nenhum Produto Adicionado</p>
        )}
        {productsCart &&
          productsCart.map((item) => {
            return (
              <CartCard
                idBtn={item.id}
                key={item.id}
                alt={item.name}
                imgLink={item.image}
                price={item.price}
                title={item.name}
                handleCart={handleRemove}
              />
            );
          })}
      </ul>
      <section className="cart-info">
        <p>Resumo do pedido</p>
        <div>
          <p>{orders} Pedidos</p>
          <span>R$ {totalPrice.toFixed(2).toString().replace(".", ",")}</span>
        </div>
        <button>Finalizar o Pedido</button>
      </section>
    </section>
  );
}

export default Cart;
