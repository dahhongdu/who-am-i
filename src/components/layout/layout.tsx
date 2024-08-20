import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>Layout입니다!</h1>
      {children}
    </>
  );
};

export default Layout;
