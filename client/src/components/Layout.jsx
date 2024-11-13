import React from 'react'
import Loader from '../HOC/Loader'
import { Row } from 'react-bootstrap'
import NavBar from './ui/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout({user, logoutHandler}) {
  return (
    <Loader showSpinner={user.status === 'fetching'}>
    <Row>
      <NavBar user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </Row>
  </Loader>
  )
}
