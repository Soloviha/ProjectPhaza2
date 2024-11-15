import { Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Loader from '../HOC/Loader';
import NavBar from './ui/NavBar';

export default function Layout({ user, logoutHandler }) {
  return (
    <Loader showSpinner={user.status === 'fetching'}>
      <Row>
        <NavBar user={user} logoutHandler={logoutHandler} />
        <Outlet />
      </Row>
    </Loader>
  );
}
