import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct, becomeStore } from "../Api-Adapter";
import { Store } from "./";

const CreateItem = (props) => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isStore, setIsStore] = useState(false);
  const [category, setCategory] = useState("clothing");
  const [imgURL, setImgURL] = useState("https://picsum.photos/200");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // const loggedIn = props.loggedIn;
  const currentUser = props.currentUser;
  const token = props.token;
  const options = [
    "clothing",
    "electronics",
    "jewelry",
    "music",
    "auto",
    "gaming",
    "pets",
    "lifestyle",
    "appliances",
    "books",
  ];

  async function makeStore(event) {
    try {
      const response = await becomeStore(token);
      setIsStore(response.isStore);
    } catch (error) {
      throw error;
    }
  }

  const handleClick = async (event) => {
    event.preventDefault();
    setMessage('')
    let result = null;
    if (token && currentUser) {
      result = await postProduct(token, {
        name,
        price,
        description,
        quantity,
        category,
        imgURL,
      });
      if(!result.message){
        const newProducts = [...products]
        newProducts.push(result)
        setProducts(newProducts)
      }else{
        setMessage(result.message)
      }
    } else {
      setMessage("MUST BE LOGGED IN TO PERFORM THIS ACTION");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="fullCreatePage">
      <div className="loginPageBoxCreate">
        <div className="createPage">
          <form onSubmit={handleClick}>
            <div className="newPostLabelText">
              <h3>CREATE A PRODUCT</h3>
              <label>
                <p>Name:</p>
                <input
                  className="newPostInput"
                  name="title"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="newPostLabelText">
              <label>
                <p>Price:</p>
                <input
                  className="newPostInput"
                  name="Price"
                  type="text"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="newPostLabelText">
              <label>
                <p>Description:</p>
                <input
                  className="newPostInput"
                  name="Description"
                  type="text"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="newPostLabelText">
              <label>
                <p>Quantity:</p>
                <input
                  className="newPostInput"
                  name="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(event) => {
                    setQuantity(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="newPostLabelText">
              <label>
                <p>Category:</p>
                {/* <input
                  className="newPostInput"
                  name="Category"
                  type="text"
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                /> */}
                <select
                  onChange={(event) => {
                    console.log(event.target.value);
                    setCategory(event.target.value);
                  }}
                >
                  {options.map((option, index) => (
                    <option key={`options ${index}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="newPostLabelText">
              <label>
                <p>{"Image url: (change to remove default)"}</p>
                <input
                  className="newPostInput"
                  name="image url"
                  type="text"
                  value={imgURL}
                  onChange={(event) => {
                    setImgURL(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="newPostLabelText">
              {currentUser && currentUser.isStore ? null : (
                <label>
                  Make a store?
                  <input
                    type="checkbox"
                    checked={isStore}
                    onChange={(event) => {
                      makeStore(event);
                    }}
                  />
                </label>
              )}
            </div>

            <button className="submitBtn2" type="submit">
              POST
            </button>
          </form>
        </div>
        <div className="storeComp">
          <Store
            currentUser={currentUser}
            token={token}
            products={products}
            setProducts={setProducts}
          />
        </div>
      </div>
      <h2 className="message">{message}</h2>
    </div>
  );
};

export default CreateItem;
