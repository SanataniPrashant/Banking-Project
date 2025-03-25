import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Card, Spinner } from 'react-bootstrap';
import BASE_URL from '../Config/config';

const AccountStatement = () => {
  const [data, setApiData] = useState([]);


  const loadData = async () => {
   
    const api = `${BASE_URL}/customer/balance/?userid=${localStorage.getItem("userid")}`;
    try {
      const res = await axios.get(api);
      setApiData(res.data);
    } catch (error) {
      console.error( error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center mb-4">Account Statement</h1>
          
            <Card>
              <Card.Body>
                <Table striped bordered hover responsive style={{ textAlign: "center" }}>
                  <thead>
                    <tr>
                      <th>Sno.</th>
                      <th>Credited</th>
                      <th>Debited</th>
                      <th>Tansaction Type</th>
                      <th>Status</th>
                      <th>Transction for</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((e, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td style={{color :"green"}}>{e.status === 'credited' ? e.amount : '---'}</td>
                          <td style={{color :"red"}}>{e.status === 'Debited' ? e.amount : '---'}</td>
                          <td style={{color :"green"}}>{ e.transactiontype}</td>
                          <td style={{fontSize : "20px"}}>{e.status}</td>
                          <td style={{fontSize : "20px"}}>{e.transactionfor}</td>
                          <td>{e.date}</td>
                        </tr>
                      ))
                  }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountStatement;