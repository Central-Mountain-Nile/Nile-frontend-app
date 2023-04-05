import { React, useState, useEffect } from "react";
import { getProducts, getProductById } from "../Api-Adapter";
import { Link, useNavigate } from "react-router-dom";


function ItemsFeed(props) {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  console.log(products, );

  const retrieveProducts = async () => {
    const allProducts = await getProducts()
    setProducts(allProducts);
}


useEffect(() => {
  retrieveProducts();
}, []);


// const handleClick = async (event) => {
//   console.log("hit");
//   event.preventDefault();
//   const result = await getProductById(id);
//   if (result) {

//     navigate("/displayitem/:productId");
//   } else {
//     console.log(result.error);
//   }
// };

  return (
    <div className="allProducts">
    {products.length ? (
      products.map((product) => {
        return (
          // <form onSubmit={handleClick}>
          <div className="product-card" key={product.id}>
            <Link to={`/displayItems/${product.id}`}>
            <h2>{product.name}</h2>
            </Link>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {/* <img src={image_url}/> */}
            {/* <button onClick={()=>{getProducts(product.id)}} className="submitBtn" type="submit">
            Submit
          </button> */}
          </div>
          
    // </form>
        );
      })
    ) : (
      <div className="loader"></div>
    )}
  </div>
  )
}

export default ItemsFeed