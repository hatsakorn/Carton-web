import { createContext, useEffect, useState } from "react";
import * as authApi from "../api/auth-api";
import jwtDecode from "jwt-decode";

import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (input) => {
    const res = await authApi.login(input);
    // console.log(res.data);
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  //   const logout = () => {
  //     removeAccessToken();
  //     setAuthenticatedUser(null);
  //   };

  //   const updateProfile = data => {
  //     setAuthenticatedUser({ ...authenticatedUser, ...data });
  //   };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
