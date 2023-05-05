import { useState } from "react";
import Cookies from "js-cookie";
import "./SubscriptionForm.scss";
import { useCookies } from "react-cookie";

const cookieArr = [];
const Subscriptionform = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  //   const [cookie, setCookie] = useCookies(['email'])


  const FORM_URL = "https://app.convertkit.com/forms/5120270/subscriptions";

  const handleEmailCookie = (key, value) => {
    cookieArr.push(key, value);
  };
  document.cookie = cookieArr;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      const json = await response.json();

      if (json.status === "success") {
        setStatus("success");
        handleEmailCookie(`'email', ${email};`);
      }
    } catch (err) {
      setStatus("failed");
      console.log(err);
    }
  };

  return (
    <>
      {status == "success" && (
        <>
          <p>
            Welcome aboard{email ? `, ${email}` : ""}{" "}
            <span role="img" aria-label="Ship">
              🚢
            </span>
          </p>
          <p>Please check your inbox to confirm the subscription!</p>
        </>
      )}
      {status === "failed" && (
        <>
          <p>Oops, something went wrong...</p>
          <p>
            Please, <button onClick={() => setStatus(null)}>try again.</button>
          </p>
        </>
      )}

      {/* {status == "" && ( */}
      <>
        <h2 class="form-title">Subscribe</h2>
        <form className="subscribe-form" action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email_address"
            class="subscribe-form__email"
            onChange={handleEmailChange}
            value={email}
          />
          <button type="submit" class="subscribe-form__btn">
            Subscribe
          </button>
          {/* {cookies.email} */}
        </form>
      </>
      {/* )} */}
    </>
  );
};

export default Subscriptionform;
