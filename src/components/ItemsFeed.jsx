import { React, useState, useEffect } from "react";

import { getProducts, getProductById } from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

function ItemsFeed(props) {
  const {searchTerm} = props
  const { pageNumber } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(Number(pageNumber));
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();

  const retrieveProducts = async () => {
    if(!searchTerm){
      const allProducts = await getProducts(page);
      setProducts(allProducts.products);
      let num = Math.ceil(allProducts.count / 25);
      setPageCount(num);
    }else{
      const allProducts = await getProducts(page,searchTerm);
      setProducts(allProducts.products);
      let num = Math.ceil(allProducts.count / 25);
      setPageCount(num);
    }

  };
  function createPageCount() {
    let elements = [];
    let count = 0;
    while (count < pageCount) {
      count++;
      elements.push(
        <button
          key={`pageCount${count}`}
          className="page_number"
          onClick={(event) => changePage(event.target.innerText)}
        >
          {count}
        </button>
      );
    }
    return elements;
  }

  async function changePage(num) {
    navigate(`/itemsfeed/${num}`);
    setPage(num);
  }
  useEffect(() => {
    retrieveProducts();
  }, [page, searchTerm]);
  

  return (
    <div>
      <div className="allProducts">
        {products.length ? (
          products.map((product) => {
            return (
              // <form onSubmit={handleClick}>
              <div key={`itemsFeed${product.id}`}>
                <Link to={`/displayItems/${product.id}`}>
                  <div className="product-card">
                    
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    {/* <img src={product.image_url}/> */}
                  </div>
                </Link>
              </div>
              // </form>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      </div>
      <div className="pageCount">
        <div>page</div>
        <div>
        {createPageCount()}
        </div>
      </div>
    </div>
  );
}

export default ItemsFeed;
