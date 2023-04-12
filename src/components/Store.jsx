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
  const { currentUser, token, setProducts,products } = props;
  const navigate = useNavigate();
  console.log(currentUser, "USER");
  const retrieveUserProducts = async () => {
    if (currentUser) {
      const allProducts = await getProductsByUserName(currentUser.username);
      console.log(allProducts, "ALL");
      setProducts(allProducts);
    }
  };
  
  useEffect(() => {
    retrieveUserProducts();
  }, [currentUser]);

  console.log(products, "PRODUCTS");
  return (
    <div>
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
               
              </form>
            );
          })
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default Store;
