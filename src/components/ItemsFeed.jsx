import { React, useState, useEffect } from "react";
import { getProducts, getProductById } from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

function ItemsFeed(props) {
  const { searchTerm } = props;
  const { pageNumber, category } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(Number(pageNumber));
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();

  const retrieveProducts = async () => {
    console.log(searchTerm, category);
    const allProducts = await getProducts({ page, searchTerm, category });
    console.log(allProducts, "allProducts");
    setProducts(allProducts.products);
    let num = Math.ceil(allProducts.count / 25);
    setPageCount(num);
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
  }, [page, searchTerm, category]);

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
                    <p>category:{product.categoryName}</p>
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
        <div className="page">Page</div>
        <div className="pageNum">-{createPageCount()}-</div>
      </div>
    </div>
  );
}

export default ItemsFeed;
