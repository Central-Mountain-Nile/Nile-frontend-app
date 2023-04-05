import React from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <div id="navbar">
              <Link to="/itemsfeed/1">
      <img className="logoDash" src="/Untitled_Artwork 36.png" alt="" />
      </Link>
      <input type="text" className="search" />
      <div className="linksBtn">
        
        <button>Hello</button>
        <Link to="/cart"><button>My cart</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/login"><button>Logout</button></Link>
        
      </div>
    </div>
  
    </>

  );
};

export default Navbar;
