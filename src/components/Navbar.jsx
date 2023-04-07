import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  const { setSearchTerm, setToken, token, currentUser } = props;

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser")
  }

  return (
    <>
      <div id="navbar">
        <Link to="/itemsfeed/1">
          <img className="logoDash" src="/Untitled_Artwork 36.png" alt="" />
        </Link>
        <input type="text" className="search" />
        <div className="linksBtn">
          <button>Hello</button>

          <Link to="/cart">
            <button>My cart</button>
          </Link>
          <Link to="/createitem">
            <button>My store</button>
          </Link>
          <Link to="/login">
            <button onClick={() => logout()}>Logout</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
