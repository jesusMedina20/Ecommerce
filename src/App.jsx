import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsContainer from "./Components/ProductsContainer";
import { EcommerceProvider } from "./Context/EcommerceContext";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <EcommerceProvider>
            <Routes>
              <Route exact path="/" element={<ProductsContainer />} />
              <Route
                exact
                path="/productos/:busqueda"
                element={<ProductsContainer />}
              />
            </Routes>
          </EcommerceProvider>
        </div>
      </Router>
    </div>
  );
};

export default App;
