import React, { useEffect, useState } from "react";
import { deleteCartItem, getCart, loginUser } from "../Api-Adapter";

function Cart(props) {
  const { token } = props;

  getCart;
  const [cart, setCart] = useState({})

  useEffect(() => {
    getCartItems()
  }, []);
  // const [cart, setCart] = useState({
  //   cartItems: [
  //     { id: 1, name: "product1", price: 12, quantity: 43 },
  //     { id: 2, name: "product7", price: 17, quantity: 4 },
  //     { id: 3, name: "product9", price: 92, quantity: 83 },
  //   ],
  // });
  async function getCartItems(){
    console.log(token, "TOKEN!!!!!!");

    setCart(await getCart(token))
  }

  async function removeFromCart(idx) {
    const newCart = { ...cart };

    const result = await deleteCartItem(cart.cartItems[idx].id, token);
    if (!result.message) {
      cart.cartItems.splice(idx, 1);
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
                <button>submit</button>
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
