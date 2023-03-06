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

  const fetchAuthUser = async () => {
    try {
      const res = await authApi.getMe();
      setAuthenticatedUser(res.data.user);
    } catch (err) {
      removeAccessToken();
    }
  };
  useEffect(() => {
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (input) => {
    const res = await authApi.login(input);
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  const updateProfile = (data) => {
    setAuthenticatedUser({ ...authenticatedUser, ...data });
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, logout, updateProfile, fetchAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
