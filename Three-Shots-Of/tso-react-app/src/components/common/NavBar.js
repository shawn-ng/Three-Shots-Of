import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="navbar is-link">
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
              Base
            </Link>
            <hr className="navbar-divider" />
            <Link to="/atoz" className="navbar-item">
              A-Z
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
