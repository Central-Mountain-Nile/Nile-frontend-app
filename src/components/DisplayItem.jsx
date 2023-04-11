import { React, useState, useEffect } from "react";
import { getProductById, addToCart, updateCartItem } from "../Api-Adapter";
import { useNavigate, useParams } from "react-router-dom";

function DisplayItem(props) {
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { token, cart, setCart, searchTerm } = props;
  const navigate = useNavigate();

  const retrieveProduct = async () => {
    const thisProduct = await getProductById(productId);
    setSingleProduct(thisProduct);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    let duplicate = false;
    const newCart = { ...cart };
    if (quantity > 0) {
      //check for duplicates in cart and add their quantities together
      for (let i = 0; i < cart.cartItems.length; i++) {
        if (cart.cartItems[i].productId === singleProduct.id) {
          const result = await updateCartItem(
            quantity + cart.cartItems[i].quantity,
            cart.cartItems[i].id,
            token
          );
          if (!result.message) {
            newCart.cartItems[i].quantity =
              quantity + cart.cartItems[i].quantity;
            setCart(newCart);
            navigate("/");
          } else {
            alert(result.message);
          }
          return;
        }
      }
      const result = await addToCart(token, productId, quantity);
      if (!result.message) {
        result.price = singleProduct.price;
        result.remainingQuantity = singleProduct.quantity;
        newCart.cartItems.push(result);
        setCart(newCart);
        navigate("/");
      } else {
        alert(result.message);
      }
    }
  };

  useEffect(() => {
    if (productId) {
      retrieveProduct();
    }
  }, [productId]);

  return (
    <div className="allProducts">
      <form onSubmit={(event) => handleClick(event)}>
        {/* {singleProduct.length ? (
      singleProduct.map((product) => {
        return ( */}
        {singleProduct.name ? (
          <div className="product-card-individual">
            <div>
              <img
                className="individual_item_img_edit"
                src={singleProduct.imgURL}
                alt={singleProduct.description}
              />
              <div className="singleItemText">
                <h2>{singleProduct.name}</h2>
                <p>{singleProduct.description}</p>
                <p>${singleProduct.price}</p>
                <p>Quantity left in stock: {singleProduct.quantity}</p>
              </div>
            </div>
            <div className="right-side-individual-product">
              <input
                className="quantity-input"
                placeholder="1"
                type="number"
                onChange={(event) => setQuantity(event.target.value)}
              ></input>
              <button className="addToCartBtn" type="submit">
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="loader"></div>
        )}

        {/* );
      })
    ) : (
      <div className="loader"></div>
    )} */}
      </form>
    </div>
  );
}

export default DisplayItem;
