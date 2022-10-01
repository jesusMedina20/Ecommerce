import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const category = [
  { name: "electronicos", link: "/productos" },
  { name: "vehiculos", link: "/productos" },
  { name: "hogar", link: "/productos" },
  { name: "cocina", link: "/productos" },
  { name: "repuestos", link: "/productos" },
  { name: "accesorios", link: "/productos" },
];
function Navbar() {
  return (
    <header>
      <div className="navBar">
        {category?.map((category) => {
          return (
            <span className="types" key={category.link}>
              <Link to={category.link}>{category.name}</Link>
            </span>
          );
        })}
      </div>
    </header>
  );
}
export default Navbar;
