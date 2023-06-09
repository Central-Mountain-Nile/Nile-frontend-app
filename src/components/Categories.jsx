import React from "react";
import { Link } from "react-router-dom";

function Categories(props) {
const {setCategory} = props


  return (
    <div className="categories">
      <Link to={"/itemsfeed/clothing/1"}><button>Clothing</button></Link>
      <Link to={"/itemsfeed/electronics/1"}><button>Electronics</button></Link>
      <Link to={"/itemsfeed/jewelry/1"}><button>Jewelry</button></Link>
      <Link to={"/itemsfeed/music/1"}><button>Music</button></Link>
      <Link to={"/itemsfeed/auto/1"}><button>Auto</button></Link>
      <Link to={"/itemsfeed/gaming/1"}><button>Gaming</button></Link>
      <Link to={"/itemsfeed/pets/1"}><button>Pets</button></Link>
      <Link to={"/itemsfeed/lifestyle/1"}><button>Lifestyle</button></Link>
      <Link to={"/itemsfeed/appliances/1"}><button>Appliances</button></Link>
      <Link to={"/itemsfeed/books/1"}><button>Books</button></Link>
    </div>
  );
}

export default Categories;
