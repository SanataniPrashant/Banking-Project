import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BASE_URL from '../Config/config';
import axios from "axios"
import {useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Open = () => {
  const [images, setImages]=useState([]);
  const[input , setInput] = useState({})
  const navigate = useNavigate();

  const handleFileChange=(e)=>{
    setImages(e.target.files);
    console.log(images);
  }

const changeHandler = (e)=>{
  let{name , value} = e.target;
   setInput({
    ...input,
    [name] : value
    
  })
  console.log(input)
}

const submitHandler = async(e)=>{
  e.preventDefault();
  
  if (input.aadhar && input.aadhar.length !== 12) {
    toast.error("Invalid Aadhar Number. Please enter 12 digits.");
    return;
  }
  if (input.pan && input.pan.length !== 10) {
    toast.error("Invalid Aadhar Number. Please enter 12 digits.");
    return;
  }
    let api = `${BASE_URL}/customer/open`
  
    const formData= new FormData(); 
    for (let key in input)
      {
         formData.append(key, input[key])
      }
   
    for (let i = 0; i < images.length; i++) 
     {
     formData.append('images', images[i]);
    }
    try {
    const response=await axios.post(api, formData);
    console.log(response.data);  
    toast.success(response.data.msg);
   navigate('/layout/login')
  } catch (error) {
    toast.error(error.message); 
  }
}

  return (
    <div style={{marginBottom:"20px"}}>
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">Open Your Bank Account</h2>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" name='firstname' onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" placeholder="Enter your last name" name='lastname'  onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control required type="date" placeholder="Enter your Date of birth" name='dob'  onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter your email" name='email' onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control required type="text" placeholder="Enter your mobile number" name='mobile'  onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control required type="text" placeholder="Enter your address" name='address' onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="Enter your city" name='city' onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="aadhar">
              <Form.Label>Aadhar no.</Form.Label>
              <Form.Control required type="text" placeholder="Enter your aadhar no." name='aadhar'  onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pan">
              <Form.Label>Pan Card no.</Form.Label>
              <Form.Control required type="text" placeholder="Enter your Pan Card no." name='pan' onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="images">
              <Form.Label>Upload your Aadharcard, Pancard and your Passport Size image</Form.Label>
              <Form.Control required type="file" multiple  name='images'  onChange={handleFileChange} />

            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" onClick={submitHandler}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    <ToastContainer />

    </div>
  );
};

export default Open;