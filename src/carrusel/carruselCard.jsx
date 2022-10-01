import React from "react";
import SliderLogic from "./carrusel";
import "./carruselCard.css";

const IMAGE_PER_PAGE = 4;

function CarruselCard({ products }) {
  const { imagenActual, anteriorImagen, siguienteImagen } = SliderLogic({
    imagenes: products,
    maxPages: Math.ceil(products.length / IMAGE_PER_PAGE),
  });
  // products.slice(0,page + 3 - 1)
  // Return prematuro para evitar errores
  if (!Array.isArray(products) || !products.length) return;

  return (
    <>
      <div className="carruselAll">
        <button className="botonOne" onClick={anteriorImagen}>
          {"<"}
        </button>
        {products
          .slice(
            imagenActual * IMAGE_PER_PAGE,
            (imagenActual + 1) * IMAGE_PER_PAGE
          )
          .map((product) => {
            return (
              <div className="carruselCard-container">
                <div className="img-card">
                  <img
                    className="imagenPrincipal"
                    src={product.image}
                    alt={products.image}
                  />
                </div>
                <div className="bodyCard">
                  <h5 className="nombreCard">{product.title}</h5>
                  <p className="textProduct">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
        <button className="botonTwo" onClick={siguienteImagen}>
          {" "}
          {">"}
        </button>
      </div>
    </>
  );
}
export default CarruselCard;
