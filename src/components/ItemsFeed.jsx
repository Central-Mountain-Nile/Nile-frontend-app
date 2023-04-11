import { React, useState, useEffect } from "react";
import { getProducts, adminDelete, editProduct } from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Banner } from "./";

function ItemsFeed(props) {
  const { searchTerm, currentUser, token } = props;
  const { pageNumber, category } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(Number(pageNumber));
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();

  const retrieveProducts = async () => {
    const allProducts = await getProducts({ page, searchTerm, category });
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
  const handleClickDelete = async (id) => {
    const result = await adminDelete(token, id);
    console.log(products);
    const filteredData = products.filter((element) => {
      if (element.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setProducts(filteredData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedProduct = await editProduct(
      routineIdNumber,
      updatedName,
      updatedGoal
    );

    setRoutines((prevRoutine) => ({
      ...prevRoutine,
      name: updatedProduct.name,
      goal: updatedProduct.goal,
    }));
  };

  async function changePage(num) {
    navigate(`/itemsfeed/${num}`);
    setPage(num);
  }
  useEffect(() => {
    retrieveProducts();
  }, [page, searchTerm, category]);

  return (
    <div>
      <Banner />
      <div className="allProducts">
        {products.length ? (
          products.map((product) => {
            return (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleClickDelete(product.id);
                }}
                key={`itemsFeed${product.id}`}
              >
                <Link
                  className="linkProperties"
                  to={`/displayItems/${product.id}`}
                >
                  <div className="product-card">
                    <h2>{product.name}</h2>
                    <img
                      className="individual_item_img"
                      src={product.imgURL}
                      alt={product.description}
                    />
                    <span>{product.description}</span>
                    <span>${product.price}</span>
                    {/* <p>category:{product.categoryName}</p> */}
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </Link>
                {currentUser && currentUser.isAdmin ? (
                  <button className="deleteBtn">Delete</button>
                  
                ) : null}
                {/* {currentUser && currentUser.isAdmin ? <button>Delete</button> : null} */}
              </form>
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
