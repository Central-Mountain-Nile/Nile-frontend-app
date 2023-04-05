import React, { useEffect, useState } from 'react'
import { getCart } from '../Api-Adapter'

function Cart(props) {
  const {token} = props

  getCart
//const [cart, setCart] = useState({})

// useEffect(() => {
//   getCartItems()
// }, []);
const cart = {cartItems:[{id: 1,name:"product1", price:12,quantity:43},{id: 2,name:"product7", price:17,quantity:4},{id: 3,name:"product9", price:92,quantity:83}]}
// function getCartItems(){
//   setCart(getCart(token))
// }




  return (
    <div className="cart"> <h1>Cart</h1>
    { cart.cartItems? (
      cart.cartItems.map((product) => {
        return (
          <div className="product-card-cart" key={'cart' + product.id}>
            <h2 className="productName">{product.name}</h2>
            <p className="productPrice">${product.price}</p>
            <p className="cart-quantity">Quantity: {product.quantity}</p>
            <img className="cart_img" src="http://placeimg.com/640/480/nature" alt={product.description}/>
          </div>
        );
      })
    ) : (
      <div className="loader"></div>
    )}

      
    </div>
  )
}

export default Cart