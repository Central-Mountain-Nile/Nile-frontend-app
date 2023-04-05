import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Login,
  Register,
  Home,
  Cart,
  CartItem,
  Categories,
  CheckoutPage,
  CreateItem,
  CreatePayment,
  DisplayItem,
  EditProfile,
  Footer,
  ItemsFeed,
  Profile,
  SingleItem,
  Store,
  UpdateItem,
} from "./";
import { fetchMe } from "../Api-Adapter";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

   


  async function getMeUser() {
    //only want getMe to run if token is present
    if (token) {
      const response = await fetchMe(token);
      setUsers(response);
    } else {
      setUsers({});
    }
  }
  useEffect(() => {
    if (token) {
      getMeUser();
    }
  }, [token]);


  return (
    <div id="main">
      <Navbar />
      <Categories />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route
          path="/categories"
          element={<Categories setToken={setToken} />}
        />
        <Route path="/itemsfeed/:pageNumber" element={<ItemsFeed />} />
        <Route path="/cart" element={<Cart />} token={token}/>
      </Routes>
    </div>
  );
};

export default Main;
