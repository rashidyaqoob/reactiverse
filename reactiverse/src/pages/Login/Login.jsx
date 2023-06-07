/* eslint-disable react-hooks/exhaustive-deps */
import "./Login.scss";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/base-url/BASE_URL";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginInfo = {
    email: email,
    password: password,
  };
  const [data, setData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    // Handle the response as needed
  };

  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-form__email-container">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            className="login-form__element email"
            placeholder="Enter your Email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          ></input>
        </div>
        <div className="login-form__password-container">
          <div className="login-form__2-elem">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              className="login-form__element"
              placeholder="Password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            ></input>
          </div>
        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          value="Login"
          className="login-form__element submit"
        ></input>
      </form>
      {data.user == true && (
        navigate('/')
      )}
        {data.user == false && (
        <p>No user found</p>
      )}
    </div>
  );
}

export default Login;
