import React, { useEffect, useState } from "react";
import { deleteCartItem, getCart, loginUser } from "../Api-Adapter";
import { useNavigate, Outlet, Link } from "react-router-dom";


function Cart(props) {
  const { token } = props;
  getCart;
  const [cart, setCart] = useState({})

  useEffect(() => {
    getCartItems()
  }, []);

  async function getCartItems(){

    setCart(await getCart(token))
  }

  async function removeFromCart(idx) {
    const newCart = { ...cart };
   const result = await deleteCartItem(cart.cartItems[idx].id, token);
   if (!result.message) {
      newCart.cartItems = [...cart.cartItems.splice(0,idx),...cart.cartItems.splice(idx + 1)]

      setCart(newCart);
    } else {
      //display error message
    }

  }
  return (
    <div className="cart">
      {" "}
      <h1>Cart</h1>
      {cart.cartItems ? (
        cart.cartItems.map((product, idx) => {
          return (
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
                <input />
             <Link to="/checkoutform">
                <button>Checkout</button>
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
