import { LinearProgress } from '@mui/material';
import { userApi } from '../../api/services/auth';
import { useLoginState } from '../../hooks/hooks';
import LoginLayout from '../../components/authLayout/LoginLayout';

const CallBackPage = () => {
  const { setIsLoggedIn } = useLoginState();

  const parseCode = async () => {
    const code: string = window.location.search.substring(6);
    const isSucceeded: boolean = await userApi.kakaoAuth(code);

    if (isSucceeded) {
      setIsLoggedIn(true);
      window.location.href = '/';
    } else {
      console.log('모종의 이유로 로그인이 실패했습니다.. 붐따..');
    }
  };

  parseCode();

  return (
    <>
      <LinearProgress />
      <LoginLayout handleLoginBtn={null} isLoggingIn={true}/>
    </>
    
  );
};

export default CallBackPage;
