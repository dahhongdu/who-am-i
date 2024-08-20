import { ReactNode, createContext, useState } from 'react';
import { ACCESS_TOKEN } from '../constants/constants';

export const LoginStateContext = createContext<
  LoginStateContextType | null
>(null);

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
