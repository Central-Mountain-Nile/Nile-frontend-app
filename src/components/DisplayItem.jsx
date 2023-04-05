import { React, useState, useEffect } from "react";
import { getProductById, getProducts, addToCart } from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

function DisplayItem(props) {

  const [singleProduct, setSingleProduct] = useState({})
  const [quantity, setQuantity] = useState()
const {productId} = useParams()
const token = props.token;
const navigate = useNavigate();
  

  console.log(productId, "ID");
  const retrieveProduct = async () => {
    const thisProduct = await getProductById(productId);
    setSingleProduct(thisProduct);
  };


const handleClick = async (event) => {
  event.preventDefault();
  if(quantity > 0){
  const result = await addToCart(token, productId, 3);
  console.log(token, "TOKEN");
  console.log(result,"RESULT")
  if (!result.message) {
   navigate("/")
  } else {
    console.log(result.message);
  }
}
};

useEffect(() => {
  if(productId){
    retrieveProduct();
  }
}, [productId]);

return (
  <div className="allProducts">
    <form onSubmit={(event)=>handleClick(event)}>
    {/* {singleProduct.length ? (
      singleProduct.map((product) => {
        console.log("hit")
        return ( */}
         {
          singleProduct.name ?
          <div className="product-card-individual">
            <div>
            <img
                className="individual_item_img"
                src="http://placeimg.com/640/480/nature"
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
            <input className="quantity-input" placeholder="1" type="number"></input>
            <button className="addToCartBtn" type="submit" >Add To Cart</button>
            </div>
          </div>
          :       <div className="loader" ></div>
         }

        

      {/* );
      })
    ) : (
      <div className="loader"></div>
    )} */}
    </form>
  </div>
  )

}

export default DisplayItem;
