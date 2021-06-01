import React, { createContext, useContext, useEffect, useState } from "react";
import nookies from "nookies";
import { useSDK } from "lib/sdk/context";
import { firebaseClient } from "./client";

const AUTH_REFRESH_TIME = 10 * 60 * 1000;
const COOKIE_TOKEN_NAME = "token";

const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const sdk = useSDK();

  const onIdTokenChange = async (tokenChangeUser) => {
    console.log(`token changed!`);
    if (!tokenChangeUser) {
      console.log(`no token found...`);
      setUser(null);
      nookies.destroy(null, COOKIE_TOKEN_NAME);
      nookies.set(null, COOKIE_TOKEN_NAME, "", { path: "/" });
      return;
    }

    console.log(`updating token...`);
    const token = await tokenChangeUser.getIdToken();
    const dbUser = await sdk.user.getByUid(tokenChangeUser.uid);
    setUser({
      ...tokenChangeUser,
      meta: dbUser,
    });
    nookies.destroy(null, COOKIE_TOKEN_NAME);
    nookies.set(null, COOKIE_TOKEN_NAME, token, { path: "/" });
  };

  useEffect(() => {
    if (typeof window !== "undefined") window.nookies = nookies;
    return firebaseClient.auth().onIdTokenChanged(onIdTokenChange);
  }, []);

  // force refresh the token every AUTH_REFRESH_TIME minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const currentUser = firebaseClient.auth().currentUser;
      if (currentUser) await currentUser.getIdToken(true);
    }, AUTH_REFRESH_TIME);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
