import { React, useState, useEffect } from "react";
import {
  getProductById,
  addToCart,
  updateCartItem,
  editProduct,
} from "../Api-Adapter";
import { useNavigate, useParams } from "react-router-dom";

function DisplayItemEdit(props) {
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  // const [quantity, setQuantity] = useState(0)
  const { productId } = useParams();
  const { token, cart, setCart, searchTerm } = props;
  const navigate = useNavigate();

  const retrieveProduct = async () => {
    const thisProduct = await getProductById(productId);
    setSingleProduct(thisProduct);
    setName(thisProduct.name)
    setQuantity(thisProduct.quantity)
    setDescription(thisProduct.description)
    setPrice(thisProduct.price)
    setImgURL(thisProduct.imgURL)
  };

  const handleClickEdit = async (id, token, fields) => {
    console.log("testing string");
    if (currentUser || isAdmin) {
      // event.preventDefault();
      const result = await editProduct(id, token, fields);
      console.log(result, "RESULT-EDIT");
      const updatedProductCopy = [...products];
      updatedProductCopy.push(result);
      navigate("/");
    } else {
      alert("MUST BE LOGGED IN TO PERFORM THIS ACTION");
    }
  };

  useEffect(() => {
    if (productId) {
      retrieveProduct();
    }
  }, [productId]);

  return (
    <div className="allProducts">
      <form onSubmit={(event) => handleClick(event)}>
        {/* {singleProduct.length ? (
      singleProduct.map((product) => {
        return ( */}
        {singleProduct.name ? (
          <div className="product-card-individual">
            <div>
              <img
                className="individual_item_img"
                src={imgURL}
                alt={singleProduct.description}
              />
              <div className="singleItemText">
              <input
                  className="StateInput"
                  value={name}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                              <input
                  className="StateInput"
                  value={description}
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              <input
                  className="StateInput"
                  value={price}
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                />
              <input
                  className="StateInput"
                  value={quantity}
                  type="number"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                              <input
                  className="StateInput"
                  value={imgURL}
                  type="text"
                  onChange={(e) => setImgURL(e.target.value)}
                />
              </div>
            </div>
            <div className="right-side-individual-product">
              <button className="addToCartBtn" type="submit">
                confirm edit
              </button>
            </div>
          </div>
        ) : (
          <div className="loader"></div>
        )}

        {/* );
      })
    ) : (
      <div className="loader"></div>
    )} */}
      </form>
    </div>
  );
}
export default DisplayItemEdit;
