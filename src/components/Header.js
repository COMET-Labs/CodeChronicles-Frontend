import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
    return (
        <>
   <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">
      <img
        alt=""
        src="./assets/img/logo.gif"
        width="100"
        height="100"
        className="d-inline-block align-top"
      />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#" >Login</Nav.Link>
      <Nav.Link href="#" >Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    
  </Navbar>
</>
    );
}

export default Header;