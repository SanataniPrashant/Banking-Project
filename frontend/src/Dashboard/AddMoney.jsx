import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BASE_URL from '../Config/config';
import axios from 'axios';
const AddMoney = () => {
  const[amount  ,setAmount] = useState("")
  const[transactiontype  ,settransactiontype] = useState("")
  const[transactionfor  ,settransactionfor] = useState("")
  const customerid = localStorage.getItem("userid")
const handleSubmit = async(e)=>{
       e.preventDefault()
       let api = `${BASE_URL}/customer/transaction`
       const res =await axios.post(api , {amount : amount ,transactiontype:transactiontype, transactionfor:transactionfor, status : "credited" ,customerid : customerid })
       console.log(res.data)
       alert("Amount credited successfully")
}
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="text-center mb-4">
            <h1>Deposit Amount</h1>
          </div>
          <Form>
            
            <Form.Group controlId="amount">
              <Form.Label>Enter Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={amount}
                placeholder="Enter amount to deposit"
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
              <Form.Label>Enter deposited for :</Form.Label>
              <Form.Control
                type="text"
                name="transactionfor"
                value={transactionfor}
                placeholder="Enter deposited for"
                onChange={(e)=>settransactionfor(e.target.value)}              />
            </Form.Group>
            <Button variant="primary" type="text" className="w-100 mt-3" onClick={handleSubmit}>
              Deposit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMoney;