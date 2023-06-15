import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/Login/Logincontext";

function HandleSignInBtn() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  function buttonHandle(e) {
    if (isLoggedIn) {
      e.preventDefault();
      logout();
    }
  }
  return (
    <Link
      to={isLoggedIn ? "/" : "/login"}
      className="user-auth__btn"
      onClick={buttonHandle}
    >
      {isLoggedIn ? "Log Out" : "Log In"}
    </Link>
  );
}
export default HandleSignInBtn;
