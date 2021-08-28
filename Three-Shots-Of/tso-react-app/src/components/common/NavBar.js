import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="navbar is-link">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/getstarted" className="navbar-item">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default NavBar;
