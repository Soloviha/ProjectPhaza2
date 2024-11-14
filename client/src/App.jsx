import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRouter from './HOC/ProtectedRouter';
import Layout from './components/Layout';
import useUser from './components/hooks/useUser';
import HelloPage from './components/pages/HelloPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import CardPage from './components/pages/CardPage';

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <CardPage user={user} />,
        },
        {
          element: (
            <ProtectedRouter
              isAllowed={user.status === 'logged'}
              redirect="/account/login"
            />
          ),
          children: [
            {
              path: '/cards',
              element: <CardPage user={user} />, // потом сюда будет приниматься карточка которую я буду отрисовывать и которая будет принимать размап
            },
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
