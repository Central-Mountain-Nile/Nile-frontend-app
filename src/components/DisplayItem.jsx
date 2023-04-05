import { React, useState, useEffect } from "react";
import { getProductById, getProducts } from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

function DisplayItem(props) {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();

  console.log(productId, "ID");
  const retrieveProduct = async () => {
    const thisProduct = await getProductById(productId);
    setSingleProduct(thisProduct);
  };

  useEffect(() => {
    if (productId) {
      retrieveProduct();
    }
  }, [productId]);

  console.log(singleProduct, "SINGKLE");
  return (
    <div className="allProducts">
      {/* {singleProduct.length ? (
      singleProduct.map((product) => {
        console.log("hit")
        return ( */}
      {singleProduct.name ? (
        <div className="product-card-individual">
          <h2>{singleProduct.name}</h2>
          <p>{singleProduct.description}</p>
          <p>${singleProduct.price}</p>
          <p>Quantity: {singleProduct.quantity}</p>
          {/* <img src={image_url}/> */}
          <button className="addToCartBtn">Add To Cart</button>
        </div>
      ) : (
        <div className="loader"></div>
      )}

      {/* );
      })
    ) : (
      <div className="loader"></div>
    )} */}
    </div>
  );
}

export default DisplayItem;
