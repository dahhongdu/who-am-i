import { Navigate } from 'react-router-dom';
import { useLoginState } from '../../hooks/hooks';
import Home from "../../pages/Home";

const Layout = () => {
  const { isLoggedIn } = useLoginState();

  return (
    <>
      {
        isLoggedIn ? <Home/> : <Navigate to="/login" />
      }
    </>
  )
};

export default Layout;
