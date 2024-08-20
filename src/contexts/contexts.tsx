import { ReactNode, createContext, useEffect, useState } from 'react';
import { ACCESS_TOKEN } from '../constants/constants';
import { userApi } from '../api/services/auth';

export const LoginStateContext = createContext<LoginStateContextType | null>(
  null
);

export const ContextsProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const isAccessTokenValid = async (token: string) => {
      const statusCode = await userApi.isAccessTokenValid(token);
      if (statusCode === 200) {
        console.log('200 떴습니다! 유효한 토큰입니다.');
        setIsLoggedIn(true);
      }

      setLoading(false);
    };

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken !== null) {
      isAccessTokenValid(accessToken);
    }
  }, []);

  if (loading === true) {
    console.log('로그인이 유효한 유저인지 확인중입니다.');
    return <div>Loading...</div>;
  }

  return (
    <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginStateContext.Provider>
  );
};
