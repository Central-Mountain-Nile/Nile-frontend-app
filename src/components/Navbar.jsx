import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> Logo</h2>
      <input type="text" className="search" />
      <ul className="links">
        <li>Hello</li>
        <li>My cart</li>
        <li>Login</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
