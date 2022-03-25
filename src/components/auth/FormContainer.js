import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col xs={12} xl={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
