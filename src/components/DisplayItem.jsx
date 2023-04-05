import { React, useState, useEffect } from "react";
import { getProductById, getProducts, addToCart } from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

function DisplayItem(props) {
  const [singleProduct, setSingleProduct] = useState({})
const {productId} = useParams()
const token = props.setToken;
  
  console.log(productId, "ID");
  const retrieveProduct = async () => {
    
    const thisProduct = await getProductById(productId)
    setSingleProduct(thisProduct);
}

const handleClick = async (event) => {
  event.preventDefault();
  const result = await addToCart(token);
  if (result && result.token) {
   setSingleProduct(singleProduct)
  } else {
    console.log("not working");
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
            <h2>{singleProduct.name}</h2>
            <p>{singleProduct.description}</p>
            <p>${singleProduct.price}</p>
            <p>Quantity: {singleProduct.quantity}</p>
            {/* <img src={image_url}/> */}
            <button className="addToCartBtn" type="submit">Add To Cart</button>
    
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

export default DisplayItem