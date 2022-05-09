function ProductCard({ imgLink, alt, title, price, handleCart, idBtn }) {
  return (
    <li>
      <img src={imgLink} alt={alt} />
      <p>{title}</p>
      <span>R$ {price}</span>
      <button
        id={idBtn}
        onClick={(e) => {
          handleCart(e);
        }}
      >
        Adicionar ao carrinho
      </button>
    </li>
  );
}

export default ProductCard;
