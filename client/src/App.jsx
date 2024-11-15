import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRouter from './HOC/ProtectedRouter';
import Layout from './components/Layout';
import useUser from './components/hooks/useUser';
import CandidatePage from './components/pages/CandidatePage';
import HelloPage from './components/pages/HelloPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import OneCandidate from './components/ui/OneCandidate';

import AddNewResume from './components/pages/AddNewResume';

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
          path: '/candidate',
          element: <CandidatePage user={user} />,
        },
        // {
        //   path: '/candidate/new',
        //   element: <CandidateCreate />,
        // },
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
            {
              path: '/cards/new',
              element: <AddNewResume />,
            },
            // {
            //   path: '/candidate',
            //   element: <CandidatePage user={user} />,
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
      {
        path: '/onecandidate/:candidateId',
        element: <OneCandidate/>
      }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
