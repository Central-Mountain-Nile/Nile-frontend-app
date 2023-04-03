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
            <BrowserRouter>
            <Navbar />
            <Categories />
            <Routes>
                <Route>
                    <Home />
                </Route>
                <Route>
                    <Cart />
                </Route>
                <Route>
                    <CartItem />
                </Route>
                <Route>
                    <CheckoutPage />
                </Route>
                <Route>
                    <CreateItem />
                </Route>
                <Route>
                    <CreatePayment />
                </Route>
                <Route>
                    <DisplayItem />
                </Route>
                <Route>
                    <EditProfile />
                </Route>
                <Route>
                    <Footer />
                </Route>
                <Route>
                    <ItemsFeed />
                </Route>
                <Route>
                    <Login />
                </Route>
                <Route>
                    <Profile />
                </Route>
                <Route>
                    <Register />
                </Route>
                <Route>
                    <SingleItem />
                </Route>
                <Route>
                    <Store />
                </Route>
                <Route>
                    <UpdateItem />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main