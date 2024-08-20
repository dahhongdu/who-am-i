import { ReactNode, createContext, useEffect, useState } from 'react';
import { ACCESS_TOKEN } from '../constants/constants';
import { userApi } from '../api/services/auth';

export const LoginStateContext = createContext<LoginStateContextType | null>(
  null
);

const isAccessTokenValid = async (token: string) => {
  const statusCode = await userApi.isAccessTokenValid(token);
  if (statusCode === 200) {
    console.log('200 떴습니다! 유효한 토큰입니다.');
    return true;
  }
  return false;
};

export const ContextsProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken !== null) {
      const res = isAccessTokenValid(accessToken);
      if (typeof(res) === 'boolean') {
        setIsLoggedIn(res);
      }
    }
  }, []);
  
  return (
    <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginStateContext.Provider>
  );
};
