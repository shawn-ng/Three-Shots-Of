import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="navbar is-dark">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Get Started</a>

          <div className="navbar-dropdown">
            <Link to="/mood" className="navbar-item">
              Mood
            </Link>
            <hr className="navbar-divider" />
            <Link to="/base" className="navbar-item">
              Ingredient
            </Link>
            <hr className="navbar-divider" />
            <Link to="/cocktailname" className="navbar-item">
              Cocktails
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
