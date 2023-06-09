import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Api-Adapter";

function Login(props) {
  const { setToken, setCurrentUser} = props
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const navigate = useNavigate();



  const logInToSite = async () => {
    const response = await loginUser(userName, password);
    if (response.error) {
      setMessage(response.message)
    } else {
      setToken(response.token);
      setCurrentUser(response.user);
      localStorage.setItem("token", response.token);      
      navigate("/itemsfeed/1");
    }
  };


  return (
    <div className="loginPageBox">
      <div className="loginPage">
      <h2>PLEASE LOG IN</h2>
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
    <h2 className="message">{message}</h2>
    </div>
  );
}

export default Login;
