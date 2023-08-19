/* eslint-disable react-hooks/exhaustive-deps */
import "./Login.scss";
import { useState, useEffect, useContext } from "react";
import { BASE_URL, REACT_URL } from "../../utils/base-url/BASE_URL";
import { Link, useNavigate } from "react-router-dom";
import { CheckAuth, CheckAuthExpiry } from "../../utils/check-auth/CheckAuth";
import { AuthContext } from "../../pages/Login/Logincontext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate("");
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  useEffect(() => {
    // Update local storage when token changes
    CheckAuth(token);
  }, [token]);

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
        authorization: process.env.JWT_SECRET_KEY,
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data.user === true) {
          login();
        }
        setToken(data.token);
      });
  };
  if (isLoggedIn) {
    if (window.location.href === `${REACT_URL}/outfit`) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

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
        <div className="block-sign-up">
          {" "}
          <p>Not a user? </p>
          <Link className="btn-sign-up" to="/sign-up">
            Click here to Register!
          </Link>{" "}
        </div>
      </form>
      {data.user === false && <p>No user found</p>}
    </div>
  );
}

export default Login;
