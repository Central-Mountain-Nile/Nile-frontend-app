import React, { useEffect, useState } from "react";
import { becomeAdmin, getAllUsers } from "../Api-Adapter";

function Admin(props) {
  const { currentUser, setCurrentUser, token } = props;
  const [secretCode, setSecretCode] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  async function activateAdmin(e) {
    e.preventDefault();
    const newUser = await becomeAdmin(token, secretCode);
    setCurrentUser(newUser);
  }
  async function retrieveAllUsers() {
    const everyUser = await getAllUsers(token);
    setAllUsers(everyUser);
  }
  console.log(allUsers, "ALL");

  useEffect(() => {
    retrieveAllUsers();
  }, []);
  return (
    <div>
      admin page
      {currentUser && currentUser.isAdmin ? (
        <div>
          <div>admin</div>
          {allUsers ? (
            allUsers.map((user) => {
              return (
                // <form onSubmit={handleClick}>
                <div key={`admin${user.id}`}>
                  {/* <Link to={`/displayItems/${product.id}`}> */}
                  <div className="users-card-wrapper">
                    <div className="users-card">
                      <h2>USER: {user.username}</h2>
                      <p>First:{user.firstName}</p>
                      <p>Last: {user.lastName}</p>
                      <p>Email: {user.email}</p>
                      <p>Address: {user.addressLineOne}</p>
                      <p>Address 2: {user.addressLineTwo}</p>
                      <p>City: {user.city}</p>
                      <p>State: {user.state}</p>
                      <p>Zip: {user.postalCode}</p>
                      <p>Country: {user.country}</p>
                      <h2>Access Level</h2>
                      {user.isActive ? (
                        <p>Active: TRUE</p>
                      ) : (
                        <p>Active: FALSE</p>
                      )}
                      {user.isStore ? <p>Store: TRUE</p> : <p>Store: FALSE</p>}
                      {user.isAdmin ? <p>Admin: TRUE</p> : <p>Admin: FALSE</p>}
                      <p>Created At: {user.createdAt}</p>

                      {/* <img src={product.image_url}/> */}
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
                // </form>
              );
            })
          ) : (
            <div className="loader"></div>
          )}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            activateAdmin(e);
          }}
        >
          <input
            onChange={(event) => {
              setSecretCode(event.target.value);
            }}
          ></input>
          <button>submit</button>
        </form>
      )}
    </div>
  );
}

export default Admin;
