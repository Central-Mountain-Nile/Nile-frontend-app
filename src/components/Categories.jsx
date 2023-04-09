import React from "react";
import { Link } from "react-router-dom";

function Categories(props) {
const {setCategory} = props


  return (
    <div className="categories">
      <Link to={"/itemsfeed/clothing/1"}><button>Clothing</button></Link>
      <Link to={"/itemsfeed/electronics/1"}><button>Electronics</button></Link>
      <button>Jewelry</button>
      <button>Music</button>
      <button>Auto</button>
      <button>Gaming</button>
      <button>Pets</button>
      <button>Sports/Lifestyle</button>
      <button>Tools/appliances</button>
      <button>Books</button>
    </div>
  );
}

export default Categories;
