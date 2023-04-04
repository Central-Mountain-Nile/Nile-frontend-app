import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <img className="logoDash" src="/Untitled_Artwork 36.png" alt="" />
      <input type="text" className="search" />
      <div className="linksBtn">
        
        <button>Hello</button>
        <button>My cart</button>
        <button>Login</button>
        <button>Logout</button>
        
      </div>
    </div>
  );
};

export default Navbar;
