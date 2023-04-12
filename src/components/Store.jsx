import { React, useState, useEffect } from "react";
import {
  getProducts,
  adminDelete,
  editProduct,
  deleteProduct,
  getProductsByUserName,
} from "../Api-Adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

function Store(props) {
  const { currentUser, token, setProducts, products } = props;
  const navigate = useNavigate();
  console.log(currentUser, "USER");
  const retrieveUserProducts = async () => {
    if (currentUser) {
      const allProducts = await getProductsByUserName(currentUser.username);
      console.log(allProducts, "ALL");
      setProducts(allProducts);
    }
  };
  // const handleClickDelete = async (id) => {
  //   const result = await adminDelete(token, id);
  //   console.log(products);
  //   const filteredData = products.filter((element) => {
  //     if (element.id !== id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   setProducts(filteredData);
  // };
  // const handleClickDeleteStore = async (id) => {
  //   console.log("hit");
  //   const result = await deleteProduct(token, id);
  //   console.log(result);
  //   const filteredData = products.filter((element) => {
  //     if (element.id !== id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   setProducts(filteredData);
  // };
  useEffect(() => {
    retrieveUserProducts();
  }, [currentUser]);

  console.log(products, "PRODUCTS");
  return (
    <div className="allProdUserWrapper">
      <div className="allProductsUser">
        {products.length ? (
          products.map((product) => {
            return (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
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
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </Link>
                {/* {currentUser && currentUser.isAdmin ? (
                  <>
                    <button
                      onClick={() => {
                        handleClickDelete(product.id);
                      }}
                      className="deleteBtn"
                    >
                      Delete
                    </button>
                    <Link to={`/displayitemedit/${product.id}`}>
                      <button className="editBtn">Edit</button>
                    </Link>
                  </>
                ) : null}
                {currentUser &&
                product.creatorId === currentUser.id &&
                !currentUser.isAdmin ? (
                  <>
                    <button
                      onClick={() => {
                        handleClickDeleteStore(product.id);
                      }}
                      className="deleteBtn"
                    >
                      Delete
                    </button>
                    <Link to={`/displayitemedit/${product.id}`}>
                      <button className="editBtn">Edit</button>
                    </Link>
                  </>
                ) : null} */}
              </form>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
}

export default Store;
