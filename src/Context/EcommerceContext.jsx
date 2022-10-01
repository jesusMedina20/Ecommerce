import { createContext, useState } from "react";
import "./EcommerceContext.css";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);

  async function fetchData(searchQuery) {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`
    );
    const response = await data.json();
    setProducts(response.results);
  }
  const formatProducts = () => {
    return products.map((product) => {
      return { ...product, image: product.thumbnail };
    });
  };

  return (
    <EcommerceContext.Provider
      value={{
        products: formatProducts(),
        carrito,
        setCarrito,
        fetchData,
        setProducts,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
