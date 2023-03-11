import { useState, createContext, useContext } from "react";
import axios from "axios";
import { API } from "../config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    refreshToken: "",
  });
axios.defaults.baseURL = API; 
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext); // [auth, setAuth]

export { useAuth, AuthProvider }; // wrap the app with provider