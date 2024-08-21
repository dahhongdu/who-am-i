import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CallBackPage from './pages/auth/CallBackPage.tsx';
import Login from './pages/auth/KakaoLogin.tsx';
import Home from './pages/Home.tsx';
import { ContextsProvider } from './contexts/contexts.tsx';
import Layout from './components/layout/layout.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  {
    path: 'kakao/callback',
    element: <CallBackPage />,
  },
  {
    path: '/login',
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextsProvider>
    <RouterProvider router={routes} />
    <App />
  </ContextsProvider>
);
