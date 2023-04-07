import React, { useEffect, useState} from "react";
import { becomeAdmin } from "../Api-Adapter";

function Admin(props) {
  const { currentUser,setCurrentUser, token } = props;
const [secretCode, setSecretCode] = useState('')
const [allUsers, setAllUsers] = useState([])
async function activateAdmin(e){
  e.preventDefault()
  const newUser = await becomeAdmin(token, secretCode)
  setCurrentUser(newUser)
}
useEffect(()=>{
  retrieveAllUsers()
},[])
async function retrieveAllUsers(){
  setAllUsers(await getAllUsers())
}
  return (
    <div>
      admin page
      {currentUser && currentUser.isAdmin ? <div><div>admin</div>
      {allUsers.length ? (
          products.map((product) => {
            return (
              // <form onSubmit={handleClick}>
              <div key={`itemsFeed${product.id}`}>
                <Link to={`/displayItems/${product.id}`}>
                  <div className="product-card">
                    
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    {/* <img src={product.image_url}/> */}
                  </div>
                </Link>
              </div>
              // </form>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      
      </div>
      
      : 
      <form onSubmit={(e)=>{activateAdmin(e)}}>
        <input onChange={(event)=>{setSecretCode(event.target.value)}}></input>
        <button>
          submit
        </button>
        </form>}
    </div>
  );
}

export default Admin;
