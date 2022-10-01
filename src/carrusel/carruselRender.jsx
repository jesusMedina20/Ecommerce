import React from "react";
import SliderLogic from "./carrusel";
import "./carrusel.css";

function CarruselRender({ products }) {
  const { imagenActual, anteriorImagen, siguienteImagen } = SliderLogic({
    imagenes: products,
  });

  // products.slice(0,page + 3 - 1)
  // Return prematuro para evitar errores
  if (!Array.isArray(products) || !products.length) return;

  return (
    <div className="container-carrusel">
      {imagenActual}
      <button className="boton1" onClick={anteriorImagen}></button>
      <img
        className="imagenPrincipal"
        src={products[imagenActual]?.image}
        alt={products[imagenActual]?.image}
      />
      <span className="nombre">{products[imagenActual]?.title}</span>
      <button className="boton2" onClick={siguienteImagen}></button>
    </div>
  );
}
export default CarruselRender;
