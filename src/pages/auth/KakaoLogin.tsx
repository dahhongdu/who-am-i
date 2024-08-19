import { userApi } from '../../api/services/auth';

const Login = () => {
  const kakaoUrl = userApi.getKakaoOauth;
  
  const socialLogin = () => {
    window.location.href = kakaoUrl;
  };

  return (
    <>
      <button onClick={socialLogin}>카카오로 시작하기</button>
    </>
  );
};

export default Login;
