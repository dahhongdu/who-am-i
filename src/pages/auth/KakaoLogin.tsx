import { userApi } from '../../api/services/auth';
import { useLoginState } from '../../hooks/hooks';

const Login = () => {
  const { isLoggedIn } = useLoginState()
  const kakaoUrl = userApi.getKakaoOauth;

  const socialLogin = () => {
    window.location.href = kakaoUrl;
  };

  if (isLoggedIn === true) {
    window.location.href = "/home";
  }

  console.log(isLoggedIn)

  return (
    <>
      <button onClick={socialLogin}>카카오로 시작하기</button>
    </>
  );
};

export default Login;
