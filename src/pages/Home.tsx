import { useLoginState } from '../hooks/hooks';

const Home = () => {
  const { isLoggedIn } = useLoginState();
  console.log('home: ', isLoggedIn);

  return <>로그인 한 사람만 볼 수 있습니다!</>;
};

export default Home;
