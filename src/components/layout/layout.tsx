import { Navigate, Outlet } from 'react-router-dom';
import { useLoginState } from '../../hooks/hooks';

const Layout = () => {
  const { isLoggedIn } = useLoginState();

  return (
    <>
      {
        isLoggedIn ? <Outlet/> : <Navigate to="/login" />
      }
    </>
  )
};

export default Layout;
