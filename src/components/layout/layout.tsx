import { Outlet } from 'react-router-dom';
import { useLoginState } from '../../hooks/hooks';
import { ACCESS_TOKEN } from '../../constants/constants';
import { useEffect } from 'react';

const Layout = () => {
  const { setIsLoggedIn } = useLoginState();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN) !== null) {
      setIsLoggedIn(true);
    } else {
      window.location.href = '/login';
    }
  }, [setIsLoggedIn]);

  return <Outlet />;
};

export default Layout;
