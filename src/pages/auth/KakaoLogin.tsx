import { userApi } from '../../api/services/auth';
import LoginLayout from '../../components/authLayout/LoginLayout';
import { useLoginState } from '../../hooks/hooks';

const Login = () => {
  const { isLoggedIn } = useLoginState();
  const kakaoUrl = userApi.getKakaoOauth;

  const handleLoginBtn = () => {
    window.location.href = kakaoUrl;
  };

  if (isLoggedIn === true) {
    window.location.href = '/home';
  }

  return (
    <LoginLayout handleLoginBtn={handleLoginBtn}/>
  );
};

export default Login;
