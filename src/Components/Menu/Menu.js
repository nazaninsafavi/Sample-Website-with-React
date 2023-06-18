import React, { Component } from 'react'
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './Menu.css'



export default class Menu extends Component {
  render() {
    return (
      <>
      <Navbar className='NavbarOne MainNav' expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='Navlink' href="#home">Home</Nav.Link>
              <Nav.Link className='Navlink' href="#link">Gallery</Nav.Link>
              <Nav.Link className='Navlink' href="#link">Blog</Nav.Link>
              <Nav.Link className='Navlink' href="#link">Shop</Nav.Link>
              <Nav.Link className='Navlink' href="#link">Shortcodes</Nav.Link>
              <NavDropdown className='NavbarOne Navlink' title="About" id="basic-nav-dropdown">
                <NavDropdown.Item className='NavItem' href="#action/3.1"><i class="material-icons">cloud</i>Full-width page</NavDropdown.Item>
                <NavDropdown.Item className='NavItem' href="#action/3.2"><i class="material-icons">cloud</i>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className='NavItem' href="#action/3.3"><i class="material-icons">cloud</i>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavItem' href="#action/3.4"><i class="material-icons">cloud</i>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
