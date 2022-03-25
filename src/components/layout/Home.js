import React from "react";
import { Row, Col } from "react-bootstrap";
import Carousel from "../product/ProductsCarousel";
import products from "../../products.json";
import Product from "../product/Product";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} xl={3}>
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
