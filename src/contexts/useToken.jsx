import { useState, createContext, useContext } from "react";
import { useQueryClient } from "react-query";

const TokenContext = createContext({ 
  token: localStorage.getItem("token") || "",
  user: null
});

export const TokenProvider = ({
  children
}) => {
  const queryClient = useQueryClient();

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  /*
   * make use effect for getting rid of the user object
   */ 

  const contextValue = {
    token,
    setToken,
    clearToken: () => { 
      localStorage.removeItem("token");
      setToken("");
      queryClient.removeQueries("user", {exact: true})
    }
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
