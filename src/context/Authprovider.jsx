import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { Employees, Admins } = getLocalStorage();
    setUserData({ Employees, Admins });
  }, []);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
