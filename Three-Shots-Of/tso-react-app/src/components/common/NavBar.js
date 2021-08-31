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
        <Link to="/mood" className="navbar-item">
          Mood
        </Link>
        <Link to="/base" className="navbar-item">
          Base
        </Link>
        <Link to="/atoz" className="navbar-item">
          A-Z
        </Link>
      </div>
    </section>
  );
};

export default NavBar;
