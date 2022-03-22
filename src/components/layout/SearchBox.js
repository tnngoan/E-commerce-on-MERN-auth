import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Form className="d-flex searchbox" 
    // onSubmit={submitHandler}
     inline="true">
      <Form.Control
        type="search"
        name="q"
        // onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="ms-lg-3 me-sm-1"
      ></Form.Control>
      <Button type="submit" variant="outline-primary">
        <i className="fas fa-search"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
