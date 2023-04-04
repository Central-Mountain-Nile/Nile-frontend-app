import React from "react";
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
  const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default Main
