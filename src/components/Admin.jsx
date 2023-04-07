import React, { useReducer } from "react";

function Admin(props) {
  const { user, token } = props;
  return (
    <div>
      admin page
      {user.isAdmin ? <div>admin</div> : <div>notAdmin</div>}
    </div>
  );
}

export default Admin;
