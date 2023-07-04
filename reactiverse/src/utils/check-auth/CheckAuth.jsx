import { BASE_URL } from "../base-url/BASE_URL";
import { AuthContext } from "../../pages/Login/Logincontext";
import { useContext } from "react";
export const CheckAuth = (token) => {
  // const expirationTime = new Date().getTime() + 30 * 1000;
  // const expirationToken = expirationTime - new Date().getTime()
  if (token) {
    localStorage.setItem("jwtToken", token);
  }
};

export const CheckAuthExpiry = async () => {
  const token = localStorage.getItem("jwtToken");
  const headers = { Authorization: token };

  try {
    const response = await fetch(`${BASE_URL}/auth`, { headers });
    const data = await response.json();

    if (data.message.message === "jwt expired") {
      return data.message.message;
    } else if (data.status === 200) {
      return data.status;
    }
  } catch (error) {
    // Handle any error that occurs during the API request
    // console.log(error);
    return null;
  }
};
