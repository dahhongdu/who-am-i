import { useState } from 'react';
import { userApi } from '../../api/services/auth';
import LoginLayout from '../../components/authLayout/LoginLayout';
import { useLoginState } from '../../hooks/hooks';

const Login = () => {
  const { isLoggedIn } = useLoginState();
  const [isLoggingIn, setIsLogging] = useState(false);
  const kakaoUrl = userApi.getKakaoOauth;

  const handleLoginBtn = () => {
    setIsLogging(true);
    window.location.href = kakaoUrl;
  };

  if (isLoggedIn === true) {
    setIsLogging(false);
    window.location.href = '/home';
  }

  return <LoginLayout handleLoginBtn={handleLoginBtn} isLoggingIn={isLoggingIn} />;
};

export default Login;
