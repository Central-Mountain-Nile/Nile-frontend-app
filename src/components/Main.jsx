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
  CheckoutForm,
  Admin,
} from "./";
import { fetchMe, getProducts, getCart } from "../Api-Adapter";

const Main = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  async function getMeUser() {
    //only want getMe to run if token is present
    if (token) {
      const response = await fetchMe(token);
      if (!response.message) {
        setCurrentUser(response);
      } else {
        setCurrentUser({});
      }
    } else {
      setCurrentUser({});
    }
  }
  const retrieveProducts = async () => {
    const allProducts = await getProducts();
    setProducts(allProducts.products);
  };
  useEffect(() => {
    if (token) {
      getMeUser();
      setLoggedIn(true);
      getCartItems();
    }
  }, [token]);
  useEffect(() => {
    retrieveProducts();
  }, []);

  async function getCartItems() {
    setCart(await getCart(token));
  }
  return (
    <div id="main">
      <Navbar
        setSearchTerm={setSearchTerm}
        setToken={setToken}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Categories />
      <Routes>
        <Route
          path="/login"
          element={
            <Login setToken={setToken} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/register"
          element={
            <Register setToken={setToken} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/itemsfeed/:pageNumber"
          element={
            <ItemsFeed searchTerm={searchTerm}/>
          }
        />
        <Route
          path="/cart"
          element={<Cart token={token} cart={cart} setCart={setCart} />}
        />
        <Route
          path="/displayItems/:productId"
          element={<DisplayItem token={token} cart={cart} setCart={setCart} />}
        />
        <Route
          path="/admin"
          element={
            <Admin
              token={token}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />

        <Route
          path="/createitem"
          element={
            <CreateItem
              token={token}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
