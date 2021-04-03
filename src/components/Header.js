import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import RegisterModal from './RegisterModal';
import useAuth from '../auth/useAuth';

function Header(props) {
    
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);

    const {user, logOut} = useAuth();

    const handleLoginPress = ()=>{
      setLoginShow(!loginShow);
      setRegisterShow(false);
    };

    const handleRegisterPress = ()=>{
      setRegisterShow(!registerShow);
      setLoginShow(false);
    };

    const handleLogoutPress = ()=>{
      logOut();
    }

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
      {user?
      // <Nav.Link onClick={handleLogoutPress}>{user.name}</Nav.Link>
      <DropdownButton
      drop="left"
      title={user.name}
      variant="warning"
      >
        <Dropdown.Item >Profile</Dropdown.Item>
        <Dropdown.Item >Competitions</Dropdown.Item>
        <Dropdown.Item onClick={handleLogoutPress}>Logout</Dropdown.Item>
      </DropdownButton>
      :
      <>
      <Nav.Link onClick={handleLoginPress} className="text-warning">Login</Nav.Link>
      <Nav.Link onClick={handleRegisterPress} className="text-warning">Register</Nav.Link>
      </>  
      }
    </Nav>
  </Navbar.Collapse>
    
  </Navbar>

  <RegisterModal loginShow={loginShow} setLoginShow={handleLoginPress}
                 registerShow={registerShow} setRegisterShow={handleRegisterPress}/>
</>
    );
}

export default Header;