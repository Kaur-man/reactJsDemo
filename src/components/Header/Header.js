import React from "react";
import "./header.styles.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="http://localhost:3001/static/media/logo.15d0ec5610e59f623a8c51e19affd3b9.svg"
          className="logo"
          alt="logo"
        />
        ShopCart
      </div>

      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>

      {/* <div className="navigation-screen">
        {" "}
        <div onClick={() => navigate("/")}>home</div> {""}
        <div onClick={() => navigate("/cart")}>cart</div>
      </div> */}
      <div>cart</div>
    </header>
  );
};
