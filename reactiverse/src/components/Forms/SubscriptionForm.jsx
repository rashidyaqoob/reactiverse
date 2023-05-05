import { useState } from "react";
import "./SubscriptionForm.scss";

const cookieArr = [];
const Subscriptionform = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  //   const [cookie, setCookie] = useCookies(['email'])

  // const FORM_URL = "https://app.convertkit.com/forms/5120270/subscriptions";

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
      setStatus("success");
    } else {
      handleCookie(email);
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
    //     console.log("hello");
    //     setStatus("success");
    //     handleEmailCookie(`'email', ${email};`);
    //     console.log("success");
    //   }
    // } catch (err) {
    //   setStatus("failed");
    //   console.log(err);
    // }
  };

  return (
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
        {status == "success" ? <p>Already Subscribed</p> : ""}
        {/* {cookies.email} */}
      </form>
    </>
  );
};

export default Subscriptionform;