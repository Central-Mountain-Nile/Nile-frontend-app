import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  const {loggedIn,setLoggedIn, setSearchTerm, setToken} = props
const [searchBar, setSearchtBar] = useState('')
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setToken('')
    setLoggedIn(false);
  }

  return (
    <>
      <div id="navbar">
        <Link to="/itemsfeed/1">
          <img className="logoDash" src="/Untitled_Artwork 36.png" alt="" />
        </Link>
        <input type="text" className="search"          onChange={(e) => {
            setSearchtBar(e.target.value);
          }} />
        <button onClick={()=>setSearchTerm(searchBar)}>search</button>
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
