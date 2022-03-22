import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            Copyright &copy; {year}
            <a href="https://github.com/tnngoan"> trannhungoan</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
