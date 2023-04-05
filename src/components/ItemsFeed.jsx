import { React, useState, useEffect } from "react";
import { getProducts } from "../Api-Adapter";
import { Link, useParams } from "react-router-dom";


function ItemsFeed(props) {
  const [products, setProducts] = useState([])
  const {pageNumber} = useParams()
  const [page, setPage] = useState(Number(pageNumber))
  
  const retrieveProducts = async () => {
    console.log(page)
    const allProducts = await getProducts(page)
    setProducts(allProducts);
}
function changePage(num){
  setPage(Number(page) + num)
}

useEffect(() => {
  retrieveProducts();
}, [page]);


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
      pageNumber != 1 ?    <Link onClick={changePage(-1)}>previousPage</Link>:null
    }

    <Link onClick={()=>changePage(1)}>nextPage</Link>
  </div>
  )
}

export default ItemsFeed