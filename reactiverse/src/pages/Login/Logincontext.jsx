import React, { createContext, useState, useEffect } from "react";
import { CheckAuthExpiry } from "../../utils/check-auth/CheckAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);
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
  console.log("Context", isLoggedIn);

  const handleAuthCheck = async () => {
    try {
      const auth = await CheckAuthExpiry();
      if (auth !== 200) {
        logout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleAuthCheck();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
