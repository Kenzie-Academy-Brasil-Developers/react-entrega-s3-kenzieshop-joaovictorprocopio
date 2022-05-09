function CartCard({ imgLink, alt, title, price, idBtn, handleCart }) {
  return (
    <li>
      <img src={imgLink} alt={alt} />
      <p>{title}</p>
      <section>
        <span>R$ {price}</span>
        <button
          id={idBtn}
          onClick={(e) => {
            handleCart(e);
          }}
        >
          Remover do carrinho
        </button>
      </section>
    </li>
  );
}

export default CartCard;
