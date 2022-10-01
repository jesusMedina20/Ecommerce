import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
import InfoBarComponent from "./InfoBar";
import { EcommerceContext } from "../Context/EcommerceContext";
import "./ProductsContainer.css";
import CarruselRender from "../carrusel/carruselRender";
import Navbar from "../navbar";
import CarruselCard from "../carrusel/carruselCard";

const ProductsContainer = () => {
  const { busqueda } = useParams();
  const { products, carrito, setCarrito, fetchData, setProducts } =
    useContext(EcommerceContext);
  const [refresh, setRefresh] = useState(false);
  // se usa cuando se esta por montar un componente
  //aqui se deberiallamr una API
  useEffect(() => {
    fetchData(busqueda);
    return () => {};
  }, [busqueda]);

  const AgregarAlCarrito = (event, product) => {
    carrito.push(product);
    setCarrito([...carrito]);
    console.log(carrito);
  };

  const handleKeyUp = (e) => {
    const productsFilter = products.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
        return true;
      }
      return false;
    });
    setProducts(productsFilter);
  };

  return (
    <div className="container">
      <div className="header-infobar">
        <div className="imagen-logo">
          <img
            className="logo"
            src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png"
          />
        </div>

        <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <CarruselRender products={products} />
      <div className="carruselCard">
        <CarruselCard products={products} />
      </div>
      <div className="row">
        {products?.map((element) => {
          return (
            <span key={element.id}>
              <CardComponent
                product={element}
                agregarAlCarrito={AgregarAlCarrito}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsContainer;
