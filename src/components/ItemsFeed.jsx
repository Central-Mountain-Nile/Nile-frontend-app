import { React, useState, useEffect } from "react";
import { getProducts } from "../Api-Adapter";
import { useParams } from "react-router-dom";


function ItemsFeed(props) {
  const [products, setProducts] = useState([])
  const {pageNumber} = useParams()
  const retrieveProducts = async () => {

    const allProducts = await getProducts(pageNumber)
    setProducts(allProducts);
}


useEffect(() => {
  retrieveProducts();
}, []);


  return (
    <div className="allProducts">
    {products.length ? (
      products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {/* <img src={image_url}/> */}
          </div>
        );
      })
    ) : (
      <div className="loader"></div>
    )}
  </div>
  )
}

export default ItemsFeed