import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MTS_01 from './MTS-01.png'
function navBar() {
  let userIsConnected = JSON.parse(localStorage.getItem('current_user'))
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
        <Navbar bg="black" variant="dark">
    <Container className="navbar">
    <Navbar.Brand className ="navbarLogo">
    <img className ="logo"src={MTS_01} alt="logo" />   </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as ={Link} to="/" >Home</Nav.Link>
      <Nav.Link as ={Link} to="/AboutUs">AboutUs</Nav.Link>
      <Nav.Link as ={Link} to ="/Vacations">Vacations</Nav.Link>
      {userIsConnected? <Nav.Link onClick={() => logout()}>Logout</Nav.Link> : <Nav.Link as ={Link} to ="/Login">Login</Nav.Link>}
      
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default navBar