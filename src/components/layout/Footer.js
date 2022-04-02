import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        &copy; {currentYear} Scroll Buy,{" "}
        <a className="decoration-none" href="https://github.com/tnngoan">
          NGOAN
        </a>{" "}
        Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
      </p>
    </footer>
  );
};

export default Footer;
