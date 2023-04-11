import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getProductById,
  addToCart,
  updateCartItem,
  editProduct,
  editProductAdmin,
} from "../Api-Adapter";
import { useNavigate, useParams } from "react-router-dom";

function DisplayItemEdit(props) {
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  // const [quantity, setQuantity] = useState(0)
  const { productId } = useParams();
  const { token, cart, setCart, searchTerm, currentUser } = props;
  const navigate = useNavigate();

  const retrieveProduct = async () => {
    const thisProduct = await getProductById(productId);
    setSingleProduct(thisProduct);
    setName(thisProduct.name);
    setQuantity(thisProduct.quantity);
    setDescription(thisProduct.description);
    setPrice(thisProduct.price);
    setImgURL(thisProduct.imgURL);
  };

  const handleClickEdit = async ( productId, fields) => {
    if (currentUser && currentUser.isAdmin) {

      const result = await editProductAdmin(productId, token, fields);

      navigate("/");
    } else {
      alert("MUST BE LOGGED IN TO PERFORM THIS ACTION");
    }
  };
  const handleClickEditStore = async ( productId, fields) => {
    if (currentUser && currentUser.id === singleProduct.creatorId) {
      const result = await editProduct(productId, token, fields);

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
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/* {singleProduct.length ? (
      singleProduct.map((product) => {
        return ( */}
        {singleProduct.name ? (
          <div className="product-card-individual">
            <div>
              <img
                className="individual_item_img_edit"
                src={imgURL}
                alt={singleProduct.description}
              />
              <div className="singleItemText_edit">
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
              {currentUser && currentUser.isAdmin ? (
                <button
                  className="addToCartBtn"
                  type="submit"
                  onClick={() => {
                    handleClickEdit(productId, {
                      name,
                      imgURL,
                      description,
                      price,
                      quantity,
                    });
                  }}
                >
                  confirm edit
                </button>
              ) : null}
              {
                currentUser && currentUser.id === singleProduct.creatorId && !currentUser.isAdmin?
                <button className="addToCartBtn" type="submit" onClick={()=>{
                  handleClickEditStore( productId, {
                    name,
                    imgURL,
                    description,
                    price,
                    quantity,
                  })}
      }>
        confirm edit
      </button>:null
              }
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
