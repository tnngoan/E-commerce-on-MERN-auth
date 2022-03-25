import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const products = [
  {
    _id: 1,
    name: "Kale",
    price: 12,
    image: require("../../assets/kale.png"),
  },
  {
    _id: 2,
    name: "Winter Melon",
    price: 20,
    image: require("../../assets/melon.jpg"),
  },
];

const ProductsCarousel = () => {
  return (
    <Carousel variant="dark" pause="hover">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              width={500}
              height={500}
              className="mx-auto d-block"
              src={product.image}
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
