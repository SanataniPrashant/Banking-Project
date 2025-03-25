import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function TopNavi() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img style={{height:"50px", width:"50px", borderRadius:"50%"}} src="https://img.freepik.com/premium-vector/bank-logo-design-template-luxury-concept_523404-693.jpg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
          </Nav>
          <div style={{margin:"10px"}}>
          <Nav.Link as={Link} to="login">Login</Nav.Link>
          </div>
          <div style={{}}>
          <Nav.Link as={Link} to="open">Open Bank Account</Nav.Link>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopNavi