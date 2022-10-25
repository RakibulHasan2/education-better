import React, { useContext } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logo from '../../Images/title.png'
import { AuthContext } from './../../context/UseContext';
const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)
    return (
        <div>
          {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <img className='logo' src={logo} alt="" />
            <Navbar.Brand href="#" className='fs-2 fw-bold ms-2'>Education Better</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav">
                  <Link to = '/'>Home</Link>
                  <Link to = '/courses'>Courses</Link>
                  <Link to = '/FAQ'>FAQ</Link>
                  <Link to = '/Blog'>Blog</Link>
                  {
                user?.uid ?
                <>
                 <button className='button-logout' onClick={logOut}>logout</button>
                </>
                :
                <>
                <Link to="/login">Login</Link>
                </>
                }
                  <Link to = '/'>Toggle</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
    );
};

export default Header;