import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import './header.css';
import { Link } from 'react-router-dom';
import Home from './home';
let Header = () => {
  return (
    <div
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h3>Cefolio</h3>
      <Link style={{ textDecoration: 'none' }} to="/" element={<Home />}>
        <h5 style={{ color: 'white', paddingRight: '10px' }}> Home </h5>
      </Link>
    </div>
    // <Navbar expand={false} className="header">
    //   <Container fluid>
    //     <Navbar.Brand href="#" className="text" style={{ color: 'white' }}>
    //       CeFolio
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
    //     <Navbar.Offcanvas
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="end"
    //     >
    //       <Offcanvas.Header closeButton>
    //         <Offcanvas.Title id="offcanvasNavbarLabel">CeFolio</Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <Nav className="justify-content-end flex-grow-1 pe-3">
    //           <Link to="/a">a</Link>
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
