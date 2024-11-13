import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRouter from './HOC/ProtectedRouter';
import Layout from './components/Layout';
import useUser from './components/hooks/useUser';
import HelloPage from './components/pages/HelloPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <HelloPage user={user} />,
        },
        {
          element: (
            <ProtectedRouter
              isAllowed={user.status === 'logged'}
              redirect="/account/login"
            />
          ),
          children: [
            // {
            //   path: '/cards',
            //   element: <CardPage user={user} />,
            // },
            // {
            //   path: '/cards/new',
            //   element: <AddCards />,
            // },
          ],
        },
        {
          element: <ProtectedRouter isAllowed={user.status !== 'logged'} redirect="/" />,
          children: [
            // {
            //   path: '/cards',
            //   element: <CardPage user={user} />,
            // },

            {
              path: '/account/new',
              element: <SignUpPage signUpHandler={signUpHandler} />,
            },
            {
              path: '/account/login',
              element: <LoginPage signInHandler={signInHandler} />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
