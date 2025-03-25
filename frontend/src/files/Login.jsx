import React, { useState } from 'react'
import BASE_URL from '../Config/config'
import axios from 'axios'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const[input , setInput] = useState({})
  const navigate  = useNavigate()
  const changeHandler = (e)=>{
    let{name , value} = e.target;
    setInput({
      ...input,
      [name] : value
      
    })
  }
  const submitHandler = async(e)=>{
    e.preventDefault()
    try {
    let api = `${BASE_URL}/customer/acclogin`
    let res = await axios.post(api , input)
    

    alert("login sucessfully")
    localStorage.setItem("username" , res.data.firstname+" "+res.data.lastname)
    localStorage.setItem("userid" , res.data._id)
    localStorage.setItem("email" , res.data.email)

    navigate('/dashboard')
      
    } catch (error) {
      const errorMessage = error.response.data.msg;
      toast.error(errorMessage); 
      console.log(error)
    }
  }
  return (
    <>
    
   <div style={{marginBottom:"20px"}}>
   <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">Login to your Account </h2>
          <Form>
            <Form.Group className="mb-3" controlId="account">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter your email" name='email' onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Account No.</Form.Label>
              <Form.Control required type="text" placeholder="Enter your Account no." name='account' onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Enter your password" name='password'  onChange={changeHandler} />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" onClick={submitHandler}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
   </div>
   <ToastContainer />
    </>
  )
}

export default Login