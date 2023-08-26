import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
export const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>
                  <img src={logo} alt="Proshop" />
                  Proshop
                </Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle area-aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                      <LinkContainer to='/cart'>
                        <Nav.Link><FaShoppingCart />Cart</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='/signin'>
                        <Nav.Link><FaUser></FaUser>Login</Nav.Link>
                      </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
