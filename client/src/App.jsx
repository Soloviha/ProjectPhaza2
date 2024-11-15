import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRouter from './HOC/ProtectedRouter';
import Layout from './components/Layout';
import useUser from './components/hooks/useUser';
import CandidatePage from './components/pages/CandidatePage';
import HelloPage from './components/pages/HelloPage';
import LoginPage from './components/pages/LoginPage';
import NewCandidate from './components/pages/NewCandidate';
import SignUpPage from './components/pages/SignUpPage';
import OneCandidate from './components/ui/OneCandidate';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <HelloPage user={user} />,
        },
        {
          path: '/candidate',
          element: <CandidatePage user={user} />,
        },
        {
          path: '/candidate/:candidateId',
          element: <OneCandidate />,
        },
        {
          path: '/candidate/new',
          element: <NewCandidate />,
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
          ],
        },
        {
          element: <ProtectedRouter isAllowed={user.status !== 'logged'} redirect="/" />,
          children: [
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
