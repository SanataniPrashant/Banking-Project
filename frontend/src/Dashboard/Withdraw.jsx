import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BASE_URL from '../Config/config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Withdraw = () => {
  const[amount  ,setAmount] = useState("")
  const[transactiontype  ,settransactiontype] = useState("")
  const[transactionfor  ,settransactionfor] = useState("")
  const customerid = localStorage.getItem("userid")
const handleSubmit = async(e)=>{
       e.preventDefault();
       
       let api = `${BASE_URL}/customer/transaction`;
       const res =await axios.post(api , {amount : amount ,transactiontype:transactiontype,transactionfor:transactionfor, status : "Debited" ,customerid : customerid })
       console.log(res.data)
       toast.success("Ammount Debited Successfully")
       
}
  return (
    <>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="text-center mb-4">
            <h1>Withdraw Amount</h1>
          </div>
          <Form>
          <Form.Group controlId="amount">
            <Form.Label>Enter Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={amount}
              placeholder="Enter amount to withdraw"
              onChange={(e)=>setAmount(e.target.value)}              />
          </Form.Group>
          <Form.Group controlId="transactiontype">
            <Form.Label>Enter transactiontype</Form.Label>
            <Form.Control
              type="text"
              name="transactiontype"
              value={transactiontype}
              placeholder="Enter transaction type"
              onChange={(e)=>settransactiontype(e.target.value)}              />
          </Form.Group>
          <Form.Group controlId="transactionfor">
            <Form.Label>Enter Withdraw for :</Form.Label>
            <Form.Control
              type="text"
              name="transactionfor"
              value={transactionfor}
              placeholder="Enter withdraw for"
              onChange={(e)=>settransactionfor(e.target.value)}              />
          </Form.Group>
            <Button variant="primary" type="text" className="w-100 mt-3" onClick={handleSubmit}>
              Withdraw
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
      <ToastContainer />
    
    </>
  )
}

export default Withdraw