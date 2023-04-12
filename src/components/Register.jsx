import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Api-Adapter";

function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const setToken = props.setToken;
  const setCurrentUser = props.setCurrentUser;

  const navigate = useNavigate();

  const registerNewUser = async (username, password) => {
    if (
      !username ||
      !password ||
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      !city ||
      !state ||
      !postalCode ||
      !country
    ) {
      setMessage("All fields are required");
      return;
    }

    try {
      const result = await registerUser({
        username,
        password,
        firstName,
        lastName,
        email,
        address,
        address2,
        city,
        state,
        postalCode,
        country,
      });
      if (result.error) {
        setMessage(result.message);
      } else {
        setToken(result.token);
        setCurrentUser(result.user);
        localStorage.setItem("token", result.token);
        navigate("/itemsfeed/1");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="registerPageBox">
      <div className="registerPage">
        <h1>Create Account</h1>
        <form
          className="registrationForm"
          onSubmit={(e) => {
            e.preventDefault();
            registerNewUser(username, password);
          }}
        >
          <div className="rowWrapper">
            <div className="row1">
              <p>First Name:</p>
              <input
                className="firstNameInput"
                value={firstName}
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
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
              <p>Address:</p>
              <input
                className="addressInput"
                value={address}
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <p>City:</p>
              <input
                className="CityInput"
                value={city}
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
              <p>Zip:</p>
              <input
                className="ZipInput"
                value={postalCode}
                type="number"
                placeholder="Zip"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="row2">
              <p>Last Name:</p>
              <input
                className="LastNameInput"
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <p>Email:</p>
              <input
                className="emailInput"
                value={email}
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>Confirm Password:</p>
              <input
                className="passwordInput"
                type="password"
                placeholder="Confirm Password"
              />
              <p>Address line 2:</p>
              <input
                className="address2Input"
                value={address2}
                type="text"
                placeholder="Address line 2 (optional)"
                onChange={(e) => setAddress2(e.target.value)}
              />
              <p>State:</p>
              <input
                className="StateInput"
                value={state}
                type="text"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
              />
              <p>Country:</p>
              <input
                className="CountryInput"
                value={country}
                type="text"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <br></br>
          <button className="submitButton" type="submit">
            Submit
          </button>
          <br></br>
          <Link to="/login" className="registerLink">
            Already have an account? Login here!
          </Link>
        </form>
        <img className="logoFoot" src="/nileLogo.png" alt="" />

        <h2 className="message">{message}</h2>
      </div>
    </div>
  );
}

export default Register;
