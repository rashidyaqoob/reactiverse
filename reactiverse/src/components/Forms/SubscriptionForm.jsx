import { useState } from "react";
import "./SubscriptionForm.scss";

const cookieArr = [];
const Subscriptionform = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

//   const FORM_URL = "https://app.convertkit.com/forms/5120270/subscriptions";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCookie = (value) => {
    cookieArr.push(email);
    document.cookie = cookieArr;
  };

  const retrieveCookie = () => {
    const cookie = document.cookie;
    if (cookie.includes(email)) {
      setStatus("duplicate");
    } else {
      handleCookie(email);
      setStatus("success");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    retrieveCookie();


    // const data = new FormData(event.target);

    // try {
    //   const response = await fetch(FORM_URL, {
    //     method: "post",
    //     body: data,
    //     headers: {
    //       accept: "application/json",
    //     },
    //   });
    //   const json = await response.json();
    //   console.log(json.status);
    //   if (json.status == "success") {
    //   }
    // } catch (err) {
    //   setStatus("failed");
    //   console.log(err);
    // }
  };

  return (
    <>
      <h2 className="form-title">Subscribe</h2>
      <form data-testid="subscribe-form" className="subscribe-form" action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email_address"
          className="subscribe-form__email"
          onChange={handleEmailChange}
          value={email}
        />
        <button type="submit" className="subscribe-form__btn">
          Subscribe
        </button>
        {status == "duplicate" ? <p>We've already enabled subscription on this email.</p> : ""}
        {status == "success" ? <p>Congratulations! We've enable subscription on this email.</p> : ""}
      </form>
    </>
  );
};

export default Subscriptionform;
