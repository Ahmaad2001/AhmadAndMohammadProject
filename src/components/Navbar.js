import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link>
        <NavLink to="/">Our Bank</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/register">Register</NavLink>
      </Link>
    </nav>
  );
};

export default Navbar;
