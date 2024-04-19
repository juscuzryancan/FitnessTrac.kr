import { useState, useEffect, createContext, useContext } from "react";
import { useQueryClient } from "react-query";
import { getUserData } from "../api";

const UserContext = createContext({ 
  token: localStorage.getItem("token") || "",
  user: null
});

export const UserProvider = ({
  children
}) => {
  const queryClient = useQueryClient();

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });
  const [user, setUser] = useState(null);

  const handleUser = async (token) => {
    if (token) {
      const user = await getUserData(token);
      setUser(user);
    } else {
      setUser(null);
    }
  }

  useEffect(() => {
    handleUser(token)
  }, [token]);

  const contextValue = {
    token,
    setToken,
    clearToken: () => { 
      localStorage.removeItem("token");
      setToken("");
      queryClient.removeQueries("user", {exact: true})
    },
    user,
    setUser
  }
  
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return {...useContext(UserContext)}  
}
