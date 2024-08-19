import { userApi } from '../../api/services/auth';

const CallBackPage = () => {
  const parseCode = async () => {
    const code: string = window.location.search.substring(6);
    const isLoggedIn: boolean = await userApi.kakaoAuth(code);

    if (isLoggedIn) {
      alert('로그인 완료!');
    }
  };

  parseCode();

  return (
    <div>
      <h2>로그인 중입니다!</h2>
    </div>
  );
};

export default CallBackPage;
