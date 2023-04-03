import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Api-Adapter";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const registerNewUser = async (username, password) => {
    if (!username || !password) {
      console.log("All fields are required");
      return;
    }

    try {
      const result = await registerUser(username, password);
      localStorage.setItem("token", result.token);
      setUsername(username);
      setPassword(password);
      setUser(username);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginPageBox">
      <div className="loginPage">
        <h1>Create Account</h1>
        <form
          className="registrationForm"
          onSubmit={(e) => {
            e.preventDefault();
            registerNewUser(username, password);
          }}
        >
          <p>Username:</p>
          <input
            className="userNameInput"
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password:</p>
          <input
            className="passwordInput"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <p>Confirm Password:</p>
          <input
            className="passwordInput"
            type="password"
            placeholder="Confirm Password"
          />

          <br></br>
          <button className="submitBtn" type="submit">
            Submit
          </button>
          <br></br>
          <Link to="/login" className="registerLink">
            Already have an account? Login here!
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register