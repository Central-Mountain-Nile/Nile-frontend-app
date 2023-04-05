import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Api-Adapter";

function Login(props) {
  const { setToken, setCurrentUser} = props
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const logInToSite = async () => {
    const response = await loginUser(userName, password);
    if (response.error) {
      alert("Invalid Credentials");
    } else {
      console.log(response);
      setToken(response.token);
      setCurrentUser(response.user);
      localStorage.setItem("currentUser", JSON.stringify(response.user));
      localStorage.setItem("token", JSON.stringify(response.token));      
      navigate("/");
    }
  };


  return (
    <div className="LoginForm">
      <h2>Please Log in</h2>
      <form
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
      <Link to="/register" className="registerLink">
            Don't have an account? Register here!
          </Link>
    </div>
  );
}

export default Login;
