import React, { useEffect } from 'react';
import "../CSS/Dashboard.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
function Dashboard() {
  let username = localStorage.getItem("username")
    let email = localStorage.getItem("email")
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/layout");
  }
  useEffect(()=>{
    if(!localStorage.getItem("email"))
        {
            navigate("/layout")
        }
},[])
  return (
    <>
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to the Indian National Bank</h1>
      </header>
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
            <Nav.Link as={Link} to="profile">Your Profile</Nav.Link>
            <Nav.Link as={Link} to="bi">Balence Inquiry</Nav.Link>
            <Nav.Link as={Link} to="as">Account Statement</Nav.Link>
            <Nav.Link as={Link} to="am">Add Money</Nav.Link>
            <Nav.Link as={Link} to="wm">Withdraw Money</Nav.Link>
          </Nav>
          <div style={{margin:"10px"}}>
          <button  className="btn btn-primary" onClick={logout}>Logout</button>

          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", padding:"20px",alignItems:"center"}}>
    <h3 className="fw-bold text-primary">Welcome, {username}!</h3>
    <p className="fw-bold text-primary">Your email is {email}</p>
    </div>

    <Outlet/>
  </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default Dashboard;