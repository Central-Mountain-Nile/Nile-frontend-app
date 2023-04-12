import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { Categories } from "./";

const Navbar = (props) => {
  const { loggedIn, setLoggedIn, setSearchTerm, setToken } = props;
  const [searchBar, setSearchtBar] = useState("");
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setToken("");
    setLoggedIn(false);
  }

  return (
    <>
      <div className="fullNavBarWrapper">
        <div id="navbar">
          <Link
            to="/itemsfeed/1"
            onClick={() => {
              setSearchtBar("");
              setSearchTerm("");
            }}
          >
            <img className="logoDash" src="/nileLogo.png" alt="" />
          </Link>
          <div className="searchBar">
            <input
              value={searchBar}
              type="text"
              className="search"
              onChange={(e) => {
                setSearchtBar(e.target.value);
              }}
            />
            <MagnifyingGlassCircleIcon
              className="searchIcon"
              onClick={() => setSearchTerm(searchBar)}
            ></MagnifyingGlassCircleIcon>
          </div>

          <div className="linksBtn">
            {loggedIn ? (
              <div>
                {/* <button>Hello, {props.currentUser.username}</button> */}

                <Link to="/">
                  <button>Home</button>
                </Link>
                <Link to="/cart">
                  <button>My cart</button>
                </Link>
                <Link to="/createitem">
                  <button>My store</button>
                </Link>
                <Link>
                  <button onClick={() => logout()}>Logout</button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/">
                  <button>Home</button>
                </Link>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <Categories />
      </div>
    </>
  );
};
// <Link to="/login">
//   <button onClick={() => logout()}>Logout</button>
// </Link>

// <Link to="/login">
//   <button>Login</button>
// </Link>

export default Navbar;
