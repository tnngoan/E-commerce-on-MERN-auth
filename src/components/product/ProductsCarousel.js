import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../../products.json";

const ProductsCarousel = () => {
  const getImage = (url) => {
    return require(`../../${url}`);
  };
  return (
    <Carousel variant="dark" pause="hover">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              width={500}
              height={500}
              className="mx-auto d-block"
              src={getImage(product.image)}
              alt={product.name}
              fluid
            />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;
