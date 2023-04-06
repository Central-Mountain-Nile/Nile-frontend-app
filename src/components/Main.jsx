import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Login,
  Register,
  Home,
  Cart,
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
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  async function getMeUser() {
    //only want getMe to run if token is present
    if (token) {
      const response = await fetchMe(token);
      setCurrentUser(response);
    } else {
      setCurrentUser({});
    }
  }
  useEffect(() => {
    if (token) {
      getMeUser();
    }
  }, [token]);

  return (
    <div id="main">
      <Navbar setSearchTerm={setSearchTerm} setToken={setToken} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <Categories />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register setToken={setToken} setCurrentUser={setCurrentUser}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/itemsfeed/:pageNumber" element={<ItemsFeed searchTerm={searchTerm}/>} />
        <Route path="/cart" element={<Cart token={token} />}  />
        <Route path="displayItems/:productId" element={<DisplayItem token={token}/>} />
      </Routes>
    </div>
  );
};

export default Main;
