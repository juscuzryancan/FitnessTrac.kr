import { useState, createContext, useContext } from "react";

const TokenContext = createContext({ 
  token: localStorage.getItem("token") || "",
  user: null
});

export const TokenProvider = ({
  children
}) => {

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  /*
   * make use effect for getting rid of the user object
   */ 

  const contextValue = {
    token,
    setToken,
    clearToken: () => setToken("")
  }
  
  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  )
}

export const useToken = () => {
  return {...useContext(TokenContext)}  
}
