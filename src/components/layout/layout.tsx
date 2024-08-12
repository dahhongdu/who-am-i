import { Navigate, Outlet } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants/constants';

const isLogin: boolean = localStorage.getItem(ACCESS_TOKEN) !== null;

const Layout = () => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default Layout;
