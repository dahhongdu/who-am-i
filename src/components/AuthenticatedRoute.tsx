import { useLoginState } from '../hooks/hooks';
import Layout from './layout/layout';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthenticatedRoute = () => {
  const { isLoggedIn } = useLoginState();

  console.log(isLoggedIn)

  return (
    <>
      {isLoggedIn ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
