import React, { useEffect, useState } from "react";
import { deleteCartItem, getCart, loginUser } from "../Api-Adapter";
import { useNavigate, Outlet, Link } from "react-router-dom";

function Cart(props) {
  const { token,cart, setCart } = props;
  getCart;
  async function removeFromCart(idx) {
    const newCart = { ...cart };
    const result = await deleteCartItem(cart.cartItems[idx].id, token);
    if (!result.message) {
      newCart.cartItems = [
        ...cart.cartItems.splice(0, idx),
        ...cart.cartItems.splice(idx + 1),
      ];

      setCart(newCart);
    } else {
      //display error message
    }
  }

  function orderTotal() {
    let subtotal = 0;
    if (cart.cartItems) {
      cart.cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
    }
    return subtotal;
  }

  return (
    <div className="cart">
      {" "}
      <h1>Cart</h1>
      {cart.cartItems ? (
        cart.cartItems.map((product, idx) => {
          return (
            <div>
              <div className="product-card-cart" key={"cart" + product.id}>
                <div className="product_text">
                  <h2 className="productName">{product.name}</h2>
                  <p className="productPrice">${product.price}</p>
                  <p className="cart-quantity">Quantity: {product.quantity}</p>
                </div>
                <img
                  className="cart_img"
                  src="http://placeimg.com/640/480/nature"
                  alt={product.description}
                />
                <div className="product_buttons">
                  <button onClick={() => removeFromCart(idx)}>
                    remove from cart
                  </button>
                  <input placeholder="Edit quantity" />
                </div>
              </div>
              <div className="CartTotal">
                <p>Subtotal: ${orderTotal()}</p>
                <Link to="/checkoutpage">
                  <button id="Checkoutbutton">Checkout</button>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default Cart;
