// importing bootstrap elements------->
import {
  FormControl,
  InputGroup,
  Container,
  Button,
  Card,
  Form,
  Row,
  Col
} from 'react-bootstrap';

// importing hooks and axios------------>
import React, { useState, useEffect } from 'react';
import { apiInstance } from './axios-instance';

// importing css files----------------->
import './App.css';


// rendering view------------------------>
export default function App() {

  const [userFormvals, setuserFormvals] = useState([
    {
      SDR: '',
      fatherName: '',
      gender: '',
      countryOfStay: '',
      identityNumber: '',
      birthDate: '',
      issueDate: '',
      expireDate: '',
      temporaryAddress: '',
      permanentAddress: '',
      source: ''
    }
  ]);

  const [userIdentity, setUserIdentity] = useState("");



  const [isLoading, setLoading] = useState(false);



  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await apiInstance.get('did');
      console.log(response.data.did);
      setUserIdentity(response.data.did);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }



  // creating form submit event----------->
  function handleSubmit(e) {
    e.preventDefault();
    alert('submitting user data thrugh axios post request to API');
    // e.preventDefault()
    // axios.post('/user', userFormvals)
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }


  // string form values to userFormvals----------------------------------------->
  const handleChange = (event) => {
    setuserFormvals({ ...userFormvals, [event.target.name]: event.target.value })
  }


  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <Card className="theCard">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="sdrinput">
                  <FormControl
                    placeholder="user identity"
                    type="text"
                    id="SDR"
                    name="SDR"
                    value={userIdentity || ""}
                    onChange={handleChange}
                    disabled
                  />
                  <InputGroup.Append>
                    <Button variant="success" onClick={!isLoading ? handleClick : null}>
                      {isLoading ? 'Loading…' : 'generate identity'}
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                <Row>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="fullName"
                      className="inputfields"
                      type="text"
                      id="fullName"
                      name="SDR"
                      value={userFormvals.fullName}
                      onChange={handleChange}
                      required />
                  </Col>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="fatherName"
                      className="inputfields"
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      value={userFormvals.fatherName}
                      onChange={handleChange}
                      required />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="gender"
                      className="inputfields"
                      type="text"
                      id="gender"
                      name="gender"
                      value={userFormvals.gender}
                      onChange={handleChange}
                      required />
                  </Col>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="countryOfStay"
                      className="inputfields"
                      type="text"
                      id="countryOfStay"
                      name="countryOfStay"
                      value={userFormvals.countryOfStay}
                      onChange={handleChange}
                      required />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="identityNumber"
                      className="inputfields"
                      type="text"
                      id="identityNumber"
                      name="identityNumber"
                      value={userFormvals.identityNumber}
                      onChange={handleChange}
                      required />
                  </Col>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="birthDate"
                      className="inputfields"
                      type="text"
                      id="birthDate"
                      name="birthDate"
                      value={userFormvals.birthDate}
                      onChange={handleChange}
                      required />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="issueDate"
                      className="inputfields"
                      type="text"
                      id="issueDate"
                      name="issueDate"
                      value={userFormvals.issueDate}
                      onChange={handleChange}
                      required />
                  </Col>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="expireDate"
                      className="inputfields"
                      type="text"
                      id="expireDate"
                      name="expireDate"
                      value={userFormvals.expireDate}
                      onChange={handleChange}
                      required />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="temporaryAddress"
                      className="inputfields"
                      type="text"
                      id="temporaryAddress"
                      name="temporaryAddress"
                      value={userFormvals.temporaryAddress}
                      onChange={handleChange}
                      required />
                  </Col>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="permanentAddress"
                      className="inputfields"
                      type="text"
                      id="permanentAddress"
                      name="permanentAddress"
                      value={userFormvals.permanentAddress}
                      onChange={handleChange}
                      required />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Control
                      placeholder="source"
                      className="inputfields"
                      type="text"
                      id="source"
                      name="source"
                      value={userFormvals.source}
                      onChange={handleChange}
                      required />
                  </Col>
                </Row>
                <Row>
                  <Button className="downbutton" type="submit" variant="success">Submit</Button>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

