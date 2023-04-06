import { React, useState, useEffect } from "react";

import { getProducts, getProductById } from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";



function ItemsFeed(props) {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(Number(pageNumber))
  const [pageCount, setPageCount] = useState(1)
  const navigate = useNavigate();


  const {pageNumber} = useParams()

  const retrieveProducts = async () => {
    const allProducts = await getProducts(page)
   // setProducts(allProducts.products)
    setProducts(allProducts);
}
function changePage(num){
  navigate(`/itemsfeed/${Number(page) + num}`)
  setPage(Number(page) + num)

}

useEffect(() => {
  retrieveProducts();
}, [page]);


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
          <div key={`itemsFeed${product.id}`}>
            <Link to={`/displayItems/${product.id}`}>
          <div className="product-card" >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            {/* <img src={image_url}/> */}
            {/* <button onClick={()=>{getProducts(product.id)}} className="submitBtn" type="submit">
            Submit
          </button> */}
          </div>
          </Link>
          </div>
    // </form>
        );
      })
    ) : (
      <div className="loader"></div>
    )}
    {
      page != 1 ?    <Link onClick={()=>changePage(-1)}>previousPage</Link>:null
    }

    <Link onClick={()=>changePage(1)}>nextPage</Link>
  </div>
  )
}

export default ItemsFeed