import { React, useState, useEffect } from "react";
import { getProducts } from "../Api-Adapter";
import { Link, useParams } from "react-router-dom";


function ItemsFeed(props) {
  const [products, setProducts] = useState([])
  const {pageNumber} = useParams()
  const next = Number(pageNumber) + 1;
  console.log(next)
  const previous = pageNumber - 1;
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
    {
      pageNumber != 1 ?    <Link>previousPage</Link>:null
    }

    <Link to="/itemsfeed/2"next>nextPage</Link>
  </div>
  )
}

export default ItemsFeed