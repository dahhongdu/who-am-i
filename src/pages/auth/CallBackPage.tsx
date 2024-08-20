import { userApi } from '../../api/services/auth';
import { useLoginState } from '../../hooks/hooks';

const CallBackPage = () => {
  const { setIsLoggedIn } = useLoginState();

  const parseCode = async () => {
    const code: string = window.location.search.substring(6);
    const isSucceeded: boolean = await userApi.kakaoAuth(code);

    if (isSucceeded) {
      console.log('로그인이 성공적으로 완료되었습니다.');
      setIsLoggedIn(true);
      window.location.href = '/home';
    } else {
      console.log('모종의 이유로 로그인이 실패했습니다.. 붐따..');
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
