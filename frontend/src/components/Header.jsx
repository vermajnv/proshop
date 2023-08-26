import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
export const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>
                  <img src={logo} alt="Proshop" />
                  Proshop
                </Navbar.Brand>
                <Navbar.Toggle area-aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                      <Nav.Link href='/cart'><FaShoppingCart />Cart</Nav.Link>
                      <Nav.Link href='/signin'><FaUser></FaUser>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
