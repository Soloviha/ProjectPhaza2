import { Outlet } from 'react-router-dom';
import Loader from '../HOC/Loader';
import NavBar from './ui/NavBar';

export default function Layout({ user, logoutHandler }) {
  return (
    <Loader showSpinner={user.status === 'fetching'}>
      <NavBar user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </Loader>
  );
}
