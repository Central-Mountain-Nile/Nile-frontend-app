import React from "react";

function Login() {


//   const logIn = async ({
//     LoggedIn,
//     setLoggedIn,
//     token,
//     setToken,
//     currentUser,
//     setCurrentUser,
//   }) => {
    // const response = await logIn(userName, password);
    // if (response.error) {
    //   alert("Invalid Credientials");
    // } else {
    //   console.log(response);
    //   setToken(response.token);
    //   setCurrentUser(response.user);
    //   localStorage.setItem("currentUser", JSON.stringify(response.user));
    //   localStorage.setItem("token", JSON.stringify(response.token));
    //   setLoggedIn(true);
    // }
//   };
  return (
    <div className="LoginForm">
      <h2>Please Log in</h2>
      {/* <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          logInToSite();
        }}
        id="login-form"
      >
        <label>Username</label>
        <input
          require="true"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
        />
        <label>Password</label>
        <input
          require="true"
          minLength="8"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <button className="submitButton" type="submit">
          Log In
        </button>
      </form>
      <h2>Or Register for an Account Below</h2>
      <Register
        userName={userName}
        password={password}
        setUserName={setUserName}
        setPassword={setPassword}
        setLoggedIn={setLoggedIn}
        setToken={setToken}
        setCurrentUser={setCurrentUser}
      /> */}
    </div>
  );
}

export default Login;
