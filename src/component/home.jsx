import React, { Component } from "react";
import "./home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row className="my-row">
            <Col>
              <h1> početna stranica </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>INVENTURA</h4>
              <Button variant="secondary">Secondary</Button>
            </Col>
            <Col>
              <h4>BOCE</h4>
              <Button variant="secondary">Secondary</Button>
            </Col>
            <Col>
              <h4>PDV obrnuti</h4>
              <Button variant="secondary">Secondary</Button>
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
