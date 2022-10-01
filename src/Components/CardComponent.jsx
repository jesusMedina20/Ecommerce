import "./CardComponent.css";
const CardComponent = ({ product, agregarAlCarrito }) => {
  return (
    <div className="card">
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt="card imagen cap"
      />
      <div className="card-body">
        <h5 className="card-title">
          {product.title} - <b> ${product.price}</b>
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          className="btn"
          onClick={(event) => {
            agregarAlCarrito(event, product);
          }}
        >
          agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default CardComponent;
