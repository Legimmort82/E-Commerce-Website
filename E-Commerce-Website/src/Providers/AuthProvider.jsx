import React, { createContext, useState } from "react";

const authContext = createContext("");

const AuthProvider = ({ children }) => {
  const [LoggedIn, setLoggedIn] = useState(false);

  const values = {
    LoggedIn,
    setLoggedIn,
  };
  return (
    <div>
      <authContext.Provider value={values}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export { authContext, AuthProvider };
