import React, { createContext, useState, useEffect } from "react";
import { CheckAuthExpiry } from "../../utils/check-auth/CheckAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    handleAuthCheck();
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  const handleAuthCheck = async () => {
    try {
      const auth = await CheckAuthExpiry();
      console.log("auth",auth)
      if (auth !== 200) {
        // setStatus(200);
        logout()
      }
    } catch (error) {
      console.log(error);
    }
  };
  const login = () => {
    // Perform the login logic
    
    setIsLoggedIn(true);
    // Store the login status in local storage
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };
  const logout = () => {
    // Perform the logout logic
    setIsLoggedIn(false);
    // Remove the login status from local storage
    localStorage.removeItem("isLoggedIn");
  };
  const authValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
