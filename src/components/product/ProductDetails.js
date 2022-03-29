import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader, Message, Meta, Rating } from "../../components";
import {
  Row,
  Form,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";

const product = {
  _id: "1",
  name: "Kale",
  price: "12",
  reviews: ["good", "great"],
  comment: "Looking great!",
  image: require("../../assets/green.jpg"),
};
const error = "no error";

const ProductDetails = () => {
  const match = useParams();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const addToCartHandler = () => {
    console.log("added to cart");
  };
  const deleteReviewHandler = () => {
    console.log("deleting");
  };
  const submitReviewHandler = () => {
    console.log("submit review");
  };

  return (
    <>
      <Link className="btn btn-outline-primary mb-3" to="/">
        Go Back
      </Link>
      <>
        <Meta title={product.name} />
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                <div className="my-2">Description:</div>
                <div>{product.description}</div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          className="form-select"
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map(
                            (obj) => (
                              <option key={obj + 1} value={obj + 1}>
                                {obj + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item className="d-grid">
                  <Button
                    onClick={addToCartHandler}
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <h2>Reviews</h2>
            {product.reviews.length === 0 && (
              <Message variant="secondary">No Reviews</Message>
            )}
            <ListGroup variant="flush">
              {product.reviews.map((review) => (
                <ListGroup.Item key={review._id}>
                  <Row className="">
                    <Col>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>"review.createdAt.substring(0, 10)"</p>
                      <p>{review.comment}</p>
                    </Col>
                    <Col className="col-1 justify-content-end">
                      <button
                        type="button"
                        class="btn-sm mx-1 btn btn-danger"
                        onClick={() => deleteReviewHandler(review)}
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <>
                <ListGroup className="mt-3">
                  <h2>Write a Review</h2>
                  <Form onSubmit={submitReviewHandler}>
                    <Form.Group className="my-3">
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        as="select"
                        id="form-select-rating"
                        className="form-select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="comment" className="my-3">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        as="textarea"
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </Form>
                </ListGroup>
              </>
              <Message>
                Please <Link to="/login">sign in</Link> to write a review
              </Message>
            </ListGroup>
          </Col>
        </Row>
      </>
    </>
  );
};

export default ProductDetails;
