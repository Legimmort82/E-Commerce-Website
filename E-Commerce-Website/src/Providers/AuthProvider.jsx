import React, { createContext, useState } from "react";

const authContext = createContext("");

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => {
    localStorage.getItem("accessToken");
  });

  const LoggedIn = !!accessToken;

  const saveAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const values = {
    saveAccessToken,
    logout,
    LoggedIn,
  };
  return (
    <div>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </div>
  );
};

export { authContext, AuthProvider };
