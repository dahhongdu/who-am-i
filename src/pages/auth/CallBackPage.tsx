import { userApi } from '../../api/services/auth';

const CallBackPage = () => {
  const parseCode = () => {
    const code: string = window.location.search.substring(6);
    console.log('code:', code);
    userApi.kakaoAuth(code);
  };

  parseCode();

  return (
    <div>
      <h2>로그인 중입니다!</h2>
    </div>
  );
};

export default CallBackPage;
