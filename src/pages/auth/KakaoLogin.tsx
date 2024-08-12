import { userApi } from '../../api/services/auth';

const Login = () => {
  const kakaoUrl = userApi.getKakaoOauth;

  const socialLogin = () => {
    fetch(kakaoUrl, {
      redirect: 'manual',
    })
      .then((res) => {
        const redirectURL = res.url;
        window.location.href = redirectURL;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={socialLogin}>카카오로 시작하기</button>
    </>
  );
};

export default Login;
