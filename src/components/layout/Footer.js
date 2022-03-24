import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-muted">
            Copyright &copy; {currentYear} <b>Scroll Buy </b> <span>by </span>
            <a href="https://github.com/tnngoan">tnngoan</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
