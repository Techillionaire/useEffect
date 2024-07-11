import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[70px] flex items-center justify-around">
      <div>
        <Link to={`/`}>Lee.</Link>
      </div>
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/`}>About</Link>
        <Link to={`/`}>Products</Link>
        <Link to={`/`}>Services</Link>
      </div>
      <div>
        <Link to={`/`}>Register</Link>
        <Link to={`/`}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
