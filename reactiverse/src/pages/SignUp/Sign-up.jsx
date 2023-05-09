import "./Sign-up.scss";
import { FirebaseAuth } from "../../utils/firebase-app/firebase";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      alert("Password and confirm password doesnot match");
    } else {
      e.preventDefault();
      FirebaseAuth(email, password);
    }
  };
  return (
    <div className="signup-form-container">
      <form className="signup-form">
        <div className="signup-form__name">
          <div className="signup-form__2-elem">
            <label for="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              name="first-name"
              className="signup-form__element"
            ></input>
          </div>
          <div className="signup-form__2-elem">
            <label for="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="last-name"
              className="signup-form__element"
            ></input>
          </div>
        </div>
        <div className="signup-form__email-container">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            className="signup-form__element email"
            placeholder="Enter your Email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          ></input>
        </div>
        <div className="signup-form__password-container">
          <div className="signup-form__2-elem">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              className="signup-form__element"
              placeholder="Password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            ></input>
          </div>
          <div className="signup-form__2-elem">
            <label for="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              className="signup-form__element"
              placeholder="Confirm Password"
              name="confirm-password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            ></input>
          </div>
        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          value="Register"
          className="signup-form__element submit"
        ></input>
      </form>
    </div>
  );
}

export default SignUp;
