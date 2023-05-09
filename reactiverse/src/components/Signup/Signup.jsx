import { useState } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

function HandleSignInBtn() {
  const [userLoggedIn, setUser] = useState(false);
  const [state, setState] = useState("Sign In");
  function buttonHandle() {
    const user = getAuth().currentUser;
    console.log(user);
    if (user) {
      setState("Sign Out");
      setUser(true);

      console.log(getAuth().currentUser);
    } else {
      setState("Sign in");
      setUser(false);
    }
  }
  return (
    <Link
      to={userLoggedIn ? "/" : "/sign-up"}
      className="user-auth__btn"
      onClick={buttonHandle}
    >
      {state}
    </Link>
  );
}
export default HandleSignInBtn;
