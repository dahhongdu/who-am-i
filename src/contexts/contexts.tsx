// import React, { createContext, useState } from "react";
// import { IsLoggedInContextType } from "../@types/isLoggedIn";

import { ReactNode, createContext, useState } from 'react';
import { ACCESS_TOKEN } from '../constants/constants';

// context를 만들어준다. 초깃값은 false
export const LoginStateContext = createContext<
  LoginStateContextType | undefined
>(undefined);

// provider를 이용해서 자식들에게 context 를 건내준다.
export const ContextsProvider = ({ children }: { children: ReactNode }) => {
  let state: boolean;

  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    state = true;
  } else {
    state = false;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(state);

  return (
    <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginStateContext.Provider>
  );
};
