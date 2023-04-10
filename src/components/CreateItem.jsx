import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct, becomeStore } from "../Api-Adapter";



const CreateItem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("");
  const [isStore, setIsStore] = useState(false)
  const [category, setCategory] = useState('')
  const navigate = useNavigate();
  // const loggedIn = props.loggedIn;
  const currentUser = props.currentUser;
  const token = props.token;


 async function makeStore(event) {
  try {
    const response = await becomeStore(token)
    setIsStore(response.isStore)
  } catch (error) {
    throw error
  }
 }

  const handleClick = async (event) => {
    event.preventDefault();
    if (token && currentUser) {
    const result = await postProduct(token, {name, price, description, quantity, category, imgURL: "image"});
    navigate("/");
    }else{
      alert("MUST BE LOGGED IN TO PERFORM THIS ACTION");
    }
  };

  useEffect(() => {
  }, [])

  return (
    <div className="loginPageBox">
      <div className="loginPage">
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
              <input
                className="newPostInput"
                name="Category"
                type="text"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              />
            </label>

            
          </div>
          <div className="newPostLabelText">
            <label>
              Make a store?
              <input
                type="checkbox"
                checked={isStore}
                onChange={(event) => {makeStore(event)}}
                />

            </label>
          </div>
     

            <button className="submitBtn" type="submit">
              POST
            </button>
      </form>
          </div>
      </div>
      
  );
};

export default CreateItem;
