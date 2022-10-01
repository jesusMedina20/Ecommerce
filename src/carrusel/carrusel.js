import { useState } from "react";
// import estilos from './Slider.module.css';

function Slider({ imagenes, maxPages }) {
  // Variables y Estados
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = maxPages || imagenes?.length;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
    // setImagenActual(cantidad === 0 ? cantidad + 1 : imagenActual - 1);
  };

  return { imagenActual, siguienteImagen, anteriorImagen };
}

export default Slider;
