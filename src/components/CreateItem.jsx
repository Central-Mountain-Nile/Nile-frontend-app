import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../Api-Adapter";



const CreateItem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  // const loggedIn = props.loggedIn;
  const currentUser = localStorage.getItem("currentUser");
  const token = props.token;

  const products = props.products;
  const setProducts = props.setProducts


  const handleClick = async (event) => {
    event.preventDefault();
    if (token && currentUser) {
    const result = await postProduct(token, {name, price, description, quantity});
   console.log(result, "RESULT")
    const productsCopy = [...products];
    productsCopy.push(result);
    setProducts(productsCopy);
    navigate("/");
    }else{
      alert("MUST BE LOGGED IN TO PERFORM THIS ACTION");
    }
  };

  return (
    <div id="newRoutineFormBox">
      <div id="newRoutineFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>CREATE A ROUTINE</h3>
            <label>
              <p>Name:</p>
              <input
                className="newPostInput"
                name="title"
                type="text"
                value={name}
                onChange={(event) => {
                  console.log(event.target.value);
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
                  console.log(event.target.value);
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
                  console.log(event.target.value);
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
                type="text"
                value={quantity}
                onChange={(event) => {
                  console.log(event.target.value);
                  setQuantity(event.target.value);
                }}
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
